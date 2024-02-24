import { useEffect, useState } from "react";
import "../styles/App.css";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal";
import Button from "../components/UI/Button";
import { usePosts } from "../hooks/usePosts";
import axios from "axios";
import Loader from "../components/UI/Loader";
import Pagination from "../components/UI/Pagination";
import React from "react";


function Main () {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false)
  const sortedAndScreachedPosts = usePosts(posts, filter.sort, filter.query)
  const [isPostsLoading, setIsPostsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetchPosts()
  }, [currentPage])  
 async function fetchPosts (){
    setIsPostsLoading(true)
    setTimeout(async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${currentPage}`)
    setPosts(response.data)
    setIsPostsLoading(false)
    }, 1000)
  } 

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false)
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="app">

      

      {isPostsLoading
      ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 40}}> 
        <Loader/>
      </div> 
      : 
      <React.Fragment>
        <MyModal visible={modal} setVisible={setModal} >
        <PostForm create={createPost} />
        </MyModal>
        <PostFilter filter={filter} setFilter={setFilter}>
        <button className="add-btn" onClick = {() => setModal(true)}>
          Создать пост
        </button>
        </PostFilter>
        <h1 style={{textAlign: 'center' , marginBottom: "20px"}}>Список постов</h1>
        <Pagination
        onChangePage = {num => setCurrentPage(num)}
        />
        <PostList
          remove={removePost}
          deletePost
          posts={sortedAndScreachedPosts}
          tittle={"ПОСТЫ ПРО РЕАКТ"}
        />
      </React.Fragment>
      }
      
    </div>
  );
}

export default Main;