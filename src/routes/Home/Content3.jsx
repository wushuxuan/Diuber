import React from 'react';
import PropTypes from 'prop-types';
import { Icon} from 'antd';
import {HashRouter as Router, Route, Link,Switch  } from 'react-router-dom';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
  };

  static defaultProps = {
    className: 'content4',
  };

  getChildrenToRender = (item, i) => {
    const id = `block${i}`;
    return (<li
      key={i}
      id={`${this.props.id}-${id}`}
    >
      <div className="content-wrapper">
        <span><img src={item.img} height="100%" /></span>
        <p>{item.content}</p>
      </div>
    </li>);
  }

  getEnterAnim = (e, isMode) => {
    const index = e.index;
    const delay = isMode ? index * 50 + 200 : index % 4 * 100 + Math.floor(index / 4) * 100 + 300;
    return { y: '+=30', opacity: 0, type: 'from', delay };
  };

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const dataArray = [
      { img: 'http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/congdalogo.png', content: '丛达租赁' },
      { img: 'http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/hz1%20-%20%E5%89%AF%E6%9C%AC%20%282%29.png', content: '骐熙新能源' },
      { img: 'http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/hz8%20-%20%E5%89%AF%E6%9C%AC%20-%20%E5%89%AF%E6%9C%AC%20-%20%E5%89%AF%E6%9C%AC.png', content: '申海汽车租赁' },
      { img: 'http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/pinchi.png', content: '品驰汽车租赁' },
      { img: 'http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/hz4%20-%20%E5%89%AF%E6%9C%AC%20%282%29.png', content: '晋鑫晋利汽车租赁' },
      { img: 'http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/hz14.png', content: '车漫行' },
      { img: 'http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/hz6%20-%20%E5%89%AF%E6%9C%AC%20%283%29.png', content: '妙玛汽车租赁' },
      { img: 'http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/%E6%9C%AA%E6%A0%87%E9%A2%98-1.png', content: '星烨汽车租赁' },
    ];
    const childrenToRender = dataArray.map(this.getChildrenToRender);
    return (
      <div
        {...props}
        className="content-template-wrapper content4-wrapper homeCompany"
      >
        <OverPack
          className={`content-template ${props.className}`}
        >
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' }}
            component="h1"
            key="h1"
            reverseDelay={300}
            id={`${props.id}-title`}
          >
            超过 900家汽车租赁公司，正在使用嘀友管车系统
          </TweenOne>
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from', delay: 200, ease: 'easeOutQuad' }}
            component="p"
            key="p"
            reverseDelay={200}
            id={`${props.id}-content`}
          >
            <a href="#"><Link to="/ProductCase">查看更多案例</Link><Icon type="double-right" /></a>
          </TweenOne>
          <TweenOneGroup
            className={`${props.className}-img-wrapper`}
            component="ul"
            key="ul"
            enter={(e) => {
              return this.getEnterAnim(e, isMode)
            }}
            leave={{ y: '+=30', opacity: 0, ease: 'easeOutQuad' }}
            id={`${props.id}-ul`}
          >
            {childrenToRender}
          </TweenOneGroup>
        </OverPack>
      </div>
    );
  }
}


export default Content;
