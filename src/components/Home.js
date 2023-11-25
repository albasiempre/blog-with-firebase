import React, { useEffect, useState } from 'react';
import "./Home.css";
import {auth, db} from '../firebase';
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';


const Home = () => {

  const [ postList, setPostList ] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
    getPosts();
  },[]);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "posts",id));
    alert('Are you okay?');
    window.location.href = "/";
  }

  return (
    <div className='wrapper'>
      <div className="home">
        {postList.map((post) => {
          return (

            <div className="postContents" key={post.id}>
              <div className="postHeader">
                <h2>{post.title}</h2>
              </div>

              <div className="postTextWrapper">{post.postText}</div>
              <div className="authorAndDeleteButton">
                <p className='postAuthor'>@{post.author.username}</p>
              {post.author.id === auth.currentUser?.uid && (
              <button class="removeButton" onClick={() => handleDelete(post.id)}>Remove</button>
              )}
            </div>
          </div>

          )
        })}
      </div>
    </div>
  );
};

export default Home