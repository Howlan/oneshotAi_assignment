import { Typography, Form, Input, InputNumber, Button, Checkbox } from 'antd';
import { useState, useEffect } from 'react'
import Axios from 'axios'
import Dashboard from './Dashboard'
import CollegeForm from './CollegeForm'
import { PlusCircleOutlined } from '@ant-design/icons';


const AddCollege = () => {

    const [showAddCollg, setShowAddCollg] = useState(0);
    // const [id, setId] = useState(1);
    // const [name, setName] = useState('');
    // const [yearFounding, setyearFounding] = useState(1900);
    // const [city, setCity] = useState('');
    // const [state, setState] = useState('');
    // const [country, setCountry] = useState('');
    // const [noOfStudents, setNoOfStudents] = useState(0); 
    // const [course, setCourse] = useState('');
    const [listOfColleges, setListOfColleges] = useState([]);
    const showAddCollege = () => {
        showAddCollg == 1 ?   setShowAddCollg(0) : setShowAddCollg(1)
    }

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 8 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 8},
    };

    // const addCollege = () => {
    //     Axios.post('https://onshotai-test-server.herokuapp.com/addCollege', 
    //         {
    //             name : name,
    //             id : id,
    //             city : city,
    //             state : state,
    //             country : country,
    //             yearFounding : yearFounding,
    //             noOfStudents : noOfStudents,
    //             course : course
    //         }).then(() => {
    //             console.log('Success')
    //         }).catch(() => {
    //             console.log('Failed')
    //         });
    //     console.log("name : " +name);
    //     console.log("id : " +id + " " + typeof(id));
    //     console.log("city : " +city);
    //     console.log("state : " +state);
    //     console.log("country : " +country);
    //     console.log("number of Students : " +noOfStudents);
    //     console.log("year Founding : " +yearFounding);
    //     console.log("course : " +course);
    // };

    useEffect(() => {
        Axios.get('https://onshotai-test-server.herokuapp.com/readCollege').then(
            (response) => { 
                setListOfColleges(response.data);
            }).catch(
                ()=>{
                    console.log("Error")
            });
    })

    return(
        <div>
            <Button type="primary" shape="circle" icon={<PlusCircleOutlined onClick={showAddCollege}/>} />
            
            {  showAddCollg ===1  ? <CollegeForm /> : console.log("College form is hidden")}
            
             {/*   D A S H B O A R D     */}
            <Dashboard data={listOfColleges} />
            {/* <div >
                {listOfColleges.map((val) => {
                    return(
                        <div>
                            <ul>
                                <li>ID : {val.id}</li>
                                <li>Name : {val.name}</li>
                                <li>Year Founded : {val.yearFounding}</li>
                                <li>City : {val.city}</li>
                                <li>State : {val.state}</li>
                                <li>Country : {val.country}</li>
                                <li>No of Students : {val.numberOfStudents}</li>
                                <li>Courses : {val.courses}</li>
                            </ul>
                        </div>git
                    )
                })}
            </div> */}



        </div>
    )
}

export default AddCollege