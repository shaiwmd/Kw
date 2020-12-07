import { WrappedComponent } from '../../components';
import { Container, Nav, Menu, Item } from './styles';

const Page = WrappedComponent(Container);
Page.Navigation = WrappedComponent(Nav);
Page.Menu = WrappedComponent(Menu);
Page.MenuItem = WrappedComponent(Item);

export default Page;
