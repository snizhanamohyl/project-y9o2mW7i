import styled from "@emotion/styled";

export const Notification = styled(Alert)`
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
        background-color: #4caf50;
        color: #fff;
      `,
    };

    return severityStyles[severity] || '';
  }}
`