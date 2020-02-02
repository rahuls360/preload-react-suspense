import React from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import { withRouter } from 'react-router-dom';

const DataTable = props => {
  const dataSource = [
    {
      key: 'mike',
      name: 'Mike',
      age: 32,
      company: 'Google'
    },
    {
      key: 'john',
      name: 'John',
      age: 28,
      company: 'Yahoo'
    }
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: 'Works at',
      dataIndex: 'company',
      key: 'company'
    }
  ];
  console.log(props.preloadChart, 'inside');
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      onRow={rec => {
        return {
          onClick: () => props.history.push(`/data/${rec.key}`),
          onMouseEnter: () => {
            console.log('onhover');
            props.preloadChart();
          }
        };
      }}
    />
  );
};

export default withRouter(DataTable);
