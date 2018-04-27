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