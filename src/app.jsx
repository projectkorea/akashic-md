import { useState } from "react";
import Buttons from "./Buttons.jsx";
import AppClass from "./components/ClassComponent/App.jsx";
import AppFunc from "./components/FuncComponent/App.jsx";
import AppCRUD from "./components/CRUDComponent/App.jsx";
// import AppStyle from "./components/StyleComponent/App.jsx";
import CoffeeOrderComponent from "./components/CoffeeOrderComponent.jsx";
import AJAXComponent from "./components/AJAXComponent.jsx";
import BlinkingComponent from "./components/BlinkingComponent.jsx";


function App() {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const componentMap = {
    AppClass,
    AppFunc,
    AppCRUD,
    //AppStyle,
    CoffeeOrderComponent,
    AJAXComponent,
    BlinkingComponent,
  };

  const renderComponent = (componentName) => {
    const Component = componentMap[componentName];
    return Component ? <Component /> : null;
  };

  return (
    // selectedComponent가 바뀔 때 마다 <></>를 리랜더링함.
    <>
      <Buttons
        componentMap={componentMap}
        setSelectedComponent={setSelectedComponent}
      />
      <div className="division" style={{ margin: "30px 0" }}></div>
      {selectedComponent && renderComponent(selectedComponent)}
    </>
  );
}

export default App;
