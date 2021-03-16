import React from 'react'
import {useState, useEffect} from 'react'
import{useParams, useLocation} from 'react-router-dom'
import { Table, Space } from 'antd'
import { Typography } from 'antd';
const { Title } = Typography;


const CollegeDetails = () => {

    let {id} = useParams();
    const location = useLocation();
    const[colleges, setColleges] = useState([]);
    const[selectedColleges, setSelectedColleges] = useState([]);
    
    // useEffect(() => {
    //     console.log(id); // result: '?query=abc'
    //     console.log(location.state)
    //     setColleges(location.state);
    //     setSelectedColleges([colleges.filter((val) => {
    //         return val.courses == id ;
    //     })])
    //     console.log(selectedColleges)   
    // });

    return (
        <div>
            {id} Student list 
        </div>
    )
}

export default CollegeDetails