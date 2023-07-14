import { EditModal } from './EditUserModal.styled';
export default function EditUserModal() {
    return (
      <EditModal>
        <button className="close-btn" onClick={handleCloseModal}>
          X
        </button>
            <input type="file"
                // onChange={handleFileUpload}
            />
            <input type="text"
                // value={userName}
                // onChange={handleUserNameChange}
            />
            <button
                // onClick={handleSaveChanges}
            >Save changes</button>
      </EditModal>
    );
}