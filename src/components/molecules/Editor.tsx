import * as React from "react";
import TextArea from '../atoms/TextArea'

interface EditorProps { 
    onChangeMarkdown: (markdown: string)=> void
 }

class Editor extends React.Component<EditorProps, {}> {
    constructor(props: EditorProps) {
        super(props);
        this.onChangeMarkdown = this.onChangeMarkdown.bind(this)
    }

    onChangeMarkdown(text: string) {
        this.props.onChangeMarkdown(text)
    }

    render() {
        return <TextArea onChangeText={this.onChangeMarkdown}/>;
    }
}

export default Editor;