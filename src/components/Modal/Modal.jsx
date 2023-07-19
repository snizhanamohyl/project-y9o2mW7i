import ReactDOM from 'react-dom';
import { Modal } from '@mui/material';
import { useEffect } from 'react';

const portal = document.getElementById('modal-root');

export default function CustomModal({ isOpen, handleCloseModal, children }) {
  useEffect(() => {
    const html = document.querySelector("html");
    
    if (html) {
        html.style.overflow = isOpen ? "hidden" : "auto";
    }
    }, [isOpen]);
  
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Modal open={isOpen} onClose={handleCloseModal}>
      {children}
    </Modal>,
    portal
  );
}
