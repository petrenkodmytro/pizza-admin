import { CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import { Admin, DataProvider, Loading, Resource } from "react-admin";
import buildHasuraProvider from "ra-data-hasura";
import MenuList from "@app/modules/menu/menu-list";
import MenuEdit from "@app/modules/menu/menu-edit";
import MenuCreate from "@app/modules/menu/menu-create";

function App() {
  const [dataProvider, setDataProvider] = useState<DataProvider<string> | null>(null);

  useEffect(() => {
    const buildDataProvider = async () => {
      const dataProvider = await buildHasuraProvider({
        clientOptions: { uri: "http://localhost:8080/v1/graphql" },
      });
      setDataProvider(() => dataProvider);
    };
    buildDataProvider();
  }, []);

  if (!dataProvider) return <Loading />;

  return (
    <>
      <CssBaseline />
      <Admin dataProvider={dataProvider}>
        <Resource name="menu" list={MenuList} edit={MenuEdit} create={MenuCreate} />
        {/* <Resource name="menu" list={ListGuesser} /> */}
      </Admin>
    </>
  );
}

export default App;
