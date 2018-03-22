import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/Home';
import ProductIntroduction from './routes/ProductIntroduction';
import ProductIntroductionDet from './routes/ProductIntroductionDet';
import ProductIntroductionInt from './routes/ProductIntroductionInt';
import ProductIntroductionSol from './routes/ProductIntroductionSol';
import ProductPrice from './routes/ProductPrice';
import AboutUs from "./routes/AboutUs";
import JoinUs from "./routes/JoinUs";
import ContactUs from "./routes/ContactUs";
import ProductCase from "./routes/ProductCase";
import UpdateRecord from "./routes/UpdateRecord";
import Community from "./routes/Community";
import Articles from "./routes/Articles";
import DiuberVideo from "./routes/DiuberVideo";
import GPS from "./routes/GPS";


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/ProductIntroduction" component={ProductIntroduction} />
        <Route path="/ProductIntroductionDet" component={ProductIntroductionDet} />
        <Route path="/ProductIntroductionInt" component={ProductIntroductionInt} />
        <Route path="/ProductIntroductionSol" component={ProductIntroductionSol} />
        <Route path="/ProductPrice" component={ProductPrice} />
        <Route path="/ProductCase" component={ProductCase} />
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/JoinUs" component={JoinUs} />
        <Route path="/ContactUs" component={ContactUs} />
        <Route path="/UpdateRecord" component={UpdateRecord}/>
        <Route path="/Community" component={Community}/>
        <Route path="/GPS" component={GPS}/>
        <Route path="/Articles" component={Articles}/>
        <Route path="/DiuberVideo" component={DiuberVideo}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
