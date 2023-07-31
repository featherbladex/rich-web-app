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

  const onDeleteNote =(del_id)=>{
    setNotes(notes.filter((note)=>note.id !== del_id))
  }


  return <div className="App">
    <Sidebar notes ={notes} onAddNote = {onAddNote} onDeleteNote={onDeleteNote}/>
    <Main/>
  </div>;

}

export default App;
