import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content extends React.Component {
  static defaultProps = {
    className: 'content0',
  };

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const animType = {
      queue: isMode ? 'bottom' : 'right',
      one: isMode ? { y: '+=30', opacity: 0, type: 'from' }
        : { x: '-=30', opacity: 0, type: 'from' },
    }
    return (
      <div
        {...props}
        className={`content-template-wrapper content-half-wrapper ${props.className}-wrapper`}
      >
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            key="img"
            animation={animType.one}
            className={`${props.className}-img`}
            id={`${props.id}-imgWrapper`}
            resetStyleBool
          >
            <span id={`${props.id}-img`} style={{width:'100%',right:'0',overflow:'hidden'}}>
              <img style={{width:'78%',height:'auto',float:'right'}} src="http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/111.png" />
            </span>
          </TweenOne>
          <QueueAnim
            className={`${props.className}-text`}
            type={animType.queue}
            key="text"
            leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}
            id={`${props.id}-textWrapper`}
            style={{height:'70%'}}
          >
            <h1 key="h1" id={`${props.id}-title`}>
              提升效率
            </h1>
            <p style={{width:'100%'}} key="p" id={`${props.id}-content`}>
              <h3 style={{fontWeight:'bold',marginTop:'20px'}}>嘀友管车系统设置有车管、驾管、财务、销售等角色分工管理</h3>
                <p  style={{width:'100%',marginTop:'5px'}}>
                  每一个角色都会有相应的员工账号（由管理员设置），相应的工作台，让专门的人做专门的事，提高了个人的效率；每个人专属一个模块，完全在不同的工作台上进行办公，告别传统的表格办公模式，无论是记录数据还是查询数据，只需敲几下键盘点几次鼠标就可以轻松工作，高效完成
                </p>
              <h3 style={{fontWeight:'bold',marginTop:'20px'}}>批量查违章，自动识别</h3>
              <p  style={{width:'100%',marginTop:'5px'}}>
                在没有使用嘀友管车之前，丛达租赁的车管都是一辆一辆进行查询，嘀友管车系统上的一键查违章，能为车管节省90%以上的时间去处理其他的工作；证件自动识别，告别传统模式，只需要上传相关证件，系统自动识别证件信息，避免了出错问题的发生，同样会节省了时间
              </p>
              <h3 style={{fontWeight:'bold',marginTop:'20px'}}>每日有待办事务提醒，自动催缴</h3>
              <p  style={{width:'100%',marginTop:'5px'}}>
                每日首次登陆都会提示要今天办理的事情，提醒公司员工今天需要处理哪些事务；</p>
            </p>
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}


export default Content;
