import "./App.css";
import React, { useState } from "react";

function App() {
  const [Toggle, setToggle] = useState(true);
  const [inputData, setInputData] = useState({ Name: "", Department: "", Rating: "",employees: [],});

  const changeHandler = (e) => {
     setInputData({ ...inputData, [e.target.name]: [e.target.value] });
  };

  const submitHandler=(e)=>{
    e.preventDefault();
     const arr = {
      Name: inputData.Name,
      Department: inputData.Department,
      Rating: inputData.Rating,
    };

    let temp = inputData.employees;
    temp.push(arr);
    setInputData({ ...inputData, employees: temp });
    console.log(inputData.employees);
    setToggle(false);
  };

  const displayHandler = () => {
    setToggle(true);
  };

  return (
    <div className="App">

      {Toggle ? (

                   <form>
                    <h1 class="feedback">EMPLYEE FEEDBACK FORM</h1>
                    <br></br>
          <label className="name">Name : </label>
          <input type="text" name="Name" value={inputData.Name} onChange={changeHandler} required></input>
          <br /><br/>
          <label className="dept">Department : </label>
          <input type="text" name="Department" value={inputData.Department} onChange={changeHandler} required ></input>
          <br /><br/>
          <label className="ratg">Rating : </label>
          <input type="number" name="Rating"value={inputData.Rating}onChange={changeHandler} required></input>
          <br />
          <br />
          <button className="btn" onClick={submitHandler}>Submit</button>
            </form>
      ) : (
        <>
         <h1 class="feedback">EMPLYEE FEEDBACK DATA</h1><br/><br/>
          <div className="mainbox container">
            {inputData.employees.map((value, index) => {
              return (
                <span className="container box1" key={index}>
                  <span>
                    Name : {value.Name} | Department : {value.Department} | Rating : {value.Rating}
                  </span>
                </span>
              );
            })}
          </div>
          <br />
          <button className="btn2" onClick={displayHandler}>
            GO BACK
          </button>
        </>
      )}
    </div>
  );
}
/*import './App.css';
import {useState} from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
function App() {
  const[inputdata,setInputdata]=useState({name:"",dept:"",rating:""});
  const[inputarr,setInputarr]=useState([]);
  function changehandle(e){
    setInputdata({...inputdata,[e.target.name]:e.target.value})
  }
  let {name,dept,rating}=inputdata;
  function clickhandle(){
    setInputarr([...inputarr,{name,dept,rating}])
    setInputdata({namee:"",dept:"",rating:""})
  }
  return (
    <div className="App">
      <Router>
     <h1>EMPLOYEE FEEDBACK FORM</h1><br/><br/>
     <label>Name:</label>
     <input type="text"
         name="name"
         value={inputdata.value }
         onChange={changehandle}
         /><br/><br/><br/>
     <label>Department:</label>
     <input type="text"
         name="dept"
         value={inputdata.value }
         onChange={changehandle}
         /><br/><br/><br/>
          <label>Rating:</label>
     <input type="text"
         name="rating"
         value={ inputdata.value}
         onChange={changehandle}
         /><br/><br/><br/>
         <button type="submit" onClick={clickhandle}>Submit</button>
         <Route path="/Employe"><Employe/></Route>
    
      </Router>           
    </div>
  );
}
function Employe(){
  return(
  <div>
      <div style={{fontSize: '34px', fontWeight: '500'}}>
      EMPLOYEE FEEDBACK DATA
  </div>
  <div className='wrapper'>
       
      <div className="tile-section">
          {inputarr.map((data, i) =>
              <div className='tile' key={i}>
                  <span>Name: {data.name}</span>
                  <span>Department: {data.dept}</span>
                  <span>Rating: {data.rating}</span>
              </div>
          )}
      </div>
  </div>
  <div>
      <Link to="/"><button>Go Back</button></Link>
  </div>
</div>
  )
}*/

export default App;