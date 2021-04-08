import React, {useEffect, useState} from 'react'
import {Container, Row, Col} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Axios from 'axios';
import UserCard from './Components/Card'

function App() {

  const [details, setDetails] = useState({})

  const fetchDetails = async () =>{
    const {data} = await Axios.get('https://randomuser.me/api/')
    console.log(data.results[0])

    setDetails(data.results[0])
  }

  useEffect(() => {
    fetchDetails()
  }, [])

  return (
    <Container fluid className="p-4 bg-primary App">
      <Row>
        <Col md={4} className="offset-md-4 mt-4">
          <UserCard details={details}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
