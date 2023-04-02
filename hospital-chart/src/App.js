import BarChart from './Component/BarChart';
import CtBart from './Component/CtBar';
import Coming from './Component/Coming.jsx';
import Scatter from './Component/Scantter';
import SankeyGrapth from './Component/SankeyGraph';
import Sankey from './Component/Sankey.jsx';
import './css/Chart.css';
import Dnd from './Component/dnd.jsx';

function App() {
  return (
    <div className='container'>
      <div className='left'>
        <div className='item-container'>
          <SankeyGrapth />
        </div>
        <div className='item-container'>
          <CtBart />
        </div>
        <div className='item-container'>
          <Dnd />
        </div>
      </div>
      <div className='center'>
        <Sankey />
      </div>
      <div className='right'>
        <Dnd />
        <Scatter />
        <Coming />
      </div>
    </div>
  );
}

export default App;
