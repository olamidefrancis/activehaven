import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContainer, TextfieldBox } from '../styles/AuthStyle';

const Signin = () => {
  const navigate = useNavigate();
  const [values, setValues] = React.useState({
    email: '',
    password: '',
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
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
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
    //         <div>
    //         <article className='br3 ba shadow-5 b--black-10 mv4 w-100 w-50-m mw5 w-25-1 center'>
    //           <main className="pa4 black-80">
    //                 <div className="measure   ">
    //                         <fieldset id="sign_up" className="ba  white b--transparent ph0 mh0">
    //                             <legend className="f4  dim white fw6  ph0 mh0 center"> Welcome</legend>
    //                             <div className="mt3">
    //                                 <label
    //                                 className=" dim white fw6 lh-copy f6 center"
    //                                 htmlFor="email-addre">email</label>
    //                                 <input

    //                                 className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
    //                                 type="email" name="email-address"  id="emails"
    //                                 onChange={this.onEmailChange}
    //                                 />
    //                             </div>
    //                             <div className="mv3">
    //                                 <label className=" dim white fw6 lh-copy f6 center" htmlFor="password">Password</label>
    //                                 <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
    //                                      type="pas" name="passwordx"  id="passwor"
    //                                      onChange={this.onPasswordChange}
    //                                 />
    //                             </div>

    //                         </fieldset>
    //                 <div className="center">
    //                         <input

    //                          onClick={ this.onSubmitsignin}
    //                         className="b ph3 pv2   white input-reset ba b--gray bg-transparent grow pointer f6 dib"
    //                         type="submit" value="Sign In"/>
    //                 </div>

    //              </div>
    //           </main>
    //           </article>

    //   </div>
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
          value={values.email}
          onChange={handleChange('email')}
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
      <Button variant='contained' fullWidth onClick={handleSubmit}>
        Sign In
      </Button>
    </AuthContainer>
  );
};

export default Signin;
