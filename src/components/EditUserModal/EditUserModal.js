import ReactDOM from 'react-dom';
// import PortalReactDOM from 'react-dom';
import { EditModal } from './EditUserModal.styled';

const portal = document.getElementById('modal-root');

export default function EditUserModal({ isOpen, handleCloseModal }) {
    if (!isOpen) return null;

  return ReactDOM.createPortal(
    <EditModal>
      <button className="close-btn" onClick={handleCloseModal}>
        X
      </button>
      {/* <input type="file"
                // onChange={handleFileUpload}
            /> */}
      <input
        type="text"
        // value={userName}
        // onChange={handleUserNameChange}
      />
      {/* <button
                // onClick={handleSaveChanges}
            >Save changes</button> */}
    </EditModal>,
    portal
  );
}
