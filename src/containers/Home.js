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

// 如果只是读取数据，那么直需要这一个方法即可。（这里两个写出来只是为了方便理解）
function mapStateToProps(state){
    return {
        count: state.number.count,
        text: state.number.text
    }
}
// 同理，如果只是设置数据，那么直需要这一个方法即可。
function mapDispatchToProps(dispatch) {
    return {

    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)