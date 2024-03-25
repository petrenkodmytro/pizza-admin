import OrderCreate from '@app/modules/orders/order-create';
import OrderEdit from '@app/modules/orders/order-edit';
import OrderList from '@app/modules/orders/order-list';
import OrderShow from '@app/modules/orders/order-show';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

export const orderResource = {
  name: 'orders',
  list: OrderList,
  show: OrderShow,
  edit: OrderEdit,
  create: OrderCreate,
  options: { label: 'Замовлення' },
  icon: ShoppingBagIcon,
};
