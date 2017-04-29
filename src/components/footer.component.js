import React from 'react';
import PropTypes from 'prop-types';
import styles from './footer.component.styles';

const Footer = props => (
  <div style={styles.FooterWrapper}>
    <div>{props.text}</div>
  </div>
);

Footer.propTypes = {
  copyright: PropTypes.string.isRequired,
};

export default Footer;
