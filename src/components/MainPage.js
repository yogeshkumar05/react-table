import React from 'react';
import Header from './Header';
import Pagination from './Pagination';
import ActionsComponent from './ActionsComponent';
import TableComponent from './TableComponent';

export default function MainPage() {
    
        return (<div>
            <Header />
            <hr />
            <ActionsComponent />
            <TableComponent />
            <Pagination />
        </div>
        );
}
