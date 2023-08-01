import './App.css';
import uuid from 'react-uuid';
import Sidebar from './sidebar';
import Main from './main';
import { useEffect, useState } from 'react';

function App() {
  const [notes, setNotes] = useState(localStorage.notes ? JSON.parse(localStorage.notes) : []  );
  const [activeNote, setActiveNote] = useState(false);
  
  useEffect(() => {

  localStorage.setItem("notes", JSON.stringify(notes));

  },[notes]);

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
  };

  const onEditNote = (updatedNotes)=>{
    const updatedNotesArray = notes.map((note) =>{
      if(note.id === activeNote){
        return updatedNotes;
      }
      return note;
    });
    
    setNotes(updatedNotesArray)
  };

 

  const getActiveNote = () =>{
    return notes.find((note)=>note.id === activeNote);
  };


  return <div className="App">
    <Sidebar 
      notes ={notes} 
      onAddNote = {onAddNote} 
      onDeleteNote={onDeleteNote}
      activeNote ={activeNote}
      setActiveNote = {setActiveNote}
    />
    <Main 
    activeNote = {getActiveNote()} 
    onEditNote= {onEditNote} 
    
    />
  </div>;

}


export default App;