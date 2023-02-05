import * as React from 'react';

type Props = {
    width: number,
    height: number,
    children: React.ReactNode
}
  
type State = {
    width: number,
    height: number,
    isActive: boolean,
}

class BaseButton extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            width: props.width,
            height: props.height,
            isActive: false,
        }

        this.onMouseEnterEvent = this.onMouseEnterEvent.bind(this)
        this.onMouseLeaveEvent = this.onMouseLeaveEvent.bind(this)
    }

    render() {
        const bcColor = this.state.isActive ? "#bbb" : "#eee";
        const style = {
            width: this.state.width,
            height: this.state.height,
            textAlign: 'center' as 'center',
            backgroundColor: bcColor,
            lineHeight: 2,
        }

        return (
            <div style={ style } onMouseEnter={this.onMouseEnterEvent} onMouseLeave={this.onMouseLeaveEvent}>
                {this.props.children}
            </div>
        );
    }

    onMouseEnterEvent() {
        // this.setState({
        //     width: this.state.width,
        //     height: this.state.height,
        //     isActive: true,
        // })
    }

    onMouseLeaveEvent() {
        // this.setState({
        //     width: this.state.width,
        //     height: this.state.height,
        //     isActive: false,
        // })
    }
}

export default BaseButton;