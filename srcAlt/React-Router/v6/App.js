import { render } from 'react-dom';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

const App = () => {
  const params = useParams();
  // <Route element={<>}/>로 전달받은 컴포넌트 params로 :parameter를 받아올 수 있다.
  // /:id로 설정된 path로 localhost:3000/1 접속 시, params는 {id: '1'}
  // /:id/:author로 설정된 path로 localhost:3000/1/junha 접속시, params는 {id:"1", author:"junha"}
  return (
    (
      <BrowserRouter>
        {JSON.stringify(params)}
        <Header></Header>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Home />} />
            <Route path='teams' element={<Teams />}>
              <Route path=':teamId' element={<Team />} />
              <Route path='new' element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} />
            </Route>
          </Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    ),
    document.getElementById('root')
  );
};

export default App;
