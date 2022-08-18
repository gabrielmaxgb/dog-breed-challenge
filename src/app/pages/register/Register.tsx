import { Button, Container, Grid, TextField } from '@mui/material';
import React, { useState } from 'react'
import { IRegisterProps } from './RegisterInterfaces';
import { FullHeightGrid } from '../../common/Styles';
import { SubmmitButton } from './RegisterStyles';

function Register(props: IRegisterProps) {
  const [userEmail, setUserEmail] = useState("");

  return (
    <Container>
      <FullHeightGrid
        container 
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <TextField
          id="outlined-email-input"
          label="E-mail"
          variant="outlined"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <SubmmitButton 
          variant='contained' 
          // sx={{ backgroundColor: "black"}}
        >
          Submmit Email
        </SubmmitButton>
      </FullHeightGrid>
    </Container>
  )
};

export default Register;