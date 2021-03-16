import React from 'react'
import {useState, useEffect} from 'react'
import{useParams, useLocation} from 'react-router-dom'
import { Table, Space } from 'antd'
import { Typography } from 'antd';
const { Title } = Typography;


const CollegeCourses = () => {

    let {id} = useParams();
    const location = useLocation();
    const[colleges, setColleges] = useState([]);
    const[selectedColleges, setSelectedColleges] = useState([]);
    
    useEffect(() => {
        console.log(id); // result: '?query=abc'
        console.log(location.state)
        setColleges(location.state);
        setSelectedColleges([colleges.filter((val) => {
            return val.courses == id ;
        })])
        console.log(selectedColleges)   
    });

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            rowKey:'id',
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
        <div>
            <Title 
                style ={{   marginTop: '60px',  textAlign : 'center'}}
                level={2}>
                    COLLEGES OFFERING COURSES IN {id} 
            </Title>
            <Table  columns={columns} dataSource={selectedColleges} size='small' />
        </div>
    )
}

export default CollegeCourses