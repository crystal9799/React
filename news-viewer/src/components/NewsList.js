import React, { useCallback, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import NewsItems from './NewsItems';
import axios from '../../node_modules/axios/index';
import usePromise from './usePromise';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  //상태 변수로 관리 ( 목록, 로딩중 )
  //1. 서버에서 자료를 로딩한다 -> 비동기
  //2. 서버에 요청한 자료가 로딩중 일때는 화면에 로딩중 ...
  //3. 서버에 요청한 자료가 로딩 완료되면 출력
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=ae3df86896064a709c97f5898afccbc5`,
    );
  }, [category]);

  if (loading) {
    return <NewsListBlock>대기중 ...</NewsListBlock>;
  }

  //아직 response 값이 설정되지 않았을 때
  if (!response) {
    return null;
  }
  //에러가 발생했을 때
  if (error) {
    return <NewsListBlock>에러 발생!</NewsListBlock>;
  }

  //response 값이 유효할 때
  const { articles } = response.data;
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItems article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
