import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MatchCard from './components/MatchCard';

const Matches = ({ matches }) => (
  <div>
    {matches.map(({
      _id, photoUrl, title, tag, description,
    }) => (
      <MatchCard
        key={_id}
        photoUrl={photoUrl}
        title={title}
        description={description}
        tag={tag}
      />
    ))}
  </div>
);

Matches.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
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
