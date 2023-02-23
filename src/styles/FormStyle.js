import styled from '@emotion/styled';
import { Box } from '@mui/material';

const FormContainer = styled(Box)`
  width: 100%;
  .MuiTypography-root {
    font-family: 'Inter', sans-serif;
  }
`;

const FormHeader = styled(Box)`
  width: 100%;
  background: #347295;
  padding: 1rem;
  .MuiDivider-root {
    background: #fff;
    width: 30%;
    margin: 0 auto;
  }
  @media (max-width: 600px) {
    .MuiTypography-h3 {
      font-size: 1.5rem;
    }
    .MuiDivider-root {
      width: 70%;
    }
  }
`;

const FormBody = styled(Box)`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
  margin: 24px auto;
  .MuiFormControl-root {
    height: 56px;
    .MuiInputBase-root {
      height: 100%;
      .MuiInputBase-input {
        height: 100%;
      }
    }
  }
  .MuiButton-root {
    text-transform: none;
    background: #347295;
    height: 42px;
    font-weight: 550;
    margin-top: 16px;
    padding: 0px 32px;
    border-radius: 4px;
    color: #fff;
    &:hover {
      background: #347295;
    }
  }
`;

export { FormContainer, FormHeader, FormBody };
