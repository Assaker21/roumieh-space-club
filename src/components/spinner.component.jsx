import { ColorRing } from "react-loader-spinner";

function Spinner() {
  return (
    <div className="spinner">
      <ColorRing visible={true} height="120" width="120" ariaLabel="blocks-loading" wrapperStyle={{}} wrapperClass="blocks-wrapper" colors={["white", "white", "white", "white", "white"]} />
    </div>
  );
}

export default Spinner;
