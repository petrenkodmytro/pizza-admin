import { Create, NumberInput, SimpleForm, TextInput } from "react-admin";

const MenuCreate = () => (
  <Create title={"Додати товар"}>
    <SimpleForm>
      <TextInput source="id" disabled fullWidth />
      <TextInput source="title" fullWidth label="Назва" />
      <TextInput source="image" fullWidth label="Фото" />
      <TextInput source="ingredients" fullWidth label="Інгридієнти" />
      <NumberInput source="price" label="Ціна" />
      <NumberInput source="weight" label="Вага в гр." />
    </SimpleForm>
  </Create>
);

export default MenuCreate;
