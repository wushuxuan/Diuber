import React from 'react';
import { Card, Col, Row,Icon,Button } from 'antd';
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
        <div className="JoinUsTop">
          <h1 style={{color:'#fff'}}>加入嘀友科技</h1>
          <p>嘀友管车，寻找真诚合作伙伴，共同开拓、共同成长</p>
        </div>
      <div {...props} className="JoinUsContent" style={{width:'90%',marginLeft:'5%',padding:'3% 0px 5%'}}>
        <div style={{marginBottom:'5%'}}>
          <h1 style={{textAlign:'center'}}>加入嘀友科技，您将获得</h1>
        </div>
        <Row gutter={24}>
          <Col className="rowcol" xs={24} lg={6}>
            <Card.Grid style={gridStyle}>
              <div className="IntroduceImg7">
                <img  src="http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/%E5%93%81%E7%89%8C.png"/>
              </div>
              <h2 className="IntroduceH2">品牌的提升</h2>
              <p className="Introducep">我们秉承嘀友的开放策略，愿嘀友的平台成为你的舞台</p>
            </Card.Grid>
          </Col>
          <Col className="rowcol" xs={24} lg={6}>
            <Card.Grid style={gridStyle}>
              <div className="IntroduceImg7"><img src="http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/%E6%9A%82%E6%97%A0%E6%94%B6%E7%9B%8A.png"/></div>
              <h2 className="IntroduceH2">丰厚的收益</h2>
              <p className="Introducep">我们旨在打造良性的管车服务，最大可能保障最终用户和你的利益</p>
            </Card.Grid>
          </Col>
          <Col className="rowcol" xs={24} lg={6}>
            <Card.Grid style={gridStyle}>
              <div className="IntroduceImg7"><img src="http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/%E7%94%A8%E6%88%B7.png"/></div>
              <h2 className="IntroduceH2">忠实的用户</h2>
              <p className="Introducep">我们具备丰富的扩展性，可以提供更具个性化的服务，据此加强用户黏性</p>
            </Card.Grid>
          </Col>
          <Col className="rowcol" xs={24} lg={6}>
            <Card.Grid style={gridStyle}>
              <div className="IntroduceImg7"><img src="http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/%E8%BF%9C%E7%A8%8B%E6%8E%A7%E5%88%B6.png"/></div>
              <h2 className="IntroduceH2">可期待的未来</h2>
              <p className="Introducep">我们以嘀友管车为基础，将陆续推出更多汽车应用，许你一个惊喜不断的未来</p>
            </Card.Grid>
          </Col>
        </Row>
        <div style={{marginTop:'5%'}}>
          <h2>【嘀友管车】产品，目前有上海数十家汽车租赁公司在用，有效提升了管理效率、提高人员和租车各项利润。</h2>
          <p>嘀友管车产品是由上海嘀友网络科技有限公司独家打造，拥有强大的专业研发实力和行业经验，帮助租赁公司解决车辆管理、租金不清晰、数据丢失不完整、数据更新不及时，员工交接困难等问题；</p>
        </div>
      </div>
      </div>
    );
  }
}


export default Content;
