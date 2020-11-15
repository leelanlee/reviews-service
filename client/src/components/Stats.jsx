import React from 'react';
import './Stats.css';

class Stats extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flexbox-container">
        <div className="flexbox-item flexbox-item-1">
          <div className="stats-percentage">
            <div className="thumbs-up">
              <svg className="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M9.016 11.858c3.183-.709 5.217-3.378 6.127-8.36l.245-1.349h1.37c3.81 0 6.705 3.46 6.128 7.273l-.367 2.435h3.166c2.933 0 5.04 2.83 4.284 5.653l-2.139 8.577c-.725 2.705-3.315 4.451-6.078 4.06L10.834 28.46v1.698H1.801v-18.3h7.215zm1.818 2.898v10.38l11.399 1.761c1.086.154 2.126-.547 2.417-1.632l2.139-8.577c.21-.787-.355-1.546-1.104-1.546H18.7l.285-1.888.653-4.322c.208-1.377-.506-2.645-1.62-3.2-1.198 4.73-3.597 7.805-7.184 9.024zm-3.285.387H5.086v11.73h2.463v-11.73z" fill="#869099"></path></svg>
            </div>
            <div className="percentage">
              96%
            </div>
          </div>
          <div className="stats-category">
            <div className="icon">
              <svg className="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M12.54 10.774a2.401 2.401 0 0 1-2.407-2.395v-.056a2.401 2.401 0 0 1 2.406-2.395 2.401 2.401 0 0 1 2.407 2.395v.056a2.401 2.401 0 0 1-2.407 2.395zm7.219 0a2.401 2.401 0 0 1-2.407-2.395v-.056a2.401 2.401 0 0 1 2.407-2.395 2.401 2.401 0 0 1 2.406 2.395v.056a2.401 2.401 0 0 1-2.406 2.395zm-.766 3.787l4.372 5.72a3.546 3.546 0 0 1-.68 4.985 3.585 3.585 0 0 1-2.164.726h-8.744a3.565 3.565 0 0 1-3.574-3.557c0-.778.257-1.535.73-2.154l4.372-5.72a3.585 3.585 0 0 1 5.688 0zm5.579-2.645a2.401 2.401 0 0 1 2.406 2.395v.056a2.401 2.401 0 0 1-2.406 2.395 2.4 2.4 0 0 1-2.407-2.395v-.056a2.4 2.4 0 0 1 2.407-2.395zm-14.439 2.451a2.401 2.401 0 0 1-2.407 2.395 2.4 2.4 0 0 1-2.406-2.395v-.056a2.4 2.4 0 0 1 2.406-2.395 2.401 2.401 0 0 1 2.407 2.395v.056z" fill="#C3D600" fillRule="evenodd"></path>
              </svg>
            </div>
            <div className="stats-info"><div >It's dog friendly</div></div>
          </div>
        </div>

        <div className="flexbox-item flexbox-item-1"></div>
        <div className="flexbox-item flexbox-item-1"></div>
      </div>
    )
  }
}

export default Stats;

