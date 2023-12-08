import { Edit, NumberInput, SimpleForm, TextInput } from "react-admin";

const MenuEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled fullWidth/>
      <TextInput source="title" fullWidth/>
      <TextInput source="image" fullWidth/>
      <TextInput source="ingredients" fullWidth/>
      <NumberInput source="price" />
      <NumberInput source="weight" />
    </SimpleForm>
  </Edit>
);

export default MenuEdit;
