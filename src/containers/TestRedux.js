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

//export default Home