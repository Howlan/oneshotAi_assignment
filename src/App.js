import './App.css';
import { Typography } from 'antd';
import { useState } from 'react'
import AddCollege from './components/AddCollege'
import { Input, Space } from 'antd';
import Axios from 'axios'

const { Title } = Typography;
const { Search } = Input;

function App() {

  const [listOfColleges, setListOfColleges] = useState([]);
  const [listOfStudents, setListOfStudents] = useState([]);
  const [selectedListOfStudents, setSelectedListOfStudents] = useState([]);

  const showDetails = (id) => {
    Axios.get('https://onshotai-test-server.herokuapp.com/readStudent').then(
      (response) => { 
          console.log(id)
          console.log(response)
          setListOfStudents(response.data);
          console.log(listOfStudents)
          setSelectedListOfStudents(listOfStudents.map((val)=> {
            console.log(val)
            console.log(val.collegeId)
            return val.collegeId == id ? val : [] }) 
          );

          console.log(selectedListOfStudents)
      }).catch(
          ()=>{
              console.log("Error")
      });
  }


  const getDetails = (value) => {
    Axios.get('https://onshotai-test-server.herokuapp.com/readCollege').then(
      (response) => { 
          setListOfColleges(response.data);
          listOfColleges.map((val)=> {
            val.name === value ? showDetails(val.id) : console.log('Not Found!') ;
          })
      }).catch(
          ()=>{
              console.log("Error")
      });
  }
  


  return (
    <div className="App">
      <Title 
          style ={{marginTop: '20px'}}
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
      
    </div>
  );
}

export default App;
