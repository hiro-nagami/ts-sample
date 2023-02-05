import * as React from 'react';

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
        return <textarea onChange={this.onChangeText} />;
  }
}

export default TextArea;