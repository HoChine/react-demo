# 新手级配置 react react-router4.0 redux fetch sass
---
## 前言

> 最近公司来了几个实习生，刚好我手头没什么要紧事，然后领导让我带他们学习react， 为下一个react项目做基础。
然后随手写了几个demo，帮助他们了解正经项目如何去构建配置项目。
现在分享出来，希望可以帮助到需要的人。 本demo 中有些目录虽然没有用，但是我还是列了出来，目的是为了展示一个正规项目的目录骨架结构。
create-react-app 模板文件我也没有归类，等了解之后，可以自己归类，加一个样式的文件夹。

## 正文
就目前的大环境而言，在开发react或vue项目的时候，应该没有几个人还直接在html直接饮用react的库文件吧，都是用的前端构建工具webpack + es6 来写项目。所以直接就推荐facebook官方出品的脚手架create-react-app来做项目。 create-react-app是最适合新手来学习使用的脚手架，全部是简单的命令。不需要像别的脚手架一样，先去clone整个项目，然后再安装依赖。
### **第一步**  （安装工具，生成项目， 启动项目）
安装create-react-app工具

    npm install -g create-react-app

生成项目

    create-react-app react-demo

生成项目之后自动会下载依赖全部，
进入项目之后，启动项目

    cd react-demo
    npm start 或者 yarn start

> *npm 和 yarn 都是包管理器, 都可以下载依赖，具体这里不做解释，详情可以自己搜索。一个项目最好用一种包管理工具，不要混用，下面都用yarn来下载依赖。不做另外说明*。

 项目启动之后打开3000端口。
 项目启动成功如下图：

