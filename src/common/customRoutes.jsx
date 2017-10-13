import React from 'react';
import { Route } from 'react-router-dom';

import Tbd from './Tbd';
import Config from './Configuration';
import VisExample from './../pages/VisExample';
import VisualizeNAV from './../pages/VisualizeNAV';
import GraphQLExample from './../pages/GraphQLExample';

/* eslint-disable */
export default [
  <Route exact path="/visnav" component={VisualizeNAV} />,
  <Route exact path="/visexample" component={VisExample} />,

  <Route exact path="/gqlexample" component={GraphQLExample} />,

  <Route exact path="/config" component={Config} />,
  <Route exact path="/tbd" component={Tbd} />,
];
