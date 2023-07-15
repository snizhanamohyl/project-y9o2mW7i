import ReactDOM from 'react-dom';
import { ModalContent, CloseButton} from './EditUserModal.styled';
import { Modal, Button, Typography, TextField } from '@mui/material';

const portal = document.getElementById('modal-root');

export default function EditUserModal({ isOpen, handleCloseModal }) {
    if (!isOpen) return null;


    return ReactDOM.createPortal(
      <Modal open={isOpen} onClose={handleCloseModal}>
        <ModalContent>
          <CloseButton onClick={handleCloseModal}>
            <Typography>X</Typography>
          </CloseButton>
          <TextField
            type="file"
            // onChange={handleFileUpload}
          />
          <TextField
            type="text"
            // value={userName} onChange={handleUserNameChange}
          />
          <Button
          // onClick={handleSaveChanges}
          >
            Save changes
          </Button>
        </ModalContent>
      </Modal>,
      portal
    );
}

  //   return ReactDOM.createPortal(
  //     <EditModal>
  //       <button className="close-btn" onClick={handleCloseModal}>
  //         X
  //       </button>
  //       {/* <input type="file"
  //                 // onChange={handleFileUpload}
  //             /> */}
  //       <input
  //         type="text"
  //         // value={userName}
  //         // onChange={handleUserNameChange}
  //       />
  //       {/* <button
  //                 // onClick={handleSaveChanges}
  //             >Save changes</button> */}
  //     </EditModal>,
  //     portal
// );
// }
