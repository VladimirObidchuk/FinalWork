import "./Button.scss";
import cn from "classnames";

function Button({ className, onClick, type = "solid", children }) {
  return (
    <button
      type="menu"
      className={cn("button", className, `button--${type}`)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default Button;
