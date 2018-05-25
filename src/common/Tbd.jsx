import React from 'react';
//import { Card, CardTitle, CardText } from 'material-ui/Card';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { ViewTitle } from 'react-admin';

/* eslint-disable */
export default () => (
  <Card style={{ margin: '2em' }}>
    <ViewTitle title="Title-Tbd" />
    <CardContent>Text-Tbd...</CardContent>
  </Card>
);
