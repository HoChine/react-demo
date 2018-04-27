import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as theaterIdActions from './actions/theaterid.js'
class test2 extends Component {
    
    add() {
        console.log(1);
    }
    
    render() {
        return (
            <div className="App">
                <button onClick={this.add}> - </button>
            </div>
        );
    }
}
// function mapStateToProps(state){
//     return {
//
//     }
// }
// function mapDispatchToProps(dispatch) {
//     return {
//         theaterIdActions: bindActionCreators(theaterIdActions, dispatch)
//     }
// }
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(test2)
export default test2