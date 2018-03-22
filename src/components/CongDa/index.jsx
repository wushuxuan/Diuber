import React from 'react';
import ReactDOM from 'react-dom';
import enquire from 'enquire.js';
import { scrollScreen } from 'rc-scroll-anim';

import Content0 from './Content0';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';

import './less/antMotion_style.less';



export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: !location.port,
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
  }

  render() {
    const children = [
      //<Content0 id="content_7_0" key="content_7_0" isMode={this.state.isMode}/>,
      //<Content1 id="content_2_0" key="content_2_0" isMode={this.state.isMode}/>,
      //<Content2  id="content_3_0" key="content_3_0" isMode={this.state.isMode}/>,
      //<Content3 id="content_2_1" key="content_2_1" isMode={this.state.isMode}/>,
    ];
    return (
      <div className="templates-wrapper">
        {children}
      </div>
    );
  }
}
