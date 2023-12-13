import React from 'react'
import { useState } from 'react';
import{DataTable} from 'primereact/datatable';
import { Column } from 'primereact/column';
const Child = (props) => {
    const [name, setname] = useState('');
    const column = [
      {field: 'name', header:'Name'},
      {field: 'Age', header:'Age'},
      {field: 'Place', header:'Place'},
    ];
  return (
    <div>
        <DataTable value={props.griddata} showGridlines tableStyle={{ minWidth: '50rem' }}>
          {column.map((col, i)=>{
            return(
            <Column key={col.field} field={col.field} header={col.header}></Column>
          )})}
        </DataTable>
    </div>
  );
}

export default Child;