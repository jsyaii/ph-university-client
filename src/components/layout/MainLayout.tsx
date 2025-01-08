import { Layout, Menu, MenuProps } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

import { NavLink, Outlet } from 'react-router-dom';
import { adminSidebarIteam } from '../../routes/admin.routes';

// const items: MenuProps['items'] = [
//     {
//         key: 'Dashboard',
//         label: <NavLink to="/admin/dashboaed">Dashboard</NavLink>,
//     },
    
//     {
//         key: 'User Management',
//         label: 'User Management',
//         children: [
//             {
//                 key: 'Create Admin',
//                 label: <NavLink to="/admin/create-admin">Create Admin</NavLink>,
//             },  
//             {
//                 key: 'Create Faculty',
//                 label: <NavLink to="/admin/create-faculty">Create Admin</NavLink>,
//             },  
//             {
//                 key: 'Create Student',
//                 label: <NavLink to="/admin/create-student">Create Admin</NavLink>,
//             },  
              
//         ]
//     },
// ]
const MainLayout = () => {
  return (
      <div>
          <Layout style={{height : '100vh'}}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
                  <div style={{
                      color: 'white',
                      height: '4rem',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',




                  }}>
                  
                  <h1 >PH UNI</h1>
                  
                  </div>  
                  



          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}
            items={adminSidebarIteam} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
             
            }}
          >
        <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
    </div>
  )
}

export default MainLayout