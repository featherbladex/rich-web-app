//buttons
let add_button = document.getElementById('add');

add_button.onclick=add();



function get_notes(){
  let note_array = new Array;
  let note_str = localStorage.getItem('content');

  if(note_str !== null){
    note_array = JSON.parse(note_str);
  }
  return note_array;
}

function add(){
  let note = document.getElementById('note').value;
  let notes = get_notes();
  let new_item = {
    name:note,
    id: "item" + notes.length
  };
  notes.push(new_item);
  
  localStorage.setItem('content',JSON.stringify(notes));
  show();
  return false;
}
  

function del(){
  let id = value;
  let notes = get_notes();

  notes.splice(id,1);
  localStorage.setItem('content',JSON.stringify(notes));
  show();
  return false;
}

function edit(value){
  let id = value;
  let notes = get_notes();
  let rewrite = prompt("Note:","Edit");
  for(let i=0;i<notes.length;i++){
    let content= notes[i];
    console.log(content);
    if(content.id==id){
      content.name=rewrite;
    }
  }

  show();
  return false;
}

function show(){
  let notes = get_notes();
  let html = '<p>';

  for(let i =0;i<notes.length;i++){
    let content = notes[i];
    html += "<p id ='item"+i+"'>"+content["name"]+ 
    '<p>'+"<button class = 'del'> Delete </button>"+
    " "+"<button class = 'edit' value = 'item"+i+ "'> Edit </button>";
  };

  document.getElementById('item').innerHTML = html;

  //let delete_button = document.getElementsByClassName('del');
  
  //let edit_button = document.getElementsByClassName('edit');
  

}


