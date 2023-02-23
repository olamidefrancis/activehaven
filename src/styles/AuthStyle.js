import styled from '@emotion/styled';
import { Box } from '@mui/material';

const AuthContainer = styled(Box)`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 3rem 1rem;
  .MuiTypography-root {
    font-family: 'Inter', sans-serif;
  }
  @media (min-width: 600px) {
    padding: 3rem 2rem;
  }

  .MuiButton-root {
    text-transform: none;
    background: #347295;
    height: 56px;
    font-weight: 550;
    margin-top: 16px;
    color: #fff;
    &:hover {
      background: #347295;
    }
  }
`;

const TextfieldBox = styled(Box)`
  width: 100%;
  margin: 24px 0;
  .MuiFormControl-root {
    height: 56px;
    .MuiInputBase-root {
      height: 100%;
      .MuiInputBase-input {
        height: 100%;
      }
    }
  }
`;

export { AuthContainer, TextfieldBox };
