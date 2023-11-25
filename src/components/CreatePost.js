import React, { useEffect, useState } from 'react';
import "./createPost.css";
import { addDoc, collection } from 'firebase/firestore';
import {auth, db} from '../firebase';
import { useNavigate } from 'react-router-dom';

const CreatePost = ({isAuth}) => {

  const [title, setTitle ] = useState();
  const [postText, setPostText] = useState();
  
  const navigate = useNavigate();

  const createPost = async () => {
    await addDoc(collection(db, "posts" ), {
      title: title,
      postText: postText,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid
      }
    })
    navigate("/");
    
  };

  useEffect(() => {
    if(!isAuth) {
      navigate("/login");
    }
  },[]);


  return (

    <div className="createPost">
      <div className='postCover'>
      <div className="postWrapper">
        <h1 className='mainTitle'>Create a Post </h1>
        <div className="inputPost">
          <div className='smallTitle'>TITLE</div>
          <input
          className='titleInput'
          type="text" 
          placeholder='write a title' 
          onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className="inputPost">
          <div className='smallTitle'>POST</div>
          <textarea
          className='postInput'
          placeholder='write your post' 
          onChange={(e) => setPostText(e.target.value)}>
          </textarea>
        </div>
        <button className="postButton" onClick={createPost}>make a post</button>
      </div>
      </div>
    </div>
  );
};

export default CreatePost;