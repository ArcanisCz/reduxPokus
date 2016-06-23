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
      <br/>
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
