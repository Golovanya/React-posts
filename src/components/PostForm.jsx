import { useState } from "react";
import Inpit from "./UI/Input";
function PostForm({create}) {
        const [title, setTitle] = useState('')
        const [body, setBody] = useState('')
        const addNewPost = (e) => {
            e.preventDefault()
            const newPost = {
                title, body , id: Date.now()
            }
            create(newPost)
            setTitle('')
            setBody('')
    }
    return ( 
        <form>
        <Inpit 
        value = {title}
        onChange = {e => setTitle(e.target.value)}
        placeholder = 'Название поста'
        type =  'text'
        />
        <Inpit 
        value = {body}
        onChange = {e => setBody(e.target.value)}
        placeholder = 'Описание поста' 
        type = 'text'
        />
        <button className ='add-btn'onClick={addNewPost} >Создать пост</button>
        </form>
     );
}

export default PostForm;