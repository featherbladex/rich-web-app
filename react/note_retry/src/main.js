import reactMarkdown from 'react-markdown';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

function Main({activeNote, onEditNote}){

    const onEdit = (key,value) => {
        onEditNote({
            ...activeNote,
            [key]: value,
            lastModified: Date.now(),
        })
    };

    if(!activeNote)return <div className="no-active-note">No note selected</div>;

    return<div className="app-main">
        <div className="app-main-note-edit">
            <input type="text" 
            id="title" 
            value = {activeNote.title} 
            onChange={(e)=> onEdit("title",e.target.value)} 
            autoFocus/>

            <textarea 
            id="body"
            placeholder="Enter text"
            value = {activeNote.body} 
            onChange={(e)=> onEdit("body",e.target.value)}/>

        </div>
        <div className="app-main-note-preview">
            <h1 className="preview-title">{activeNote.title}</h1>
            <ReactMarkdown className="markdown-preview">{activeNote.body}</ReactMarkdown>
        </div>
    </div>

}

export default Main;