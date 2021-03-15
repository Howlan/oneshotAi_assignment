import { Table, Tag, Space } from 'antd';
import Axios from 'axios'
import { useState, } from 'react'



const Dashboard = ({data}) => {
    const [listOfColleges, setListOfColleges] = useState([]);

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },  
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            // render: text => <a>{text}</a>,
        },
        {
            title: 'Year',
            dataIndex: 'yearFounded',
            key: 'yearFounded',
        },
        {
            title: 'City',
            dataIndex: 'city',
            key: 'city',
        },
        {
            title: 'State',
            dataIndex: 'state',
            key: 'state',
        },
        {
            title: 'Country',
            dataIndex: 'country',
            key: 'country',
        },
        {
            title: 'No Of Students',
            dataIndex: 'numberOfStudents',
            key: 'numberOfStudents',
        },
        {
            title: 'Courses',
            dataIndex: 'courses',
            key: 'courses',
        },
        {
            title: 'Action',
            key: 'action',
            render: () => (
            <Space size="middle">
                <a >Get Detials </a>
            </Space>
            ),
        }
    ]



    return (
        <Table columns={columns} dataSource={data} size='small' />
    )
}

export default Dashboard
