import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

//import '../node_modules/react-vis/dist/style.css';
import './Vis.css';
import {
  XYPlot,
  LineSeries,
  VerticalBarSeries,
  MarkSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
} from 'react-vis';

class VisExample extends Component {
  render() {
    const data = [
      { x: 0, y: 8 },
      { x: 1, y: 5 },
      { x: 2, y: 4 },
      { x: 3, y: 9 },
      { x: 4, y: 1 },
      { x: 5, y: 7 },
      { x: 6, y: 6 },
      { x: 7, y: 3 },
      { x: 8, y: 2 },
      { x: 9, y: 0 },
    ];
    const xTitle = 'x title';
    const yTitle = 'y title';
    return (
      <div>
        <Card key="one1">
          <CardContent>
            <XYPlot width={800} height={400}>
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis title={xTitle} />
              <YAxis title={yTitle} />
              <LineSeries data={data} />
            </XYPlot>
          </CardContent>
          <CardContent>
            <XYPlot width={800} height={400}>
              <VerticalBarSeries data={data} />
            </XYPlot>
          </CardContent>
          <CardContent>
            <XYPlot width={800} height={400}>
              <MarkSeries data={data} />
            </XYPlot>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default VisExample;
