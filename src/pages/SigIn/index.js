import React from 'react';
import { Image } from 'react-native';

import logo from '../../assets/logo.png'
import Button from '../../components/Button';
import Input from '../../components/Input';
import Background from '../../components/background';

export default function SignIn() {
  return(
    <Background>
      <Container>
        <Image source={logo} />
      </Container>
    </Background>
  );
}
