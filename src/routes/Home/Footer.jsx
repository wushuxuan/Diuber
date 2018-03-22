import React from 'react';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';

class Footer extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
  };

  static defaultProps = {
    className: 'footer1',
  };

  getLiChildren = (data, i) => {
    const links = data.contentLink.split(/\n/).filter(item => item);
    const content = data.content.split(/\n/).filter(item => item)
      .map((item, ii) => {
        const cItem = item.trim();
        const isImg = cItem.match(/\.(jpg|png|svg|bmp|jpeg)$/i);
        return (<li className={isImg ? 'icon' : ''} key={ii}>
          <a href={links[ii]} target="_blank">
            {isImg ? <img src={cItem} width="100%" /> : cItem}
          </a>
        </li>);
      });
      return (<li className={data.className} key={i} id={`${this.props.id}-block${i}`}>
        <h2>{data.title}</h2>
        <ul>
          {content}
        </ul>
      </li>);
  }

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const logoContent = { img: 'http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/aboutdiyou.png', content: '嘀友咨询热线',phoneNumber:'021-20250628' };
    const dataSource = [
      { title: '产品', content: '产品更新记录\n帮助文档\n服务条款', contentLink: '#/UpdateRecord\nhttps://help.diuber.com/\nhttps://gc.diuber.com/public/diuber/diuber_user_manual.pdf' },
      { title: '关于', content: 'FAQ\n联系我们\n加入我们', contentLink: '#\n#/ContactUs\n#/JoinUs' },
      { title: '资源', content: '用户手册\n网站地图', contentLink: 'https://gc.diuber.com/public/diuber/diuber_user_manual.pdf\nhttp://www.diuber.com/sitemap.html' },
      { title: '关注嘀友科技', content: 'http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/diuberwx.jpg\n http://le195525.oss-cn-shanghai.aliyuncs.com/Diyou/xcxerma.jpg', contentLink: '#\n#' },
    ];
    const liChildrenToRender = dataSource.map(this.getLiChildren);
    return (<OverPack
      {...props}
      playScale={isMode ? 0.5 : 0.2}
    >
      <QueueAnim type="bottom" component="ul" key="ul" leaveReverse id={`${props.id}-ul`}>
        <li key="logo" id={`${props.id}-logo`} style={{display:'flex',flexFlow:'row',marginLeft:'-10px'}}>
          <p className="logo" style={{width:'70px'}}>
            <p></p>
          </p>
          <p style={{color:'#fff'}}>
            <p>{logoContent.content}</p>
            <p style={{fontSize:'20px',fontWeight:'bold'}}>{logoContent.phoneNumber}</p>
         </p>
        </li>
        {liChildrenToRender}
      </QueueAnim>
      <TweenOne
        animation={{ y: '+=30', opacity: 0, type: 'from' }}
        key="copyright"
        className="copyright"
        id={`${props.id}-content`}
      >
        <span>
          沪ICP备14023011号-1 | DIUBER.COM　© 2017
        </span>
      </TweenOne>
    </OverPack>);
  }
}

export default Footer;
