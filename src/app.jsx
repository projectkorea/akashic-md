import { useState } from "react";
import Buttons from "./Buttons.jsx";
import AppClass from "./components/class/AppClass.jsx";
import AppFunction from "./components/function/AppFunction.jsx";

function App() {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const componentMap = {
    AppClass: AppClass,
    AppFunction: AppFunction,
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
