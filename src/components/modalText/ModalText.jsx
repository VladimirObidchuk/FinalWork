import "./ModalText.scss";
function ModalText(props) {
  return (
    <div className="modal__text">
      <h3 className="modal__title">{props.value}</h3>
    </div>
  );
}
export default ModalText;
