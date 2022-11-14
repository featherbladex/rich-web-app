//global query selectors
//
const noteStorage= document.querySelector("note-display");
const form= document.querySelector("form");

class addNote{
    constructor(title,body){
        this.title=title;
        this.body=body;

    } 
}

//adding a note to the list



function addNotetoList(note){
    const newUINote = document.createElement("div");
    newUINote.classList.add("note");
    newUINote.innerHTML = `
    <h3 class ="note_title">${note.title}</h3>
    <p class ="note_body">${note.body}</p>
    `

}

//submit note
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const titleInput = document.querySelector("#title")
    const noteInput = document.querySelector("#note")

    if(titleInput.value.length>0 && noteInput.value.length>0){
        const newNote = new addNote(titleInput,noteInput);
        addNotetoList(newNote);
        titleInput.value="";
        noteInput.value="";
        titleInput.focus();

    }

})


/*var button = document.querySelector("add")
Rx.
Rx.Observable.fromEvent(button, 'click')
  .subscribe(() => console.log('Clicked!'));
  
  
  */