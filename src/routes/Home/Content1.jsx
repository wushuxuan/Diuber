import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Icon} from 'antd';
import {HashRouter as Router, Route, Link,Switch  } from 'react-router-dom';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content extends React.Component {

  static defaultProps = {
    className: 'content2',
  };

  getDelay = e => e % 3 * 100 + Math.floor(e / 3) * 100 + 300;

  render() {
    const props = { ...this.props };
    delete props.isMode;
    const oneAnim = { y: '+=10', opacity: 0, type: 'from', ease: 'easeOutQuad' };
    const blockArray = [
      { icon: 'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png', title: '车辆管理', content: '已租、待租、维修、续保、违章状态车辆随时查看、更有手机APP版本可随时随地查询、自动识别录入更快捷.' },
      { icon: 'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png', title: '销售管理', content: '公司求租，订单，车辆上架与下架等功能，与微信小程序合作，打造一个有效的租车平台，让您的销售更有效' },
      { icon: 'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png', title: '财务管理', content: '支持多种交易方式记录，记录方便、查询快捷，有专属财务角色，更加专业化' },
      { icon: 'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png', title: '员工权限', content: '提供车管、驾管、财务、销售、修理厂多种角色和权限、处理不同的事务、提升内部合作效率' },
      { icon: 'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png', title: '司机管理', content: '为你轻松管理客户详细信息，可关联查询租车记录，自动查询身份证、诚信信息，保障你的交易更安全.' },
      { icon: 'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png', title: '添加合作伙伴', content: '自动汇总数据、统计分析、让合作对账、分析更简单、提供合作修理厂、合作租赁公司信息管理' },
    ];
    const children = blockArray.map((item, i) => {
      const id = `block${i}`;
      const delay = this.getDelay(i);
      const liAnim = { opacity: 0, type: 'from', ease: 'easeOutQuad', delay };
      const childrenAnim = { ...liAnim, x: '+=10', delay: delay + 100,};
      return (<TweenOne
        component="li"
        animation={liAnim}
        key={i}
        id={`${props.id}-${id}`}
      >
        <TweenOne
          animation={{ x: '-=10', opacity: 0, type: 'from', ease: 'easeOutQuad' }}
          className="img"
          key="img"
        >
          <img src={item.icon} width="100%" />
        </TweenOne>
        <div className="text">
          <TweenOne key="h1" animation={childrenAnim} component="h1">
            {item.title}
          </TweenOne>
          <TweenOne key="p" animation={{ ...childrenAnim, delay: delay + 200 }} component="p">
            {item.content}
          </TweenOne>
        </div>
      </TweenOne>);
    });
    return (
      <div {...props} className={`content-template-wrapper homeIntroduce ${props.className}-wrapper`}
        style={{height:'110vh'}}
      >
        <div>
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
          style={{marginTop:'7%',paddingBottom:'0px'}}
        >
          <TweenOne
            key="h1"
            component="h1"
            id={`${props.id}-title`}
            reverseDelay={100}
          >
            嘀友管车-让汽车租赁公司管理更简单，营销更高效
          </TweenOne>
          <TweenOne
            key="p"
            component="p"
            id={`${props.id}-titleContent`}
          >
            一步解决汽车租赁公司管理乱、推广难、人力成本高的问题
          </TweenOne>
          <QueueAnim
            key="ul"
            type="bottom"
            className={`${props.className}-contentWrapper`}
            id={`${props.id}-contentWrapper`}
          >
            <ul key="ul">
              {children}
            </ul>
          </QueueAnim>
        </OverPack>
        </div>
        <a style={{display:'block',margin:'6% auto 0px',textAlign:'center'}} href="#"><Link to="/ProductIntroductionDet">更多功能展示</Link><Icon type="double-right" /></a>
      </div>
    );
  }
}


export default Content;
