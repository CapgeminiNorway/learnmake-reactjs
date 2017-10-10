import React, { Component, PropTypes } from 'react';

import { Card, CardActions, CardText, CardHeader } from 'material-ui/Card';
import { Container, Row, Col } from 'react-grid-system';

import FlatButton from 'material-ui/FlatButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import './Vis.css';
import {
  XYPlot,
  LineSeries, VerticalBarSeries, MarkSeries,
  VerticalGridLines, HorizontalGridLines,
  XAxis, YAxis,
  FlexibleWidthXYPlot,
  DiscreteColorLegend
} from 'react-vis';
import Highlight from './highlight';

import sheets14 from './../datafiles/sheets1-4_NAV-om-arbeidsmarkedet_September2017.json';
import sheets56 from './../datafiles/sheets5-6_NAV-om-arbeidsmarkedet_September2017.json';
import sheets78 from './../datafiles/sheets7-8_NAV-om-arbeidsmarkedet_September2017.json';

import {isDev} from './../common/MyConfig';
const styles = {
  main: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
  },
  left: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left',
      justifyContent: 'left',
  },
  card: {
      //width: '90%',
      minHeight: 900,
      margin: '0.1em',
      display: 'inline-block',
      verticalAlign: 'top',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
  },
  cardText: {
    fontSize: 'medium'
  },
  cardItemText: {
    fontSize: 'small'
  }
};

export default class VisualizeNAV extends React.Component {
  static propTypes = {

  };
  constructor(props) {
    super(props);
    this.state = {
      record: {},
      current: {}
    };

    this.prepareMenuOptions = this.prepareMenuOptions.bind(this);
    this.handleMenuSelection = this.handleMenuSelection.bind(this);
    this.prepareGraph = this.prepareGraph.bind(this);
  }
  componentWillMount() {
    // organise imported json-data and save into state
    let { record, current } = this.state;

    let items = [];
    sheets14.map((item) => {
      items.push({
        name: item.name,
        data: item.data
      });
    });
    /* // FIXME uncomment this! temporarily using 'only sheets14' for demo
    sheets56.map((item) => {
      items.push({
        name: item.name,
        data: item.data
      });
    });
    sheets78.map((item) => {
      items.push({
        name: item.name,
        data: item.data
      });
    }); */
    record['items'] = items;

    // by default; load the first record to display
    const which = 0;
    current['name'] = record.items[which].name;
    current['data'] = record.items[which].data;

    this.setState({record, current});

    /*if (isDev) {
      console.log('componentWillMount');
      //console.log('current -> ' + JSON.stringify(current));
      console.log('state -> ' + JSON.stringify(this.state));
    }*/
  }

  handleMenuSelection = (event, index, selectedValue) => {
      //this.handleUserInput(value);
      let { record, current } = this.state;

      if (isDev) {
        console.log('handleMenuSelection');
        console.log('userInput.selectedValue -> ' + selectedValue);
        //-console.log('current -> ' + JSON.stringify(current));
        //console.log('record -> ' + JSON.stringify(record));
      }

      current['name'] = selectedValue;//record.items[selectedValue].name;
      record.items.map((item) => {
        if (selectedValue === item.name) {
          current['name'] = item.name;
          current['data'] = item.data;
        }
      });
      this.setState({ current });

      /*if (isDev) {
        console.log('handleUserInput');
        console.log('current -> ' + JSON.stringify(current));
      }*/
  }

  prepareMenuOptions() {
    const { record, current } = this.state;
    const { translate } = this.context;

    const menuItems = Object.keys(record.items).map((itemKey, index) =>
    //const menuItems = record.names.map((itemKey) =>
       <MenuItem
         style={{fontSize: 'medium'}} focusState={'focused'} checked={true}
         key={itemKey} value={record.items[itemKey].name}
         primaryText={record.items[itemKey].name}
         //primaryText={translate('pos.vis.nav.menu.options.'+itemKey)}
       />
    )

    return (
      <DropDownMenu value={current.name} onChange={this.handleMenuSelection}>
        {menuItems}
      </DropDownMenu>
    );
  }

