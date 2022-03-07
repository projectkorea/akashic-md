import { Route, Routes, useNavigate } from 'react-router-dom';
import Result from '../pages/Result';
import NotFound from '../pages/NotFound';
import Header from '../parts/Header';
import { useEffect } from 'react';

const Router = () => {
  let navigate = useNavigate();
  useEffect(() => navigate('/result'), []);
  return (
    <>
      <Header />
      <Routes>
        <Route index path='/result' element={<Result />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Router;
