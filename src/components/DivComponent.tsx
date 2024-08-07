// components/DivComponent.tsx
const DivComponent = (props: any) => {
  return <div style={{ border: '1px solid red', padding: '10px' }}>{props.children}</div>;
};

export default DivComponent;
