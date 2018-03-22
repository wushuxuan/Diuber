import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
  };

  static defaultProps = {
    className: 'content7',
  };

  getBlockChildren = (item, i) =>(
    <li key={i} id={`${this.props.id}-block${i}`} >
      <div className="icon">
        <img src={item.icon} width="100%" />
      </div>
      <h3>{item.title}</h3>
      <p>{item.content}</p>
    </li>);

  render() {
    const props = { ...this.props };
    delete props.isMode;
    const dataSource = [
      { icon: 'http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/safe1.png', title: '数据传输加密', content: '采用以安全为目标的https网站，保障信息、数据传输的安全' },
      { icon: 'http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/safe2.png', title: '多层DDoS攻击防护', content: '防护类型包括CC、SYN flood、UDP flood等所有DDoS攻击方式' },
      { icon: 'http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/safe3.png', title: '安全体检', content: '提供WEB漏洞检测、网页木马检测、端口安全检测等安全服务' },
      { icon: 'http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/safe4.png', title: '主机入侵防护', content: '提供包括密码暴力破解、网站后门检测和处理、异地登录在内的反入侵服务' },
      { icon: 'http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/safe5.png', title: 'WEB防火墙', content: '提供WEB攻击防护防火墙，能够有效拦截SQL注入，XSS跨站等类型的WEB攻击' },
    ];
    const listChildren = dataSource.map(this.getBlockChildren);
    return (
      <div
        {...props}
        className={`content-template-wrapper homeSafe ${props.className}-wrapper`}
        style={{background:'#F8F9FB'}}
      >
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from' }}
            component="h1"
            key="h1"
            reverseDelay={300}
            id={`${props.id}-title`}
          >
            我们全力捍卫 您的数据安全
          </TweenOne>
          <QueueAnim
            component="ul" type="bottom" key="block" leaveReverse
            id={`${props.id}-contentWrapper`}
          >
            {listChildren}
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}

export default Content;
