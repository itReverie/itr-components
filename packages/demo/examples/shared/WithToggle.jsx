import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from './Checkbox';

const propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  initialChecked: PropTypes.bool,
};

const defaultProps = {
  initialChecked: false,
};

class WithToggle extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { checked: props.initialChecked };
  }

  render() {
    const { children, id, label } = this.props;
    const { checked } = this.state;
    return (
      <div>
        <Checkbox
          id={id}
          label={label}
          checked={checked}
          onChange={() => { this.setState({ checked: !checked }); }}
        />
        {children(checked)}
      </div>
    );
  }
}

WithToggle.propTypes = propTypes;
WithToggle.defaultProps = defaultProps;

export default WithToggle;
