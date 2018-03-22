import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content extends React.Component {

  static defaultProps = {
    className: 'content1',
  };

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const animType = {
      queue: isMode ? 'bottom' : 'left',
      one: isMode ? { y: '+=30', opacity: 0, type: 'from' }
        : { x: '+=30', opacity: 0, type: 'from' },
    };
    return (
      <div
        {...props}
        className={`content-template-wrapper content-half-wrapper ${props.className}-wrapper`}
      >
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <QueueAnim
            type={animType.queue}
            className={`${props.className}-text`}
            key="text"
            leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}
            id={`${props.id}-textWrapper`}
          >
            <h1 key="h1" id={`${props.id}-title`}>
              提升利润
            </h1>
            <p key="p" id={`${props.id}-content`}>
              <h3 style={{fontWeight:'bold',marginTop:'20px'}}>
                微信小程序推广
              </h3>
              <p  style={{width:'100%',marginTop:'5px'}}>
                对于汽车租赁公司而言，要想有收入，就必须把车租出去，如何能保证自己的客户源源不断呢？丛达租赁借助于嘀友旗下的微信小程序（嘀友租车），将公司旗下即将要闲置待租的车辆发布到嘀友租车平台上（后台配置公司信息即可获得专属的微信小程序）上架闲置车源，获取订单通知、求租通知，减少了车辆闲置的部分风险
              </p>
            </p>
          </QueueAnim>
          <TweenOne
            key="img"
            animation={animType.one}
            className={`${props.className}-img`}
            id={`${props.id}-imgWrapper`}
            resetStyleBool
          >
            <span id={`${props.id}-img`} style={{width:'180px',height:'180px',padding:'10px',lineHeight:'0vh',}}>
              <img style={{width:'160px',height:'160px'}} src="http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/congdaxcx.png" />
              <div style={{color:'#999'}}>
                <p style={{textAlign:'center',marginTop:'30px'}}>微信扫描二维码</p>
                <p  style={{textAlign:'center',marginTop:'20px'}}>体验丛达租车小程序</p>
              </div>
            </span>
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}

export default Content;
