import * as React from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
}

const StyledText = styled.text`
  width: inherit;
  color: #333333;
  display: block;
  text-align: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const Text = (props: Props) => {
    return (
        <StyledText>{props.text}</StyledText>
    );
}

export default Text;