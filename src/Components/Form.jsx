import {
  Alert,
  Box,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormBody, FormContainer, FormHeader } from '../styles/FormStyle';

const Form = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    sponname: '',
    sponemail: '',
    tel: '',
    namew: '',
    allergies: '',
    age: '',
    sex: 'female',
    con1: '',
    con2: '',
    con3: '',
    con4: '',
    con5: '',
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  //submiting to server
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch('http://localhost:3001/clients', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sponname: values.sponname,
        sponemail: values.sponemail,
        tel: values.tel,
        namew: values.namew,
        allergies: values.allergies,
        age: values.age,
        sex: values.sex,
        con1: values.con1,
        con2: values.con2,
        con3: values.con3,
        con4: values.con4,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user) {
          setLoading(false);
          setSuccess(true);
          navigate('/');
        }
      });
  };

  return (
    <FormContainer>
      {success && (
        <Alert
          severity='success'
          onClose={() => {
            setSuccess(false);
          }}
        >
          Success
        </Alert>
      )}
      <FormHeader>
        <Typography
          variant='h3'
          fontWeight={600}
          align='center'
          mb={2}
          color='white'
        >
          Welcome to ActiveHaven
        </Typography>
        <Divider />
        <Typography
          variant='body1'
          align='center'
          mt={0.5}
          mb={1}
          color='white'
        >
          We are all special
        </Typography>
      </FormHeader>
      <FormBody>
        <Box>
          <Typography variant='body1' fontWeight={500} mb={1}>
            Name of Sponsor
          </Typography>
          <TextField
            variant='outlined'
            value={values.sponname}
            fullWidth
            autoFocus
            onChange={handleChange('sponname')}
            required
          />
        </Box>
        <Box>
          <Typography variant='body1' fontWeight={500} my={1}>
            Email
          </Typography>
          <TextField
            variant='outlined'
            value={values.sponemail}
            fullWidth
            type='email'
            onChange={handleChange('sponemail')}
            required
          />
        </Box>
        <Box>
          <Typography variant='body1' fontWeight={500} my={1}>
            Tel
          </Typography>
          <TextField
            variant='outlined'
            value={values.tel}
            fullWidth
            onChange={handleChange('tel')}
            required
          />
        </Box>
        <Box>
          <Typography variant='body1' fontWeight={500} my={1}>
            Name of ward
          </Typography>
          <TextField
            variant='outlined'
            value={values.namew}
            fullWidth
            onChange={handleChange('namew')}
            required
          />
        </Box>
        <Box>
          <Typography variant='body1' fontWeight={500} my={1}>
            Age of ward
          </Typography>
          <TextField
            variant='outlined'
            value={values.age}
            fullWidth
            type='number'
            onChange={handleChange('age')}
            required
          />
        </Box>
        <Box>
          <Typography variant='body1' fontWeight={500} my={1}>
            Gender
          </Typography>
          <FormControl sx={{ height: 'unset' }}>
            <RadioGroup
              defaultValue='female'
              name='sex'
              value={values.sex}
              onChange={handleChange('sex')}
            >
              <FormControlLabel
                value='female'
                control={<Radio />}
                label='Female'
              />
              <FormControlLabel value='male' control={<Radio />} label='Male' />
              <FormControlLabel
                value='other'
                control={<Radio />}
                label='Other'
              />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box>
          <Typography variant='body1' fontWeight={500} mb={1} mt={9}>
            Allergies (if any)
            <TextField
              variant='outlined'
              value={values.allergies}
              fullWidth
              onChange={handleChange('allergies')}
              helperText='Please separate each allergy with a comma'
            />
          </Typography>
        </Box>
        <Box>
          <Typography variant='body1' fontWeight={500} mb={1} mt={4}>
            Conditions
          </Typography>
          <TextField
            variant='outlined'
            value={values.con1}
            fullWidth
            onChange={handleChange('con1')}
            sx={{ mb: 1 }}
          />
          <TextField
            variant='outlined'
            value={values.con2}
            fullWidth
            onChange={handleChange('con2')}
            sx={{ mb: 1 }}
          />
          <TextField
            variant='outlined'
            value={values.con3}
            fullWidth
            onChange={handleChange('con3')}
            sx={{ mb: 1 }}
          />
          <TextField
            variant='outlined'
            value={values.con4}
            fullWidth
            onChange={handleChange('con4')}
            sx={{ mb: 1 }}
          />
          <TextField
            variant='outlined'
            value={values.con5}
            fullWidth
            onChange={handleChange('con5')}
          />
        </Box>
        <LoadingButton
          variant='contained'
          sx={{ mt: 2 }}
          fullWidth
          onClick={handleSubmit}
          loading={loading}
        >
          Submit
        </LoadingButton>
      </FormBody>
    </FormContainer>
  );
};
export default Form;
