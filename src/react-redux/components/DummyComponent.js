import ClickButton from './ClickButton';
import DisplayUser from './DisplayUser';
import WithReduxComponent from './WithReduxComponent';

const DummyComponent = () => {
  return (
    <div style={{ border: '2px solid black' }}>
      <ClickButton
        initMoney={10000}
        onClick={() => {}}
        name={'HAHAHA WIFE'}
      ></ClickButton>
      <DisplayUser name={'HAHAHA WIFE'} money={10000}></DisplayUser>
      <WithReduxComponent />
    </div>
  );
};

export default DummyComponent;
