import { TransitionGroup, CSSTransition } from "react-transition-group";
import Post from "./Post";
function PostList({posts, remove}) {
    if(!posts.length){
        return(
            <h2 style={{textAlign:'center'}} >Посты не найдены</h2>
        )
    }
    return ( 

        <div className="post-list" >
            
            <TransitionGroup>
                {posts.map((post, index) => 
                <CSSTransition
                key={post.id}
                timeout={500}
                classNames="post">
                <Post  remove ={remove} post={post}  number={index+1}/>
                </CSSTransition>
              )}
            </TransitionGroup>
        </div>
    )
}

export default PostList;