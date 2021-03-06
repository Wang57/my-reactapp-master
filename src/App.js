import React from 'react';
import { Switch, Route, HashRouter,BrowserRouter} from 'react-router-dom'
import './App.scss';
import Login from './views/login';
import Register from './views/register';
import Console from "./views/concole";
import UserManage from './views/usermanage';
import MatlabPub from './views/matlabpub';
import PythonPub from './views/pythonpub';
import  CombinedCall from "./views/combinedcall";
import  DataInfo  from "./views/datainfo";
import  Sinfo  from "./views/sinfo";
import  SingleCall  from "./views/singlecall";
import UserInfo from "./views/userinfo";
import Smanage from "./views/smanage";
import DatadeScription from "./views/datadescription";
import  Srun  from "./views/srun";
import  Picturemanage  from "./views/picturemanage";
import  Formmanage  from "./views/formmanage";
class App extends React.Component{
  constructor(){
    super();
    this.state = {};
  }

  render(){
    return(
        <BrowserRouter>
          <Switch>
            <Route component={Login} exact path="/"/>
            <Route component={Register} path="/register"/> 
            <Route component={Console} path="/console"/>
            <Route component={UserManage} path="/usermanage"/>
            <Route component={MatlabPub} path="/matlabpub"/>
            <Route component={PythonPub} path="/pythonpub"/>
            <Route component={CombinedCall} path="/combinedcall"/>
            <Route component={DataInfo} path="/datainfo"/>
            <Route component={Sinfo} path="/sinfo"/>
            <Route component={SingleCall} path="/singlecall"/>
            <Route component={UserInfo} path="/userinfo"/>
            <Route component={Smanage} path="/smanage"/>
            <Route component={DatadeScription} path="/datadescription"/>
            <Route component={Srun} path="/srun"/>
            <Route component={Picturemanage} path="/picturemanage"/>
            <Route component={Formmanage} path="/formmanage"/>
          </Switch> 
          {/* HashRouter用URL中的hash部分创建路由，URL中会附带# 不需要处理
          BrowserRouter的URL指向真实的URL地址，上线后需要后台处理URL指向
          switch路径相同的情况下只匹配第一个
          exact精准匹配 */}
        </BrowserRouter>
    );
  }
}

export default App;
