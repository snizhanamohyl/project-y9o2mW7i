import ReactDOM from 'react-dom';
import { Modal } from '@mui/material';

const portal = document.getElementById('modal-root');

export default function CustomModal({ isOpen, handleCloseModal, children }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Modal open={isOpen} onClose={handleCloseModal}>
      {children}
    </Modal>,
    portal
  );
}
