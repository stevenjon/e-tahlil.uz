import React, {useEffect, useState} from 'react'
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';

const Index = () => {
    const [editorState, setEditorState]=useState(EditorState.createEmpty())
    const editChange = (editorState)=> {
        setEditorState(editorState)
    }
    const add = ()=> {
        const sa = editorState + "asd;klasdl dhaosk dhaskid"
        setEditorState(sa)
    }
         return (
            <div>
            <button onClick={add}>sasd</button>
            <Editor
                toolbarClassName="toolbarClassName"
                editorState={editorState}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={editChange}
            />
</div>
    )
  
         }

export default Index