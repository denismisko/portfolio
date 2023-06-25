import LoaderUtil from "../util/LoaderUtil";

function Loader() {
  
  LoaderUtil();

  return (
    <div className="loader">
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
