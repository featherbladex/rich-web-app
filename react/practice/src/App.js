import './App.css';
import {delete_note,edit_note,show} from'./componants/memo_react';

function App() {
  return (
    <div className="App">
      <h1>Note App</h1>
      <div class="container">
        
          <div class="Note_input">
                <label for="note_title">Title</label><br></br>
                <input id="note_title" type="text"placeholder="enter title"/> 
                <br></br>

                <label for="note_content">Note</label><br></br>
                <textarea name="note_content" id = "note_content" cols="30" rows="10" placeholder="enter note"></textarea>
                <br></br>
                
                <button id="add">Add note</button>
                <h2>Notes</h2>
          </div>
      </div>
    </div>
  );
}

export default App;
