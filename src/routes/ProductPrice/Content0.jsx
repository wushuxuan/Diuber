import React from 'react';
import { Card, Col, Row,Icon,Button } from 'antd';
import $ from 'jquery';

const { Meta } = Card;
class Content extends React.Component {
  static defaultProps = {
    className: 'price',
  };
  LinkTo = () =>{
    window.location.href="https://gc.diuber.com/diuber/login/register.html"
  }

  render() {
    const props = { ...this.props };
    return (
      <div>
        <div className="priceBgTop">
          <h1 style={{color:'#fff'}}>一点投入 换取百倍价值</h1>
          <p>嘀友网络科技为你提供最全面、最专业、专属定制的管车服务</p>
        </div>
      <div {...props}>
        <Row gutter={24}>
          <Col className="rowcol" xs={24} lg={6}>
            <Card className='Card' bordered={true}
                  hoverable
                  title={
                    <div  style={{width:'100%',textAlign:'center'}}>
                      <h1 style={{fontWeight:'bold',marginBottom:'10px'}}>专业版</h1>
                      <p>租赁公司所有车管功能</p>
                      <p style={{padding:'10px 0px'}}>
                        <span style={{color:'#ff8a00',}}>¥ </span>
                        <h2 style={{display:'inline-block',fontWeight:'bold',color:'#ff8a00',marginRight:'5px'}}>0</h2>
                        /年</p>
                      <p style={{color:'#999'}}><del>原价(10000元/年)</del></p>
                    </div>
                  }
            >
              <ul className='cardul'>
                <li><Icon type="check" /><span>车辆管理&车辆记录</span></li>
                <li><Icon type="check" />租车管理&客户管理</li>
                <li><Icon type="check" />财务管理&还款管理</li>
                <li><Icon type="check" />员工管理&权限管理</li>
                <li className="cardli"><Icon type="" />车辆数不超过30</li>
                <li className="cardli"><Icon type="" />品牌车型不超过2个</li>
                <li className="cardli"><Icon type="" />员工、合作伙伴各不超过2个</li>
              </ul>
              <Button onClick={this.LinkTo} style={{width:'100%',height:'45px',marginTop:'10%'}}>免费使用</Button>
            </Card>
          </Col>
          <Col className="rowcol" xs={24} lg={6}>
            <Card className='Card' bordered={true}
                  hoverable
                  title={
                    <div  style={{width:'100%',textAlign:'center'}}>
                      <h1 style={{fontWeight:'bold',marginBottom:'10px'}}>智享版</h1>
                      <p>更智能更强大</p>
                      <p style={{padding:'10px 0px'}}>
                        <span style={{color:'#ff8a00',}}>¥ </span>
                        <h2 style={{display:'inline-block',fontWeight:'bold',color:'#ff8a00',marginRight:'5px'}}>4999</h2>
                        /年</p>
                      <p style={{color:'#999'}}><del>原价(25000元/年)</del></p>
                    </div>
                  }
            >
              <ul className='cardul'>
                <li><Icon type="check" /><span style={{fontWeight:'bold'}}>专业版所有功能</span></li>
                <li><Icon type="check" /><span>不限车辆、车型、账户数量</span></li>
                <li><Icon type="check" /><span>批量导入、导出Excel表格</span></li>
                <li><Icon type="check" /><span>租车信息全国推广服务</span></li>
                <li><Icon type="check" /><span>同城求租客户信息推送</span></li>
                <li><Icon type="check" /><span>第三方资料录入（修理厂）</span></li>
                <li><Icon type="check" /><span>金牌讲师上门培训一次</span></li>
                <li><Icon type="check" /><span>证件自动识别，手机验车</span></li>
                <li><Icon type="check" /><span>自动查违章、推送通知</span></li>
                <li><Icon type="check" /><span>自动催缴租金短信和电话</span></li>
                <li><Icon type="check" /><span style={{color:'#ff8a00'}}>30天不满意全额退款</span></li>
              </ul>

              <p style={{textAlign:'center',marginTop:'5%'}}>注：查违章、短信按量收费</p>
              <Button onClick={this.LinkTo} style={{width:'100%',height:'45px',marginTop:'10%'}}>免费使用</Button>
            </Card>
          </Col>
          <Col className="rowcol" xs={24} lg={6}>
            <Card className='Card' bordered={true}
                  hoverable
                  title={
                    <div  style={{width:'100%',textAlign:'center'}}>
                      <h1 style={{fontWeight:'bold',marginBottom:'10px'}}>营销版</h1>
                      <p>租赁公司营销利器</p>
                      <p style={{padding:'10px 0px'}}>
                        <span style={{color:'#ff8a00',}}>¥ </span>
                        <h2 style={{display:'inline-block',fontWeight:'bold',color:'#ff8a00',marginRight:'5px'}}>2980</h2>
                        /年</p>
                      <p style={{color:'#999'}}><del>原价(9980元/年)</del></p>
                    </div>
                  }
            >
              <ul className='cardul'>
                <li><Icon type="check" /><span>绑定公司专属小程序</span></li>
                <li><Icon type="check" />不限车型、车辆数</li>
                <li><Icon type="check" />销售管理，订单推送</li>
                <li><Icon type="check" />租车信息全国推广服务</li>
                <li><Icon type="check" />同城求租客户信息推送</li>
                <li><Icon type="check" />邀请有奖活动</li>
              </ul>
              <Button className="toMeiqia" style={{width:'100%',height:'45px',marginTop:'10%'}}><a href="javascript:_MEIQIA('showPanel')">购买咨询</a></Button>
            </Card>
          </Col>
          <Col className="rowcol" xs={24} lg={6}>
            <Card className='Card' bordered={true}
                  hoverable
                  title={
                    <div  style={{width:'100%',textAlign:'center'}}>
                      <h1 style={{fontWeight:'bold',marginBottom:'10px'}}>定制版</h1>
                      <p>专业团队迅速响应、全面的技术服务</p>
                      <h2 style={{fontWeight:'bold',padding:'10px 0px',color:'#ff8a00'}}>按用量、需求收费 </h2>
                    </div>
                  }
            >
              <ul className='cardul'>
                <li><Icon type="check" /><span style={{fontWeight:'bold',fontSize:'16px',}}>专业版所有功能</span></li>
                <li><Icon type="check" />私有云部署</li>
                <li><Icon type="check" />定制模块开发</li>
                <li><Icon type="check" />车辆GPS平台对接</li>
                <li><Icon type="check" />自定义合同模板</li>
                <li><Icon type="check" />违章自动查询 <p style={{fontWeight:'bold',padding:'0 0 0 20px'}}> 0.08元/次 </p></li>
                <li><Icon type="check" />自动提醒短信<p style={{fontWeight:'bold',padding:'0 0 0 20px'}}>0.08元/条</p></li>
              </ul>
              <Button className="toMeiqia" style={{width:'100%',height:'45px',marginTop:'10%'}}>定制咨询</Button>
            </Card>
          </Col>
        </Row>
      </div>
      </div>
    );

  }
}


export default Content;