  prepareGraph() {
    const { record, current } = this.state;
    const { translate } = this.context;

    const months = [
      "Januar", "Februar", "Mars", "April", "Mai",
      "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"];

    /* // test & verify with only one year
    let graphData = [];
    let xTitle = "Month";
    let yTitle = "";
    let currentData = current.data[0];
    Object.keys(currentData).map((itemKey, index) => {
      if (itemKey !== 'Year') {
        graphData.push({
          x: months.indexOf(itemKey),
          y: currentData[itemKey]
        });
      }
    });
    console.log('currentData -> ' + JSON.stringify(currentData));
    console.log('graphData -> ' + JSON.stringify(graphData));
    */

    // go thru all years
    let series = [];
    current.data.map((currentData) => {
      let graphData = [];
      let xTitle = "Month";
      let yTitle = "";
      let year = '';

      Object.keys(currentData).map((itemKey, index) => {

        if (itemKey !== 'Year') {
          graphData.push({
            x: months.indexOf(itemKey),
            y: currentData[itemKey]
          });
        }
        else {
          year = currentData[itemKey];
        }
      });
      //if (series.length<3) { // temporarily we limit series for demo
        series.push({
        title: year,
        disabled: false,
        data: graphData
      });
    //}

    });

    const xTitle = "";
    const yTitle = "";

    return(

      <div>
        <div style={styles.left}
          className="legend">
          <DiscreteColorLegend
            //width={600}
            orientation={'horizontal'}
            items={series}
            /*onItemClick={(obj, number) => {
              this.setState({'selectedSeries': obj.title});
              //console.log('legend.onClick -> ' + obj.title);
            }}*/
            onItemMouseEnter={(item, index, event) => {
              this.setState({'selectedSeries': item.title});
              //console.log('legend.onItemMouseEnter -> ' + item.title);
            }}
            onItemMouseLeave={(item, index, event) => {
              this.setState({'selectedSeries': ''});
            }}
          />
        </div>
        <div className="chart no-select">
          <FlexibleWidthXYPlot
            animation
            //xDomain={lastDrawLocation && [lastDrawLocation.left, lastDrawLocation.right]}
            width={800}
            height={400}
            >

            <HorizontalGridLines />

            <YAxis hideTicks/>
            <YAxis title={yTitle}
              left={20}
              tickFormat={v => v * 1.3}
              style={{text: {fontSize:'xsmall', fontWeight: 200}}}
            />

            {/*<XAxis title={xTitle} />*/}
            {/* <XAxis bottom={0} hideLine title={xTitle} /> */}
            <XAxis title={xTitle}
              tickValues={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
              tickFormat={v => `${months[v]?months[v]:''}`}
              style={{text: {fontSize:'xsmall', fontWeight: 200}}}
            />

            {series.map(entry => (
              <LineSeries
                key={entry.title}
                data={entry.data}
                //strokeStyle={'dashed'}
                style={
                  (entry.title===this.state.selectedSeries)?
                    {strokeWidth: 5}:{strokeWidth: 2}
                  }
              />
            ))}

            {/*<Highlight onBrushEnd={(area) => {
              this.setState({
                lastDrawLocation: area
              });
            }} />*/}

          </FlexibleWidthXYPlot>
        </div>
        {/* <div>
          <XYPlot width={800} height={400}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis title={xTitle}/>
            <YAxis title={yTitle}/>
            <LineSeries data={graphData} />
          </XYPlot>
        </div> */}

        <div>
        {(isDev===true) && (
          <span>
          {JSON.stringify(this.state.current)}
        </span>
        )}
      </div>

      </div>
    );
  }

  render() {
    return (
      <div>

        <Card key="one1"
          style={styles.card}
          >
          <CardHeader
            title="Visualize NAV data"
            subtitle="Sesongjusterte hovedtall om arbeidsmarkedet"
            actAsExpander={false}
            showExpandableButton={false}
            titleStyle={{fontSize: 'large'}}
            subtitleStyle={{fontSize: 'medium'}}
          />
          <CardActions
            style={styles.cardText}
            >
            {/*<FlatButton label="todo-Action1" />*/}
            <div>
              {this.prepareMenuOptions()}
            </div>
          </CardActions>
          <CardText style={styles.cardText}>
            <Container>
              <Row>
                <Col xs={12} md={12}>
                  {this.prepareGraph()}
                </Col>
              </Row>
            </Container>
          </CardText>
        </Card>

      </div>
    )
  }
}
