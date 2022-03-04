import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    (
      <BrowserRouter>
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
