import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();

  const goBack = () => {
    //이전 페이지 이동
    navigate(-1);
  };

  const goArticles = () => {
    //articles 경로로 이동
    navigate('/articles', { replace: true });
  };
  return (
    <div>
      <header style={{ background: 'lightgray', padding: 16, fontSize: 24 }}>
        Header <br />
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticles}>게시글 목록</button>
      </header>
      <main style={{ minHeight: '500px' }}>
        <Outlet />
      </main>
      <footer
        style={{
          background: 'black',
          padding: 1,
          fontSize: 10,
          border: 1,
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          // width: '100%',
        }}
      >
        <h1>copy right 더존5기</h1>
      </footer>
    </div>
  );
};

export default Layout;
<header
  style={{ background: 'lightgray', padding: 16, fontSize: 24 }}
></header>;
