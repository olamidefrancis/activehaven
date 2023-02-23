import styled from '@emotion/styled';
import { Box } from '@mui/material';

const ClockContainer = styled(Box)`
  width: 100%;
  .MuiTypography-root {
    font-family: 'Inter', sans-serif;
  }
`;

const TextfieldBox = styled(Box)`
  width: 100%;
  max-width: 600px;
  padding: 3rem 1rem;
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

const ClockTopbar = styled(Box)`
  background: #347295;
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px;
  .MuiButton-root {
    text-transform: none;
    border-radius: 2px;
    font-weight: 550;
  }

  .MuiButton-outlined {
    border: 1px solid #fff;
    color: #fff;
    &:hover {
      border: 1px solid #fff;
    }
  }
  .MuiButton-contained {
    background: #ff0000;
    color: #fff;
    box-shadow: none;
    &:hover {
      background: #ff0000;
    }
  }
`;

const ClockForm = styled(Box)`
  width: 100%;
  .MuiButton-root {
    text-transform: none;
    background: #347295;
    height: 42px;
    font-weight: 550;
    margin: 16px auto;
    padding: 0px 32px;
    border-radius: 4px;
    color: #fff;
    &:hover {
      background: #347295;
    }
  }
`;
export { ClockContainer, TextfieldBox, ClockForm, ClockTopbar };
