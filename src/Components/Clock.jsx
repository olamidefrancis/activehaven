import { Box, Button, Chip, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ClockContainer,
  ClockForm,
  ClockTopbar,
  TextfieldBox,
} from '../styles/ClockStyle';

const Clock = () => {
  const navigate = useNavigate();
  const [clientCheck, setClientCheck] = useState(false);
  const [client, setClient] = useState('');
  const [state, setState] = useState({
    start: '',
    end: '',
    diff: 0,
    hours: '',
  });

  const [report, setReport] = useState({
    rep1: '',
    rep2: '',
    rep3: '',
    rep4: '',
    rep5: '',
    rep6: '',
  });

  const handleReportChange = (event) => {
    setReport({ ...report, [event.target.name]: event.target.value });
  };

  const startclock = () => {
    const start1 = new Date();
    const start2 = start1.getTime();
    const start3 = start2 / 1000 / 60;

    setState({ start: start3 });
  };
  const endclock = () => {
    const end1 = new Date();
    const end2 = end1.getTime();
    const end3 = end2 / 1000 / 60;

    setState({ end: end3 });
    const diff1 = this.state.start;
    const diff2 = end3 - diff1;
    setState({ diff: diff2 });
  };

  const handleClientChange = (event) => {
    setClient(event.target.value);
  };

  const regStart = () => {
    startclock();
    setTimeout(() => {
      fetch('http://localhost:3000/startshift', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          start: state.start,
          client: client,
          end: state.end,
        }),
      })
        .then((response) => response.json())
        .then((user) => {
          if (user === 'good') {
            navigate('/');
          }
        });
    }, 2000);
  };

  const regEnd = () => {
    fetch('http://localhost:3000/endshift', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        end: state.end,
        rep1: report.rep1,
        rep2: report.rep2,
        rep3: report.rep3,
        rep4: report.rep4,
        rep5: report.rep5,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user) {
          setState({ hours: user[0].entime - user[0].starttime });
          setTimeout(() => {
            //if this works,male a call to the database

            fetch('http://localhost:3000/shifthours', {
              method: 'post',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                hours: state.hours,
              }),
            });
            //then take us back to home page
            navigate('/');
          }, 2000);
        }
      });
  };

  const isClient = localStorage.getItem('client');

  return (
    <ClockContainer>
      {!isClient ? (
        <Box>
          <TextfieldBox>
            <Typography variant='h6' mb={1} mt={4}>
              Who will you be working with today?
            </Typography>
            <TextField
              variant='outlined'
              name='client'
              value={client}
              onChange={handleClientChange}
              fullWidth
            />
            <Button
              variant='contained'
              color='primary'
              size='medium'
              onClick={() => {
                setClientCheck(true);
                localStorage.setItem('client', true);
              }}
            >
              Submit
            </Button>
          </TextfieldBox>
        </Box>
      ) : (
        <Box>
          <ClockTopbar>
            <Button variant='outlined' onClick={() => regStart()}>
              START
            </Button>
            <Button variant='contained' onClick={() => endclock()}>
              END
            </Button>
          </ClockTopbar>

          <Box display='flex' mt={4} mb={1} pl={2} columnGap={1}>
            {' '}
            <Typography variant='h6'>Your work hour is:</Typography>
            <Chip label={state.hours} color='info' variant='outlined' />
          </Box>

          <ClockForm px={2}>
            <Typography variant='h6' mb={1} mt={2}>
              Report
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant='outlined'
                  multiline
                  rows={2}
                  fullWidth
                  autoFocus
                  name='rep1'
                  value={report.rep1}
                  onChange={handleReportChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant='outlined'
                  multiline
                  rows={2}
                  fullWidth
                  name='rep2'
                  value={report.rep2}
                  onChange={handleReportChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant='outlined'
                  multiline
                  rows={2}
                  fullWidth
                  name='rep3'
                  value={report.rep3}
                  onChange={handleReportChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant='outlined'
                  multiline
                  rows={2}
                  fullWidth
                  name='rep4'
                  value={report.rep4}
                  onChange={handleReportChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant='outlined'
                  multiline
                  rows={2}
                  fullWidth
                  name='rep5'
                  value={report.rep5}
                  onChange={handleReportChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant='outlined'
                  multiline
                  rows={2}
                  fullWidth
                  name='rep6'
                  value={report.rep6}
                  onChange={handleReportChange}
                />
              </Grid>
            </Grid>

            <Button
              variant='contained'
              color='primary'
              size='medium'
              onClick={() => regEnd()}
            >
              Submit Report
            </Button>
          </ClockForm>
        </Box>
      )}
    </ClockContainer>
  );
};

export default Clock;
