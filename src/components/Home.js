import React, { Component, Fragment } from 'react';
import { compose, graphql, withApollo } from 'react-apollo';
import { gql } from 'apollo-boost';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import introImage from '../img/intro.jpg';

class Home extends Component {
  render() {
    const { cleanMultiservicesQuery } = this.props;

    if (cleanMultiservicesQuery.loading) {
      return null;
    }

    return (
      <Fragment>
        <section className="page-section clearfix">
          <div className="container">
            <div className="intro">
              <img
                className="intro-img img-fluid mb-3 mb-lg-0 rounded"
                src={introImage}
                alt=""
              />
              <div className="intro-text left-0 text-center bg-faded p-5 rounded">
                <h2 className="section-heading mb-4">
                  <span className="section-heading-upper">Pulito Profondo</span>
                  <span className="section-heading-lower">
                    Splendore Visibile
                  </span>
                </h2>
                <p className="mb-3">
                  Siamo orgogliosi della nostra squadra e comprendiamo le
                  esigenze dei nostri clienti. Non solo il nostro servizio è
                  eccezionale, ma fornisce anche prezzi accessibili - lo
                  garantiamo!
                </p>
                <div className="intro-button mx-auto">
                  <Link className="btn btn-primary btn-xl" to="/store">
                    Contattaci oggi!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="page-section cta">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <div className="cta-inner text-center rounded">
                  <h2 className="section-heading mb-4">
                    <span className="section-heading-upper">
                      La nostra promessa
                    </span>
                    <span className="section-heading-lower"> a voi</span>
                  </h2>
                  <p className="mb-0">
                    Il nostro obiettivo è migliorare la vita dei nostri clienti.
                    Forniamo servizi di pulizia d'élite progettati per mantenere
                    la tua casa splendente e bella in modo che tu possa
                    concentrarti su cose che contano di più, come la tua
                    famiglia e gli amici.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

Home.propTypes = {
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

export const HomeScreen = compose(
  withApollo,
  graphql(cleanMultiservicesQuery, { name: 'cleanMultiservicesQuery' })
)(Home);
