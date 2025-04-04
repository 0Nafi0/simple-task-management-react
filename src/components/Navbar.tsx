import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">TechStart Inc.</a>
      </div>
      <div className="navbar-end">
        <a className="btn btn-neutral" onClick={() => navigate("add-task")}>
          Add a task
        </a>
      </div>
    </div>
  );
}

export default Navbar;
