import React, { Component } from 'react';
import { compose, graphql, withApollo } from 'react-apollo';
import { gql } from 'apollo-boost';
import PropTypes from 'prop-types';

class Footer extends Component {
  render() {
    const { footerQuery } = this.props;

    if (footerQuery.loading) {
      return null;
    }

    const { footerText } = this.props.footerQuery.cleanMultiservices;
    const year = new Date().getFullYear();

    return (
      <footer className="footer text-faded text-center py-5">
        <div className="container">
          <p className="m-0 small">
            {footerText}
            <span id="year"> {year}</span>
          </p>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  footerQuery: PropTypes.object
};

const footerQuery = gql`
  query footerQuery {
    cleanMultiservices {
      footerText
    }
  }
`;

export const FooterScreen = compose(
  withApollo,
  graphql(footerQuery, { name: 'footerQuery' })
)(Footer);
