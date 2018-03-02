import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag'
import {compose} from 'redux';

const users = gql`
 query Users($query: String) {
  users(query: $query) {
      success
      errors
      data
  }
}`;

class DemoContainer extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
  }

  static defaultProps = {
    match: null,
  }

  render = () => {
    const {Layout, users} = this.props;
    let data = [];
    if (users.users) {
      data = users.users.data;
    }
    return (
      <Layout
        onChangeInput={(text) => {
          users.fetchMore({
            variables: {
              query: text,
            },
            updateQuery(previousResult, {fetchMoreResult}) {
              return fetchMoreResult;
            },
          });
        }}
        users={data}
      />
    );
  }
}

export default compose(
  connect(
    null, null
  ),
  graphql(users, {name: 'users', variables: {query: ''}}),
)(DemoContainer);
