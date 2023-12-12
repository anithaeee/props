import React from 'react'
import { useState } from 'react';
import{DataTable} from 'primereact/datatable';
import { Column } from 'primereact/column';
const Child = (props) => {
    const [name, setname] = useState('');
  return (
    <div className='App'>
        <DataTable value={props.griddata}>
          <Column field='name' header='Name'></Column>
          <Column field='Age' header='Age'></Column>
          <Column field='Place' header='place'></Column>
        </DataTable>
    </div>
  );
}

export default Child;