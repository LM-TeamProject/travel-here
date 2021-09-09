# Travel-here

✈ travel-here는 전 세계의 여행후기글을 볼 수 있는 여행후기 플랫폼입니다.

<br>

## 목차

1. [팀원 소개](#1)
2. [기술 스택](#2)
3. [프로젝트 설치 및 실행 방법](#3)
4. [폴더 디렉토리](#4)
5. [프로젝트 기능 설명](#5)
6. [버그](#6)
7. [아쉬운 점 / 개선할 점](#7)

<br>

## 1. 팀원 <a id="1"></a>

- 전상우(팀장)
- 김현수
- 박현정
  - 이런것들 했다
- 임상기

<br>

## 2. 기술 스택 <a id="2"></a>

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=black">
<img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=black">
<img src="https://img.shields.io/badge/Redux_Thunk-a88bd6?style=for-the-badge&logo=Redux&logoColor=black">
<img src="https://img.shields.io/badge/styled_Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=black">
<img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=black">

<br>
<br>

## 3. 프로젝트 설치 및 실행 방법 <a id="3"></a>

```js
$ cd client
$ npm update
$ yarn start
```

<br>

## 4. 폴더 디렉토리 <a id="4"></a>

```
📦public
┗ 📜index.html
📦src
┣ 📂assets
┃ ┗ 📂images
┃ ┃ ┣ 📜background.jpeg
┃ ┃ ┣ 📜blur.png
┃ ┃ ┗ 📜logo.png
┣ 📂components
┃ ┣ 📂Category
┃ ┃ ┣ 📜Category.jsx
┃ ┃ ┣ 📜Category.style.js
┃ ┃ ┗ 📜CategorySkeleton.jsx
┃ ┣ 📂Comment
┃ ┃ ┣ 📜Comment.jsx
┃ ┃ ┣ 📜Comment.style.js
┃ ┃ ┣ 📜CommentList.jsx
┃ ┃ ┗ 📜styleConstants.js
┃ ┣ 📂GreetingCard
┃ ┃ ┣ 📜GreetingCard.jsx
┃ ┃ ┗ 📜GreetingCard.style.js
┃ ┣ 📂Header
┃ ┃ ┣ 📜Header.jsx
┃ ┃ ┗ 📜Header.style.js
┃ ┣ 📂Loading
┃ ┃ ┗ 📜Loading.jsx
┃ ┣ 📂LoginHelp
┃ ┃ ┣ 📜LoginHelp.jsx
┃ ┃ ┗ 📜LoginHelp.style.js
┃ ┣ 📂LoginModal
┃ ┃ ┣ 📂footer
┃ ┃ ┃ ┣ 📜LoginFooter.jsx
┃ ┃ ┃ ┗ 📜LoginFooter.style.js
┃ ┃ ┣ 📂header
┃ ┃ ┃ ┣ 📜LoginHeader.jsx
┃ ┃ ┃ ┗ 📜LoginHeader.style.js
┃ ┃ ┣ 📜LoginModalOpen.jsx
┃ ┃ ┗ 📜LoginModalOpen.style.js
┃ ┣ 📂Logo
┃ ┃ ┣ 📜Logo.jsx
┃ ┃ ┗ 📜Logo.style.js
┃ ┣ 📂Mypage
┃ ┃ ┣ 📂bookmark
┃ ┃ ┃ ┣ 📜Bookmark.jsx
┃ ┃ ┃ ┗ 📜Bookmark.style.js
┃ ┃ ┣ 📂comment
┃ ┃ ┃ ┣ 📜Comment.jsx
┃ ┃ ┃ ┗ 📜Comment.style.js
┃ ┃ ┣ 📂info
┃ ┃ ┃ ┣ 📜Info.jsx
┃ ┃ ┃ ┗ 📜Info.style.js
┃ ┃ ┣ 📂Password
┃ ┃ ┃ ┣ 📜Password.jsx
┃ ┃ ┃ ┗ 📜Password.style.js
┃ ┃ ┣ 📂post
┃ ┃ ┃ ┣ 📜Post.jsx
┃ ┃ ┃ ┗ 📜Post.style.js
┃ ┃ ┣ 📜Mypage.jsx
┃ ┃ ┣ 📜Mypage.style.js
┃ ┃ ┗ 📜styleConstatns.js
┃ ┣ 📂NavBar
┃ ┃ ┣ 📜NavBar.jsx
┃ ┃ ┗ 📜NavBar.style.js
┃ ┣ 📂NavLinks
┃ ┃ ┣ 📜NavLinks.jsx
┃ ┃ ┗ 📜NavLinks.style.js
┃ ┣ 📂Post
┃ ┃ ┣ 📂PostSlider
┃ ┃ ┃ ┣ 📜ContentPlaceholder.js
┃ ┃ ┃ ┣ 📜PostSlider.jsx
┃ ┃ ┃ ┗ 📜PostSlider.style.js
┃ ┃ ┣ 📜NoneMember.jsx
┃ ┃ ┣ 📜Post.jsx
┃ ┃ ┣ 📜Post.style.js
┃ ┃ ┗ 📜styleConstants.js
┃ ┣ 📂PostCard
┃ ┃ ┣ 📜ContentPlaceholder.js
┃ ┃ ┣ 📜PostCard.jsx
┃ ┃ ┗ 📜PostCard.style.js
┃ ┗ 📂Write
┃ ┃ ┣ 📂WriteBtn
┃ ┃ ┃ ┣ 📜WriteBtn.jsx
┃ ┃ ┃ ┗ 📜WriteBtn.style.js
┃ ┃ ┗ 📂WriteModal
┃ ┃ ┃ ┣ 📜UpdateModal.jsx
┃ ┃ ┃ ┣ 📜WriteModal.jsx
┃ ┃ ┃ ┗ 📜WriteModal.style.js
┣ 📂hooks
┃ ┗ 📜useAuth.js
┣ 📂pages
┃ ┣ 📂Board
┃ ┃ ┣ 📜Board.jsx
┃ ┃ ┗ 📜Board.style.js
┃ ┣ 📜CategoryList.jsx
┃ ┣ 📜Home.jsx
┃ ┣ 📜Login.jsx
┃ ┣ 📜LoginFind.jsx
┃ ┣ 📜MyPage.jsx
┃ ┣ 📜NotFound.jsx
┃ ┣ 📜NotFound.style.js
┃ ┗ 📜Write.jsx
┣ 📂store
┃ ┣ 📂apis
┃ ┃ ┣ 📜board.js
┃ ┃ ┣ 📜comment.js
┃ ┃ ┣ 📜delete.js
┃ ┃ ┣ 📜post.js
┃ ┃ ┣ 📜postLike.js
┃ ┃ ┗ 📜userLike.js
┃ ┣ 📂modules
┃ ┃ ┣ 📜board.js
┃ ┃ ┣ 📜bookmark.js
┃ ┃ ┣ 📜category.js
┃ ┃ ┣ 📜comment.js
┃ ┃ ┣ 📜delete.js
┃ ┃ ┣ 📜login.js
┃ ┃ ┣ 📜mypageBookmark.js
┃ ┃ ┣ 📜mypageComment.js
┃ ┃ ┣ 📜mypagePost.js
┃ ┃ ┣ 📜nav.js
┃ ┃ ┣ 📜postLike.js
┃ ┃ ┣ 📜user.js
┃ ┃ ┣ 📜userLike.js
┃ ┃ ┗ 📜view.js
┃ ┗ 📜index.js
┣ 📂styles
┃ ┣ 📜Background.js
┃ ┗ 📜GlobalStyle.js
┣ 📂utils
┃ ┗ 📜getDate.js
┣ 📜App.js
┣ 📜auth_service.js
┣ 📜firebase.js
┣ 📜history.js
┗ 📜index.js
```

<br>

## 5. 프로젝트 기능 설명 <a id="5"></a>

스타일링이 모두 완성되면 gif 추가

#### 지역별 게시글 모아보기
![1](https://user-images.githubusercontent.com/68575268/132719758-2d850047-15f5-4ca7-aa17-906db95c3ff2.gif)

#### 보고 싶은 게시글 선택하여 살펴보기
![Animation](https://user-images.githubusercontent.com/68575268/132719768-569010ba-cf96-4f05-a61d-9e9cbdbde56c.gif)

#### 댓글, 좋아요, 북마크 설정 기능
![댓글 좋아요 북마크](https://user-images.githubusercontent.com/68575268/132719775-c3c39141-d7b4-4378-a15e-af001d826d67.gif)

#### 본인이 쓴 글 수정, 삭제 기능
![수정 가능](https://user-images.githubusercontent.com/68575268/132719776-a4b4e9ec-1c95-48e3-bca3-f78ec2420edf.gif)


<br>

## 6. 버그 <a id="6"></a>

<br>

## 7. 아쉬운 점 / 개선할 점 <a id="7"></a>
