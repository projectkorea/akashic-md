import PropTypes from "prop-types";

function Buttons({ componentMap, setSelectedComponent }) {
  const componentNames = Object.keys(componentMap);
  return (
    // make buttons align center
    <div style ={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      {componentNames.map((name) => {
        return (
          <button
            className="button-17"
            style={{ margin: "5px" }}
            key={name}
            onClick={() => setSelectedComponent(name)}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
}

Buttons.propTypes = {
  componentMap: PropTypes.object.isRequired,
  setSelectedComponent: PropTypes.func.isRequired,
};

export default Buttons;
