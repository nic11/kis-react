import { React } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';
import {
  Layout,
  Menu,
} from 'antd';

import homeRoute from './Home';
import aboutRoute from './About';
import enlistRoute from './Enlist';

const ROUTES = [
  homeRoute,
  aboutRoute,
  enlistRoute,
];

function findRouteByLocation(locationPathname) {
  for (const route of ROUTES) {
    if (locationPathname === route.route) {
      return route;
    }
  }
  throw new Error(`unknown route for location: ${locationPathname}`);
}

function AppLayout(props) {
  const location = useLocation();
  const route = findRouteByLocation(location.pathname);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Sider collapsible width='300px'>
        <Menu theme='dark' defaultSelectedKeys={[route.menuKey]} mode='inline'>
          {ROUTES.map((route) =>
            <Menu.Item key={route.menuKey} icon={<route.Icon />}>
              <Link to={route.route}>
                {route.title}
              </Link>
            </Menu.Item>
          )}
        </Menu>
      </Layout.Sider>
      <Layout.Content className="main-container">
        <Routes>
          {ROUTES.map((route) =>
            <Route key={route.menuKey} path={route.route} element={<route.Content />} />
          )}
        </Routes>
      </Layout.Content>
    </Layout>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
