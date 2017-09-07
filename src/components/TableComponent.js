import React, { Component } from 'react';
import { DropdownButton, MenuItem, Table, Modal, OverlayTrigger, Button, ButtonToolbar } from 'react-bootstrap';
import { fetchStreamingData } from "../actions/tableActions";
import { connect } from "react-redux"

class TableComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: []
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.data != undefined) {
            this.setState({ tableData: nextProps.data })
        }
    }

    render() {
        let tableHead = [];
        let subHead = [];
        let tableBody = [];
        let entry = this.state.tableData[0];
        let columns = [];
        let sortColumns = [];
        let subcolumns = [];

        if (entry != undefined)
            for (let name in entry) {

                if (typeof entry[name] == 'object') {
                    let count = 0;
                    for (let i in entry[name]) {
                        count++;
                        subcolumns.push(<th colSpan={1}>{i}</th>)
                    }

                    tableHead.push(<th colSpan={count}>{name}</th>)

                }
                else {
                    tableHead.push(<th className="no-border-tcell" rowSpan={2}>{name}</th>)
                }


                columns.push(name);


            }

        subHead.push(<tr>{subcolumns}</tr>)

        sortColumns = columns.map((item, index) => <option key={index} name={item}>{item}</option>)
        this.state.tableData.map((item, index) => {
            let rowEntries = [];
            for (let name in item) {
                if (typeof item[name] == 'object') {
                    let value = "";


                    for (let i in item[name]) {
                        rowEntries.push(<td>{item[name][i]}</td>)
                    }
                }


                else {
                    if (name == "picture") {
                        rowEntries.push(<td key={index}><img alt="pic" src={item[name]} /></td>)

                    }
                    else
                        rowEntries.push(<td>{item[name]}</td>)
                }
            }
            tableBody.push(<tr key={index}>{rowEntries}</tr>)
        })


        return (<div className="table-container">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {tableHead}
                    </tr>
                    {subHead}
                </thead>

                <tbody>
                    {tableBody}
                </tbody>

            </Table>
        </div>)
    }
}

export default connect(state => (
    {
        data: state.tableReducer.data,
    }
))(TableComponent);
