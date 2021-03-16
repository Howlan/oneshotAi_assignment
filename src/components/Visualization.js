
import {Space} from 'antd';
import {useState} from 'react';
import {Doughnut} from 'react-chartjs-2';
import {useHistory } from 'react-router-dom'

const dataColleges = {
	labels: [
		'BioTech',
		'CE',
		'CSE',
        'ECE',
        'EE',
        'IN',
        'IT',
        'Maths',
        'ME',
	],
	datasets: [{
		data: [17, 8, 14, 11, 14, 12, 10, 12, 10],
		backgroundColor: [
            '#525F91',
            '#9C6BA4',
            '#DF779D',
            '#FF9483',
            '#FFC26B',
            '#F9F871',
            '#9BDE7E',
            '#4BBC8E',
            '#039590',
        ],
		hoverBackgroundColor: [
            '#525F91',
            '#9C6BA4',
            '#DF779D',
            '#FF9483',
            '#FFC26B',
            '#F9F871',
            '#9BDE7E',
            '#4BBC8E',
            '#039590',
		]
	}]
};


const dataStudents = {
	labels: [
		'Javascript',
		'Android',
		'C#',
        'Ruby',
        'Java',
        'HTML',
        'C++',
        'C',
        'Python',
	],
	datasets: [{
		data: [1122, 1120, 1113, 1132, 1143, 1109, 1140, 1102, 1044],
		backgroundColor: [
            '#525F91',
            '#9C6BA4',
            '#DF779D',
            '#FF9483',
            '#FFC26B',
            '#F9F871',
            '#9BDE7E',
            '#4BBC8E',
            '#039590',
        ],
		hoverBackgroundColor: [
            '#525F91',
            '#9C6BA4',
            '#DF779D',
            '#FF9483',
            '#FFC26B',
            '#F9F871',
            '#9BDE7E',
            '#4BBC8E',
            '#039590',
		]
	}]
};

const Visualization = ({colleges, students}) => {

    let history = useHistory();
    const visStyle = {
        marginTop : '15px',
        display : 'flex',
        flexDirection :'column',
    }

    const [size, setSize] = useState(200);
    const [width, setWidth] = useState(400);


    const showCollegeDetails = (id) => {
        console.log(id)
        console.log(colleges)
        history.push({ 
            pathname: '/CollegeCourses'+id,
            state : colleges
           })
    }

    const showStudentsSkills = (id) => {
        console.log(id)
        console.log(colleges)
        history.push({ 
            pathname: '/StudentSkills'+id,
            state : students
           })
    }

    return (
      <Space  size ={size}>   
        <div>
            <h2>COLLEGES GROUPED BY COURSES</h2>
            <Doughnut 
                onElementsClick = { (elems) => {
                    alert(dataColleges.labels[elems[0]._index])
                    showCollegeDetails(dataColleges.labels[elems[0]._index])
                   
                }}
                data={dataColleges}
                width={width}
                height={width}
                
                options={{ maintainAspectRatio: false }} />
        </div>
        
        <div>
            <h2>STUDENTS GROUPED BY SKILLS</h2>
            <Doughnut 
                onElementsClick = { (elems) => {
                    alert(dataStudents.labels[elems[0]._index])
                    showStudentsSkills(dataStudents.labels[elems[0]._index])
                   
                }}
                data={dataStudents}
                width={width}
                height={width}
                options={{ maintainAspectRatio: false}} />
        </div>

      </Space>
)};

export default Visualization;