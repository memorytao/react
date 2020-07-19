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

    var callAPIs = process.env.REACT_APP_GET_WORLD_REPORT_API;

    console.log('callAPIs', callAPIs)
    fetch(callAPIs)
      .then(response => response.json())
      .then(data => {
        this.setState({ countries: data, isLoading: false });
      }
      ).catch((err) => {
        console.log(err)
      }
      )
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
    console.log(countries)
    if (isLoading) {
      return (
        <LinearProgress color="secondary" />
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