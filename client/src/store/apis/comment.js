﻿import { dbService } from "firebase.js";

export const getCommentAPI = async(id) => {
  const response = await dbService.collection("comment").where("post_id","==",id).get();
  // console.log(response);
  return response;
}

export const getMypageCommentAPI = async(id) => {
  const response = await dbService.collection("comment").where("comment_id","==",id).get();
  // console.log(response);
  return response;
}