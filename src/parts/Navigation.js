import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/alpha'>Alpha</Link>
        </li>
        <li>
          <Link to='/beta'>Beta</Link>
        </li>
        <li>
          <Link to='/charlie'>Charlie</Link>
        </li>
        <li>
          <Link to='/delta'>Delta</Link>
        </li>
        <li>
          <Link to='/echo'>Echo</Link>
        </li>
        <li>
          <Link to='/result'>Result</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
