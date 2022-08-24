import './App.css';
import Home from './comp/Home';
import TempControl from './comp/TempControl';
import Search from './comp/Search';
import Registration from './comp/Registration';
import Quiz from './comp/Quiz';
import Randompassword from './comp/Randompassword';
import Navbar from './comp/Navbar';
import { useState,useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Tasks from './comp/Tasks';


function App() {
  
let storage;
if(localStorage.getItem("myTasks")=== null){
  storage=[]
}else{
  storage=JSON.parse(localStorage.getItem("myTasks"))
}

const [tasks, setTasks] = useState(storage)

useEffect(() => {
localStorage.setItem("myTasks", JSON.stringify(tasks))
  
}, [tasks])


const add=(task,detail,cat)=>{
   let newTasks=[...tasks]
   newTasks.push({
    task:task,
    detail:detail,
    category:cat
  })
    setTasks(newTasks)
  }
 const remove =(e)=>{
  let newTasks=[...tasks]
    newTasks.splice(e,1);
    setTasks(newTasks)
  }



  return (
<BrowserRouter>
<Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/temp" element={<TempControl/>} />
      <Route path="/registration" element={<Registration/>} />
      <Route path="/quiz" element={<Quiz/>} />
      <Route path="/search" element={<Search/>} />
      <Route path="/random" element={<Randompassword/>} />
      <Route path="/tasks" element={<Tasks tasks={tasks} add={add} remove={remove} />} />
    </Routes>
  </BrowserRouter>

  );
}

export default App;
