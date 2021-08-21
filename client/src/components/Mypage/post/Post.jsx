﻿import React from 'react';
import * as S from "./Post.style";
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


const Post = ({user}) => {

  const postDB = useSelector(state => state.mypagePost.data);

  const history = useHistory();

  const check = postDB.length === 0;

  const onMovePage =(post) => {
    history.push({
      pathname: `/categorylist/${post.post_region}`,
      search: `?id=${post.post_id}`,
      state: {
        like: user.user_like_posts,
        bookmark: user.user_bookmark_posts,
        postData: post,
        profile: user.user_image,
      }
    });
  }


  return (
    <>
      {!check && postDB.map((post) => {
        return(
        <S.List key={post.post_id} onClick={() => onMovePage(post)}>
          <h1>{post.post_title}</h1>
          <h2>{post.post_content}</h2>
        </S.List>
        )
      })}
      {check &&
        <h1>daksldfads</h1>
      }
    </>
  )
}

export default Post;