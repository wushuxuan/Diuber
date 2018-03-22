import React from 'react';
import { Card, Col, Row,Icon,Button,Tabs,List, Avatar ,Timeline,Tag,Badge  } from 'antd';
import $ from 'jquery';
import request from '../../utils/request';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';

const BgElement = Element.BgElement;
const { Meta } = Card;
const TabPane = Tabs.TabPane;

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);


class Content extends React.Component {
  state = {
    UpdateData:[],
    NoticeData:[],
    ContentData:[],
    contentData:'',
    DescData:[],
  }
  componentWillMount = () =>{
    this.firstRefresh()
  }
  firstRefresh = () =>{
    var key = window.location.href.split('?key=')[1];
    let formData2 = new FormData();
    formData2.append("key", 'diuber2017');
    formData2.append("secret_key", '09e8b1b88e615f0d9650886977af33e9');
    formData2.append("id", key);
    request('/api/get_official_web/getOfficialWebNew',{
      method:'POST',
      body:formData2,
    }).then((data)=>{
      if(data.data.code===1){
        console.log(data.data.data)
        if(data.data.data.label!=null){
          var label = data.data.data.label.split('、');
          $('#content').html(data.data.data.content)
          this.setState({
            DescData:label,
            ContentData:data.data.data,
          })
        }else{
          this.setState({
            ContentData:data.data.data,
          })
        }
      }
    })
    let formData = new FormData();
    formData.append("key", 'diuber2017');
    formData.append("secret_key", '09e8b1b88e615f0d9650886977af33e9');
    formData.append("limit", '5');
    request('/api/get_official_web/getUpdate',{
      method:'POST',
      body:formData,
    }).then((data)=>{
      if(data.data.code===1){
        console.log(data.data.data)
        this.setState({
          UpdateData:data.data.data,
        })
      }
    })
    request('/api/get_official_web/getNotice',{
      method:'POST',
      body:formData,
    }).then((data)=>{
      if(data.data.code===1){
        console.log(data.data.data)
        this.setState({
          NoticeData:data.data.data,
        })
      }
    })
  }
  toUpdateRecord = () =>{
    window.location.href="#/UpdateRecord"
  }
  render() {
    const {UpdateData,NoticeData,ContentData,contentData,DescData} = this.state;
    function getRandomColor () {
      let rgb = []
      for (let i = 0 ; i < 3; ++i){
        let color = Math.floor(Math.random() * 256).toString(16)
        color = color.length == 1 ? '0' + color : color
        rgb.push(color)
      }
      return '#' + rgb.join('')
    }
    const DescList =  DescData.map((item, i) => {
      return (
        <Tag color={getRandomColor()}>{item}</Tag>
      )});
    const  UpdateList= UpdateData.map((item, i) => {
      const id = item.id;
      const updateContent = item.updateContent;
      const updateTime = item.updateTime;
      const updateTitle = item.updateTitle;
      return (
        <Timeline.Item color="green">
          <a onClick={this.toUpdateRecord} className="NewsRightDate">{updateTime}</a>
          <p onClick={this.toUpdateRecord}>{updateContent}</p>
        </Timeline.Item>
      )});
    const  NoticeList= NoticeData.map((item, i) => {
      const id = item.id;
      const noticeContent = item.noticeContent;
      const noticeTime = item.noticeTime;
      const noticeTitle = item.noticeTitle;
      return (
          <li className="NewsRightLi">
            <Badge status="default" text={noticeContent}/>
          </li>
      )});
    return (
      <div className="contentNews" style={{marginTop:'60px'}}>
        <div className="NewsLeft" style={{padding:'24px'}}>
          <h1 style={{fontWeight:'bold'}}>{ContentData.title}</h1>
          <div style={{display:'flex',flexFlow:'row',padding:'20px 0px 10px'}}>
            <p><Icon type="clock-circle-o" /> {ContentData.create_time}</p>
            <p style={{marginLeft:'30px'}}><Icon type="eye-o" /> {ContentData.reading_quantity}</p>
            <p style={{margin:'0px 30px'}}>来自 ： {ContentData.source}</p>
            {DescList}
          </div>
          <div style={{padding:'15px',margin:'30px 0px',background:'#F9F9F9'}}><p><span style={{width:'30px',fontWeight:'bold'}}>摘要 : </span>{ContentData.zhaiyao}</p></div>
          <div>
            <video controls="true" src={ContentData.onlineurl} width="80%" style={{margin:'0 auto'}} loop />
          </div>
          <div style={{marginTop:'30px'}}> <p id="content"></p></div>
        </div>
        <div className="NewsRight">
          <div className="NewsRightdiv NewsRightdiv02">
            <div><h2 style={{padding:'3%',margin:'0px 3%',fontWeight:'bold',borderBottom:'1px solid #ebecec'}}>嘀友公告</h2></div>
            <div style={{margin:'5% 5%'}}>
              <ul>
                {NoticeList}
              </ul>
            </div>
          </div>
          <div className="NewsRightdiv NewsRightdiv01">
            <div><h2 style={{padding:'3%',margin:'0px 3%',fontWeight:'bold',borderBottom:'1px solid #ebecec'}}>产品更新记录</h2></div>
            <div style={{margin:'5% 5%'}}>
              <Timeline pending="不断更新中，敬请期待...">
                {UpdateList}
              </Timeline>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Content;
