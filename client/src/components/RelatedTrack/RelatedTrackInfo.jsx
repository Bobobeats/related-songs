import React from 'react';
import PropTypes from 'prop-types';
import numberFormatter from './NumberFormatter';
import {
  TrackInfoContainer,
  TrackStatistic,
  Plays,
  Reposts,
  Likes,
  Comments,
  TrackStatNum,
} from './styles';

class RelatedTrackInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formatted: {},
    };
  }

  componentDidMount() {
    this.formatAllNumProps();
  }

  formatAllNumProps() {
    const {
      plays,
      likes,
      reposts,
      comments,
    } = this.props;
    this.setState({
      formatted: {
        formattedPlays: numberFormatter(plays),
        formattedLikes: numberFormatter(likes),
        formattedReposts: numberFormatter(reposts),
        formattedComments: numberFormatter(comments),
      },
    });
  }

  render() {
    const { formatted } = this.state;
    return (
      <TrackInfoContainer>
        <TrackStatistic>
          <Plays />
          <TrackStatNum>{formatted.formattedPlays}</TrackStatNum>
        </TrackStatistic>
        <TrackStatistic>
          <Likes size="11px" />
          <TrackStatNum>{formatted.formattedLikes}</TrackStatNum>
        </TrackStatistic>
        <TrackStatistic>
          <Reposts size="11px" />
          <TrackStatNum>{formatted.formattedReposts}</TrackStatNum>
        </TrackStatistic>
        <TrackStatistic>
          <Comments size="11px" />
          <TrackStatNum>{formatted.formattedComments}</TrackStatNum>
        </TrackStatistic>
      </TrackInfoContainer>
    );
  }
}

RelatedTrackInfo.propTypes = {
  plays: PropTypes.number,
  likes: PropTypes.number,
  reposts: PropTypes.number,
  comments: PropTypes.number,
};

RelatedTrackInfo.defaultProps = {
  plays: 0,
  likes: 0,
  reposts: 0,
  comments: 0,
};

export default RelatedTrackInfo;
