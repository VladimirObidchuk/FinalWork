import "./Button.scss";
import cn from "classnames";

function Button({ className, onClick, type = "solid" }) {
  return (
    <button
      type="menu"
      className={cn("button", className, `button--${type}`)}
      onClick={onClick}
    >
      buy now
    </button>
  );
}
export default Button;
