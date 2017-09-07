import React from 'react';
import {Pagination} from 'react-bootstrap';
import {fetchStreamingData} from '../actions/tableActions';
import { connect } from "react-redux"

export default class PaginationComponent extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            activePage: 1
        }

        this.handleSelect=this.handleSelect.bind(this);
    }

    componentWillMount()
    {
        fetchStreamingData(this.state.activePage);
    }

    handleSelect(eventKey) {
        this.setState({
          activePage: eventKey
        });
        fetchStreamingData(eventKey);
      }

      render() {
        return (<div className="pagination">
          <Pagination
            prev
            next
            first
            last
            ellipsis
            boundaryLinks
            items={5}
            maxButtons={5}
            activePage={this.state.activePage}
            onSelect={this.handleSelect} />
            </div>
        );
      }

}
