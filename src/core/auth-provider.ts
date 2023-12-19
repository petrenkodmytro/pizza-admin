// Logi Form for admin
import { AdminGetMeQuery, AdminLoginQuery, AdminLoginQueryVariables } from "@app/core/types";
import { apolloClient } from "./apollo-clientn";
import AdminLoginQueryGql from "@app/core/graphql/admin-login.gql";
import AdminGetMeQueryGql from "@app/core/graphql/admin-get-me.gql";
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
    localStorage.removeItem(JWT_ADMIN_TOKEN);
    return Promise.resolve();
  },

  checkAuth: () => {
    if (!localStorage.getItem(JWT_ADMIN_TOKEN)) {
      return Promise.reject();
    }
    return Promise.resolve();
  },

  checkError: (error: any) => {
    return Promise.resolve();
  },

  getIdentity: async () => {
    const { data } = await apolloClient.query<AdminGetMeQuery>(AdminGetMeQueryGql);

    return Promise.resolve({
      id: data.adminGetMe!.id,
      fullName: data.adminGetMe!.username,
    });
  },

  getPermissions: () => Promise.resolve(""),
};

export default authProvider;
