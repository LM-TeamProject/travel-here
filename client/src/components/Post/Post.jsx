import React, { useState } from 'react';
import * as S from "./Post.style";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';
// import FavoriteIcon from '@material-ui/icons/Favorite';


const Post = (props) => {

  let [post_like, setPost_like] = useState(false);

  return (
    <S.Container>
      <S.Content>
        <S.Ul>
          <S.Header>
            <S.Area>영국</S.Area>
            <S.CloseBtn><i class="fas fa-times"></i></S.CloseBtn>
          </S.Header>
          <S.Images>
              <S.Image></S.Image>
              <S.Image></S.Image>
              <S.Image></S.Image>
              <S.Image></S.Image>
          </S.Images>
          <S.Profile>
            <S.ProfileImg></S.ProfileImg>
            <S.Name>Park HyunJeong</S.Name>
            <S.Time>15min</S.Time>
          </S.Profile>
          <S.Title>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </S.Title>
          <S.Like>
            <S.LikeNum>27 Likes</S.LikeNum>
            {/* <FontAwesomeIcon icon={faHeart}/> */}
            {/* <FavoriteIcon /> */}
            {/* {post_like ?
            <S.FullLike><i class="fas fa-heart"></i></S.FullLike> :
            <S.EmptyLike><i class="far fa-heart"></i></S.EmptyLike>} */}
            {post_like ?
            <S.FullLike><i class="fas fa-thumbs-up"></i></S.FullLike> :
            <S.EmptyLike><i class="far fa-thumbs-up"></i></S.EmptyLike>}
          </S.Like>
          <S.Comment>
            <S.WriteComment placeholder="댓글을 입력해주세요"></S.WriteComment>
            <S.CommentArea>
              <S.CommentImg></S.CommentImg>
              <S.CommentText>재밌었겠다</S.CommentText>
            </S.CommentArea>
            <S.CommentArea>
              <S.CommentImg></S.CommentImg>
              <S.CommentText>신났겠다</S.CommentText>
            </S.CommentArea>
            <S.CommentArea>
              <S.CommentImg></S.CommentImg>
              <S.CommentText>맛있었겠다</S.CommentText>
            </S.CommentArea>
            <S.CommentArea>
              <S.CommentImg></S.CommentImg>
              <S.CommentText>나도 가고싶다</S.CommentText>
            </S.CommentArea>
            <S.CommentArea>
              <S.CommentImg></S.CommentImg>
              <S.CommentText>이것은 길이가 긴 댓글이다. 기이이이이이이이이이이이이이이이이이이일다
              이것은 길이가 긴 댓글이다. 기이이이이이이이이이이이이이이이이이이일다
              이것은 길이가 긴 댓글이다. 기이이이이이이이이이이이이이이이이이이일다
              이것은 길이가 긴 댓글이다. 기이이이이이이이이이이이이이이이이이이일다
              </S.CommentText>
            </S.CommentArea>
          </S.Comment>
        </S.Ul>
      </S.Content>
    </S.Container>
  )
}

export default Post;