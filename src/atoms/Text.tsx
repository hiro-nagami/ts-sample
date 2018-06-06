import * as React from 'react';
import styled from 'styled-components';

interface TextProps {
  text: string;
}

const StyledText = styled.text`
  color: #333333;
`;

const Text = (props: TextProps) => {
    return (
        <StyledText>{props.text}</StyledText>
    );
}

export default Text;