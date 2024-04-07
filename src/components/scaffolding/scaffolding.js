import React from 'react';
import PropTypes from 'prop-types';
import './scaffolding.css';
import Body from './body/body';
import Header from './header/header';

const Scaffolding = () => (
  <div className="scaffolding">
    <Header className="header"/>
    <Body className="body"/>
  </div>
);

Scaffolding.propTypes = {};

Scaffolding.defaultProps = {};

export default Scaffolding;
