import { Edit, SimpleForm, TextInput } from "react-admin";

export const CategoryEdit = () => (
  <Edit title={"Редагувати категорію"} mutationMode="pessimistic">
    <SimpleForm>
      <TextInput source="title" label="Назва" />
      <TextInput source="slug" label="Слаг" />
    </SimpleForm>
  </Edit>
);
