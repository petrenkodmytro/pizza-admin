import { CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import { Admin, DataProvider, Loading, Resource } from "react-admin";
import buildHasuraProvider from "ra-data-hasura";
import MenuList from "@app/modules/menu/menu-list";
import MenuEdit from "@app/modules/menu/menu-edit";
import MenuCreate from "@app/modules/menu/menu-create";
import authProvider from "@app/core/auth-provider";
import { apolloClient } from "@app/core/apollo-clientn";
import { theme } from "@app/core/theme";
import { i18nProvider } from "@app/core/i18n";

function App() {
  const [dataProvider, setDataProvider] = useState<DataProvider<string> | null>(null);

  useEffect(() => {
    const buildDataProvider = async () => {
      const dataProvider = await buildHasuraProvider({
        client: apolloClient
      });
      setDataProvider(() => dataProvider);
    };
    buildDataProvider();
  }, []);

  if (!dataProvider) return <Loading />;

  return (
    <>
      <CssBaseline />
      <Admin dataProvider={dataProvider} authProvider={authProvider} i18nProvider={i18nProvider} theme={theme} requireAuth>
        <Resource name="menu" list={MenuList} edit={MenuEdit} create={MenuCreate} />
        {/* <Resource name="menu" list={ListGuesser} /> */}
      </Admin>
    </>
  );
}

export default App;
