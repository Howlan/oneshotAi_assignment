import React from 'react'
import {useState, useEffect} from 'react'
import{useParams, useLocation} from 'react-router-dom'
import { Table, Tag, Space } from 'antd'
import { Typography } from 'antd';
const { Title } = Typography;


const StudentSkills = () => {

    let {id} = useParams();
    const location = useLocation();
    const[students, setStudents] = useState([]);
    const[selectedStudents, setSelectedStudents] = useState([]);
    
    useEffect(() => {
        console.log(id); // result: '?query=abc'
        console.log(location.state)
        setStudents(location.state);
        setSelectedStudents([students.filter((val) => {
            return val.skills == id ;
        })])
        console.log(selectedStudents)   
    });

    
    return (
        <div>
            Student {id}
        </div>
    )
}

export default StudentSkills