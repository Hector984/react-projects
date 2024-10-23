import "../modal.css"

export const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <input className="modal-input" type="text" placeholder="Escribe algo..." />
        <button className="light-button">Aceptar</button>
      </div>
    </div>
  );
};
