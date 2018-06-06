import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

class CountryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryNames: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch('https://restcountries.eu/rest/v1/all')
      .then(response => response.json())
      .then(json => json.map(country => country.name))
      .then(countryNames =>
        this.setState({ countryNames, loading: false }));
  }

  render() {
    const { countryNames, loading } = this.state;
    return (loading) ?
      <div>Loading Country Names...</div> :
      (!countryNames.length) ?
        <div>No country Names</div> :
        <ul>
          {countryNames.map((v, i) =>
            <li key={i}>{v}</li>)}
        </ul>;
  }
}

export default CountryList;
