import React, { PropTypes } from 'react';
import { Button, Icon,Popover } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import BannerAnim, { Element } from 'rc-banner-anim';
import 'rc-banner-anim/assets/index.css';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import $ from 'jquery';

const BgElement = Element.BgElement;
class Banner extends React.Component {
  homeButton=(target,event)=>{
    console.log(target)
    if(target === 'buttonBlock0'){
      window.location.href="https://gc.diuber.com/diuber/index/index.html"
    }
    if(target === 'buttonBlock1'){
      window.location.href="#/ProductIntroductionSol"
    }
    if(target === 'buttonBlock2'){
      window.location.href="https://gc.diuber.com/diuber/index/index.html"
    }
    if(target === 'buttonBlock4') {
      window.location.href="#/GPS"
    }
  }
  render() {
    const props = { ...this.props };
    delete props.isMode;
    const childrenData = [
      {
        title: '细节优化 提升效率',
        content: '只需一键、百辆车百秒中轻松查询违章记录\n' +
        '拍照验车、车辆GPS绑定查询、司机失信查询等35项细节优化',
        button: '演示体验',
        itemid:'1',
      },
      {
        title: '车管智能助手',
        content: '一步解决租金催缴、查违章等繁杂事务\n' +
        '代办事项提醒，随时随地办理租车、退车、验车',
        button: '视频演示',
        itemid:'1',
      },
      {
        title: '高效管好每一辆车',
        content: '老板、车管、财务、销售工作台让每一个角色轻松处理管理事务',
        button: '演示体验',
        itemid:'1',
      },
      {
        title: '微信小程序 营销利器',
        content: '一键绑定自有公众号 / 小程序无需开发 / 在线租车预定平台',
        button: '扫码体验',
        itemid:'0',
      },
      {
        title: '全方位智能GPS',
        content: '跟踪车辆公里数 、 按里程提醒保养、离线预警等退车自动计算超公里费',
        button: '了解详情',
        itemid:'1',
      }
    ];
    const childrenToRender = childrenData.map((item, i) => {
      const title = item.title;
      const content = item.content;
      const button = item.button;
      const itemid = item.itemid;
      return (<Element
        key={i}
        prefixCls="banner-user-elem"
        id={i}
      >
        <BgElement
          className={`bg bg${i}`}
          key="bg"
        />
        <QueueAnim
          type={['bottom', 'top']} delay={200}
          className={`${props.className}-title`}
          key="text"
          id={`${props.id}-wrapperBlock${i}`}
        >
          <span
            className="logo"
            key="logo"
            id={`${props.id}-titleBlock${i}`}
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          />
          <p
            key="content"
            style={{fontSize:'18px',lineHeight:'35px'}}
            id={`${props.id}-contentBlock${i}`}
          >
            {content}
          </p>
          {
            itemid=='1'
            &&
            <Button
              type="ghost"
              id={`buttonBlock${i}`}
              onClick={this.homeButton.bind(this,`buttonBlock${i}`)}
            >
              {button}
            </Button>
          }
          {
            itemid=='0'
            &&
            <Popover placement="rightTop" content={<img style={{width:'150px',height:'150px'}} src="http://www.diuber.com/images/dygc/banner5xcx.png"/>} trigger="click">
            <Button
              type="ghost"
              id={`buttonBlock${i}`}
              onClick={this.homeButton.bind(this,`buttonBlock${i}`)}
            >
              {button}
            </Button>
            </Popover>
          }

        </QueueAnim>
      </Element>);
    });
    return (
      <OverPack
        {...props}
      >
        <TweenOneGroup
          key="banner"
          enter={{ opacity: 0, type: 'from' }}
          leave={{ opacity: 0 }}
          component=""
        >
          <div className={`${props.className}-wrapper`}>
            <BannerAnim
              key="banner"
              autoPlay
            >
              {childrenToRender}
            </BannerAnim>
          </div>
        </TweenOneGroup>
      </OverPack>
    );
  }
}

Banner.propTypes = {
  className: PropTypes.string,
};

Banner.defaultProps = {
  className: 'banner1',
};

export default Banner;

