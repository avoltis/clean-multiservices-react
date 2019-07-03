import React, { Component } from 'react';
import { compose, graphql, withApollo } from 'react-apollo';
import { gql } from 'apollo-boost';
import PropTypes from 'prop-types';
import logo from '../logo.svg';
import '../App.css';

class Header extends Component {
  render() {
    const { cleanMultiservicesQuery } = this.props;

    if (cleanMultiservicesQuery.loading) {
      return (
        <div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            loading
          </a>
        </div>
      );
    }

    debugger;

    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    );
  }
}

Header.propTypes = {
  cleanMultiservicesQuery: PropTypes.object
};

const cleanMultiservicesQuery = gql`
  query cleanMultiservicesQuery {
    cleanMultiservices {
      headerText {
        title
        smallTitle
      }
      mainPageText {
        header
        mainSection {
          title
          smallTitle
          description
          contact
        }
        mainPageFooterSection {
          title
          smallTitle
          description
        }
      }
      aboutPageText {
        header
        title
        smallTitle
        descriptionPart1
        boldTextPart1
        boldTextPart1Description
        boldTextPart2
        boldTextPart2Description
        descriptionPart2
      }
      productsPageText {
        header
        mainSection {
          title
          smallTitle
          boldTextPart1
          boldTextPart1Description
          boldTextPart2
          boldTextPart2Description
        }
        middleSection {
          title
          smallTitle
          boldTextPart1
          boldTextPart2
        }
        footerSection {
          title
          smallTitle
          boldTextPart1
          boldTextPart2
          boldTextPart3
          description
        }
      }
      storePageText {
        header
        mainSection {
          title
          smallTitle
          open {
            openingHoursMondayToFriday
            openingHoursSaturday
            openingHoursSunday
            monday
            tuesday
            wednesday
            thursday
            friday
            saturday
            sunday
          }
        }
        middleSection {
          title
          smallTitle
          descriptionPart1
          descriptionPart2
        }
      }
      contactPageText {
        header
      }
      contact {
        text
        phone
        email
      }
      address {
        street
        city
      }
      footerText
    }
  }
`;

export const HeaderScreen = compose(
  withApollo,
  graphql(cleanMultiservicesQuery, { name: 'cleanMultiservicesQuery' })
)(Header);
