import { Edit, NumberInput, SimpleForm, TextInput } from "react-admin";

const MenuEdit = () => (
  <Edit title={"Редагувати товар"}>
    <SimpleForm>
      <TextInput source="id" disabled fullWidth />
      <TextInput source="title" fullWidth label="Назва" />
      <TextInput source="image" fullWidth label="Фото" />
      <TextInput source="ingredients" fullWidth label="Інгридієнти" />
      <NumberInput source="price" label="Ціна" />
      <NumberInput source="weight" label="Вага в гр." />
    </SimpleForm>
  </Edit>
);

export default MenuEdit;
