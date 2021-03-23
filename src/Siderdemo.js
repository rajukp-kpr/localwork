import { Layout, Menu, Dropdown, Calendar } from "antd";
import "antd/dist/antd.css";
import "./App.css";
import "./Sidebar.css";
import React from "react";
import SiderMenu1 from "./Menu_1";
import ReactDOM from "react-dom";
import { Input, Space } from "antd";
import { AudioOutlined, DownOutlined } from "@ant-design/icons";
import { Button } from "antd";

import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { SubMenu } = Menu;
    const { Search } = Input;
    const onSearch = (value) => console.log(value);
    const menu = <div>13245</div>;
    function onPanelChange(value, mode) {
      console.log(value, mode);
    }

    const calender = (
      <div className="site-calendar-demo-card">
        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
      </div>
    );

    const Datemenu = (
      <Menu className="ant-input1">
        <Menu.Item className="ant-input1" key="0">
          <a href="https://www.antgroup.com">Today</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="https://www.aliyun.com">Yesterday</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="https://www.aliyun.com">Last 7 days</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="https://www.aliyun.com">Last 30 days</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="https://www.aliyun.com">This Month</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="https://www.aliyun.com">Last Month</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">Custom Range</Menu.Item>
      </Menu>
    );

    return (
      <div>
        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
            width={300}
          >
            <div className="logo" />

            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                NAVIGATION MENU
              </Menu.Item>
              <SubMenu key="sub1" icon={<MailOutlined />} title="Dashboard">
                <Menu.Item key="11">Production</Menu.Item>
                <Menu.Item key="21">Navigation</Menu.Item>
              </SubMenu>

              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                COUSTOMIZED
              </Menu.Item>

              <SubMenu key="sub11" icon={<MailOutlined />} title="Application">
                <SubMenu key="sub12" icon={<MailOutlined />} title="Email">
                  <Menu.Item key="22">Inbox</Menu.Item>
                  <Menu.Item key="32">Contacts</Menu.Item>
                  <Menu.Item key="42">Compose</Menu.Item>
                </SubMenu>

                <SubMenu
                  key="sub13"
                  icon={<MailOutlined />}
                  title="FileManager"
                >
                  <Menu.Item key="23">Dashboard</Menu.Item>
                  <Menu.Item key="33">Folder</Menu.Item>
                  <Menu.Item key="44">Empty Page</Menu.Item>
                </SubMenu>

                <SubMenu
                  key="sub3"
                  icon={<MailOutlined />}
                  title="Community-Forum"
                >
                  <Menu.Item key="24">Dashboard</Menu.Item>
                  <Menu.Item key="34">Topics</Menu.Item>
                  <Menu.Item key="44">Details</Menu.Item>
                </SubMenu>

                <SubMenu
                  key="sub4"
                  icon={<MailOutlined />}
                  title="Social Media"
                >
                  <Menu.Item key="25">Dashboard</Menu.Item>
                  <Menu.Item key="35">Posts</Menu.Item>
                  <Menu.Item key="45">Profile</Menu.Item>
                  <Menu.Item key="55">Settings</Menu.Item>
                </SubMenu>

                <SubMenu key="sub5" icon={<MailOutlined />} title="E-commerce">
                  <Menu.Item key="26">Dashboard</Menu.Item>
                  <Menu.Item key="36">Products</Menu.Item>
                  <Menu.Item key="46">Product Details</Menu.Item>
                  <Menu.Item key="56">Cart</Menu.Item>
                  <Menu.Item key="66">Checkout</Menu.Item>
                  <Menu.Item key="76">Invoice</Menu.Item>
                  <Menu.Item key="86">Profile</Menu.Item>
                </SubMenu>
              </SubMenu>

              <SubMenu key="sub6" icon={<MailOutlined />} title="Pages">
                <Menu.Item key="121">About us</Menu.Item>
                <Menu.Item key="221">Contact US</Menu.Item>
                <Menu.Item key="321">Chat</Menu.Item>
                <Menu.Item key="421">Pricing</Menu.Item>
                <Menu.Item key="421">Services</Menu.Item>
                <Menu.Item key="421">Blog</Menu.Item>
                <Menu.Item key="421">Gallery</Menu.Item>
                <Menu.Item key="421">login</Menu.Item>
                <Menu.Item key="421">Register</Menu.Item>
                <Menu.Item key="421">Reset Password</Menu.Item>
              </SubMenu>

              <SubMenu key="sub7" icon={<MailOutlined />} title="Forms">
                <Menu.Item key="127">Credit Card</Menu.Item>
                <Menu.Item key="227">Donation</Menu.Item>
                <Menu.Item key="327">Authority</Menu.Item>
                <Menu.Item key="427">Review</Menu.Item>
                <Menu.Item key="427">Survey</Menu.Item>
                <Menu.Item key="427">Booking</Menu.Item>
              </SubMenu>

              <Menu.Item key="3" icon={<UploadOutlined />}>
                LAYOUT
              </Menu.Item>

              <Menu.Item key="13">Header</Menu.Item>
              <Menu.Item key="23">Sidebar</Menu.Item>
              <Menu.Item key="33">Content</Menu.Item>

              <Menu.Item key="4" icon={<UploadOutlined />}>
                CONTROLS
              </Menu.Item>
              <SubMenu key="sub8" icon={<MailOutlined />} title="Charts">
                <Menu.Item key="11">Production</Menu.Item>
                <Menu.Item key="21">Navigation</Menu.Item>
              </SubMenu>

              <SubMenu key="sub9" icon={<MailOutlined />} title="Map">
                <Menu.Item key="11">Production</Menu.Item>
                <Menu.Item key="21">Navigation</Menu.Item>
              </SubMenu>

              <SubMenu key="sub10" icon={<MailOutlined />} title="Basic">
                <Menu.Item key="11">Production</Menu.Item>
                <Menu.Item key="21">Navigation</Menu.Item>
              </SubMenu>

              <SubMenu key="sub21" icon={<MailOutlined />} title="Advance">
                <Menu.Item key="11">Production</Menu.Item>
                <Menu.Item key="21">Navigation</Menu.Item>
              </SubMenu>

              <SubMenu key="sub22" icon={<MailOutlined />} title="Tables">
                <Menu.Item key="11">Production</Menu.Item>
                <Menu.Item key="21">Navigation</Menu.Item>
              </SubMenu>

              <br />
              <br />

              <SubMenu key="sub23" icon={<MailOutlined />} title="Settings">
                <Menu.Item key="11">Production</Menu.Item>
                <Menu.Item key="21">Navigation</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
              }}
            >
              <Header className="site-layout-background" style={{ padding: 0 }}>
                {React.createElement(
                  this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                  {
                    className: "trigger",
                    onClick: this.toggle,
                  }
                )}
                <Space direction="vertical" style={{ toppadding: 0 }}>
                  <Search
                    style={{ padding: 15 }}
                    placeholder="input search text"
                    onSearch={onSearch}
                    enterButton
                  />
                </Space>

                <Dropdown overlay={menu} trigger={["click"]}>
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Notification <DownOutlined />
                  </a>
                </Dropdown>
                <Dropdown overlay={menu} trigger={["click"]}>
                  <a
                    style={{ margin: 30 }}
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    User <DownOutlined />
                  </a>
                </Dropdown>
              </Header>
              <Header>
                <div className="padding-button">
                  <Button className="ant-btn-primary1" type="primary">
                    Dashboard
                  </Button>

                  <Button className="ant-btn-primary1" type="primary">
                    Featured
                  </Button>

                  <Button className="ant-btn-primary1" type="primary">
                    Popular
                  </Button>

                  <Button type="primary">Today</Button>

                  <Button type="primary">This week</Button>

                  <Button type="primary">This Month</Button>

                  <Dropdown overlay={calender} trigger={["click"]}>
                    <a
                      style={{ margin: 30 }}
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Start date <DownOutlined />
                    </a>
                  </Dropdown>

                  <Dropdown overlay={calender} trigger={["click"]}>
                    <a
                      style={{ margin: 30 }}
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      End date <DownOutlined />
                    </a>
                  </Dropdown>

                  <Dropdown overlay={Datemenu} trigger={["click"]}>
                    <a
                      style={{ margin: 30 }}
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      datemenu <DownOutlined />
                    </a>
                  </Dropdown>
                </div>
              </Header>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default SiderDemo;
