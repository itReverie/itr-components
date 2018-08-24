import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  active: PropTypes.bool,
  block: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  wrapText: PropTypes.bool,
  rounded: PropTypes.bool,
  round: PropTypes.bool,
  noBorder: PropTypes.bool,
};

const defaultProps = {
  active: false,
  block: false,
  children: null,
  onClick: () => {},
  disabled: false,
  small: false,
  wrapText: false,
  rounded: false,
  round: false,
  noBorder: false,
};

function Button({
  active,
  block,
  children,
  onClick,
  disabled,
  small,
  round,
  rounded,
  noBorder,
  wrapText,
}) {
  return (
    <button
      aria-disabled={disabled}
      disabled={disabled}
      onClick={onClick}>
        {children}
    </button>
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
