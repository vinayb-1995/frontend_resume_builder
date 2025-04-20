import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="pange-not-found">
      <h2>404 page not found </h2>
      <Link to="/">Clikc to navigate home...</Link>
    </div>
  );
};
export default PageNotFound;
