import styled from 'styled-components';
import { Form } from 'formik';

export const CloseButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  border: none;
  padding: 0;
  background-color: inherit;
`;

export const CloseIcon = styled.svg`
  width: 20px;
  height: 20px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
// export const UploadWindow = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: auto;
//   margin-bottom: 54px;
//   background-color: var(--iconAvatar);
//   border-radius: 50%;
//   width: 88px;
//   height: 88px;

//   @media screen and (min-width: 768px) {
//     width: 103px;
//     height: 103px;
//   }
// `;

// export const UploadLabel = styled.label`
//   cursor: pointer;
// `;

// export const UserIconAvatar = styled.svg``;

// export const PlusIcon = styled.svg`
//   position: absolute;
//   top: 102px;
//   right: 134px;

//   @media screen and (min-width: 768px) {
//     top: 131px;
//     right: 198px;
//   }

//   @media screen and (min-width: 768px) {
//     top: 141px;
//     right: 208px;
//   }
// `;

// export const UploadInput = styled.input`
//   display: none;
//   width: 40px;
//   height: 40px;
// `;

// export const Form = styled.form`
//     display: block;
//     width: 100%;
// `

// export const NameEditInput = styled.input`
//   width: 100%;
//   height: 48px;
//   border: 1px solid grey;
//   border-radius: 6px;
//   outline: none;
//   padding-left: 40px;
//   display: flex;
//   justify-content: center;
//   transition: color var(--transition-time) var(--transition-function);
//   color: var(--dark-accent);
//   line-height: normal;
//   letter-spacing: -0.28px;
//   opacity: 0.800000011920929;

//   &:hover,
//   &:focus {
//     border: 1px solid var(--accent);
//   }

//   @media screen and (min-width: 768px) {
//     height: 58px;
//     font-size: 18px;
//     letter-spacing: -0.36px;
//     padding-left: 51px;
//   }
// `;

// export const UserIcon = styled.svg`
//   position: absolute;
//   bottom: 119px;
//   left: 38px;
//   height: 18px;
//   width: 18px;

//   @media screen and (min-width: 768px) {
//     bottom: 148px;
//     left: 59px;
//     height: 24px;
//     width: 24px;
//   }

//   @media screen and (min-width: 1440px) {
//     bottom: 160px;
//     left: 69px;
//   }
// `;

// export const PencilIcon = styled.svg`
//   position: absolute;
//   bottom: 112px;
//   right: 38px;
//   height: 17px;
//   width: 17px;
//   translate: 0 -50%;
//   /* fill: transparent; */

//   @media screen and (min-width: 768px) {
//     bottom: 141px;
//     right: 59px;
//     height: 19px;
//     width: 19px;

//     @media screen and (min-width: 1440px) {
//       bottom: 152px;
//       right: 68px;
//     }
//   }
// `;

// export const SaveButton = styled.button`
//   display: flex;
//   width: 100%;
//   height: 49px;
//   margin-top: 24px;

//   justify-content: center;
//   align-items: center;
//   border-radius: 6px;
//   background: var(--accent);
//   color: var(--bg-color);
//   line-height: 1.28;
//   transition: color var(--transition-time) var(--transition-function);

//   &:hover,
//   &:focus {
//     color: var(--dark-accent);
//   }

//   @media screen and (min-width: 768px) {
//     font-size: 16px;
//     line-height: 1.12;
//   }
// `;






// const slideDown = keyframes`
//   0% {
//     opacity: 0;
//   }
//   100% {
//     opacity: 1;
//   }
// `;

// const slideUpAndFadeOut = keyframes`
//   0% {
//     opacity: 1;
//   }
//   100% {
//     opacity: 0;
//   }
// `;

// export const ModalWrapper = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: 330px;
//   height: 327px;
//   padding: 32px 24px;
//   background-color: ${p => p.theme.colors.bodyBg};
//   box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
//   border-radius: ${p => p.theme.radii.modal};
//   animation: ${p => (p.isShown ? slideDown : slideUpAndFadeOut)} 500ms
//     ease-in-out ${p => (p.isShown ? '0ms' : '250ms')};

//   @media screen and (min-width: 768px) {
//     width: 480px;
//     height: 402px;
//     padding: 50px 40px;
//   }

