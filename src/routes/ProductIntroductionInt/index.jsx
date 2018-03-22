import React from 'react';
import ReactDOM from 'react-dom';
import enquire from 'enquire.js';
import { scrollScreen } from 'rc-scroll-anim';
import { Affix, Button,Tabs, Icon,Card, Col, Row,Popover } from 'antd';
import {HashRouter as Router, Route, Link,Switch  } from 'react-router-dom';
import $ from 'jquery';

import Nav from './Nav';
import Content0 from './Content0';
import Footer from '../Home/Footer';

import './less/antMotion_style.less';


const TabPane = Tabs.TabPane;
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
  callback = (key) => {
    console.log(key);
    this.setState({
      ActiveTab:key
    })
  }
  render() {
    const gridStyle = {
      width: '100%',
      textAlign: 'center',
    };
    const children = [
      <Nav id="nav_1_0" key="nav_1_0" isMode={this.state.isMode}/>,
      <div style={{marginTop:'7%'}} id="Introduction">
        <Tabs defaultActiveKey="3">
          <TabPane tab={<span style={{fontSize:'20px'}}>产品优势</span>} key="1">
            <div id="TabPane01" style={{marginTop:'3%'}}>
              <div style={{width:'70%',marginLeft:'15%',padding:'3% 0px',display:'flex',flexFlow:'row'}}>
                <div style={{width:'55%',display:'inline-block',marginTop:'100px'}}>
                  <h1>车辆管理：车辆信息统一管理</h1>
                  <p style={{padding:'30px 0px 10px'}}>已租／待租／维修／续保/延期/违章状态车辆随时查看</p>
                  <p style={{padding:'10px 0px'}}>更有手机APP版本可随时随地查询、自动识别录入更快捷</p>
                  <p style={{padding:'10px 0px'}}>有效解决数据丢失、车管换人、重要信息输入错误等问题的发生</p>
                </div>
                <div className="bannerkuang">
                  <div className="bannerimgbg">
                    <div className="bannerimg">
                      <div className="bannerimg01"></div>
                      <div className="bannerimg01 bannerimg0102"></div>
                      <div className="bannerimg01 bannerimg0103"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{width:'70%',marginLeft:'15%',padding:'3% 0px',display:'flex',flexFlow:'row'}}>
                <div className="bannerkuang">
                  <div className="bannerimgbg">
                    <div className="bannerimg">
                      <div className="bannerimg02"></div>
                    </div>
                  </div>
                </div>
                <div style={{width:'45%',display:'inline-block',marginLeft:'5%',marginTop:'55px',textAlign:'right'}}>
                  <h1>销售管理：让您的销售更有效</h1>
                  <p style={{padding:'30px 0px 10px'}}>与微信小程序携手，打造一个全新的租车平台</p>
                  <p style={{padding:'10px 0px'}}>用户求租信息及时推送，避免客户流失</p>
                  <div style={{display:'flex'}}>
                    <p style={{flex:'1',padding:'50px 15px 0px 0px',textAlign:'right',color:'#828282'}}>
                      <p style={{marginBottom:'20px',fontSize:'15px'}}>微信扫描二维码</p>
                      <p style={{fontSize:'15px'}}>体验嘀友租车小程序</p>
                    </p>
                    <p style={{flex:'1',padding:'10px 0px'}}>
                      <img style={{width:'150px',height:'150px'}} src="http://www.diuber.com/images/dygc/banner5xcx.png"/>
                    </p>
                  </div>
                </div>
              </div>
              <div style={{width:'70%',marginLeft:'15%',padding:'3% 0px',display:'flex',flexFlow:'row'}}>
                <div style={{width:'55%',display:'inline-block',marginLeft:'5%',marginTop:'100px'}}>
                  <h1>财务管理</h1>
                  <p style={{padding:'30px 0px 10px'}}>支持多种交易方式记录，记录方便、查询快捷，</p>
                  <p style={{padding:'10px 0px'}}>有专属财务角色，更加专业化</p>
                </div>
                <div className="bannerkuang">
                  <div className="bannerimgbg bannerimgbg01">

                  </div>
                </div>
              </div>
              <div style={{width:'70%',marginLeft:'15%',padding:'3% 0px',display:'flex',flexFlow:'row'}}>
                <div className="bannerkuang">
                  <div className="bannerimgbg bannerimgbg02">

                  </div>
                </div>
                <div style={{width:'55%',display:'inline-block',textAlign:'right',marginLeft:'5%',marginTop:'100px'}}>
                  <h1>车管每日事务清单</h1>
                  <p style={{padding:'30px 0px 10px'}}>帮助车管自动过滤关键事务</p>
                  <p style={{padding:'10px 0px'}}>需要还款客户、即将到期车辆、待租车辆</p>
                  <p style={{padding:'10px 0px'}}>违章车辆、续保车辆、年检车辆、维修出险车辆等</p>
                </div>
              </div>
              <div className="ProductIntroductionImg">
                <h1 style={{height:'150px',lineHeight:'150px',textAlign:'center'}}>专业、方便、专属定制的企业管车服务</h1>
                <Button style={{marginBottom:'5%',marginRight:'3%',}} type="primary"><Link to="/UpdateRecord">产品更新记录</Link></Button> <Button onClick={this.linkto} style={{marginBottom:'5%'}} type="primary" ghost>免费使用</Button>
              </div>
            </div>
          </TabPane>
          <TabPane tab={<span style={{fontSize:'20px'}}>详细功能</span>} key="2">
            <div style={{background:'#eee',width:'100%',border:'1px solid #eee'}}>
              <Card bordered={false} title={<div style={{display:'flex',flexFlow:'row'}}><span style={{width:'5px',height:'20px',marginTop:'8px',background:'#19ACF7',display:'inline-block'}}></span><span style={{fontSize:'20px',marginLeft:'10px'}}>车辆管理</span></div>} style={{width:'90%',margin:'3% 5% 30px 5%',border:'none !important'}}>
                <Row gutter={24}>
                  <Col className="rowcol" xs={24} lg={6}>
                    <Card.Grid style={gridStyle}>
                      <div className="IntroduceImg01"></div>
                      <h2 className="IntroduceH2">待租车辆</h2>
                      <p className="Introducep">展示待租车辆，可以上架微信小程序，获取订单</p>
                    </Card.Grid>
                  </Col>
                  <Col className="rowcol" xs={24} lg={6}>
                    <Card.Grid style={gridStyle}>
                      <div className="IntroduceImg01 IntroduceImg02"></div>
                      <h2 className="IntroduceH2">车辆查询</h2>
                      <p className="Introducep">输入车牌号或者姓名查询</p>
                    </Card.Grid>
                  </Col>
                  <Col className="rowcol" xs={24} lg={6}>
                    <Card.Grid style={gridStyle}>
                      <div className="IntroduceImg01 IntroduceImg03"></div>
                      <h2 className="IntroduceH2">车辆详情</h2>
                      <p className="Introducep">展示所查车辆的全部信息以及关于这辆车的所有记录</p>
                    </Card.Grid>
                  </Col>
                  <Col className="rowcol" xs={24} lg={6}>
                    <Card.Grid style={gridStyle}>
                      <div className="IntroduceImg01 IntroduceImg04"></div>
                      <h2 className="IntroduceH2"> 租车、退车功能</h2>
                      <p className="Introducep">租车退车记录自动查询，方便快捷(web)</p>
                    </Card.Grid>
                  </Col>
                  <Col className="rowcol" xs={24} lg={6}>
                    <Card.Grid style={gridStyle}>
                      <div className="IntroduceImg01 IntroduceImg05"></div>
                      <h2 className="IntroduceH2">还款记录</h2>
                      <p className="Introducep">记录每一项还款记录,包括已还款和未还款</p>
                    </Card.Grid>
                  </Col>
                  <Col className="rowcol" xs={24} lg={6}>
                    <Card.Grid style={gridStyle}>
                      <div className="IntroduceImg01 IntroduceImg06"></div>
                      <h2 className="IntroduceH2">关联维修</h2>
                      <p className="Introducep">关联维修厂、合作租赁公司，记录所有维修的记录，包含新增与修改记录，</p>
                    </Card.Grid>
                  </Col>
                  <Col className="rowcol" xs={24} lg={6}>
                    <Card.Grid style={gridStyle}>
                      <div className="IntroduceImg01 IntroduceImg07"></div>
                      <h2 className="IntroduceH2">保养功能</h2>
                      <p className="Introducep">记录所有保养的记录，包含新增与修改记录，查看记时自动查询</p>
                    </Card.Grid>
                  </Col>
                  <Col className="rowcol" xs={24} lg={6}>
                    <Card.Grid style={gridStyle}>
                      <div className="IntroduceImg01 IntroduceImg08"></div>
                      <h2 className="IntroduceH2">出险记录</h2>
                      <p className="Introducep">记录所有出险的记录，包含新增与修改记录</p>
                    </Card.Grid>
                  </Col>
                  <Col className="rowcol" xs={24} lg={6}>
                    <Card.Grid style={gridStyle}>
                      <div className="IntroduceImg01 IntroduceImg09"></div>
                      <h2 className="IntroduceH2">年检记录</h2>
                      <p className="Introducep">记录每一年的年检结果，并可对年检金额、年检人等进行修改</p>
                    </Card.Grid>
                  </Col>
                  <Col className="rowcol" xs={24} lg={6}>
                    <Card.Grid style={gridStyle}>
                      <div className="IntroduceImg01 IntroduceImg10"></div>
                      <h2 className="IntroduceH2">保单记录</h2>
                      <p className="Introducep">记录详细的保单情况，可新增以及对原来的进行修改，并带有自动查询功能</p>
                    </Card.Grid>
                  </Col>
                  <Col className="rowcol" xs={24} lg={6}>
                    <Card.Grid style={gridStyle}>
                      <div className="IntroduceImg01 IntroduceImg11"></div>
                      <h2 className="IntroduceH2">退押金</h2>
                      <p className="Introducep">展示已退押金详情记录</p>
                    </Card.Grid>
                  </Col>
                  <Col className="rowcol" xs={24} lg={6}>
                    <Card.Grid style={gridStyle}>
                      <div className="IntroduceImg01 IntroduceImg12"></div>
                      <h2 className="IntroduceH2">延期记录</h2>
                      <p className="Introducep">展示延期记录情况，可新增可修改</p>
                    </Card.Grid>
                  </Col>
                  <Col className="rowcol" xs={24} lg={6}>
                    <Card.Grid style={gridStyle}>
                      <div className="IntroduceImg01 IntroduceImg13"></div>
                      <h2 className="IntroduceH2">新增车辆</h2>
                      <p className="Introducep">车辆基本信息由系统扫描驾驶证获取，无须担心输错输漏行为</p>
                    </Card.Grid>
                  </Col>
                  <Col className="rowcol" xs={24} lg={6}>
                    <Card.Grid style={gridStyle}>
                      <div className="IntroduceImg01 IntroduceImg14"></div>
                      <h2 className="IntroduceH2">车辆信息修改</h2>
                      <p className="Introducep">车辆修改信息由系统扫描驾驶证获取，不用担心改错遗漏现象</p>
                    </Card.Grid>
                  </Col>
                  <Col className="rowcol" xs={24} lg={6}>
                    <Card.Grid style={gridStyle}>
                      <div className="IntroduceImg01 IntroduceImg15"></div>
                      <h2 className="IntroduceH2">违章一键查询</h2>
                      <p className="Introducep">数百辆汽车只需一键，就能精准，快速的查出违章记录</p>
                    </Card.Grid>
                  </Col>
                </Row>
              </Card>
              <Card bordered={false} title={<div style={{display:'flex',flexFlow:'row'}}><span style={{width:'5px',height:'20px',marginTop:'8px',background:'#19ACF7',display:'inline-block'}}></span><span style={{fontSize:'20px',marginLeft:'10px'}}>销售管理</span></div>} style={{width:'90%',margin:'3% 5% 30px 5%',border:'none !important'}}>
                <Row gutter={24}>
                  <Col className="rowcol" xs={24} lg={6}>
                    <Card.Grid style={gridStyle}>
                      <div className="IntroduceImg2"></div>
                      <h2 className="IntroduceH2">租车小程序</h2>
                      <p className="Introducep">为汽车租赁公司提供汽车租赁平台（汽车租赁微商城）</p>
                    </Card.Grid>
                  </Col>
                  <Col className="rowcol" xs={24} lg={6}>
                    <Card.Grid style={gridStyle}>
                      <div className="IntroduceImg2 IntroduceImg22"></div>
                      <h2 className="IntroduceH2">客户求租</h2>
                      <p className="Introducep">针对于用户在小程序上发布的求租分，便于公司联系求租客户</p>
                    </Card.Grid>
                  </Col>
                  <Col className="rowcol" xs={24} lg={6}>
                    <Card.Grid style={gridStyle}>
                      <div className="IntroduceImg2 IntroduceImg23"></div>
                      <h2 className="IntroduceH2">上架与下架车源</h2>
                      <p className="Introducep">对公司的车辆在小程序的车辆进行上架和下架处理</p>
                    </Card.Grid>
                  </Col>
                  <Col className="rowcol" xs={24} lg={6}>
                    <Card.Grid style={gridStyle}>
                      <div className="IntroduceImg2 IntroduceImg24"></div>
                      <h2 className="IntroduceH2">合同签约</h2>
                      <p className="Introducep">对租车司机进行线上签约，可对合同进行定制化开发</p>
                    </Card.Grid>
                  </Col>
                  <Col className="rowcol" xs={24} lg={6}>
                    <Card.Grid style={gridStyle}>
                      <div className="IntroduceImg2 IntroduceImg25"></div>
                      <h2 className="IntroduceH2">订单</h2>
                      <p className="Introducep">当用户下单时会产生订单，销售人员可根据数据对订单进行处理</p>
                    </Card.Grid>
                  </Col>
                </Row>
              </Card>


              <Card bordered={false} title={<div style={{display:'flex',flexFlow:'row'}}><span style={{width:'5px',height:'20px',marginTop:'8px',background:'#19ACF7',display:'inline-block'}}></span><span style={{fontSize:'20px',marginLeft:'10px'}}>司机管理功能</span></div>} style={{width:'90%',margin:'3% 5% 30px 5%',border:'none !important'}}>
                <Row gutter={24}>
                  <Col className="rowcol" xs={24} lg={6}>
                    <Card.Grid style={gridStyle}>
                      <div className="IntroduceImg3"></div>
                      <h2 className="IntroduceH2">全部司机查看</h2>
                      <p className="Introducep">查看所有司机的详情信息</p>
                    </Card.Grid>
                  </Col>
                  <Col className="rowcol" xs={24} lg={6}>
                    <Card.Grid style={gridStyle}>
                      <div className="IntroduceImg3 IntroduceImg32"></div>
                      <h2 className="IntroduceH2">租客查询</h2>
                      <p className="Introducep">显示较为简单的租客的一些信息</p>
                    </Card.Grid>
                  </Col>
                  <Col className="rowcol" xs={24} lg={6}>
                    <Card.Grid style={gridStyle}>
                      <div className="IntroduceImg3 IntroduceImg33"></div>
                      <h2 className="IntroduceH2">租客详情</h2>
                      <p className="Introducep">展示租车人的所有信息，以及这位租客的所有有关记录</p>
                    </Card.Grid>
                  </Col>
                  <Col className="rowcol" xs={24} lg={6}>
                    <Card.Grid style={gridStyle}>
                      <div className="IntroduceImg3 IntroduceImg34"></div>
                      <h2 className="IntroduceH2">新增、修改租客信息</h2>
                      <p className="Introducep">身份证、驾驶证、行驶证 自动识别（APP / WEB）无须担心重要信息输入错误</p>
                    </Card.Grid>
                  </Col>
                  <Col className="rowcol" xs={24} lg={6}>
                    <Card.Grid style={gridStyle}>
                      <div className="IntroduceImg3 IntroduceImg35"></div>
                      <h2 className="IntroduceH2">编辑租客信息</h2>
                      <p className="Introducep">对租客的一些基本情况进行调整</p>
                    </Card.Grid>
                  </Col>
                </Row>
              </Card>


              <Card bordered={false} title={<div style={{display:'flex',flexFlow:'row'}}><span style={{width:'5px',height:'20px',marginTop:'8px',background:'#19ACF7',display:'inline-block'}}></span><span style={{fontSize:'20px',marginLeft:'10px'}}>老板、 财务主页</span></div>} style={{width:'90%',margin:'3% 5% 30px 5%',border:'none !important'}}>
                <Row gutter={24}>
                  <Col className="rowcol" xs={24} lg={6}>
                    <Card.Grid style={gridStyle}>
                      <div className="IntroduceImg3 IntroduceImg40"></div>
                      <h2 className="IntroduceH2">多种方式收款</h2>
                      <p className="Introducep">分类查看所有交易的情况（微信、支付宝、现金等）</p>
                    </Card.Grid>
                  </Col>
                  <Col className="rowcol" xs={24} lg={6}>
                    <Card.Grid style={gridStyle}>
                      <div className="IntroduceImg3 IntroduceImg36"></div>
                      <h2 className="IntroduceH2">退押金列表</h2>
                      <p className="Introducep">展示已退押金的详细信息</p>
                    </Card.Grid>
                  </Col>
                  <Col className="rowcol" xs={24} lg={6}>
                    <Card.Grid style={gridStyle}>
                      <div className="IntroduceImg3 IntroduceImg37"></div>
                      <h2 className="IntroduceH2">记账功能</h2>
                      <p className="Introducep">对新增的一些金额交易进行记录</p>
                    </Card.Grid>
                  </Col>
                  <Col className="rowcol" xs={24} lg={6}>
                    <Card.Grid style={gridStyle}>
                      <div className="IntroduceImg3 IntroduceImg38"></div>
                      <h2 className="IntroduceH2">退押金功能</h2>
                      <p className="Introducep">对需要退押金的客户进行退押金记录操作，可在押金列表显示</p>
                    </Card.Grid>
                  </Col>
                  <Col className="rowcol" xs={24} lg={6}>
                    <Card.Grid style={gridStyle}>
                      <div className="IntroduceImg3 IntroduceImg39"></div>
                      <h2 className="IntroduceH2">老板仪表盘</h2>
                      <p className="Introducep">车辆、司机、合作伙伴、财务统计等等数据尽在掌握</p>
                    </Card.Grid>
                  </Col>
                </Row>
              </Card>


              <Card bordered={false} title={<div style={{display:'flex',flexFlow:'row'}}><span style={{width:'5px',height:'20px',marginTop:'8px',background:'#19ACF7',display:'inline-block'}}></span><span style={{fontSize:'20px',marginLeft:'10px'}}>车管主页</span></div>} style={{width:'90%',margin:'3% 5% 30px 5%',border:'none !important'}}>
                <Row gutter={24}>
                  <Col className="rowcol" xs={24} lg={6}>
                    <Card.Grid style={gridStyle}>
                      <div className="IntroduceImg3 IntroduceImg41"></div>
                      <h2 className="IntroduceH2">租车退车</h2>
                      <p className="Introducep">对新增租车的进行添加，对退车的车辆进行退车操作，手机app随时随地操作</p>
                    </Card.Grid>
                  </Col>
                  <Col className="rowcol" xs={24} lg={6}>
                    <Card.Grid style={gridStyle}>
                      <div className="IntroduceImg3 IntroduceImg42"></div>
                      <h2 className="IntroduceH2">查违章</h2>
                      <p className="Introducep">查询车辆的交通违章情况，处理情况</p>
                    </Card.Grid>
                  </Col>
                  <Col className="rowcol" xs={24} lg={6}>
                    <Card.Grid style={gridStyle}>
                      <div className="IntroduceImg3 IntroduceImg43"></div>
                      <h2 className="IntroduceH2">验车</h2>
                      <p className="Introducep">手机验车 记录自动上传（APP）并且随时查看，上传多种信息，避免日后纠纷</p>
                    </Card.Grid>
                  </Col>
                  <Col className="rowcol" xs={24} lg={6}>
                    <Card.Grid style={gridStyle}>
                      <div className="IntroduceImg3 IntroduceImg44"></div>
                      <h2 className="IntroduceH2">即将到期车辆</h2>
                      <p className="Introducep">按照逾期时间排序进行展示</p>
                    </Card.Grid>
                  </Col>
                  <Col className="rowcol" xs={24} lg={6}>
                    <Card.Grid style={gridStyle}>
                      <div className="IntroduceImg3 IntroduceImg45"></div>
                      <h2 className="IntroduceH2">需要退押金的客户</h2>
                      <p className="Introducep">显示需要退押金的客户列表</p>
                    </Card.Grid>
                  </Col>
                  <Col className="rowcol" xs={24} lg={6}>
                    <Card.Grid style={gridStyle}>
                      <div className="IntroduceImg3 IntroduceImg46"></div>
                      <h2 className="IntroduceH2">需要续保的车辆</h2>
                      <p className="Introducep">展示需要续保的车辆列表（按时间排序）</p>
                    </Card.Grid>
                  </Col>
                  <Col className="rowcol" xs={24} lg={6}>
                    <Card.Grid style={gridStyle}>
                      <div className="IntroduceImg3 IntroduceImg47"></div>
                      <h2 className="IntroduceH2">需要处理的违章</h2>
                      <p className="Introducep">展示车辆违规的详细信息</p>
                    </Card.Grid>
                  </Col>
                  <Col className="rowcol" xs={24} lg={6}>
                    <Card.Grid style={gridStyle}>
                      <div className="IntroduceImg3 IntroduceImg48"></div>
                      <h2 className="IntroduceH2">出险的车辆</h2>
                      <p className="Introducep">按照出险早晚时间排序展示</p>
                    </Card.Grid>
                  </Col>
                </Row>
              </Card>
            </div>
          </TabPane>
          <TabPane tab={<span style={{fontSize:'20px'}}>整合方案</span>} key="3">
            <div style={{background:'#eee',width:'100%',border:'1px solid #eee'}}>
            <Card bordered={false} title={<div style={{display:'flex',flexFlow:'row'}}><span style={{fontSize:'20px',marginLeft:'10px'}}></span></div>} style={{width:'90%',margin:'3% 5% 30px 5%',border:'none !important'}}>
              <Row gutter={24}>
                <Col className="rowcol" xs={24} lg={6}>
                  <Card.Grid style={gridStyle}>
                    <div className="IntroduceImg4"><img src="http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/%E6%9C%BA%E5%8A%A8%E8%BD%A6%E8%BF%9D%E7%AB%A0%E6%9F%A5%E8%AF%A2.png"/></div>
                    <h2 className="IntroduceH2">违章查询</h2>
                    <p className="Introducep">利用数据软件对违章车辆记录进行一键查询</p>
                  </Card.Grid>
                </Col>
                <Col className="rowcol" xs={24} lg={6}>
                  <Card.Grid style={gridStyle}>
                    <div className="IntroduceImg4"><img src="http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/%E6%94%B6%E7%9B%8A%E7%BB%9F%E8%AE%A1.png"/></div>
                    <h2 className="IntroduceH2">统计报表</h2>
                    <p className="Introducep">每日对信息进行整合梳理、方便管理人员工作、效率更高</p>
                  </Card.Grid>
                </Col>
                <Col className="rowcol" xs={24} lg={6}>
                  <Card.Grid style={gridStyle}>
                    <div className="IntroduceImg4"><img src="http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/oss%E5%AF%B9%E8%B1%A1%E5%AD%98%E5%82%A8.png"/></div>
                    <h2 className="IntroduceH2">云端储存</h2>
                    <p className="Introducep">嘀友管车数据存放在云端、安全可靠、不用担心数据丢失，遗漏现象</p>
                  </Card.Grid>
                </Col>
                <Col className="rowcol" xs={24} lg={6}>
                  <Card.Grid style={gridStyle}>
                    <div className="IntroduceImg4"><img src="http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/%E6%9F%A5%E8%AF%A2.png"/></div>
                    <h2 className="IntroduceH2">自动化查询</h2>
                    <p className="Introducep">车辆每日违章查询、自动验车、司机信息自动验证等更加人性化</p>
                  </Card.Grid>
                </Col>
                <Col className="rowcol" xs={24} lg={6}>
                  <Card.Grid style={gridStyle}>
                    <div className="IntroduceImg4"><img src="http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/%E5%B0%8F%E7%A8%8B%E5%BA%8F.png"/></div>
                    <h2 className="IntroduceH2">嘀友租车小程序</h2>
                    <p className="Introducep">嘀友租车小程序，汇集大量网约车司机，为公司提供更多的精准租车客户，</p>
                  </Card.Grid>
                </Col>
                <Col className="rowcol" xs={24} lg={6}>
                  <Card.Grid style={gridStyle}>
                    <div className="IntroduceImg4"><img src="http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/%E7%9F%AD%E4%BF%A1%E6%9C%8D%E5%8A%A1.png"/></div>
                    <h2 className="IntroduceH2">短信提醒</h2>
                    <p className="Introducep">催租、续租、续保、年检 各种提醒</p>
                  </Card.Grid>
                </Col>
              </Row>
            </Card>
            </div>
          </TabPane>
          <TabPane tab={<span style={{fontSize:'20px'}}>解决方案</span>} key="4">
            <Content0 style={{height:'100vh'}} id="content_2_0" key="content_2_0" isMode={this.state.isMode}/>,
          </TabPane>
        </Tabs>
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
