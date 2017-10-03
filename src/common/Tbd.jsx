import React from 'react';
//import { Card, CardTitle, CardText } from 'material-ui/Card';
import { Card, CardText } from 'material-ui/Card';
import { ViewTitle } from 'admin-on-rest';

export default () => (
    <Card style={{ margin: '2em' }}>
        <ViewTitle title="Title-Tbd" />
        <CardText>Text-Tbd...</CardText>
    </Card>
);
