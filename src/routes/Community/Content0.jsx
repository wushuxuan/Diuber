import React from 'react';
import { Card, Col, Row,Icon,Button,Tabs,List, Avatar ,Timeline,Badge,Tag } from 'antd';
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
    NewsData:[],
  }
  componentWillMount = () =>{
    this.firstRefresh()
  }
  firstRefresh = () =>{
    let formData = new FormData();
    formData.append("key", 'diuber2017');
    formData.append("secret_key", '09e8b1b88e615f0d9650886977af33e9');
    formData.append("limit", '5');
    request('/api/get_official_web/getUpdate',{
      method:'POST',
      body:formData,
    }).then((data)=>{
      if(data.data.code===1){
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
        this.setState({
          NoticeData:data.data.data,
        })
      }
    })
    let formData2 = new FormData();
    formData2.append("key", 'diuber2017');
    formData2.append("secret_key", '09e8b1b88e615f0d9650886977af33e9');
    request('/api/get_official_web/getOfficialWebNewslist',{
      method:'POST',
      body:formData2,
    }).then((data)=>{
      if(data.data.code===1){
        console.log('嘀友全部列表')
        console.log(data.data.data)
        console.log('嘀友全部列表')
        this.setState({
          NewsData:data.data.data,
          NewsDataLen : data.data.data.length
        })
      }
    })
    let formData3 = new FormData();
    formData3.append("key", 'diuber2017');
    formData3.append("secret_key", '09e8b1b88e615f0d9650886977af33e9');
    formData3.append("type_id", '2');
    request('/api/get_official_web/getOfficialWebNewslist',{
      method:'POST',
      body:formData3,
    }).then((data)=>{
      if(data.data.code===1){
        console.log('嘀友视频')
        console.log(data.data.data)
        console.log('嘀友视频')
        this.setState({
          NewsVideoData:data.data.data,
          NewsDataVideoLen : data.data.data.length
        })
      }
    })
    let formData4 = new FormData();
    formData4.append("key", 'diuber2017');
    formData4.append("secret_key", '09e8b1b88e615f0d9650886977af33e9');
    formData4.append("type_id", '1');
    request('/api/get_official_web/getOfficialWebNewslist',{
      method:'POST',
      body:formData4,
    }).then((data)=>{
      if(data.data.code===1){
        console.log('嘀友图文')
        console.log(data.data.data)
        console.log('嘀友图文')
        this.setState({
          NewsArtData:data.data.data,
          NewsDataArtLen : data.data.data.length
        })
      }
    })
  }
  ToCheck = (key,format) =>{
    console.log(key)
    console.log(format)
    if(format===1){
      window.location.href="#/Articles?key="+key
    }
    if(format===0){
      window.location.href="#/DiuberVideo?key="+key
    }
  }
  toUpdateRecord = () =>{
    window.location.href="#/UpdateRecord"
  }
  render() {
    const {UpdateData,NoticeData,NewsData,NewsVideoData,NewsDataLen,NewsDataVideoLen,NewsArtData,NewsDataArtLen} = this.state;
    const pagination = {
      pageSize: 10,
      current: 1,
      total: NewsDataLen,
      onChange: (() => {}),
    };
    const Videopagination = {
      pageSize: 10,
      current: 1,
      total: NewsDataVideoLen,
      onChange: (() => {}),
    };
    const Artpagination = {
      pageSize: 10,
      current: 1,
      total: NewsDataArtLen,
      onChange: (() => {}),
    };
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
        <div className="NewsLeft">
          <Tabs size="large" defaultActiveKey="1">
            <TabPane tab="推荐阅读" key="1">
              <div className="NewLeftList">
                <List
                  itemLayout="vertical"
                  size="large"
                  dataSource={NewsData}
                  pagination={pagination}
                  renderItem={item => (
                    <List.Item
                      key={item.title}
                      actions={[<IconText type="clock-circle-o" text={item.create_time}/>, <IconText type="eye-o" text={item.reading_quantity} />, <p>来自 ： <span style={{color:'#000'}}>{item.source}</span></p>]}
                      extra={<div style={{position:'relative'}}>
                        <img className="communityTitle" width={220} alt="logo"  src={item.img_oss}/>
                        {
                          item.format===1
                          &&
                          <Tag style={{position:'absolute',top:'10px',left:'10px',border:'none',zIndex:'3',background:'rgba(0,0,0,0.3)',color:'#fff',borderRadius:'0px'}}>图文</Tag>
                        }{
                        item.format===0
                        &&
                        <Tag style={{position:'absolute',top:'10px',left:'10px',border:'none',zIndex:'3',background:'rgba(0,0,0,0.3)',color:'#fff',borderRadius:'0px'}}>视频</Tag>
                      }
                      </div>}
                    >
                      <List.Item.Meta
                        avatar={<Avatar src={item.img_oss} />}
                        title={<h3 className="communityTitle" onClick={this.ToCheck.bind(this,item.id,item.format)} style={{fontWeight:'bold'}}>{item.title}</h3>}
                        description={item.zhaiyao}
                      />
                    </List.Item>
                  )}
                />
              </div>
            </TabPane>
            <TabPane tab="嘀友图文" key="2">
              <div className="NewLeftList">
                <List
                  itemLayout="vertical"
                  size="large"
                  dataSource={NewsArtData}
                  pagination={Artpagination}
                  renderItem={item => (
                    <List.Item
                      key={item.title}
                      actions={[<IconText type="clock-circle-o" text={item.create_time}/>, <IconText type="eye-o" text={item.reading_quantity} />, <p>来自 ： <span style={{color:'#000'}}>{item.source}</span></p>]}
                      extra={<div style={{position:'relative'}}>
                        <img className="communityTitle" width={220} alt="logo"  src={item.img_oss}/>
                          <Tag style={{position:'absolute',top:'10px',left:'10px',border:'none',zIndex:'3',background:'rgba(0,0,0,0.3)',color:'#fff',borderRadius:'0px'}}>图文</Tag>
                      </div>}
                    >
                      <List.Item.Meta
                        avatar={<Avatar src={item.img_oss} />}
                        title={<h3 className="communityTitle" onClick={this.ToCheck.bind(this,item.id,item.format)} style={{fontWeight:'bold'}}>{item.title}</h3>}
                        description={item.zhaiyao}
                      />
                    </List.Item>
                  )}
                />
              </div>
            </TabPane>
            <TabPane tab="嘀友视频" key="3">
              <div className="NewLeftList">
                  <List
                  itemLayout="vertical"
                  size="large"
                  dataSource={NewsVideoData}
                  pagination={Videopagination}
                  renderItem={item => (
                  <List.Item
                    key={item.title}
                    emptyText='暂无数据'
                    actions={[<IconText type="clock-circle-o" text={item.create_time}/>, <IconText type="eye-o" text={item.reading_quantity} />, <p>来自 ： <span style={{color:'#000'}}>{item.source}</span></p>]}
                    extra={<div style={{position:'relative'}}>
                      <img className="communityTitle" width={220} alt="logo"  src={item.img_oss}/>
                      <Tag style={{position:'absolute',top:'10px',left:'10px',border:'none',zIndex:'3',background:'rgba(0,0,0,0.3)',color:'#fff',borderRadius:'0px'}}>视频</Tag>
                    </div>}
                  >
                    <List.Item.Meta
                      avatar={<Avatar src={item.img_oss} />}
                      title={<h3 className="communityTitle" onClick={this.ToCheck.bind(this,item.id,item.format)} style={{fontWeight:'bold'}}>{item.title}</h3>}
                      description={item.zhaiyao}
                    />
                  </List.Item>
                )}
                  />

              </div>
            </TabPane>
          </Tabs>
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
