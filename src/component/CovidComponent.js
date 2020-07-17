import React from 'react';
import { Card, Spinner } from 'react-bootstrap';

class CovidComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      isLoading: false
    }
  }

  componentDidMount() {

    this.setState({ isLoading: true })

    const getConfigLocal = 'http://localhost:9999/api/config';
    const getConfigProd = 'https://intense-sea-88006.herokuapp.co/api/config';

    var callAPIs = '';
    var API_WORLD = getConfigLocal;

    if ('production' === process.env.NODE_ENV) {
      API_WORLD = getConfigProd;
    }

    fetch(API_WORLD)
      .then((response) => response.text())
      .then((url) => {

        callAPIs = url;
        fetch(callAPIs)
          .then(response => response.json())
          .then(data => {
            this.setState({ countries: data, isLoading: false });
          }
          )
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  }

  render() {

    const { countries, isLoading } = this.state;

    if (isLoading) {
      return (
        <>
          <Spinner animation="border" variant="primary" />
        </>
      )
    }
    return (

      countries.map((country, idx) => (
        <Card
          key={idx}
        >
          <Card.Body>
            <Card.Title>Country : {country.country}</Card.Title>
            <Card.Text>Cases : {country.cases} </Card.Text>
            <Card.Subtitle> Deaths: {country.deaths} </Card.Subtitle>
          </Card.Body>
          <Card.Footer></Card.Footer>
        </Card>
      ))
    );
  }
}
export default CovidComponent;