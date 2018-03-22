import React from 'react';
import {HashRouter as Router, Route, Link,Switch  } from 'react-router-dom';
import { Card, Col, Row,Icon,Button,Tabs } from 'antd';
import $ from 'jquery';
import CongDa from '../../components/CongDa';
import Chemanxing from '../../components/Chemanxing/Chemanxing';

const TabPane = Tabs.TabPane;
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
    return (
      <Router>
      <div  {...props}>
        <div className="priceTop casebgTop">
          <h1 style={{color:'#fff'}}>嘀友科技合作伙伴案例</h1>
          <p>在嘀友科技生态体系中，客户第一是我们坚持的第一原则，合作伙伴可使用专业的嘀友管车系统，
            为不同用户定制个性化服务，不断提升客户体验。</p>
        </div>
        <div className="caseDiv">
          <Tabs tabPosition="left">
            <TabPane tab={<span style={{fontSize:'20px'}}>丛达租赁</span>} key="1">
              <div style={{padding:'10px 0px'}}>
                <h1 style={{textAlign:'center'}}>丛达携手嘀友：汽车租赁公司车辆无库存，租车率达100%</h1>
                <p style={{padding:'2% 0px 5%',}}>背景：丛达汽车租赁（上海）有限公司是一家通过行业认证的汽车租赁公司，成立于2015年4月，2年多的光阴丛达租赁已成为上海汽车租赁行业的知名品牌(滴滴十佳合作租赁公司)</p>
                <div className="congdaimg congdaimg01"></div>
              </div>
              <Card hoverable style={{ width: '90%',borderTop:'5px solid #00CBE9',marginBottom:'50px'}}>
                <p style={{lineHeight:'30px'}}>丛达租赁旗下车辆达到400辆以上，在没有使用嘀友管车以前采用传统的表格记录模式，不仅速度慢而且还是质量效率低，这让丛达租赁公司高管意识到必须要依靠一个SAAS系统提升公司业绩，机缘巧合下丛达与嘀友达成协作，丛达开始了转型之路；到目前为止，丛达旗下的车辆全部租出，完全达到了0库存，而且预约的人还需要排队，然而丛达的工作人员工作量却减少了很多；到底发生了什么？让我们来看一下吧</p>
              </Card>
              <div className="casediv"><h1></h1><h2>提升效率</h2></div>
              <Card bordered={true} style={{ width: '90%',margin:'15px 0px 50px' }}>
                <div>
                  <h3 className="caseh3">车辆、司机管理</h3>
                  <p className="casep">丛达租赁之前一直采用的是表格化办公模式，在录入和查询的时候非常不方便;嘀友管车系统对车辆的维修、保养、保险、验车、合同签约、保单、年检、违章等十几项记录进行统计收录，查询的时候只需找到这辆车就能找到这两车的所有记录，然后对这些信息进行操作，非常便捷；在司机方面则是记录了司机的租记录、交租金记录、退押金记录、维修记录、延期记录等做了统计；丛达租赁员工使用的时候在记录和查询的方面，无论是速度还是准确率上都得到了保证</p>
                </div>
                <div>
                  <h3 className="caseh3">嘀友管车系统设置有车管、驾管、财务、销售等角色</h3>
                  <p className="casep">每一个角色都会有相应的员工账号（由管理员设置），相应的工作台，让专门的人做专门的事，提高了个人的效率；每个人专属一个模块，完全在不同的工作台上进行办公，告别传统的表格办公模式，无论是记录数据还是查询数据，只需敲几下键盘点几次鼠标就可以轻松工作，高效完成</p>
                </div>
                <div>
                  <h3 className="caseh3">每日有待办事务提醒，自动催缴</h3>
                  <p className="casep">每日首次登陆都会提示要今天办理的事情，提醒公司员工今天需要处理哪些事务；</p>
                </div>
                <div>
                  <h3 className="caseh3">批量查违章，自动识别</h3>
                  <p className="casep">在没有使用嘀友管车之前，丛达租赁的车管都是一辆一辆进行查询，嘀友管车系统上的一键查违章，能为车管节省90%以上的时间去处理其他的工作；证件自动识别，告别传统模式，只需要上传相关证件，系统自动识别证件信息，避免了出错问题的发生，同样会节省了时间</p>
                </div>
              </Card>

              <div className="casediv"><h1></h1><h2>提升利润</h2></div>
              <Card bordered={true} style={{ width: '90%',margin:'15px 0px 50px' }}>
                <div>
                  <h3 className="caseh3">微信小程序推广</h3>
                  <p style={{marginTop:'15px'}}>对于汽车租赁公司而言，要想有收入，就必须把车租出去，如何能保证自己的客户源源不断呢？丛达租赁借助于嘀友旗下的微信小程序（嘀友租车），将公司旗下即将要闲置待租的车辆发布到嘀友租车平台上（后台配置公司信息即可获得专属的微信小程序）上架闲置车源，获取订单通知、求租通知，减少了车辆闲置的部分风险</p>
                </div>
              </Card>


              <div className="casediv"><h1></h1><h2>减低成本</h2></div>
              <Card bordered={true} style={{ width: '90%',margin:'15px 0px 50px' }}>
                <div>
                  <h3 className="caseh3">嘀友管车免费使用</h3>
                  <p style={{marginTop:'15px'}}>购买传统的SAAS系统，不仅贵，而且容易出现不流畅，功能不完全等状况，所以丛达租赁选择了嘀友管车这套云端储存的网页版 SAAS系统，嘀友管车把数据储存在云端，安全可靠、不用担心数据丢失，遗漏现象；嘀友管车SAAS系统无论是专业版还是智享版现在是免费使用的，其中包括了租车推广，财务管理、车辆管理等这些功能，为丛达租赁省节省数十万元的成本</p>
                </div>
              </Card>
            </TabPane>



            <TabPane tab={<span style={{fontSize:'20px'}}>车漫行</span>} key="2">
              <div style={{padding:'10px 0px'}}>
                <h1 style={{textAlign:'center'}}>车漫行：每天订车咨询电话不断</h1>
                <p style={{padding:'2% 0px 5%',}}>近期，上海车漫行汽车租赁服务有限公司不断的收到新订单，每天订车咨询电话不断，公司绩效也随之上涨很多，但是令人奇怪的是这些订单都是从哪里来的呢？车漫行为拓展自己的销售渠道做了些什么？</p>
              </div>
              <div className="casediv"><h1></h1><h2>订单是如何来的？</h2></div>
              <Card hoverable style={{ width: '90%',marginBottom:'50px',marginTop:'20px'}}>
                <p className="casep" style={{lineHeight:'30px',textIndent:'30px'}}>
                  原来，车漫行在半年前与上海嘀友网络科技公司合作，免费使用嘀友旗下的嘀友管车系统来对自己公司的车辆进行管理和维护，而近期嘀友重磅推出微信嘀友租车小程序，租赁公司可以把自己闲置的车原放在嘀友租车平台上，
                  让用户进行浏览，从而进行下一步的下单，公司在线上处理订单，联系司机，进行线下交易，然后完成这笔订单。
                </p>
                <p className="casep" style={{lineHeight:'30px',textIndent:'30px'}}>嘀友租车小程序是与嘀友管车后台相关联的，车辆的上架、下架，订单的处理等都是通过嘀友管车后台进行操作。作为嘀友管车的第一批用户，车漫行公司也顺利的成为小程序上第一批车辆供应商。嘀友平台本身就聚集了大量的网约车司机，提供了不少的用户（客源）；再加上小程序上的分享功能，把公司主页分享出去，让潜在客户进入公司指定的页面，提高了浏览公司的流量，从而促进从流量到订单完成的转化率的提高。这两种就为车漫行提供了很多的用户，再加上小程序便于扩散的性质，传播范围更广，潜在的客户就越多，公司订单成交的几率就越高，公司的绩效也会越来越好</p>
                <p className="casep" style={{lineHeight:'30px',textIndent:'30px'}}>车漫行汽车租赁服务有限公司，使用嘀友管车和嘀友租车小程序相结合，公司的业绩一直处于稳步上升的趋势和状态，嘀友也在不断的对产品进行优化和升级，从而更好的去为汽车租赁公司服务</p>
              </Card>
              <div style={{display:'flex',flexFlow:'row'}}>
                <div className="bannerkuang">
                  <div className="bannerimgbg">
                    <div className="bannerimg cmxbannerimg01"></div>
                  </div>
                </div>
                <div style={{display:'inline-block',width:'200px',height:'200px',margin:'50px 0px 0px 50px'}}>
                  <div className="cmxbannerimg02"></div>
                  <p style={{textAlign:'center',margin:'30px 0px'}}>微信二维码扫描</p>
                </div>
              </div>
            </TabPane>


          </Tabs>
        </div>
      </div>
      </Router>
    );
  }
}


export default Content;
