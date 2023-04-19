import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContainer, TextfieldBox } from '../styles/AuthStyle';
import { toast } from 'react-toastify';

const Signin = () => {
  const navigate = useNavigate();
  const [values, setValues] = React.useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
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
    setLoading(true);
    fetch('http://localhost:3001/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    })
      .then((response) => {
        response.json();
        setLoading(false);
        if (response.status === 200) {
          toast.success('Login Successful');
        } else if (response.status === 400) {
          toast.error('Wrong Credentials');
        } else {
          toast.error('Login Failed');
        }
      })
      .then((data) => {
        console.log(data);
        if (data === 'go') {
          
          navigate('/clock');
          localStorage.setItem('activeUser', values.email);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <AuthContainer>
      <Typography variant='h4' fontWeight={700} align='center' mb={2}>
        Sign In
      </Typography>

      <Typography variant='body1' align='center'>
        Sign in to access your account. Don't have an account?{' '}
        <Link
          to='/signup'
          style={{ textDecoration: 'none', display: 'inline' }}
        >
          <Typography
            variant='body1'
            fontWeight={600}
            color='#347295'
            ml={0.2}
            display='inline'
          >
            Sign Up
          </Typography>
        </Link>
      </Typography>

      <TextfieldBox>
        <Typography variant='body1' fontWeight={500} mb={1}>
          Email
        </Typography>
        <TextField
          variant='outlined'
          fullWidth
          autoFocus
          name='email'
          value={values.email}
          onChange={handleChange('email')}
          type='email'
          required
          // show error when field has been touched and is empty
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
            name='password'
            value={values.password}
            onChange={handleChange('password')}
            required
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
      <LoadingButton
        variant='contained'
        loading={loading}
        fullWidth
        onClick={handleSubmit}
      >
        Sign In
      </LoadingButton>
    </AuthContainer>
  );
};

export default Signin;
