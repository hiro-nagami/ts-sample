import * as React from "react";
import Text from '../../components/atoms/Text'

type Props = { 
    compiler: string; 
    framework: string;
}

class Hello extends React.Component<Props, {}> {
    render() {
        const message: string = `Hello from ${this.props.compiler} and ${this.props.framework}`;
        return <Text text={message} />
    }
}

export default Hello;