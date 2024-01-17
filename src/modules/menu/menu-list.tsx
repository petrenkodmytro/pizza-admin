import {
  Datagrid,
  EditButton,
  FunctionField,
  List,
  ReferenceField,
  TextField,
  TextInput,
} from 'react-admin';
import MenuListExpand from './menu-list-expand';
import { Menu } from '@app/core/types';

const filters = [<TextInput source="title" label="Пошук товару" />];

const MenuList = () => (
  <List filters={filters}>
    <Datagrid expand={MenuListExpand} rowClick="expand">
      <TextField source="title" label="Назва" />
      <ReferenceField
        source="category_id"
        reference="categories"
        link={false}
        label="Категорія"
      >
        <TextField source="title" />
      </ReferenceField>
      <FunctionField
        label=""
        render={(record: Menu) => `${record.price} UAH`}
      />
      {/* <NumberField source="price" label="Ціна" /> */}
      <EditButton />
    </Datagrid>
  </List>
);
export default MenuList;
