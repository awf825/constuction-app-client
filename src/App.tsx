import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import Login from "./components/Login"

interface MyFormValues {
  firstName: string;
}

function App() {
  const initialValues: MyFormValues = { firstName: '' };
  return (
    <Container>
      <Login />
    </Container>
  );
}

export default App;
