let add_button = document.getElementById("add");
let input_title = document.getElementById("note_title");
let input_content = document.getElementById("note_content");


const months = [
    "January","February","March",
    "April","May","June",
    "July","August","September",
    "October","November","December"
];

const notes =JSON.parse(localStorage.getItem("notes") || "[]");
let isUpdate = false, updateID;

function show(){
    document.querySelectorAll(".display").forEach(note => note.remove());
    notes.forEach((note,index) => {
        let dis_notes = `
            <li class="display" 
                <div class="details">
                    <h3>${note.title}</h3>
                    <span>${note.content}</span>
                </div>
                <div class="time">
                    <span>${note.date}</span>
                    <div class="settings">
                        <ul class= "menu">
                        <button class="edit" onclick = edit_note(${index},'${note.title}','${note.content}')>Edit note</button>
                        <button class="del" onclick = delete_note(${index})>Delete note</button>
                        </ul>
                    </div>
                </div>
            </li>`;
        add_button.insertAdjacentHTML("afterend",dis_notes);
    });
}

show();

function delete_note(noteID){
    notes.splice(noteID,1);
    localStorage.setItem("notes",JSON.stringify(notes));
    show();
}

function edit_note(noteID,note_title,note_content){
    updateID = noteID;
    isUpdate = true;
    add_button.innerHTML = "update note";
    input_title.value = note_title;
    input_content.value = note_content;
}


add_button.addEventListener("click", e =>{
    e.preventDefault();
    add_button.innerHTML = "Add note";

    let note_title = input_title.value;
    let note_content = input_content.value;

    if(note_title||note_content){
        let get_date = new Date();
        let day = get_date.getDate();
        let month = months[get_date.getMonth()];
        let year = get_date.getFullYear();

        let note_info={
            title: note_title,
            content: note_content,
            date: `${day} / ${month} / ${year}`
        }

        if (isUpdate === false) {
            notes.push(note_info);
        } else {
            notes[updateID] = note_info;
            isUpdate = false;
        }
        
        localStorage.setItem("notes",JSON.stringify(notes));

        show();
        input_title.value = "";
        input_content.value = "";
    }
   
});

export {delete_note,edit_note,show};

