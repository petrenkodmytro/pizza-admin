import { Datagrid, List, TextField } from 'react-admin';
// import { Categories } from '@app/core/types';

export const CategoryList = () => (
//   <List exporter={false}>
//     <Datagrid rowClick="edit" bulkActionButtons={false}>
//       <FunctionField
//         render={(record: Categories) => `${record.emoji} ${record.title}`}
//       />
//     </Datagrid>
//   </List>

<List exporter={false}>
<Datagrid rowClick="edit" bulkActionButtons={false}>
  <TextField source="title" label="Назва" />
</Datagrid>
</List>
);