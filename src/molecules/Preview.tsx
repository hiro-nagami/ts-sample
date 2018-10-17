import * as React from "react";

interface PreviewProps { html: string; }

class Preview extends React.Component<PreviewProps, {}> {
    render() {
        return <span dangerouslySetInnerHTML={{__html: this.props.html}} />;
    }
}

export default Preview;