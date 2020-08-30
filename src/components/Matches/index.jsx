import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MatchCard from './components/MatchCard';
import NoMatch from './components/NoMatch';

const Matches = ({ matches }) => (
  <div>
    {matches.map(({
      _id, ...match
    }) => (
      <MatchCard
        key={_id}
        match={match}
      />
    ))}
    {(!matches || !matches.length) && <NoMatch />}
  </div>
);

Matches.propTypes = {
  matches: PropTypes.array,
};

Matches.defaultProps = {
  matches: [],
};

const mapStateToProps = (state) => (
  {
    matches: state.matches,
  }
);

export default connect(mapStateToProps)(Matches);
