﻿import React, { useState, useRef } from 'react';
import * as S from "./Info.style";
import { useDispatch } from 'react-redux';
import { userMiddleware } from 'store/modules/userLike';
import { dbService, storageService } from 'firebase.js';
import { v4 as uuidv4 } from "uuid";

const Info = ({ uid, user, userDB }) => {


  const input = useRef();

  const dispatch = useDispatch();

  const [attachment, setAttachment] = useState([]);

  let [nickName, setNickName] = useState(false);

  let [img, setImg] = useState(false);



  const onUsername = (value) => {
    dbService.collection('users').doc(user.uid).update({
      name: value,      
    });
    dispatch(userMiddleware(user.uid, '', 'init'));
    setNickName(false);
  };


  const onFileChange = (e) => {
    const { files } = e.target;
    let file;
    let fileURLs = [];

    file = files[0];
    let reader = new FileReader();
    reader.onload = () => {
      fileURLs[0] = reader.result;
      setAttachment([...fileURLs]);
    };
    reader.readAsDataURL(file);
  };

  const onEnter = (e) => {
    if(e.key != 'Enter'){
      return;
    }
    if(e.key === 'Enter'){
      e.preventDefault();
      onSubmitBtn();
    }
  };

  const onSubmitBtn = () => {
    onUsername(input.current.value);
    input.current.value = '';
  };

  const onSubmit = async(e) => {
    e.preventDefault();
    let attachmentUrl = [];
    if (attachment) {
      const attachmentRef = storageService
        .ref()
        .child(`${uid.uid}/${uuidv4()}`);
      const response = await attachmentRef.putString(
        attachment[0],
        "data_url"
      );
      attachmentUrl.push(await response.ref.getDownloadURL());
    };

    await dbService.collection('users').doc(user.uid).update({
      user_image: attachmentUrl,
    });
    setAttachment([]);
    dispatch(userMiddleware(user.uid, '', 'init'));
    setImg(false);
  };

  const onIconClick = () => {
    setNickName(!nickName);
  }

  const onImgClick = () => {
    setImg(!img);
  }

  return (
    <>
      <S.Id>
        <S.Title>아이디</S.Title>
        <p>{user.email}</p>
      </S.Id>
      <S.NickName>
        <S.Title>닉네임</S.Title>
        {nickName ?
        (<li>
          <input ref={input} type="text" onKeyPress={e=>onEnter(e)}/>
          <button onClick={onSubmitBtn}>제출</button>
        </li>) :
        (userDB.name ? <p>{userDB.name}</p> : <p onClick={onUsername}>닉네임 설정할래?</p>)}
        <S.Icon onClick={onIconClick} className="fas fa-cog"></S.Icon>
      </S.NickName>
      <S.Profile>
        <S.Title>프로필 사진</S.Title>
        {userDB.user_image ? <p><S.ProfileImg src={userDB.user_image} alt="프로필 사진"></S.ProfileImg></p> : <p>사진 추가할래?</p>}
        <S.Icon onClick={onImgClick} className="fas fa-cog"></S.Icon>
        {img && <li>
          <form onSubmit={onSubmit}>
            <input
              accept="image/*"
              type="file"
              onChange={onFileChange}
              name="fileNames[]"
            />
            {attachment && (
              <div>
                {attachment.map((atta, i) => (
                  <img key={i} src={atta} width="50px" height="50px" alt="프로필 사진"/>
                ))}
              </div>
            )}
            <button type="submit">제출</button>
          </form>
        </li>}
      </S.Profile>
    </>
  )
}

export default Info;