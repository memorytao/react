import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import LinearProgress from '@material-ui/core/LinearProgress'

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

  getComponent(countries) {

    let card;

    if (countries.country === 'World') {

      card = <Card>
        <Card.Body>
          <Card.Header>{countries.country}</Card.Header>
          <Card.Title> Today : {countries.todayCases} </Card.Title>
          <Card.Text>Cases : {countries.cases} </Card.Text>
          <Card.Subtitle> </Card.Subtitle>
          <Card.Footer>Deaths: {countries.deaths} </Card.Footer>
        </Card.Body>
        {/* <Card.Footer></Card.Footer> */}
      </Card>
    } else {

      console.log(countries)
      card =
        <CardDeck>
          {countries.map((obj, i) =>
            <Card key={i}>
              {/* <Card.Title>{obj.country}</Card.Title>
              <Card.Text>Cases : {obj.cases}</Card.Text>
              <Card.Text>recovered {}</Card.Text>
              <Card.Text>Death : {obj.deaths}</Card.Text>
              <Card.Text>todayCases : {obj.todayCases}</Card.Text>todayDeaths
              <Card.Text>todayDeaths : {obj.todayDeaths}</Card.Text> */}
              <Card.Title>Today : {obj.todayCases} </Card.Title>
              <Card.Subtitle></Card.Subtitle>
            </Card>
          )}
        </CardDeck>
      // <br></br>

    }
    return card;
  }

  render() {

    const { countries, isLoading } = this.state;
    let worldReport;
    let countryReport = [];
    let getObj = [];
    let newDeck = false;

    if (isLoading) {
      return (
        <>
          {/* <Spinner animation="border" variant="primary" /> */}
          <LinearProgress color="secondary"  />
        </>
      )
    }

    return (
      <>
        {
          countries.map((obj, i) => {

            if (i !== 0) {

              getObj.push(obj)
              if (i % 3 === 0) {
                newDeck = true;
              }
              if (newDeck) {
                countryReport.push(this.getComponent(getObj));
                newDeck = false;
                getObj = [];
              }
            }
            else {
              worldReport = this.getComponent(obj)
            }
          }

          )
        }
        <br></br>
        {worldReport}
        <br></br>
        {countryReport}
      </>
    );

    //  end render
  }
}
export default CovidComponent;