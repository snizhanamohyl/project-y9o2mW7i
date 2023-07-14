const { styled } = require('styled-components');

export const EditModal = styled.div`
display: flex;
justify-content: center;
align-items:center;

border: 2px solid green;
  position: fixed;
  inset: 0; /* inset sets all 4 values (top right bottom left) much like how we set padding, margin etc., */
  background-color: rgba(0, 0, 0, 0.6);
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 999;
  padding: 40px 20px 20px;
}
`;