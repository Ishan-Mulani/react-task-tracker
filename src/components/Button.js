import PropTypes from "prop-types";

const Button = ({ text, color, onClick }) => {
  return (
    <button
      className="btn"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "Black",
};

Button.propTypes = {
  text: PropTypes.string,
};
export default Button;
