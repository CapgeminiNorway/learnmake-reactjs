import React from 'react';
import { Route } from 'react-router-dom';

import Tbd from './common/Tbd';
import configuration from './common/Configuration';

export default [
    <Route exact path="/configuration" component={configuration} />,
    <Route exact path="/tbd" component={Tbd} />,
];
