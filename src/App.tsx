import { CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import { Admin } from "react-admin";
import buildHasuraProvider from "ra-data-hasura";

function App() {
  const [dataProvider, setDataProvider] = useState(null);

  useEffect(() => {
    const buildDataProvider = async () => {
      const dataProvider = await buildHasuraProvider({
        clientOptions: { uri: "http://localhost:8080/v1/graphql" },
      });
      setDataProvider(() => dataProvider);
    };
    buildDataProvider();
  }, []);

  return (
    <>
      <CssBaseline />
      <Admin />
    </>
  );
}

export default App;
