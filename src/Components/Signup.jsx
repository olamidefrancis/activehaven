import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContainer, TextfieldBox } from '../styles/AuthStyle';

const Signup = () => {
  const navigate = useNavigate();
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    age: '',
    sex: 'female',
  });
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        password: values.password,
        phone: values.phone,
        age: values.age,
        sex: values.sex,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === 'go') {
          navigate('/clock');
        }
      });
  };

  return (
    <AuthContainer>
      <Typography variant='h4' fontWeight={700} align='center' mb={2}>
        Sign In
      </Typography>

      <Typography variant='body1' align='center'>
        Sign un to create your account. Have an account already?{' '}
        <Link
          to='/signin'
          style={{ textDecoration: 'none', display: 'inline' }}
        >
          <Typography
            variant='body1'
            fontWeight={600}
            color='#347295'
            ml={0.2}
            display='inline'
          >
            Sign In
          </Typography>
        </Link>
      </Typography>

      <TextfieldBox>
        <Typography variant='body1' fontWeight={500} mb={1}>
          Name
        </Typography>
        <TextField
          variant='outlined'
          fullWidth
          value={values.name}
          onChange={handleChange('name')}
          type='text'
        />
      </TextfieldBox>
      <TextfieldBox>
        <Typography variant='body1' fontWeight={500} mb={1}>
          Email
        </Typography>
        <TextField
          variant='outlined'
          fullWidth
          value={values.email}
          onChange={handleChange('email')}
          type='email'
        />
      </TextfieldBox>
      <TextfieldBox>
        <Typography variant='body1' fontWeight={500} mb={1}>
          Phone Number
        </Typography>
        <TextField
          variant='outlined'
          fullWidth
          value={values.phone}
          onChange={handleChange('phone')}
          type='email'
        />
      </TextfieldBox>
      <TextfieldBox>
        <Typography variant='body1' fontWeight={500} mb={1}>
          Age
        </Typography>
        <TextField
          variant='outlined'
          fullWidth
          value={values.age}
          onChange={handleChange('age')}
          type='email'
        />
      </TextfieldBox>

      <TextfieldBox>
        <Typography variant='body1' fontWeight={500} mb={1}>
          Password
        </Typography>
        <FormControl variant='outlined' fullWidth>
          {' '}
          <OutlinedInput
            id='outlined-adornment-password'
            type={showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge='end'
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </TextfieldBox>
      <Box mt={1.5}>
        <Typography variant='body1' fontWeight={500} mb={1}>
          Gender
        </Typography>
        <FormControl>
          <RadioGroup
            aria-labelledby='demo-radio-buttons-group-label'
            defaultValue='female'
            name='radio-buttons-group'
            value={values.sex}
            onChange={handleChange('sex')}
          >
            <FormControlLabel
              value='female'
              control={<Radio />}
              label='Female'
            />
            <FormControlLabel value='male' control={<Radio />} label='Male' />
            <FormControlLabel value='other' control={<Radio />} label='Other' />
          </RadioGroup>
        </FormControl>
      </Box>
      <Button variant='contained' fullWidth onClick={handleSubmit}>
        Sign In
      </Button>
    </AuthContainer>
  );
};

export default Signup;
