import React, { Component, Fragment } from 'react';
import { compose, graphql, withApollo } from 'react-apollo';
import { gql } from 'apollo-boost';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    const { cleanMultiservicesQuery } = this.props;

    if (cleanMultiservicesQuery.loading) {
      return (
        //TODO loader
        <div>
          <p>loading..</p>
        </div>
      );
    }

    // debugger;

    return (
      <Fragment>
        <h1 className="site-heading text-center text-white d-none d-lg-block">
          <span className="site-heading- supper text-primary mb-3">
            IMPRESA DI PULIZIA di Agolli Eriona
          </span>
          <br />
          <span className="site-heading-lower">CLEAN MULTISERVICES</span>
        </h1>
        <nav
          className="navbar navbar-expand-lg navbar-dark py-lg-4"
          id="mainNav"
        >
          <div className="container">
            <Link
              className="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none"
              to="/"
            >
              Clean Multiservices
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item active px-lg-4">
                  <Link
                    className="nav-link text-uppercase text-expanded"
                    to="/"
                  >
                    Multi Services
                    <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item px-lg-4">
                  <Link
                    className="nav-link text-uppercase text-expanded"
                    to="/about"
                  >
                    Chi Siamo
                  </Link>
                </li>
                <li className="nav-item px-lg-4">
                  <Link
                    className="nav-link text-uppercase text-expanded"
                    to="/products"
                  >
                    Prodotti
                  </Link>
                </li>
                <li className="nav-item px-lg-4">
                  <Link
                    className="nav-link text-uppercase text-expanded"
                    to="/store"
                  >
                    Aperti
                  </Link>
                </li>
                <li className="nav-item px-lg-4">
                  <Link
                    className="nav-link text-uppercase text-expanded"
                    to="/contact"
                  >
                    Contattaci
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Fragment>
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
