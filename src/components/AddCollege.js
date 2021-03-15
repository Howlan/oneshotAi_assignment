import { Typography, Form, Input, InputNumber, Button, Checkbox } from 'antd';
import { useState, useEffect } from 'react'
import Axios from 'axios'
import Dashboard from './Dashboard'

const { Title } = Typography


const AddCollege = () => {

    const [id, setId] = useState(1);
    const [name, setName] = useState('');
    const [yearFounding, setyearFounding] = useState(1900);
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [noOfStudents, setNoOfStudents] = useState(0); 
    const [course, setCourse] = useState('');
    const [listOfColleges, setListOfColleges] = useState([]);

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 8 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 8},
    };

    const addCollege = () => {
        Axios.post('http://localhost:3001/addCollege', 
            {
                name : name,
                id : id,
                city : city,
                state : state,
                country : country,
                yearFounding : yearFounding,
                noOfStudents : noOfStudents,
                course : course
            }).then(() => {
                console.log('Success')
            }).catch(() => {
                console.log('Failed')
            });
        console.log("name : " +name);
        console.log("id : " +id + " " + typeof(id));
        console.log("city : " +city);
        console.log("state : " +state);
        console.log("country : " +country);
        console.log("number of Students : " +noOfStudents);
        console.log("year Founding : " +yearFounding);
        console.log("course : " +course);
    };

    useEffect(() => {
        Axios.get('http://localhost:3001/read').then(
            (response) => { 
                setListOfColleges(response.data);
            }).catch(
                ()=>{
                    console.log("Error")
            });
    })

    return(
        <div>
            <Title
                style = {{ marginTop : '75px' }} 
                level={3}>Add College</Title>
            <Form
                {...layout}>
                <Form.Item 
                    label="ID"
                    name="id"
                    rules={[{ required: true, message: 'Please input your username!' }]}>
                    <InputNumber size="small" 
                                 onChange = {
                                    (event) => {
                                        setId(event);    
                                    }
                                 } 
                                 style={{ display:'flex', alignSelf : 'flex-start'}} />
                </Form.Item>
                <Form.Item 
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}>
                    <Input 
                         onChange = {
                            (e) => {
                                setName(e.target.value);    
                            }
                         }/>
                </Form.Item>
                <Form.Item 
                    label="Year Founded"
                    name="yearFounded"
                    rules={[{ required: true, message: 'Please input your username!' }]}>
                    <InputNumber size="small" 
                                 defaultValue = "1900"
                                 onChange = {
                                    (e) => {
                                        setyearFounding(e);    
                                    }
                                 }
                                 style={{ display:'flex', alignSelf : 'flex-start'}} />
                </Form.Item>
                <Form.Item 
                    label="City"
                    name="city"
                    rules={[{ required: true, message: 'Please input your username!' }]}>
                    <Input 
                        onChange = {
                            (e) => {
                                setCity(e.target.value);    
                            }
                        }/>
                </Form.Item>
                <Form.Item 
                    label="State"
                    name="state"
                    rules={[{ required: true, message: 'Please input your username!' }]}>
                    <Input 
                         onChange = {
                            (e) => {
                                setState(e.target.value);    
                            }
                         }/>
                </Form.Item>
                <Form.Item 
                    label="Country"
                    name="country"
                    rules={[{ required: true, message: 'Please input your username!' }]}>
                    <Input  onChange = {
                                    (e) => {
                                        setCountry(e.target.value);    
                                    }
                                 }/>
                </Form.Item>
                <Form.Item 
                    label="No of Students"
                    name="numberOfStudents"
                    rules={[{ required: true, message: 'Please input your username!' }]}>
                    <InputNumber size="small" 
                                 defaultValue = "0"
                                 onChange = {
                                    (e) => {
                                        setNoOfStudents(e);    
                                    }
                                 }
                                 step = "50"
                                 style={{ display:'flex', alignSelf : 'flex-start'}} />
                </Form.Item>
                <Form.Item 
                    label="Course"
                    name="course"
                    rules={[{ required: true, message: 'Please input your username!' }]}>
                    <Input 
                     onChange = {
                        (e) => {
                            setCourse(e.target.value);    
                        }
                     }/>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" onClick={addCollege}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>

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
                        </div>
                    )
                })}
            </div> */}



        </div>
    )
}

export default AddCollege