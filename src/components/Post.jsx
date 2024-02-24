import Button from "./UI/Button";

function Post (props) {
   
    return ( 
        <div className="postItem">
            <div className="text-block">
            <h3>{props.post.id}. {props.post.title}</h3>
            <p>{props.post.body}</p>
            </div>
            <Button onClick = {() => props.remove(props.post)} >Удалить</Button>
        </div>
        
        );
}

export default Post;