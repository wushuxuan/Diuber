import React from 'react';
import ReactDOM from 'react-dom';
import enquire from 'enquire.js';
import { scrollScreen } from 'rc-scroll-anim';
import { Affix, Button,Popover } from 'antd';
import $ from 'jquery';

import Nav from '../../components/nav/Nav';
import Content0 from './Content0';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Footer from './Footer';

import './less/antMotion_style.less';
const content = (
  <div style={{display:'flex',height:'50px'}}>
    <div><img style={{width:'30px',height:'30px',marginTop:'10px'}} src="https://img.alicdn.com/tfs/TB1..XLRFXXXXXwaXXXXXXXXXXX-48-50.png"/></div>
    <div style={{flex:'1',width:'100px',height:'30px',marginLeft:'20px'}}>
      <p style={{height:'25px',lineHeight:'25px'}}>嘀友客服热线</p>
      <p style={{color:'#ff8a00'}}>021-20250628</p>
    </div>
  </div>
);
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMode: false
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    this.enquireScreen((isMode) => {
      this.setState({ isMode });
    });
    window.addEventListener("scroll", function(){
      if($(window).scrollTop()>=200){
        $('#Affix').show();
        $('#MEIQIA-BTN').show();
        $('#nav_1_0').css({'background':'#fff'});
        $('.header1-nav .ant-menu').css({'color':'#000'});
        $('#homeLink>a').css({'color':'#000'});
        $('#nav_1_0-logo img').attr('src','http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/diyou.png');
      }else{
        $('#Affix').hide();
        $('#MEIQIA-BTN').hide();
        $('#nav_1_0').css({'background':'rgba(51, 51, 51, 0.95)'});
        $('.header1-nav .ant-menu').css({'color':'#fff'});
        $('#homeLink>a').css({'color':'#fff'});
        $('#nav_1_0-logo img').attr('src','http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/diyou2.png');
      }
    });
  }
  Gotop=()=>{
    $('body,html').animate({scrollTop:0},500);
  }
  enquireScreen = (cb) => {
    /* eslint-disable no-unused-expressions */
    enquire.register('only screen and (min-width: 320px) and (max-width: 767px)', {
      match: () => {
        cb && cb(true);
      },
      unmatch: () => {
        cb && cb();
      },
    });
    /* eslint-enable no-unused-expressions */
  }

  render() {
    const children = [
      <Nav id="nav_1_0" key="nav_1_0" isMode={this.state.isMode}/>,
      <Content0 id="content_1_0" key="content_1_0" isMode={this.state.isMode}/>,
      <Content1 id="content_4_0" key="content_4_0" isMode={this.state.isMode}/>,
      <Content2 id="content_9_0" key="content_9_0" isMode={this.state.isMode}/>,
      <Content3 id="content_6_0" key="content_6_0" isMode={this.state.isMode}/>,
      <Footer id="footer_1_0" key="footer_1_0" isMode={this.state.isMode}/>,
      <Affix id="Affix" style={{ position: 'fixed', top: '55%', right:'0px',display:'none'}} onChange={affixed => console.log(affixed)}>
        <Popover  placement="left" content={content}>
          <Button style={{background: 'url(http://www.techuangyi.com/statics/images/bootstrap/new_website_1/aside_icon1.gif)',display: 'block',
          width: '60px', height: '60px', textAlign: 'center',color: '#fff',padding:'0px',borderRadius:'0px'}}></Button>
        </Popover>
          <Button style={{background: 'url(http://www.techuangyi.com/statics/images/bootstrap/new_website_1/aside_icon2.gif)',display: 'block',
         width: '60px', height: '60px', textAlign: 'center',color: '#fff',padding:'0px',borderRadius:'0px'}}></Button>
        <Button onClick={this.Gotop} style={{background: 'url(http://www.techuangyi.com/statics/images/bootstrap/new_website_1/aside_icon4.jpg)',display: 'block',
          width: '60px', height: '60px', textAlign: 'center',color: '#fff',padding:'0px',borderRadius:'0px'}}></Button>
      </Affix>
    ];
    return (
      <div className="templates-wrapper">
        {children}
      </div>
    );
  }
}
