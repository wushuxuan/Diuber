import React from 'react';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import { Menu, Icon,Button } from 'antd';
import {HashRouter as Router, Route, Link,Switch  } from 'react-router-dom';

const Item = Menu.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    current: 'setting:about3',
    phoneOpen: false,
  }
  phoneClick = () => {
    this.setState({
      phoneOpen: !this.state.phoneOpen,
    });
  }
  handleClick = (e) => {
    console.log('click ', e.key);
    this.setState({
      current: e.key,
    });
  }
  topAboutUs=()=>{
    window.location.href="#/AboutUs"
  }
  topProductIntroduction=()=>{
    window.location.href="#/ProductIntroduction"
  }
  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const navData = { menu1: '首页', menu2: '产品介绍', menu3: '产品价格', menu4: '案例',menu5: '关于我们' };
    const navChildren = Object.keys(navData).map((key, i) => (<Item key={i}>
      {navData[key]}
    </Item>));
    navChildren.push((<Item className="help" key="help">
        <div id='entry'>
          <Button  type="primary" ><a style={{textDecoration:'none'}} href="https://gc.diuber.com/diuber/login/index.html">进入管车系统</a></Button>
        </div>
      </Item>),
     );
    return (<TweenOne
      component="header"
      animation={{ opacity: 0, type: 'from' }}
      {...props}
    >
      <TweenOne
        className={`${this.props.className}-logo`}
        animation={{ x: -30, delay: 100, type: 'from', ease: 'easeOutQuad' }}
        id={`${this.props.id}-logo`}
      >
        <img width="100%" src="http://www.diuber.com/images/dygc/guanche_logo_heibai.png" />
      </TweenOne>
      {isMode ? (<div
          className={`${this.props.className}-phone-nav${this.state.phoneOpen ? ' open' : ''}`}
          id={`${this.props.id}-menu`}
        >
          <div
            className={`${this.props.className}-phone-nav-bar`}
            onClick={() => {
              this.phoneClick();
            }}
          >
            <em />
            <em />
            <em />
          </div>
          <div
            className={`${this.props.className}-phone-nav-text`}
          >
            <Menu
              defaultSelectedKeys={['0']}
              mode="inline"
            >
              {navChildren}
            </Menu>
          </div>
        </div>) :
        <TweenOne
          animation={{ x: 30, delay: 100, opacity: 0, type: 'from', ease: 'easeOutQuad' }}
          className={`${this.props.className}-nav`}
        >
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item key="home">
              <div id="homeLink" style={{color:'#000'}}><Link style={{display:'block'}}  to='/'>首页</Link></div>
            </Menu.Item>
            <SubMenu title={<span onClick={this.topProductIntroduction}>产品介绍</span>}>
              <Menu.Item key="setting:product1"><Link style={{display:'block'}}  to='/ProductIntroduction'>产品优势</Link></Menu.Item>
              <Menu.Item key="setting:product2"><Link style={{display:'block'}}  to='/ProductIntroductionDet'>详细功能</Link></Menu.Item>
              <Menu.Item key="setting:product3"><Link style={{display:'block'}}  to='/ProductIntroductionInt'>整合方案</Link></Menu.Item>
              <Menu.Item key="setting:product4"><Link style={{display:'block'}}  to='/ProductIntroductionSol'>解决方案</Link></Menu.Item>
            </SubMenu>
            <Menu.Item key="price">
              <div id="homeLink" style={{color:'#000'}}><Link style={{display:'block'}} to='/ProductPrice'>产品价格</Link></div>
            </Menu.Item>
            <Menu.Item key="case">
              <div id="homeLink" style={{color:'#000'}}><Link style={{display:'block'}}  to='/ProductCase'>成功案例</Link></div>
            </Menu.Item>
            <SubMenu title={<span onClick={this.topAboutUs}>关于我们</span>}>
              <Menu.Item key="setting:about1"><Link style={{display:'block'}}  to='/AboutUs'>关于我们</Link></Menu.Item>
              <Menu.Item key="setting:about2"><Link style={{display:'block'}}  to='/JoinUs'>加入我们</Link></Menu.Item>
              <Menu.Item key="setting:about3"><Link style={{display:'block'}}  to='/ContactUs'>联系我们</Link></Menu.Item>
            </SubMenu>
            <Menu.Item key="community">
              <div id="homeLink" style={{color:'#000'}}><Link style={{display:'block'}}  to='/Community'>新闻资讯</Link></div>
            </Menu.Item>
            <Menu.Item key="button">
              <Button  type="primary" ><a style={{textDecoration:'none'}} href="https://gc.diuber.com/diuber/login/index.html">进入管车系统</a></Button>
            </Menu.Item>
          </Menu>
        </TweenOne>
      }
    </TweenOne>);
  }
}

Header.propTypes = {
  className: PropTypes.string,
  isMode: PropTypes.bool,
  id: PropTypes.string,
};

Header.defaultProps = {
  className: 'header1',
};

export default Header;
