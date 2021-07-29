﻿import React, { useState } from 'react';
import { useRef } from 'react';
import * as S from "./Post.style";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';
// import FavoriteIcon from '@material-ui/icons/Favorite';


const Post = (props) => {
  const images = useRef();
  let [post_like, setPost_like] = useState(false);
  // let [isMouseDown, setIsMouseDown] = useState(false);

  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();


  const onDragStart = (e) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + images.current.scrollLeft);
  }

  const onDragEnd = (e) => {
    setIsDrag(false);
  }

  const onDragMove = (e) => {
    if (isDrag) {
      const { scrollWidth, clientWidth, scrollLeft } = images.current;
  
      images.current.scrollLeft = startX - e.pageX;
  
      if (scrollLeft === 0) {
        setStartX(e.pageX);
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft);
      }
    }
  }


  return (
    <S.Container>
      <S.Content>
        <ul>
          <S.Header>
            <span>영국</span>
            <i class="fas fa-times"></i>
          </S.Header>
          <S.Images
            ref={images}
            onMouseDown={e=>onDragStart(e)}
            onMouseUp={e=>onDragEnd(e)}
            onMouseMove={e=>onDragMove(e)}
            onMouseLeave={e=>onDragEnd(e)}
          >
              <img></img>
              <img></img>
              <img></img>
              <img></img>
          </S.Images>
          <S.Profile>
            <img></img>
            <p>Park HyunJeong</p>
            <span>15min</span>
          </S.Profile>
          <S.Title>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </S.Title>
          <S.Like>
            <span>27 Likes</span>
            {post_like ?
            <i class="fas fa-thumbs-up"></i> :
            <i class="far fa-thumbs-up"></i>}
          </S.Like>
          <S.Comment>
            <textarea placeholder="댓글을 입력해주세요"></textarea>
            <div>
              <img></img>
              <p>재밌었겠다</p>
            </div>
            <div>
              <img></img>
              <p>신났겠다</p>
            </div>
            <div>
              <img></img>
              <p>맛있었겠다</p>
            </div>
            <div>
              <img></img>
              <p>나도 가고싶다</p>
            </div>
            <div>
              <img></img>
              <p>이것은 길이가 긴 댓글이다. 기이이이이이이이이이이이이이이이이이이일다
              이것은 길이가 긴 댓글이다. 기이이이이이이이이이이이이이이이이이이일다
              이것은 길이가 긴 댓글이다. 기이이이이이이이이이이이이이이이이이이일다
              이것은 길이가 긴 댓글이다. 기이이이이이이이이이이이이이이이이이이일다</p>
            </div>
          </S.Comment>
        </ul>
      </S.Content>
    </S.Container>
  )
}

export default Post;