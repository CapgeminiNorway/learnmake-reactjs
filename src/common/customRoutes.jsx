import React from 'react';
import { Route } from 'react-router-dom';

import Tbd from './Tbd';
import Config from './Configuration';
import VisExample from './../pages/VisExample';

export default [
  <Route exact path="/visexample" component={VisExample} />,
    <Route exact path="/config" component={Config} />,
    <Route exact path="/tbd" component={Tbd} />,
];
