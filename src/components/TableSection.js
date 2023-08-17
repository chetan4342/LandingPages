import React from 'react';
import { Table } from 'antd';



const TableSection = ({columns,send}) => {  
  return (
    <div>
  
      <Table
        columns={columns}
        dataSource={send}
        pagination={{defaultPageSize:"2"}}
      />
    </div>
  );
}


export default TableSection;