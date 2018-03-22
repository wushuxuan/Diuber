import React from 'react';
import { Card, Col, Row,Icon,Button,Radio,Popover,Timeline  } from 'antd';
import $ from 'jquery';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';

const BgElement = Element.BgElement;

const { Meta } = Card;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const androidContent = (
  <div>
    <img src="http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/didi.png"/>
  </div>
);

const iosContent = (
  <div>
    <img src="http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/sqios.png"/>
  </div>
);

class Content extends React.Component {
  static defaultProps = {
    className: 'content0',
  };
  state ={
    AboutNum:'a'
  }
  LinkTo = () =>{
    window.location.href="https://gc.diuber.com/diuber/login/register.html"
  }
  callback = (key) =>{
    console.log(key.target.value)
    this.setState({
      AboutNum:key.target.value
    })
  }

  render() {
    const gridStyle = {
      width: '100%',
      textAlign: 'center',
    };
    const props = { ...this.props };
    delete props.isMode;
    return (
      <div>
        <div className="priceTop aboutUsBgTop">
          <h1 style={{color:'#fff'}}>嘀友 | DIUBER</h1>
          <p>为网约车租赁公司提供信息化效率工具</p>
        </div>
        <div {...props} style={{marginBottom:'0px !important'}}>
          <div style={{width:'70%',margin:'5% auto',height:'50px',lineHeight:'48px',marginBottom:'30px'}}>
            <RadioGroup className="AboutTop" defaultValue="a" size="large" onChange={this.callback}>
              <RadioButton className="AboutTopPart" value="a">嘀友介绍</RadioButton>
              <RadioButton className="AboutTopPart" value="b">嘀友用车</RadioButton>
              <RadioButton className="AboutTopPart" value="c">嘀友司机社区</RadioButton>
              <RadioButton className="AboutTopPart" value="d">嘀友租车小程序</RadioButton>
            </RadioGroup>
          </div>
          <div style={{paddingBottom:'5%'}}>
            {
                this.state.AboutNum=='a'
              &&
               <div style={{marginTop:'5%'}}>
                <div className="AboutA">
                  <div className="AboutA-left">
                    <h1 style={{width:'95%',marginLeft:'5%',marginTop:'5%'}}>上海嘀友网络科技有限公司</h1>
                    <p style={{width:'90%',marginLeft:'5%',marginTop:'5%'}}>我们的目标是：让每一家汽车租赁公司管理全自动，车辆0空置！</p>
                    <p style={{width:'90%',marginLeft:'5%',marginTop:'2%'}}>我们是一家互联网创新型公司，定位于为网约车租赁公司提供专业的信息化产品和服务，让租赁公司管理更简单、营销更高效。</p>
                    <p style={{width:'90%',marginLeft:'5%',marginTop:'4%'}}>嘀友系列产品包括【嘀友管车】、【嘀友用车】、【嘀友租车】、【嘀友社区】等，解决汽车租赁公司车辆管理、调度派单、营销推广、司机招聘等难题，深受全国500多家汽车租赁公司、数十万网约车司机的喜爱。</p>
                  </div>
                  <div className="AboutA-right">
                    <BannerAnim prefixCls="banner-user" autoPlay style={{height:'329px',marginTop:'1px'}}>
                      <Element
                        prefixCls="banner-user-elem"
                        key="0"
                      >
                        <BgElement
                          key="bg"
                          className="bg"
                          style={{
                            background: '#364D79',
                          }}
                        />
                       <img src="http://www.diuber.com/images/dygc/about_2.png"/>
                      </Element>
                      <Element
                        prefixCls="banner-user-elem"
                        key="1"
                      >
                        <BgElement
                          key="bg"
                          className="bg"
                          style={{
                            background: '#64CBCC',
                          }}
                        />
                        <img src="http://www.diuber.com/images/dygc/about_3.png"/>
                      </Element>
                    </BannerAnim>
                  </div>
                </div>
                <div style={{width:'90%',margin:'5% auto 20px'}}>
                  <Row gutter={24}>
                    <Col span={12}>
                    <Card hoverable bordered={true}>
                      <div style={{display:'flex',flexFlow:'row'}}>
                        <div style={{width:'40px',height:'40px'}}><img style={{width:'50px',height:'50px'}} src="http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/%E4%BC%98%E8%B4%A8.png"/></div>
                        <div style={{paddingLeft:'20px',}}>
                          <h1  style={{fontSize:'20px',fontWeight:'bold'}}>专业技术</h1>
                          <p style={{fontSize:'14px',marginTop:'15px'}}>嘀友是一个技术服务公司，我们通过产品和服务，帮助汽车租赁行业的生意人管车、管客、管单，让生意更好做。</p>
                        </div>
                      </div>
                    </Card>
                    </Col>
                    <Col span={12}>
                    <Card hoverable bordered={true}>
                      <div style={{display:'flex',flexFlow:'row'}}>
                        <div style={{width:'50px',height:'50px'}}><img  style={{width:'50px',height:'50px'}} src="http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/14%E6%83%B3%E6%B3%95.png"/></div>
                        <div style={{paddingLeft:'10px',}}>
                          <h1 style={{fontSize:'20px',fontWeight:'bold'}}>持续创新</h1>
                          <p style={{fontSize:'14px',marginTop:'15px'}}>我们致力于成为互联网+汽车租赁领域里最被信任的引领者，引领中小型汽车租赁公司信息化潮流。</p>
                        </div>
                      </div>
                    </Card>
                    </Col>
                    <Col span={24} style={{marginTop:'5%'}}>
                      <Card hoverable bordered={true}  title="嘀友科技 - 计算机软件著作权登记证书" >
                        <img style={{width:'30%',margin:'10px 10px'}} src="./20180319181103.jpg"/>
                        <img style={{width:'30%',margin:'10px 10px'}} src="./20180319181103.jpg"/>
                        <img style={{width:'30%',margin:'10px 10px'}} src="./20180319181103.jpg"/>
                      </Card>
                    </Col>
                  </Row>
                </div>
               </div>
            }
            {
              this.state.AboutNum=='b'
              &&
              <div style={{width:'100%'}}>
                <h1 style={{textAlign:'center',marginTop:'5%'}}>汽车租赁公司派单神器：订单一键派发、平台订单自动派发、全部订单尽在掌控</h1>
                <Card bordered={false} style={{width:'90%',margin:'3% 5% 30px 5%',border:'none !important'}}>
                  <Row gutter={24}>
                    <Col className="rowcol" xs={24} lg={6}>
                      <Card.Grid style={gridStyle}>
                        <div className="IntroduceImg5 "></div>
                        <h2 className="IntroduceH2">派单抢单</h2>
                        <p className="Introducep">通过APP进行发单和接单，行程详情、位置、乘客信息一目了然，就近派单，效率更高，管理省心</p>
                      </Card.Grid>
                    </Col>
                    <Col className="rowcol" xs={24} lg={6}>
                      <Card.Grid style={gridStyle}>
                        <div className="IntroduceImg5 IntroduceImg51"></div>
                        <h2 className="IntroduceH2">订单管理</h2>
                        <p className="Introducep">每一个订单行程都自动记录，司机接单情况、订单实时状态及时获取，保障每一个订单服务无差错.</p>
                      </Card.Grid>
                    </Col>
                    <Col className="rowcol" xs={24} lg={6}>
                      <Card.Grid style={gridStyle}>
                        <div className="IntroduceImg5 IntroduceImg52"></div>
                        <h2 className="IntroduceH2">订单结算</h2>
                        <p className="Introducep">所有的订单都是由调度确认后和司机结算，可根据时间（每单／每日／每周／每月）结算，也可以根据司机结算</p>
                      </Card.Grid>
                    </Col>
                    <Col className="rowcol" xs={24} lg={6}>
                      <Card.Grid style={gridStyle}>
                        <div className="IntroduceImg5 IntroduceImg53"></div>
                        <h2 className="IntroduceH2">司机通知</h2>
                        <p className="Introducep">可随时随地和司机联系，也可以群发通知、图片、视频、语音等信息，免短信费.</p>
                      </Card.Grid>
                    </Col>
                    <Col className="rowcol" xs={24} lg={6}>
                      <Card.Grid style={gridStyle}>
                        <div className="IntroduceImg5 IntroduceImg54"></div>
                        <h2 className="IntroduceH2">司机管理、招募</h2>
                        <p className="Introducep">免费提供10万专业的网约车司机和车源；司机所有的相关信息随时查看，司机审核、行程记录、解除合作一键即达</p>
                      </Card.Grid>
                    </Col>
                    <Col className="rowcol" xs={24} lg={6}>
                      <Card.Grid style={gridStyle}>
                        <div className="IntroduceImg5 IntroduceImg55"></div>
                        <h2 className="IntroduceH2">自动发单</h2>
                        <p className="Introducep">可对接各种旅游接单平台，携程、途牛旅游、驴妈妈等平台，订单信息可自动发布</p>
                      </Card.Grid>
                    </Col>
                  </Row>
                </Card>
              </div>
            }
            {
              this.state.AboutNum=='c'
              &&
              <div style={{width:'100%'}}>
                <h1 style={{textAlign:'center',marginTop:'5%'}}>百万专业网约车司机为您共享接单，司机招聘、派单接单、租车购车，业务更上一层楼</h1>
                <Card bordered={false} style={{width:'90%',margin:'3% 5% 30px 5%',border:'none !important'}}>
                  <Row gutter={24}>
                    <Col className="rowcol" xs={24} lg={6}>
                      <Card.Grid style={gridStyle}>
                        <div className="IntroduceImg6 "></div>
                        <h2 className="IntroduceH2">司机接单平台</h2>
                        <p className="Introducep">加盟车主通过嘀友APP可以接【嘀友用车】的内部订单，还可以接社区内快车拼车、定制用车等订单</p>
                      </Card.Grid>
                    </Col>
                    <Col className="rowcol" xs={24} lg={6}>
                      <Card.Grid style={gridStyle}>
                        <div className="IntroduceImg6 IntroduceImg61"></div>
                        <h2 className="IntroduceH2">司机招募加盟</h2>
                        <p className="Introducep">嘀友社区内有数十万带车加盟车主，可以加盟到有订单的租赁公司旗下成为加盟司机，为租赁公司迅速提升订单服务能力</p>
                      </Card.Grid>
                    </Col>
                    <Col className="rowcol" xs={24} lg={6}>
                      <Card.Grid style={gridStyle}>
                        <div className="IntroduceImg6 IntroduceImg62"></div>
                        <h2 className="IntroduceH2">发布租车信息</h2>
                        <p className="Introducep">嘀友社区内有数万需要租车开网约车的司机，租赁公司和个人可将车源发布到社区，迅速将库存待租车、二手车消化掉</p>
                      </Card.Grid>
                    </Col>
                    <Col className="rowcol" xs={24} lg={6}>
                      <Card.Grid style={gridStyle}>
                        <div className="IntroduceImg6 IntroduceImg63"></div>
                        <h2 className="IntroduceH2">公告与信息交流</h2>
                        <p className="Introducep">可通过嘀友社区随时发布各种实时信息，嘀友社区就是你的朋友圈</p>
                      </Card.Grid>
                    </Col>
                    <Col className="rowcol" xs={24} lg={6}>
                      <Card.Grid style={gridStyle}>
                        <div className="IntroduceImg6 IntroduceImg65"></div>
                        <h2 className="IntroduceH2">定制车型用车</h2>
                        <p className="Introducep">可根据车型、车牌、颜色等信息发布定制用车需求，随时可找车和车主帮你解决婚车、活动用车、会议用车、车主访谈多种需求</p>
                      </Card.Grid>
                    </Col>
                    <Col className="rowcol" xs={24} lg={6}>
                      <Card.Grid style={gridStyle}>
                        <div className="IntroduceImg6 IntroduceImg64"></div>
                        <h2 className="IntroduceH2">查违章</h2>
                        <p className="Introducep">输入车牌号车架号轻松简单方便查违章</p>
                      </Card.Grid>
                    </Col>
                    <Col className="rowcol" xs={24} lg={6}>
                      <Popover placement="bottom"  content={androidContent}>
                      <Card.Grid style={gridStyle}>
                        <div className="IntroduceImg6 IntroduceImg66"></div>
                        <h2 className="IntroduceH2">嘀友App下载</h2>
                      </Card.Grid>
                      </Popover>
                    </Col>
                    <Col className="rowcol" xs={24} lg={6}>
                      <Popover placement="bottom"  content={iosContent}>
                      <Card.Grid style={gridStyle}>
                        <div className="IntroduceImg6 IntroduceImg67"></div>
                        <h2 className="IntroduceH2">嘀友社区App下载</h2>
                      </Card.Grid>
                      </Popover>
                    </Col>
                  </Row>
                </Card>
              </div>
            }
            {
              this.state.AboutNum=='d'
              &&
              <div style={{width:'100%'}}>
                <h1 style={{textAlign:'center',marginTop:'5%'}}>百万专业网约车司机为您共享接单，司机招聘、派单接单、租车购车，业务更上一层楼</h1>
                <div style={{marginTop:'5%'}}>
                  <div className="AboutA">
                    <div className="AboutA-left">
                      <div style={{width:'70%',margin:'3% auto'}}>
                        <p style={{padding:'10px 0px'}}><img style={{marginRight:'10px'}} src="http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/xcxjs.png"/>汇聚网约车司机，获取更多关注</p>
                        <p style={{padding:'10px 0px'}}><img style={{marginRight:'10px'}} src="http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/xcxjs.png"/>上架、下架车辆简单，一键上传多辆车辆</p>
                        <p style={{padding:'10px 0px'}}><img style={{marginRight:'10px'}} src="http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/xcxjs.png"/>订单、求租信息及时提醒</p>
                        <p style={{padding:'10px 0px'}}><img style={{marginRight:'10px'}} src="http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/xcxjs.png"/>一键分享公司主页，拓展微信宣传渠道</p>
                        <p style={{padding:'30px 0px'}}>
                          <img style={{marginRight:'10px'}} src="http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/xcxjs.png"/>微信二维码扫描
                        <div style={{display:'inline-block',width:'100px',height:'100px',marginLeft:'20px'}}><img  style={{width:'100px',height:'100px'}} src="http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/xcxerma.jpg"/></div>
                        </p>
                      </div>
                    </div>
                    <div className="AboutA-right">
                      <BannerAnim prefixCls="banner-user" autoPlay style={{height:'329px',marginTop:'1px'}}>
                        <Element
                          prefixCls="banner-user-elem"
                          key="0"
                        >
                          <BgElement
                            key="bg"
                            className="bg"
                            style={{
                              background: '#364D79',
                            }}
                          />
                          <img style={{width:'50%',marginLeft:'25%',height:'auto'}} src="http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/xcxjs3.png"/>
                        </Element>
                        <Element
                          prefixCls="banner-user-elem"
                          key="1"
                        >
                          <BgElement
                            key="bg"
                            className="bg"
                            style={{
                              background: '#64CBCC',
                            }}
                          />
                          <img style={{width:'50%',marginLeft:'25%',height:'auto'}} src="http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/xcxjs1.png"/>
                        </Element>
                      </BannerAnim>
                    </div>
                  </div>
              </div>
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}


export default Content;
