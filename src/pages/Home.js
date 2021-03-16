import '../App.css';
import { Typography } from 'antd';
import { useState, useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import AddCollege from '../components/AddCollege'
import { Input, Space } from 'antd';
import Axios from 'axios'
import Visualization from '../components/Visualization'

const { Title } = Typography;
const { Search } = Input;

function Home() {

  const [listOfColleges, setListOfColleges] = useState([]);
  const [listOfStudents, setListOfStudents] = useState([]);
  const [selectedListOfStudents, setSelectedListOfStudents] = useState([]);
  var history = useHistory()

  useEffect(() => {
    Axios.get('https://onshotai-test-server.herokuapp.com/readCollege').then(
        (response) => { 
            setListOfColleges(response.data);
        }).catch(
            ()=>{
              console.log("Error")
        });
    })

  useEffect(() => {
    Axios.get('https://onshotai-test-server.herokuapp.com/readStudent').then(
        (response) => { 
          console.log('students')
          console.log(response.data)
          console.log(response.data[0])
          setListOfStudents(response.data);
          console.log(listOfStudents);
        }).catch(
            ()=>{
                console.log("Error")
        });
    },[listOfStudents])

  const showDetails = (id) => {
    alert(id)
    console.log(listOfStudents)
    history.push({ 
      pathname: '/CollegeDetails'+id,
      state : listOfStudents
    })  
  }


  const getDetails = (value) => {
    Axios.get('https://onshotai-test-server.herokuapp.com/readCollege').then(
      (response) => { 
          setListOfColleges(response.data);
          listOfColleges.map((val)=> {
            val.name === value ? showDetails(val.name) : console.log('Not Found!') ;
          })
      }).catch(
          ()=>{
              console.log("Error")
      });
  }
  


  return (
    <div className="Home">
      <Title 
          style ={{marginTop: '60px'}}
          level={2}>
            D A S H B O A R D
      </Title>
      <Search 
          placeholder="input search text" 
          onSearch= { (value, event) => {
            getDetails(value);
          }}
          style={{ width: '500px' }} 
          enterButton  />
      <AddCollege  />
      <Visualization 
          colleges={listOfColleges} students={listOfStudents}/>
    </div>
  );
}

export default Home;
