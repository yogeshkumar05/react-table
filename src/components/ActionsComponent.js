import React, {Component} from 'react';
import {getColumnsforSorting} from '../common/tableUtil';
import {filter, sort} from '../common/tableUtil';
import {getInitialData} from '../actions/tableActions';
import { connect } from "react-redux"
class ActionsComponent extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            searchStr:"",
            sortOrder:"ASC",
            sortColumn:"gender"
        }

        this.handleSearch=this.handleSearch.bind(this);
        this.handleSortColumn=this.handleSortColumn.bind(this);
        this.handleSortOrder=this.handleSortOrder.bind(this);

    }
    componentWillMount()
    {
        getInitialData();
    }
    componentWillReceiveProps(nextProps)
    {
        this.initialData=nextProps.initialData;

        // alert("iniital"+nextProps.initialData.length)
        // let data=nextProps.initialData;
        // let newData=[];
        // data.map((item, index)=>{
        //     let obj={};
        //     obj.SLNo=index+1;
        //     obj.picture=item.picture.thumbnail;
        //     obj.name={};
        //     obj.name.first=item.name.first;
        //     obj.name.last=item.name.last;
        //     obj.gender=item.gender;
        //     obj.address={};
        //     obj.address.street=item.location.street;
        //     obj.address.city=item.location.city;
        //     obj.address.state=item.location.state;
        //     obj.address.postcode=item.location.postcode;
        //     obj.email=item.email;
        //     obj.phone=item.phone;
        //     newData.push(obj);
            



        // })
        // console.log("NewData"+JSON.stringify(newData))
        
    }
    handleSearch(event)
    {
        this.setState({searchStr:event.target.value});
        filter(this.initialData, event.target.value);
    }
    handleSortColumn(event)
    {
        
        this.setState({sortColumn:event.target.value})
      sort(this.initialData, event.target.value, this.state.sortOrder);
       
    }

    handleSortOrder(event)
    {
        this.setState({sortOrder:event.target.value})
      sort(this.initialData, this.state.sortColumn, event.target.value);
    }


    render()
    {
        let obj={};
        if(this.initialData!=undefined)
        obj=this.initialData[0];
        let sortColumns=getColumnsforSorting(obj)
        return(<div className="table-actions row">
            
            <div className="search-action">
            <span>Search:</span>
                <input type="text" value={this.state.searchStr} onChange={this.handleSearch}/>
            </div>

       <div className="sort-action">
           <span>Sort:</span>
       <select onChange={this.handleSortColumn}>
        {sortColumns}
        </select>
        

       

        <select onChange={this.handleSortOrder}>
            <option>ASC</option>
            <option>DESC</option>
        </select>
        </div>
            </div>)
    }
}
export default connect(state => (
    {
        initialData: state.tableReducer.initialData
    }
))(ActionsComponent);

