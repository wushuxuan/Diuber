import React from 'react';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
  };

  static defaultProps = {
    className: 'content5',
  };

  getBlockChildren = (item, i) =>
    (<li
      key={i}
      id={`${this.props.id}-block${i}`}
    >
      <span>
        <img src={item.img} width="100%" />
      </span>
      <h2>{item.title}</h2>
      <p>{item.content}</p>
    </li>);


  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    const dataSource = [
      { img: 'http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/%E5%8A%A0%E9%80%9F%E6%8F%90%E5%8D%87.png', title: '提升效率', content: '嘀友管车系统设置有车管、驾管、财务、销售等角色分工管理；每日有待办事务提醒，自动催缴；批量查违章，自动识别；' },
      { img: 'http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/%E6%94%B6%E7%9B%8A%E7%BB%9F%E8%AE%A1.png', title: '提升利润', content: '丛达租赁借助于嘀友旗下的微信小程序（嘀友租车），将公司旗下即将要闲置待租的车辆发布到嘀友租车平台上（后台配置公司信息即可获得专属的微信小程序）上架闲置车源，获取订单通知、求租通知，减少了车辆闲置的部分风险；' },
      { img: 'http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/%E7%BD%91%E7%BB%9C.png', title: '减低成本', content: '嘀友管车把数据储存在云端，安全可靠、不用担心数据丢失，遗漏现象；嘀友管车SAAS系统无论是专业版还是智享版现在是免费使用的，其中包括了租车推广，财务管理、车辆管理等这些功能，为丛达租赁省节省数十万元的成本' },
    ];
    const ulChildren = dataSource.map(this.getBlockChildren);
    delete props.isMode;
    const queue = isMode ? 'bottom' : 'left';
    const imgAnim = isMode ? { y: 30, opacity: 0, delay: 400, type: 'from', ease: 'easeOutQuad' }
      : { x: 30, opacity: 0, type: 'from', ease: 'easeOutQuad' };
    return (
      <div {...props} className="content-template-wrapper content5-wrapper">
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <QueueAnim
            className={`${props.className}-text`}
            key="text"
            type={queue}
            leaveReverse
            ease={['easeOutQuad', 'easeInQuad']}
            id={`${props.id}-textWrapper`}
          >
            <h1
              key="h1"
              id={`${props.id}-title`}
            >
              丛达携手嘀友：汽车租赁公司车辆无库存，租车率达100%
            </h1>
            <p
              key="p"
              id={`${props.id}-content`}
            >
              背景：丛达汽车租赁（上海）有限公司是一家通过行业认证的汽车租赁公司，成立于2015年4月，2年多的光阴丛达租赁已成为上海汽车租赁行业的知名品牌(滴滴十佳合作租赁公司)
            </p>
            <QueueAnim
              component="ul"
              key="ul" type={queue}
              id={`${props.id}-ul`}
              ease="easeOutQuad"
            >
              {ulChildren}
            </QueueAnim>
          </QueueAnim>
          <TweenOne
            className={`${props.className}-img`}
            key="img"
            animation={imgAnim}
            id={`${props.id}-img`}
            resetStyleBool
          >
            <img width="100%" src="http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/congda_1.jpg" />
            <img width="100%" src="http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/congda_3.jpg" />
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}


export default Content;
