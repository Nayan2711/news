
import './App.css';
import News1 from './Components/News';
import Navbar1 from './Components/Navbar';
import LoadingBar from 'react-top-loading-bar';
import  {useEffect, useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App(props) {
  const [progress, setProgress] = useState(0)
  

  return (
    <div>
      
      <BrowserRouter>
       <Navbar1/>
       <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
        
      
      />
      <Routes>
      <Route exact path='/'  element={<News1 key='general' setProgress={setProgress} country="in" category="general" pageSize={props.pageSize}/>}/>
        <Route exact path='/business'  element={<News1 key='business' setProgress={setProgress} country="in" category="business" pageSize={props.pageSize}/>}/>
        <Route exact path='/entertainment' element={<News1 key='entertaintment' setProgress={setProgress} country="in" category="entertainment" pageSize={props.pageSize}/>}/>
        <Route exact path='/general'  element={<News1 key='general' country="in" setProgress={setProgress}category="general" pageSize={props.pageSize}/>}/>
        <Route exact path='/health'  element={<News1 key='health' country="in" setProgress={setProgress} category="health" pageSize={props.pageSize}/>}/>
        <Route exact path='/science'  element={<News1 key='science' country="in"  setProgress={setProgress}category="science" pageSize={props.pageSize}/>}/>
        <Route exact path='/sports'  element={<News1 key='sports' country="in" setProgress={setProgress} category="sports" pageSize={props.pageSize}/>}/>
        {/* <Route exact path='/technology'  element={<News1 key='technology'  country="in" category="technolgy"/>}/> */}

      </Routes>
      </BrowserRouter>

     
      {/* <News1 country="in" category="science" /> */}
      
    </div>
  );
}

export default App;
