import React from 'react';
import ReactDOM from 'react-dom';
import enquire from 'enquire.js';
import { scrollScreen } from 'rc-scroll-anim';
import { Modal,Affix,Tabs, Icon,Card, Col, Row,Popover,Divider,Timeline,Radio,Pagination , List, Avatar, Button, Spin } from 'antd';
import $ from 'jquery';
import request from '../../utils/request';
import Nav from './Nav';
import Footer from '../Home/Footer';

import './less/antMotion_style.less';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
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
  state = {
    data:[],
  }
  constructor(props) {
    super(props);
    this.state = {
      isMode: false,
    };
  }
  componentWillMount = () =>{
    this.firstRefresh()
  }
  firstRefresh = () =>{
    let formData = new FormData();
    formData.append("key", 'diuber2017');
    formData.append("secret_key", '09e8b1b88e615f0d9650886977af33e9');
    request('/api/get_official_web/getUpdate',{
      method:'POST',
      body:formData,
    }).then((data)=>{
      console.log(data)
      console.log(data.data.code)
      if(data.data.code===1){
        console.log(data.data.data)
        this.setState({
          data : data.data.data,
          dataLen : data.data.data.length
        })
      }
    })
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
  showModal = (key) => {
    let formData = new FormData();
    formData.append("key", 'diuber2017');
    formData.append("secret_key", '09e8b1b88e615f0d9650886977af33e9');
    formData.append("id", key);
    request('/api/get_official_web/getUpdate',{
      method:'POST',
      body:formData,
    }).then((data)=>{
      console.log(data)
      console.log(data.data.code)
      if(data.data.code===1){
        console.log(data.data.data[0].updateContent)
        this.setState({
          ListContent:data.data.data[0].updateContent,
          visible:true
        })
      }
    })
  }
  handleOk = (e) => {
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }
  Gotop=()=>{
    $('body,html').animate({scrollTop:0},500);
  }
  render() {
    const { data,dataLen} = this.state;
    const pagination = {
      pageSize: 10,
      current: 1,
      total: dataLen,
      onChange: (() => {}),
    };

    const children = [
      <Nav id="nav_1_0" key="nav_1_0" isMode={this.state.isMode}/>,
      <div>
        <div className="priceTop updateRecordTop">
          <h1 style={{color:'#fff'}}>产品更新记录</h1>
          <p>嘀友网络科技为你提供最全面、最专业、专属定制的管车系统</p>
        </div>
        <div style={{width:'80%',margin:'30px auto'}}>
          <List
            className="demo-loadmore-list"
            itemLayout="horizontal"
            pagination={pagination}
            dataSource={data}
            renderItem={item => (
              <List.Item actions={[<a onClick={this.showModal.bind(this,item.id)}>查看更多</a>]}>
                <List.Item.Meta
                  title={<p style={{fontSize:'25px',padding:'10px 0px'}}>{item.updateTitle}</p>}
                  description={<p>{item.updateContent}</p>}
                />
                <div>更新时间为：{item.updateTime}</div>
              </List.Item>
            )}
          />
        </div>
        <Modal
          title="产品更新记录详情"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="确定"
          cancelText="返回"
        >
          {this.state.ListContent}
        </Modal>
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
