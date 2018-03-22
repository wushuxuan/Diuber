import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import VideoPlay from 'react-sublime-video';

class Content extends React.Component {

  static defaultProps = {
    className: 'content3',
  };

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const animation = { y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' };
    const videoChildren = 'http://diuber-guanche.oss-cn-shanghai.aliyuncs.com/%E5%98%80%E5%8F%8B%E7%AE%A1%E8%BD%A6%E8%A7%86%E9%A2%91%E5%89%8D%E9%9D%A2.mp4'
    return (
      <div {...props} className={`content-template-wrapper ${props.className}-wrapper`} style={{height:'120vh'}}>
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            animation={animation}
            component="h1"
            key="h1"
            reverseDelay={300}
            id={`${props.id}-title`}
          >
            嘀友科技提供专业的服务
          </TweenOne>
          <TweenOne
            animation={{ ...animation, delay: 200 }}
            component="p"
            key="p"
            reverseDelay={200}
            id={`${props.id}-content`}
          >
            科技想象力，无限创造力
          </TweenOne>
          <TweenOne
            key="video"
            animation={{ ...animation, delay: 300 }}
            className={`${props.className}-video`}
            id={`${props.id}-video`}
          >
            {isMode ?
              (<video  controls="true" src={videoChildren} width="100%" loop />) :
              (<VideoPlay controls="true" loop src={videoChildren} width="100%" />)}
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}


export default Content;
