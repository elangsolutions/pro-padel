import { Grid, Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import SideMenu from './SideMenu';

const { Sider, Content } = Layout;

export default function MainLayout() {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  console.log('screens:', screens);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={180} breakpoint="md" collapsedWidth={0}>
        <SideMenu />
      </Sider>

      <Layout>
        <Content style={{ padding: 16 }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
