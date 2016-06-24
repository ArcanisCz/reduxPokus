import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import JiraHead from "./mynew/JiraHead";

const App = (props) => {
  return (
    <div>
      <JiraHead />
      <IndexLink to="/">Home</IndexLink>
      {' | '}
      <Link to="/about">About</Link>
      {' | '}
      <Link to="/about/BUPLA-213">BUPLA-213</Link>
      {' | '}
      <Link to="/about/BUPLA-214">BUPLA-214</Link>
      {' | '}
      <Link to="/about/BUPLA-215">BUPLA-215</Link>
      <br/>
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
