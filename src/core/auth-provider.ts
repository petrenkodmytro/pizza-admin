// Logi Form for admin
import { AdminLoginQuery, AdminLoginQueryVariables } from "@app/core/types";
import { apolloClient } from "./apollo-clientn";
import AdminLoginQueryGql from "@app/core/graphql/admin-login.gql";
import { JWT_ADMIN_TOKEN } from "./constants";

const authProvider = {
  login: async (variables: AdminLoginQueryVariables) => {
    const { data } = await apolloClient.query<AdminLoginQuery, AdminLoginQueryVariables>({ query: AdminLoginQueryGql, variables });

    if (!data.adminLogin?.accessToken) {
      return Promise.reject();
    }

    localStorage.setItem(JWT_ADMIN_TOKEN, data.adminLogin.accessToken);
  },

  logout: () => {
    localStorage.removeItem("username");
    return Promise.resolve();
  },

  checkAuth: () => (localStorage.getItem("username") ? Promise.resolve() : Promise.reject()),
  checkError: (error: any) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem("username");
      return Promise.reject();
    }
    // other error code (404, 500, etc): no need to log out
    return Promise.resolve();
  },

  getIdentity: () =>
    Promise.resolve({
      id: "user",
      fullName: "John Doe",
    }),

  getPermissions: () => Promise.resolve(""),
};

export default authProvider;
