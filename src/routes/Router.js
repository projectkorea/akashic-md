import { Route, Routes, useNavigate } from 'react-router-dom';
import Result from '../pages/Result';
import NotFound from '../pages/NotFound';
import Header from '../parts/Header';
import { useEffect } from 'react';
import Navigation from '../parts/Navigation';

const Router = () => {
  let navigate = useNavigate();
  useEffect(() => navigate('/result'), []);
  return (
    <>
      <Header />
      <Navigation />
      <Routes>
        <Route path='/result' element={<Result />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Router;
