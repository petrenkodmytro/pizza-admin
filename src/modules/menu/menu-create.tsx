import CloudinaryInput from '@app/common/components/cloudinary-input';
import {
  Create,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from 'react-admin';

const MenuCreate = () => (
  <Create title={'Додати товар'}>
    <SimpleForm>
      <TextInput source="id" disabled fullWidth />
      <TextInput source="title" fullWidth label="Назва" />
      <ReferenceInput source="category_id" reference="categories">
        <SelectInput optionText="title" label="Категорія" />
      </ReferenceInput>
      <CloudinaryInput source="image" label="Фото" />
      <TextInput source="ingredients" fullWidth label="Інгридієнти" />
      <NumberInput source="price" label="Ціна" />
      <NumberInput source="weight" label="Вага в гр." />
    </SimpleForm>
  </Create>
);

export default MenuCreate;
