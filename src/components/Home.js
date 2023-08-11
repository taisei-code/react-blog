import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import './Home.css';

const Home = () => {
  const [postList, setPostList] = useState([]);

  // リロードされたとき
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      // console.log(data.docs.map((doc) => ({ ...doc.data() })));
      setPostList(data.docs.map((doc) => ({ ...doc.data() })));
    };
    getPosts();
  }, []);

  return (
    <div className="homePage">
      {postList.map((post) => {
        return (
          <div className="postContents" key={post.id}>
            <div className="postHeader">
              <h1>{post.title}</h1>
            </div>
            <div className="postTextContainer">
              {post.postsText}
            </div>
            <div className="nameAndDeletebutton">
              <h3>{post.author.username}</h3>
              <button>削除</button>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default Home