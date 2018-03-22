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
            <span id={`${props.id}-img`}>
              <img width="100%" src="https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png" />
            </span>
          </TweenOne>
          <QueueAnim
            className={`${props.className}-text`}
            type={animType.queue}
            key="text"
            leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}
            id={`${props.id}-textWrapper`}
          >
            <h1 key="h1" id={`${props.id}-title`}>
              减低成本
            </h1>
            <p key="p" id={`${props.id}-content`}>
              <h3>嘀友管车免费使用</h3>
              <p>购买传统的SAAS系统，不仅贵，而且容易出现不流畅，功能不完全等状况，所以丛达租赁选择了嘀友管车这套云端储存的网页版 SAAS系统，嘀友管车把数据储存在云端，安全可靠、不用担心数据丢失，遗漏现象；嘀友管车SAAS系统无论是专业版还是智享版现在是免费使用的，其中包括了租车推广，财务管理、车辆管理等这些功能，为丛达租赁省节省数十万元的成本</p>
            </p>
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}


export default Content;
