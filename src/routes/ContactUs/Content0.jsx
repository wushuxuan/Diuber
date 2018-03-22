import React from 'react';
import { Card, Col, Row,Icon,Button,Divider } from 'antd';
import $ from 'jquery';

const { Meta } = Card;
class Content extends React.Component {
  static defaultProps = {
    className: 'content0',
  };
  LinkTo = () =>{
    window.location.href="https://gc.diuber.com/diuber/login/register.html"
  }

  render() {
    const props = { ...this.props };
    delete props.isMode;
    const gridStyle = {
      width: '100%',
      textAlign: 'center',
    };
    return (
      <div>
        <div className="JoinUTop">
          <h1 style={{color:'#000'}}>专业技术服务</h1>
          <p>诚心诚意为顾客提供专业、优质的服务</p>
        </div>
      <div {...props} className="JoinUsContent" style={{width:'90%',marginLeft:'5%',padding:'3% 0px 5%'}}>
        <div style={{marginBottom:'5%'}}>
          <h1 style={{textAlign:'left',fontWeight:'bold'}}>上海嘀友网络科技有限公司</h1>
          <p style={{display:'inline-block',width:'50%',padding:'20px 0px 5px'}}>邮编：200124</p>
          <p style={{display:'inline-block',width:'50%',padding:'5px 0px'}}>邮箱：support@diuber.com</p>
          <p style={{display:'inline-block',width:'50%',padding:'5px 0px'}}>全国热线：<span style={{fontWeight:'bold',color:'#FF9900'}}>400-6257-550</span></p>
          <p style={{display:'inline-block',width:'50%',padding:'5px 0px'}}>地址：上海市浦东新区 杨南路455号 郭家花园A座 308室</p>
          <div style={{width:'87%',margin:' 3% 0px',padding:'2%', boxShadow:' 0 2px 15px 0 rgba(0,0,0,.15)',textAlign:'center'}}>
            <img src="http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/banner_open_mail_l332df.png"/>
          </div>
        </div>
        <Divider />
        <h1  style={{fontWeight:'bold',color:'#1890FF'}}>嘀友管车</h1>
        <div style={{width:'90%',margin:'2% 0px',display:'flex'}}>
          <div style={{flex:'1'}}>
            <h3 style={{padding:'5px 0px',fontWeight:'bold'}}>客服服务</h3>
            <p style={{color:'666',padding:'5px 0px'}}>电话热线：021-20250628</p>
            <p style={{color:'666',padding:'5px 0px'}}>在线客服：开始咨询</p>
            <p style={{color:'666',padding:'5px 0px'}}>注意:人工服务时间：周一至周五9：00~18：00</p>
          </div>
          <div style={{flex:'1'}}>
            <div style={{flex:'1'}}>
              <h3 style={{padding:'5px 0px',fontWeight:'bold'}}>产品代理</h3>
              <p style={{color:'666',padding:'5px 0px'}}>联系热线：021-20250628</p>
              <p style={{color:'666',padding:'5px 0px'}}>Email:support@diuber.com</p>
            </div>
          </div>
          <div style={{flex:'1'}}>
            <div style={{flex:'1',textAlign:'left',}}>
              <img style={{width:'100px',height:'100px'}} src="http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/download.png"/>
              <h6 style={{padding:'5px 0px',fontWeight:'bold'}}>App版本下载</h6>
            </div>
          </div>
        </div>
        <Divider />
        <h1 style={{fontWeight:'bold',color:'#1890FF'}}>嘀友用车</h1>
        <div style={{width:'90%',margin:'2% 0px',display:'flex'}}>
          <div style={{flex:'1'}}>
            <h3 style={{padding:'5px 0px',fontWeight:'bold'}}>合作/了解</h3>
            <p style={{color:'666',padding:'5px 0px'}}>联系人：周先生</p>
            <p style={{color:'666',padding:'5px 0px'}}>联系热线：021-20250628</p>
            <p style={{color:'666',padding:'5px 0px'}}>Email:support@diuber.com</p>
          </div>
          <div style={{flex:'1'}}>
            <div style={{flex:'1',textAlign:'left',}}>
              <img style={{width:'100px',height:'100px'}} src="http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/download%20%281%29.png"/>
              <h6 style={{padding:'5px 0px',fontWeight:'bold'}}>App版本下载</h6>
            </div>
          </div>
          <div style={{flex:'1'}}>
          </div>
        </div>
        <Divider />
        <h1 style={{fontWeight:'bold',color:'#1890FF'}}>嘀友社区</h1>
        <h4 style={{padding:'10px 0px',fontWeight:'bold'}}>手机APP下载方式</h4>
        <div style={{width:'90%',margin:'2% 0px',display:'flex'}}>
          <div style={{flex:'1'}}>
            <div style={{flex:'1',textAlign:'left',}}>
              <img style={{width:'100px',height:'100px'}} src="http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/sqios.png"/>
              <h6 style={{padding:'5px 0px',fontWeight:'bold'}}>IOS版本下载</h6>
            </div>
          </div>
          <div style={{flex:'1'}}>
            <div style={{flex:'1',textAlign:'left',}}>
              <img style={{width:'100px',height:'100px'}} src="http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/didi.png"/>
              <h6 style={{padding:'5px 0px',fontWeight:'bold'}}>Android版本下载</h6>
            </div>
          </div>
          <div style={{flex:'1'}}>
            <div style={{flex:'1',textAlign:'left',}}>
              <img style={{width:'100px',height:'100px'}} src="http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/diuberwx.jpg"/>
              <h6 style={{padding:'5px 0px',fontWeight:'bold'}}>关注丢步公众号</h6>
            </div>
          </div>
          <div style={{flex:'1'}}></div>
          <div style={{flex:'1'}}></div>
        </div>
        <Divider />
        <h1 style={{fontWeight:'bold',color:'#1890FF'}}>嘀友租车</h1>
        <div style={{width:'90%',margin:'2% 0px',display:'flex'}}>
          <div style={{flex:'1'}}>
            <h3 style={{padding:'5px 0px',fontWeight:'bold'}}>申请/认证</h3>
            <p style={{color:'666',padding:'5px 0px'}}>联系人：周先生</p>
            <p style={{color:'666',padding:'5px 0px'}}>联系热线：021-20250628</p>
            <p style={{color:'666',padding:'5px 0px'}}>Email:support@diuber.com</p>
          </div>
          <div style={{flex:'1'}}>
            <div style={{flex:'1',textAlign:'left',}}>
              <img style={{width:'100px',height:'100px'}} src="http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/xcxerma.jpg"/>
              <h6 style={{padding:'5px 0px',fontWeight:'bold'}}>扫码关注微信小程序</h6>
            </div>
          </div>
          <div style={{flex:'1'}}></div>
          <div style={{flex:'1'}}></div>
        </div>


      </div>
      </div>
    );
  }
}


export default Content;
