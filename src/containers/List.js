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