//   @media screen and (min-width: 1440px) {
//     width: 500px;
//     height: 425px;
//     padding: 60px 50px;
//   }
// `;

// export const CloseBtn = styled.button`
//   position: absolute;
//   top: 18px;
//   right: 18px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 0;
//   background-color: transparent;
//   border: none;

//   @media screen and (min-width: 768px) {
//     top: 24px;
//     right: 24px;
//   }
// `;
// export const CrossIconStyled = styled(CrossIcon)`
//   width: 20px;
//   height: 20px;
//   stroke: ${p => p.theme.colors.mainBtnText};

//   @media screen and (min-width: 768px) {
//     width: 24px;
//     height: 24px;
//   }
// `;

export const FormStyled = styled(Form)`
  input[type='file'] {
    width: 0;
    height: 0;
    opacity: 0;
    position: absolute;
    z-index: -1;
    display: block;
    padding: 0;
  }

  & img {
    width: 88px;
    height: 88px;
    border-radius: 50%;

    @media screen and (min-width: 768px) {
      width: 103px;
      height: 103px;
    }
  }
`;

export const UserAvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 54px;

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 52px;
  }
`;

export const UserImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-bottom: 54px;
  background-color: var(--iconAvatar);
  border-radius: 50%;
  width: 88px;
  height: 88px;

  @media screen and (min-width: 768px) {
       width: 103px;
    height: 103px;
   }
  
`;
  

 /* export const InputButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;

export const NameLabel = styled.label`
  width: 100%;
  position: relative;
`;

export const NameInput = styled(Field)`
  width: 282px;
  height: 48px;
  padding: 14px;
  padding-left: 40px;

  font-size: 14px;
  letter-spacing: ${p => p.theme.letterSpacings.content};
  line-height: ${p => p.theme.lineHeights.searchSelect};
  color: ${p => p.theme.colors.mainDark};
  opacity: 0.8;

  outline: none;
  border: ${p => p.border};

  border-radius: ${p => p.theme.radii.btnStandart};
  background-color: transparent;

  @media screen and (min-width: 768px) {
    width: 400px;
    height: 58px;
    font-size: 18px;
    padding: 18px;
    padding-left: 51px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 16px;
    padding-right: 18px;
    padding-bottom: 16px;
  }
`;

export const UserIconStyled = styled(UserIcon)`
  position: absolute;
  width: 18px;
  height: 18px;
  stroke: ${p => p.stroke};
  top: 50%;
  left: 16.5px;
  transform: translateY(-50%);

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const EditBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 14px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  padding: 0;
  border: none;
  transition: ${p => p.theme.transitions.main};

  @media screen and (min-width: 768px) {
    right: 18px;
  }

  & svg {
    stroke: ${p => p.theme.colors.mainDark};
    width: 17px;
    height: 17px;

    @media screen and (min-width: 768px) {
      width: 19px;
      height: 19px;
    }
  }
`;

export const SubmitBtn = styled.button`
  width: 282px;
  height: 49px;
  padding: 14px 84px;
  background-color: ${p => p.theme.colors.mainAccent};
  border-radius: ${p => p.theme.radii.btnStandart};
  border: none;

  font-family: ${p => p.theme.fonts.btnStandart};
  line-height: ${p => p.theme.lineHeights.extraContent};
  font-size: 14px;
  white-space: nowrap;

  color: ${p => p.theme.colors.btnTextLight};
  transition: ${p => p.theme.transitions.main};

  &:disabled {
    opacity: 0.7;
    pointer-events: none;
  }

  @media screen and (min-width: 768px) {
    width: 400px;
    height: 59px;
    padding: 18px 143px;
    font-size: 16px;
    line-height: ${p => p.theme.lineHeights.btnText};
  }

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.btnHoverBg};
  } */

  export const ErrorMessage = styled.p`
    position: absolute;
    color: red;
    top: 50%;
    left: ${p => (p.location === 'file' ? '24px' : '0')};
    transform: ${p =>
      p.location === 'file' ? 'translateY(-150%)' : 'translateY(-50%)'};
    font-size: 11px;

    @media screen and (min-width: 768px) {
      left: ${p => (p.location === 'file' ? '40px' : '0')};
      font-size: 14px;
    }

    @media screen and (min-width: 1440px) {
      left: ${p => (p.location === 'file' ? '50px' : '0')};
    }
  `;