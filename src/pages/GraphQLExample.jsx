import React, { Component } from 'react';

import {
  gql, graphql,
  ApolloClient, createNetworkInterface, ApolloProvider
} from 'react-apollo';

import {List, ListItem} from 'material-ui/List';
import { Card, CardActions, CardText } from 'material-ui/Card';
import { Container, Row, Col } from 'react-grid-system';

const isDev = (process.env.NODE_ENV !== 'production');
const styles = {
  title: {
    fontSize: 24,
    margin: 20,
    marginBottom: 0
  },
  container: {
    flex: 1,
    paddingTop: '1em',
    backgroundColor: '#ecf0f1',
  },
  learnMore: {
    margin: 20,
    marginTop: 0
  },
  loading: {
    margin: 50
  },
  list: {
    marginBottom: 20
  },
  fullApp: {
    marginBottom: 20,
    textAlign: 'center'
  }
};

/*
this example is adapted from http://dev.apollodata.com/react/simple-example.html

Apollo Client attach GraphQL queries to your UI components to easily load data.
This is a simple query that just gets some of the top posted repositories.
You can use the GraphiQL query IDE to try writing new queries!
Go to the link below: http://api.githunt.com/graphiql
*/
const FeedWithData = graphql(gql`{
  feed (type: TOP, limit: 10) {
    repository {
      name, owner { login }

      # get number of stars!
      stargazers_count
    }

    postedBy { login }
  }
}`, { options: { notifyOnNetworkStatusChange: true } })(Feed);

function Feed({ data }) {

  if (data.error) {
    return <span>Error! {data.error.message}</span>;
  }
  if (isDev) {
    console.log('Feed.data -> ' + JSON.stringify(data));
  }

  return (
    <Card>
      <CardText>
        <List style={styles.list}>
          { (data.feed) && data.feed.map((item, index) => {
              const badge = item.repository.stargazers_count && {
                value: `☆ ${item.repository.stargazers_count}`,
                badgeContainerStyle: { right: 10, backgroundColor: '#56579B' },
                badgeTextStyle: { fontSize: 12 },
              };

              return <ListItem
                key={index}
                primaryText={`${item.repository.owner.login}/${item.repository.name}`}
                secondaryText={`Posted by ${item.postedBy.login}`}
                //-leftIcon={badge}
              />;
            }
          ) }
        </List>
      </CardText>
    </Card>
  );
}

class GraphQLExample extends Component {

  createClient() {
    const networkInterface = createNetworkInterface({
      //uri: 'https://api.githunt.com/graphql',
      uri: (isDev===true)?'/graphql':'https://api.githunt.com/graphql',
      //uri: 'http://localhost:9002/graphql',
      /*opts: {
        mode: 'no-cors',
        credentials: 'same-origin',
      },*/
    });
    /*networkInterface.use([{
      applyMiddleware(req, next) {
        if (!req.options.headers) {
          // Create the header object if necessary
          req.options.headers = {
            'Access-Control-Allow-Origin': '*',
          };
        }
        //req.options.headers['authorization'] = localStorage.getItem('token') ? localStorage.getItem('token') : null;
        next();
      }
    }]);*/
    /*networkInterface.useAfter([{
      applyAfterware({ response }, next) {
        if (response.status === 400) {
          // TODO
        }
        console.log('respHeaders -> ' + JSON.stringify(response.headers));
        //response.headers = {
        //  'Access-Control-Allow-Origin': '*'
        //};
        next();
      }
    }]);*/

    return new ApolloClient({ networkInterface });
  }
  /*createClient() {
    // Initialize Apollo Client with URL to server
    return new ApolloClient({
      networkInterface: createNetworkInterface({
        uri: 'http://api.githunt.com/graphql',
        opts: {
          mode: 'no-cors'
        }
      }),
    });
  }*/

  render() {
    const etc = "todo-etc";
    return (
      // Feed the client instance into your React component tree
      <ApolloProvider client={this.createClient()}>
        <FeedWithData />
      </ApolloProvider>
    );
  }
}

export default GraphQLExample;
