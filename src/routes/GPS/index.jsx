import React from 'react';
import ReactDOM from 'react-dom';
import enquire from 'enquire.js';
import { scrollScreen } from 'rc-scroll-anim';
import { Modal,Affix,Tabs, Icon,Card, Col, Row,Popover,Divider,Timeline,Radio,Pagination , List, Avatar, Button, Spin } from 'antd';
import $ from 'jquery';
import Nav from './Nav';
import Footer from '../Home/Footer';

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
      isMode: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", function(){
      if($(window).scrollTop()>=200){
        $('#nav_1_0').css({'background':'#fff'});
        $('.header1-nav .ant-menu').css({'color':'#000'});
        $('#homeLink>a').css({'color':'#000'});
        $('#nav_1_0-logo img').attr('src','http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/diyou.png');
      }else{
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
      <div className="GpsDiv">
        <div className="JoinUTop GPSTop">
          <h1 style={{color:'#fff'}}>嘀友智能 GPS</h1>
          <p style={{color:'#fff'}}>完美结合 嘀友智能管车系统实时获取车辆位置</p>
        </div>
        <div className="GpsDiv01">
          <div>
            <img src="http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/%E5%9B%BE%E7%89%871.png"/>
          </div>
          <div style={{width:'38%',paddingLeft:'2%',textAlign:'left'}}>
            <h2 style={{color:'#00C1DE',fontWeight:'bold',marginBottom:'8%',marginTop:'5%'}}>嘀友智能 GPS</h2>
            <h3 style={{fontWeight:'600',color:'#373d41'}}>完美结合 嘀友智能管车系统</h3>
            <p className="GpsDiv01P" style={{marginTop:'3%'}}>可实现获取车辆实时里程、根据 <text style={{color:'#00C1DE'}}>里程保养提醒、退车超里程自动计算、</text>离线和拆除报警等</p>
            <h4 style={{fontWeight:'600',color:'#373d41',marginTop:'3%',marginBottom:'3%'}}>更多功能</h4>
            <p className="GpsDiv01P">实时定位、历史轨迹回放、远程断油路、电子围栏越界报警、应急追踪</p>
            <Divider />
            <h4 style={{fontWeight:'600',color:'#373d41',marginTop:'3%'}}>推荐搭配使用</h4>
            <p className="GpsDiv01P" style={{marginTop:'3%'}}><a href="http://gc.diuber.com/">嘀友智能管车系统</a></p>
          </div>
        </div>
        <div id="TabPane01" style={{marginTop:'3%'}}>
          <div style={{width:'70%',marginLeft:'15%',padding:'3% 0px',display:'flex',flexFlow:'row'}}>
            <div style={{width:'55%',display:'inline-block',marginTop:'10px',textAlign:'left'}}>
              <h1>接线版无源GPS <text style={{fontSize:'20px',marginLeft:'20px'}}><text style={{fontWeight:'bold',color:'rgb(255, 138, 0)'}}>¥280 </text> /台</text></h1>
              <p className="GpsDiv01P" style={{padding:'30px 0px 10px'}}>第二年平台费/流量费仅需 <text style={{color:'rgb(255, 138, 0)'}}>¥50</text>/年</p>
              <p className="GpsDiv01P" style={{padding:'10px 0px'}}>实时定位、历史轨迹、远程断油路（选配）、电子围栏</p>
              <p className="GpsDiv01P" style={{padding:'10px 0px'}}>配合《嘀友管车平台》，可实现获取<text style={{fontWeight:'bold'}}>车辆实时里程、根据里程保养提醒、退车超里程自动计算、</text>离线报警等</p>
            </div>
            <div className="bannerkuang">
              <img style={{width:'400px'}} src="http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/gps/GPS01.jpg"/>
            </div>
          </div>
          <div style={{width:'70%',marginTop:'5%',marginLeft:'15%',padding:'3% 0px',display:'flex',flexFlow:'row'}}>
            <div className="bannerkuang">
              <img style={{width:'400px'}} src="http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/gps/GPS02.png"/>
            </div>
            <div style={{width:'100%',display:'inline-block',marginLeft:'5%',marginTop:'10px',textAlign:'right'}}>
              <h1>无线版磁铁式GPS <text style={{fontSize:'20px',marginLeft:'20px'}}><text style={{fontWeight:'bold',color:'rgb(255, 138, 0)'}}>¥290 </text> /台</text></h1>
              <p className="GpsDiv01P" style={{padding:'30px 0px 10px'}}>第二年平台费/流量费仅需 <text style={{color:'rgb(255, 138, 0)'}}>¥30</text>/年</p>
              <p className="GpsDiv01P" style={{padding:'10px 0px'}}>3年超长待机（1天发一次定位，3年后可换电池  ¥40/台）</p>
              <p className="GpsDiv01P" style={{padding:'10px 0px'}}>拆除报警、低电量报警、免安装、应急追踪、唤醒设置 </p>
            </div>
          </div>
        </div>
      </div>,
      <Footer id="footer_1_0" key="footer_1_0" isMode={this.state.isMode}/>,
      <Affix id="Affix" style={{ position: 'fixed', top: '55%', right:'0px',}} onChange={affixed => console.log(affixed)}>
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
