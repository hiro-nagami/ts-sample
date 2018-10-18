import * as React from 'react';
import styled from 'styled-components';

const StyledText = styled.text`
  width: inherit;
  color: #333333;
  display: block;
  text-align: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

class Text extends React.Component {
  render() {
    return (
      <StyledText>{this.props.children}</StyledText>
    );
  }
}

export default Text;