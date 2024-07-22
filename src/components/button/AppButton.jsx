// import { BeatLoader } from "react-spinners";
import PropTypes from "prop-types";

export const AppButton = ({ containerStyle, type = "button", isDisabled = false, handleClick, variant = "default", label = "Submit", isLoading, bgColor = "bg-[var(--app-blue)]" }) => {
  return (
    <button disabled={isDisabled} type={type} className={variant === "default" ? ` ${containerStyle} button ${bgColor} ` : variant === "transparent" ? ` ${containerStyle}  transparentButton ` : `${containerStyle} textButton `} onClick={handleClick}>
      {isLoading}
      {label}
    </button>
  );
};

AppButton.propTypes = {
  containerStyle: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  isDisabled: PropTypes.bool,
  handleClick: PropTypes.func,
  variant: PropTypes.oneOf(["default", "transparent", "text"]),
  label: PropTypes.string,
  isLoading: PropTypes.bool,
  bgColor: PropTypes.string,
};

AppButton.defaultProps = {
  containerStyle: "",
  type: "button",
  isDisabled: false,
  handleClick: () => { },
  variant: "default",
  label: "Submit",
  isLoading: false,
  bgColor: "bg-[var(--app-blue)]",
};
