import React, { PropTypes } from 'react';
export default class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: props.isChecked
    };

    this.defaultHandler = this.defaultHandler.bind(this);
  }


  defaultHandler(e) {
    this.setState({
      isChecked: !this.state.isChecked
    });
  }

  render() {
    let {
      label,
      name,
      onChange,
      type,
      value
    } = this.props;

    return (<div className="cf-form-checkboxes">
        <div className="cf-form-checkbox">

        <input
          name={name}
          onChange={this.defaultHandler}
          type="checkbox"
          id={name}
          checked={this.state.isChecked}
        />
        <label className="question-label" htmlFor={name}>{label || name}</label>
        </div>
      </div>);
  }
}

Checkbox.defaultProps = {
}

