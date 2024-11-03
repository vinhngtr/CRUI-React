import "./header.css";
import PropTypes from "prop-types";

export default function Header({ showFormAdd }) {
  const onAdd = () => {
    showFormAdd(true);
  };
  return (
    <div className="cpHeader">
      <a href="#" className="logo">
        Crash course
      </a>
      <button onClick={onAdd} style={{ display: "block" }}>
        Add course
      </button>
    </div>
  );
}
Header.propTypes = {
  showFormAdd: PropTypes.func.isRequired,
};
