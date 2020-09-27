import React, { Fragment, useState } from "react";
// import Header from "../components/Header/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export const AdminTemplate = ({ Component, ...props }) => {
  const [state, setState] = useState({
    collapsed: false,
  });
  const toggle = () => {
    setState({
      collapsed: !state.collapsed,
    });
  };

  return (
    <Route
      {...props}
      render={(propsRoute) => {
        return (
          //   <AdminLayout>
          //     <Component {...propsRoute} />
          //   </AdminLayout>
          <Fragment>
            <Layout>
              <Sider trigger={null} collapsible collapsed={state.collapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                  <Menu.Item key="1" icon={<UserOutlined />}>
                    <NavLink to="/admin/users">Quản lý người dùng</NavLink>
                  </Menu.Item>
                  <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                    <NavLink to="/admin/films">Quản lý phim</NavLink>
                  </Menu.Item>
                </Menu>
              </Sider>
              <Layout className="site-layout">
                <Header
                  className="site-layout-background"
                  style={{ padding: 0 }}
                >
                  {React.createElement(
                    state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                    {
                      className: "trigger",
                      onClick: toggle,
                    }
                  )}
                </Header>
                <Content
                  className="site-layout-background"
                  style={{
                    margin: "24px 16px",
                    padding: 24,
                    minHeight: 280,
                  }}
                >
                  <Component {...propsRoute} />
                </Content>
              </Layout>
            </Layout>
          </Fragment>
        );
      }}
    />
  );
};
