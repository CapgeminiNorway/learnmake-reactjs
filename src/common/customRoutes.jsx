import React from 'react';
import { Route } from 'react-router-dom';

import Tbd from './Tbd';
import Config from './Configuration';
import VisExample from './../pages/VisExample';
import VisualizeNAV from './../pages/VisualizeNAV';
//import GraphQLExample from './../pages/GraphQLExample';

/* eslint-disable */
export default [
  <Route key="100" exact path="/visnav" component={VisualizeNAV} />,
  <Route key="101" exact path="/visexample" component={VisExample} />,

  // TODO <Route exact path="/gqlexample" component={GraphQLExample} />,

  <Route key="102" exact path="/config" component={Config} />,
  <Route key="103" exact path="/tbd" component={Tbd} />,
];
