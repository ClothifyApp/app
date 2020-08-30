import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MatchCard from './components/MatchCard';
import NoMatch from './components/NoMatch';

const Matches = ({ matches, user }) => (
  <div>
    {matches.map(({
      _id, ...match
    }) => (
      <MatchCard
        key={_id}
        match={match}
        user={user}
      />
    ))}
    {(!matches || !matches.length) && <NoMatch />}
  </div>
);

Matches.propTypes = {
  matches: PropTypes.array,
  user: PropTypes.object,
};

Matches.defaultProps = {
  matches: [],
  user: {},
};

const mapStateToProps = (state) => (
  {
    matches: state.matches,
    user: {
      ...state.user,
      _id: JSON.parse(atob(state.token.split('.')[1])).id,
    },
  }
);

export default connect(mapStateToProps)(Matches);
