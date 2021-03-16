import React from 'react'
import {useState } from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Home from './pages/Home'
import CollegeCourses from './pages/CollegeCourses'
import CollegeDetails from './pages/CollegeDetails'
import StudentSkills from './pages/StudentSkills'
import StudentDetails from './pages/StudentDetails'

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component ={Home}/>
          <Route path="/collegeCourses:id" exact component ={CollegeCourses}/>
          <Route path="/studentSkills:id" exact component ={StudentSkills}/>
          <Route path="/collegeDetails:id" exact component ={CollegeDetails}/>
          <Route path="/studentDetails:id" exact component ={StudentDetails}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App