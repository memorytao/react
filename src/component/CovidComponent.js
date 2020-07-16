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

    fetch('http://intense-sea-88006.herokuapp.com/api/world')
      // fetch('http://localhost:9999/api/world')
      .then(response => response.json())
      .then(data => {
        this.setState({ countries: data, isLoading: false });
      }
      )
      .catch((error) => console.error(error));
  }

  render() {

    const { countries, isLoading } = this.state;

    console.log('before ', isLoading, ' country', countries)

    if (isLoading) {
      return (
        <>
          <Spinner animation="border" variant="primary" />
          <Spinner animation="border" variant="secondary" />
          <Spinner animation="border" variant="success" />
          <Spinner animation="border" variant="danger" />
          <Spinner animation="border" variant="warning" />
          <Spinner animation="border" variant="info" />
          <Spinner animation="border" variant="light" />
          <Spinner animation="border" variant="dark" />
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
          <Spinner animation="grow" variant="light" />
          <Spinner animation="grow" variant="dark" />
        </>
      )
    }
    return (
      countries.map((country) => (
        <Card
          key={country.country}
        >
          <Card.Body>
            <Card.Title>Country : {country.country}</Card.Title>
            <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
          </Card.Body>
          <Card.Footer>Footer</Card.Footer>
        </Card>
      ))
    );
  }
}
export default CovidComponent;