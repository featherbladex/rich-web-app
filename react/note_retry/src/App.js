import './App.css';
import uuid from 'react-uuid';
import Sidebar from './sidebar';
import Main from './main';
import { useState } from 'react';

function App() {

  const [notes,setNotes] = useState([]);



  const onAddNote =() =>{
    const newNote = {
      id: uuid(),
      title:"Untitled",
      body:"",
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
  };


  return <div className="App">
    <Sidebar notes ={notes} onAddNote = {onAddNote}/>
    <Main/>
  </div>;

}

export default App;
