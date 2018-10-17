import * as React from 'react';
import styled from 'styled-components';

const StyledText = styled.text`
  color: #333333;
  display: block;
`;

class Text extends React.Component {
  render() {
    return (
      <StyledText>{this.props.children}</StyledText>
    );
  }
}

export default Text;