![](https://images2018.cnblogs.com/blog/1090346/201804/1090346-20180427182807687-1027982066.png)
![](https://images2018.cnblogs.com/blog/1090346/201804/1090346-20180427183433912-1295964746.png)

### **第二步**  （配置react-router4.0，包含路由传参等）
1、安装依赖

    yarn add react-router-dom --save

2、新建文件、配置路由
    `src` 目录下 新建 `containers` 目录 里面放置主页面文件
    `src` 目录下 新建 `components` 目录 里面放置高复用模板文件
    在 `containers` 中新建 `Home.js`
> Home.js 代码

    import React, { Component } from 'react';
    class Home extends Component {
        render() {
            return (
                <div>
                    Home
                </div>
            );
        }
    }

    export default Home;
在 `containers` 中新建 `List.js`
> List.js 代码

    import React, { Component } from 'react';
    class List extends Component {
        render() {
            return (
                <div>
                    List
                </div>
            );
        }
    }

    export default List;
在 `containers` 中新建 `Mine.js`
> Mine.js 代码 (二级路由，路由传参示例)

    import React, {Component} from 'react';
    import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
    import Mine1 from './Mine1'
    import Mine2 from './Mine2'

    class Mine extends Component {
        constructor(props) {
            super(props);
            this.state = {
                param: ''
            };
        }
        changeParam(event) {
            this.setState({
                param: event.target.value
            })
        }
        render() {
            return (
                <Router>
                    <div>
                        Mine
                        传参示例：<input type="text" placeholder='请输入要传递到mine2的参数' value={this.state.param} onChange={this.changeParam.bind(this)}/>
                        <div className="mine-nav">
                            {/*编写导航*/}
                            <ul>
                                <li><Link to={`${this.props.match.url}/mine1`}>Mine1</Link></li>
                                <li><Link to={`${this.props.match.url}/mine2/${this.state.param? this.state.param : "default-param"}`}>Mine2</Link></li>
                                {/*传参示例，如果没有参数，传默认参数*/}
                            </ul>
                            {/*路由匹配*/}
                            <div>
                                <Route exact path={`${this.props.match.url}/mine1`} component={Mine1}/>
                                <Route path={`${this.props.match.url}/mine2/:param`} component={Mine2}/>
                            </div>
                        </div>
                    </div>
                </Router>
            );
        }
    }

    export default Mine;
在 `containers` 中新建 `Mine1.js`
> Mine1.js 代码

    import React, { Component } from 'react';
    class Mine1 extends Component {
        render() {
            return (
                <div>
                    Mine1
                </div>
            );
        }
    }

    export default Mine1;
在 `containers` 中新建 `Mine2.js`
> Mine2.js 代码 （路由传参示例）

    import React, { Component } from 'react';
    class Mine2 extends Component {
        render() {
            return (
                <div>
                    2222222222222 传递的参数：{this.props.match.params.param}
                </div>
            );
        }
    }

    export default Mine2;
> 修改入口App.js 文件，修改为如下所示：

    import React, { Component } from 'react';
    import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
    import List from './containers/List.js'
    import Home from './containers/Home.js'
    import Mine from './containers/Mine.js'
    import './App.css'
    import logo from './logo.svg'

    class App extends Component {
        render() {
            return (
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h2 className='App-title'>Welcome to React Plan</h2>
                    </div>
                    <div className="App-content">
                        {/*路由配置*/}
                        <Router>
                            <div className="content-box">
                                {/*编写导航*/}
                                <ul className="nav">
                                    <li><Link to="/">首页</Link></li>
                                    <li><Link to="/list">列表页</Link></li>
                                    <li><Link to="/mine/mine1">我的页面二级路由</Link></li>
                                    {/*link指向二级路由的默认页面*/}
                                </ul>
                                {/*路由匹配*/}
                                <div className="content">
                                    <Route exact path="/" component={Home}/>
                                    <Route path="/list" component={List}/>
                                    <Route path="/mine" component={Mine}/>
                                </div>
                            </div>
                        </Router>
                    </div>
                </div>
            );
        }
    }

    export default App

> 修改App.css 文件，让稍微有一点样式：

    .App {
        text-align: center;
    }
    .App-logo {
        animation: App-logo-spin infinite 20s linear;
        height: 80px;
    }
    .App-header {
        background-color: #222;
        height: 150px;
        padding: 20px;
        color: white;
    }
    .App-title {
        font-size: 1.5em;
    }
    .App-intro {
        font-size: large;
    }
    @keyframes App-logo-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    /*下面是新添加的样式*/
    * {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .content-box{
        overflow: hidden;
    }
    .nav {
        padding: 20px;
        float: left;
        width: 160px;
        background-color: #fcc;
    }
    .nav li{
        line-height: 30px;
    }
    .content{
        padding: 20px 0 0 200px;
        background-color: #ccf;
        height: 110px;
    }
    .mine-nav{
        background-color: #cfc;
        margin-top: 20px;
        height: 70px;
    }
    .mine-nav ul{
        overflow: hidden;
    }
    .mine-nav ul li{
        float: left;
        width: 50%;
    }
    .mine-nav>div{
        margin-top: 20px;
    }

大功告成，点一点试试吧。配置完毕，页面如下图：

![](https://images2018.cnblogs.com/blog/1090346/201804/1090346-20180427183504822-2002315087.png)

### **第三步**  （配置redux）
redux具体是什么，这里就不多提，想详细了解最好看一下阮一峰老师的博客 [Redux 入门教程][1] 来了解什么是redux, 或者你的项目到底需不需要用redux。这里只讲如何去配置redux.
1、安装依赖

    yarn add redux react-redux --save
2、新建文件， 配置redux
    `src` 目录下 新建 `store` 目录里面放置 store配置文件
    `src` 目录下 新建 `reducers` 目录里面放置 规则性文件
    `src` 目录下 新建 `constants` 目录里面放置 数据
    `src` 目录下 新建 `actions` 目录里面放置 触发更新文件
    在 `store` 中新建 `configStore.js`

> store > configStore.js 文件

    import { createStore } from 'redux'
    //引入规则文件
    import rootReducer from '../reducers/index.js'
    export default function configStore(initState){
            // 创建store
            const store = createStore(
                rootReducer,
                initState,
                // 如果安装了redux插件可按照版本打开下面的注释
                // window.devToolsExtension ? window.devToolsExtension() : undefined
                // window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : undefined
            )
            return store
    }

在 `reducers` 中新建 `index.js`
在 `reducers` 中新建 `number.js`

> reducers > index.js 文件

    // 规则性文件
    import { combineReducers } from 'redux'
    import number from './number'
    // 如果有多个规则，则引入多个文件
    //import XXXX from './XXXX'

    // 创建规则
    export default combineReducers({
        // XXXX,
        number
    })
> reducers > number.js 文件

    import * as actionTypes from '../constants/number.js'
    import { combineReducers } from 'redux'

    const text =  function (state = actionTypes.TEXT, action){
        switch(action.type) {
            case actionTypes.TEXT :
                return action.data.text
            default:
                return state
        }
    }

    const count =  function (state = actionTypes.COUNT, action){
        switch(action.type) {
            case actionTypes.COUNT :
                return action.data.count
            default:
                return state
        }
    }

    export default combineReducers({
        text,
        count
    })
在 `constants` 中新建 `number.js`

> constants > number.js 文件

    export const COUNT = 100;
    export const TEXT = 'number大类下的数据';

修改 `containers` 中的 ` Home.js`   (稍微把home组件改成使用redux的形式)

> containers > Home.js 文件

    import React, { Component } from 'react';
    import {connect} from 'react-redux';
    class Home extends Component {
        render() {
            return (
                <div>
                    Home <br/>
                    {this.props.text} ==> {this.props.count}
                </div>
            );
        }
    }

    // 如果只是读取数据，那么只需要这一个方法即可。（这里两个写出来只是为了方便理解）
    function mapStateToProps(state){
        return {
            count: state.number.count,
            text: state.number.text
        }
    }
    // 同理，如果只是设置数据，那么只需要这一个方法即可。
    function mapDispatchToProps(dispatch) {
        return {

        }
    }
    export default connect(
        mapStateToProps,
        mapDispatchToProps
    )(Home)

做到这里，应该已经实现了第一步，可以读取数据了。 如图：

![](https://images2018.cnblogs.com/blog/1090346/201804/1090346-20180427182927529-1146240635.png)

读取数据实现了，接下来肯定要实现设置数据。

在 `containers` 中的新建 `TestRedux.js`
> containers > TestRedux.js 文件

    import React, { Component } from 'react';
    import {bindActionCreators} from 'redux'
    import {connect} from 'react-redux'
    import * as handlerNumberActions from '../actions/number.js'

    class TestRedux extends Component {
        textChange(event){
            this.props.handlerNumberActions.changeText({
                text: event.target.value
            })
        }
        numberAdd(){
            this.props.handlerNumberActions.addNumber({
                count: this.props.count
            })
        }
        numberSubtract(){
            this.props.handlerNumberActions.subtractNumber({
                count: this.props.count
            })
        }


        render() {
            return (
                <div style={{height:'100px',background: '#ffc',padding: '10px'}}>
                    <ul>
                        <li>修改redux数据</li>
                        <li>修改文本： <input type="text" style={{padding: '5px 10px'}} value={this.props.text} onChange={this.textChange.bind(this)} /></li>
                        <li>操作数值：
                            <button style={{padding: '5px 10px'}} onClick={this.numberAdd.bind(this)}>+</button>
                            -------------------
                            <button style={{padding: '5px 10px'}} onClick={this.numberSubtract.bind(this)}>-</button>
                        </li>
                    </ul>
                </div>
            );
        }
    }

    function mapStateToProps(state){
        return {
            count: state.number.count,
            text: state.number.text
        }
    }
    function mapDispatchToProps(dispatch) {
        return {
            handlerNumberActions: bindActionCreators(handlerNumberActions, dispatch)
        }
    }
    export default connect(
        mapStateToProps,
        mapDispatchToProps
    )(TestRedux)

在 `actions` 中的新建 `number.js`
> actions > number.js 文件

    import * as actionTypes from '../constants/number.js'

    export function addNumber(data){
        data.count ++;
        return {
            type: actionTypes.COUNT,
            data
        }
    }
    export function subtractNumber(data){
        data.count --;
        return {
            type: actionTypes.COUNT,
            data
        }
    }

    export function changeText(data){
        return {
            type: actionTypes.TEXT,
            data
        }
    }

至此，完整的redux就彻底的配置完毕了。点一点，或者修改一下文本试试吧。
目录结构和效果如下图：

![](https://images2018.cnblogs.com/blog/1090346/201804/1090346-20180427182944885-1051419411.png)
![](https://images2018.cnblogs.com/blog/1090346/201804/1090346-20180427182955902-376978874.png)

### **第四步**  （配置fetch）
fetch是什么呢？fetch其实是 XMLHttpRequest 的替代品，比起 XMLHttpRequest 这种粗糙的东西，fetch显然看起来精致多了，最棒的是fetch 是基于 Promise 的，让我们摆脱了地狱回调的噩梦。下面我们就把fetch 简单封装一下。方便在react中使用。
1、安装依赖

    yarn add whatwg-fetch es6-promise --save
2、新建文件 封装 fetch 方法

在 `src` 目录下的新建 `fetch` 目录， 在 `fetch` 文件下新建 `index.js ` 封装 fetch

> fetch > index.js 文件

    import 'whatwg-fetch'
    import 'es6-promise'

    export function get(url) {
        let result = fetch(url, {
            credentials: 'include',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json, text/plain, */*'
            },
            // 设置允许cors跨域
            mode: 'cors'
        });
        return result;
    }

    // 将对象拼接成 key1=val1&key2=val2&key3=val3 的字符串形式
    function obj2params(obj) {
        let result = '';
        let item;
        for (item in obj) {
            result += '&' + item + '=' + encodeURIComponent(obj[item]);
        }

        if (result) {
            result = result.slice(1);
        }

        return result;
    }

    // 发送 post 请求
    export function post(url, paramsObj) {
        let result = fetch(url, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: obj2params(paramsObj)
        });

        return result;
    }

在`public` 目录下 新建 `mock` 目录 放置 模拟数据。
在`mock` 目录下 新建 `list.json` 文件。

> public > mock > list.json

    {
        "errorNo": 0,
        "message": "success",
        "data": [
            {
                "name": "Kelli",
                "age": 12
            },
            {
                "name": "Vivien",
                "age": 17
            },
            {
                "name": "Jacklyn",
                "age": 19
            },
            {
                "name": "Bobbie",
                "age": 32
            }
        ]
    }

修改 `src` > `containers` 下的 `List.js` 文件。

> src > containers > List.js

    import React, {Component} from 'react';
    import {get} from '../fetch/index';

    class List extends Component {
        constructor(props) {
            super(props);
            this.state = {}
        }
        componentWillMount() {
            this.getListData()
        }
        getListData() {
            get("./mock/list.json").then((res) => {
                return res.json();
            }).then((json)=>{
                this.setState({
                    dataList: json.data
                })
            }).catch(function (err) {
                console.log(err);
            })
        }

        render() {
            let _this = this;
            function createListDom() {
                return {
                    __html: _this.state.dataList && _this.state.dataList.map( item => {
                        return '<li>name: '+ item.name + ',age: '+ item.age +'</li>'
                    }).join('')
                };
            }
            return (
                <div>
                    List <br/>
                    <ul dangerouslySetInnerHTML={createListDom()} />
                </div>
            );
        }
    }

    export default List;

这是只是简单的测试了get 方法，至于post 请求，有兴趣的大家可以私下去测试。
配置完成如下图：

![](https://images2018.cnblogs.com/blog/1090346/201804/1090346-20180427183010239-829628734.png)

### **第五步**  （配置sass）
在高版本的create-react-app中去掉了支持sass的功能，如果我们还想用只能自己配置，需要改动配置文件。
1、安装依赖

    yarn add node-sass sass-loader --save-dev
2、修改配置

在`node_modules/react-scripts/config` 下找到 `webpack.config.dev.js` 文件，
先在 `exclude` 中按照规律在后面添加 `/.scss$/` ,
然后再在`loaders`中配置 sass文件规则。

    {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
    }

改两个地方的配置之后，sass就配置好了，如图：

![](https://images2018.cnblogs.com/blog/1090346/201804/1090346-20180427183024238-510846644.png)

> *`webpack.config.dev.js` 是开发环境的配置文件，如果想在生产环境也生效，那么在 `webpack.config.prod.js`* 做同样配置的修改。


到这里，所有的配置就全部完成了。项目亲测可以运行。

作者 [HoChine][2]
2018 年 04月 27日
项目演示： [http://hochine.cn/demo/react-demo][3]
GitHub地址： [https://github.com/HoChine/react-demo][4]


  [1]: http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html
  [2]: https://github.com/HoChine
  [3]: http://hochine.cn/demo/react-demo
  [4]: https://github.com/HoChine/react-demo