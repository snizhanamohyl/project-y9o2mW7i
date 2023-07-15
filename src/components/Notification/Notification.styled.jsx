import { Alert } from "@mui/material";
import styled from "@emotion/styled";


export const AlertStyled = styled(Alert)`
    ${({ severity }) => {
    const severityStyles = {
      error: `
        background-color: #f44336;
        color: #fff;
      `,
      warning: `
        background-color: #ff9800;
        color: #fff;
      `,
      info: `
        background-color: #2196f3;
        color: #fff;
      `,
      success: `
        border: 1px solid #4caf50;
        color: #4caf50;
        position: relative;
        top: 50%;
        z-index: 10000;
        width: 400px;
      `,
    };

    return severityStyles[severity] || '';
  }}
`