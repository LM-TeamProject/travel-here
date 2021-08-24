﻿import { getMypageCommentAPI, editMypageUserNameAPI } from 'store/apis/comment';
import { dbService } from 'firebase.js';
const { produce } = require('immer');

// Actions
const GET_COMMENT = 'mypageComment/GET_COMMENT';
const GET_COMMENT_USERNAME = 'mypageComment/GET_COMMENT_USERNAME'


// Action 생성자
export const getComment = payload => {
  return {
    type : GET_COMMENT,
    payload,
  }
}

export const editCommentUserName = payload => {
  return {
    type : GET_COMMENT_USERNAME,
    payload,
  }
}


let arr = [];
//thunk
export const mypageCommentMiddleware = (id, type) => async dispatch => {
  try{
    const response = await getMypageCommentAPI(id);
    response.forEach(doc => {
      arr.push(doc.data());
    })
    let array = Object.assign([], arr);
    dispatch(getComment(array));
    if(type === 'finish'){
      arr = [];
    }
  }catch(error){
    console.log(error);
  }
};

let editObj = {arr: [], value: ''};
export const editUserNameThunk = (id, value, type) => async dispatch => {
  try{
    const response = await editMypageUserNameAPI(id);
    response.forEach(doc => {
      editObj.arr.push(doc.data());
      editObj.value = value;
    })
    let array = Object.assign([], editObj.arr);
    editObj.arr = array;
    dispatch(editCommentUserName(editObj));
    if(type === 'finish'){
      editObj.arr = [];
      editObj.value = [];
    }
  }catch(error){
    console.log(error);
  }
};



// Reducer
const initialState = {
  data : [],
};

const reducer = (prevState=initialState, action) => {
  return produce(prevState, (draft) => {
    switch(action.type){
      case GET_COMMENT :
        draft.data = action.payload;
        break;
      case GET_COMMENT_USERNAME :
        draft.data = action.payload;
        for(let i=0; i<draft.data.arr.length; i++){
          dbService.collection('comment').doc(draft.data.arr[i].comment_id).update({
            comment_writer: draft.data.value,      
          });
        }
        break;
      default :
        return prevState;
    }
  })
};


export default reducer;

