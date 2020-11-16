/* eslint-disable max-len */
import React from 'react';
import './Stats.css';
import PropTypes from 'prop-types';
import statsDetails from '../stats';
import StatsItem from './StatsItem';

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seeAll: false,
      hover: true,
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleButtonHover = this.handleButtonHover.bind(this);
  }

  handleButtonClick() {
    if (!this.state.seeAll) {
      document.querySelector('.stats-btn').innerHTML = 'See Less';
    } else {
      document.querySelector('.stats-btn').innerHTML = 'See More';
    }
    this.setState({
      seeAll: !this.state.seeAll,
    });
  }

  handleButtonHover() {
    this.setState({
      hover: !this.state.hover,
    });
  }

  render() {
    return (
      <div>
        <div className="flexbox-container">
          <StatsItem percentage={this.props.stats.dog_friendly} details={statsDetails.dog_friendly} />
          <StatsItem percentage={this.props.stats.sidewalks} details={statsDetails.sidewalks} />
          <StatsItem percentage={this.props.stats.restaurants} details={statsDetails.restaurants} />
        </div>
        <div className="flexbox-container">
          <StatsItem percentage={this.props.stats.grocery_stores} details={statsDetails.grocery_stores} />
          <StatsItem percentage={this.props.stats.walk_night} details={statsDetails.walk_night} />
          <StatsItem percentage={this.props.stats.streets} details={statsDetails.streets} />
        </div>
        {this.state.seeAll ?
          (
            <div>
              <div className="flexbox-container">
                <StatsItem percentage={this.props.stats.neighbors_friendly} details={statsDetails.neighbors_friendly} />
                <StatsItem percentage={this.props.stats.five_years} details={statsDetails.five_years} />
                <StatsItem percentage={this.props.stats.holiday} details={statsDetails.holiday} />
              </div>
              <div className="flexbox-container">
                <StatsItem percentage={this.props.stats.parking_easy} details={statsDetails.parking_easy} />
                <StatsItem percentage={this.props.stats.kids_outside} details={statsDetails.kids_outside} />
                <StatsItem percentage={this.props.stats.quiet} details={statsDetails.quiet} />
              </div>
              <div className="flexbox-container">
                <StatsItem percentage={this.props.stats.yard} details={statsDetails.yard} />
                <StatsItem percentage={this.props.stats.car} details={statsDetails.car} />
                <StatsItem percentage={this.props.stats.wildlife} details={statsDetails.wildlife} />
              </div>
              <div className="flexbox-container">
                <StatsItem percentage={this.props.stats.community_events} details={statsDetails.community_events} />
              </div>
            </div>

          )
          : null}
        <button className={this.state.hover ? "stats-btn" : "stats-btn color-btn"} type="button" onClick={this.handleButtonClick} onMouseEnter={this.handleButtonHover} onMouseLeave={this.handleButtonHover}>See All</button>
      </div>
    );
  }
};

Stats.propTypes = {
  stats: PropTypes.object,
};

export default Stats;
