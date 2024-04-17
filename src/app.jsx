import { useState } from "react";
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

  const componentNames = Object.keys(componentMap);

  return (
    <>
      {componentNames.map((name) => (
        <button key={name} onClick={() => setSelectedComponent(name)}>
          {name}
        </button>
      ))}

      {selectedComponent && renderComponent(selectedComponent)}
    </>
  );
}

export default App;
