import { Datagrid, List, NumberField, TextField } from "react-admin";

const MenuList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="title" />
      <NumberField source="price" />
    </Datagrid>
  </List>
);
export default MenuList;
