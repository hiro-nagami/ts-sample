import * as React from 'react';
import styled from 'styled-components';

const StyledTextArea = styled.textarea`
  color: #333333;
  display: block;
`;

interface TextAreaProps {
    onChangeText: (text: string) => void;
};

class TextArea extends React.Component<TextAreaProps, {}> {
    constructor(props: TextAreaProps) {
        super(props)
        this.onChangeText = this.onChangeText.bind(this)
    }

    onChangeText(event: React.ChangeEvent<HTMLTextAreaElement>) {
        this.props.onChangeText(event.target.value)
    }

    render() {
        return <StyledTextArea onChange={this.onChangeText} />;
  }
}

export default TextArea;