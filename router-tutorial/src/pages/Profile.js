import React from 'react';
import { useParams } from 'react-router-dom';

const userInfos = {
  velopert: {
    name: '김민준',
    description: '리액트를 좋아하는 개발자',
    age: 20,
  },
  gildong: {
    name: '홍길동',
    description: '고전 소설 홍길동전의 주인공',
    age: 18,
  },
};

const Profile = () => {
  const prarams = useParams();
  const userInfo = userInfos[prarams.userid];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {userInfo ? (
        <div>
          <h2>{userInfo.name}</h2>
          <p>설명 : {userInfo.description}</p>
          <p>나이 :{userInfo.age}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;
