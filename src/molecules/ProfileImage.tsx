import * as React from "react";
import Text from '../atoms/Text'

interface HelloProps { compiler: string; framework: string; }

class Hello extends React.Component<HelloProps, {}> {
    render() {
        const message: string = `Hello from ${this.props.compiler} and ${this.props.framework}`;
        return <Text text={message} />;
    }
}

export default Hello;