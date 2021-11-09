import * as React from 'react';

type Props = React.Props<HTMLImageElement> & {
  size: number,
  bold: boolean,
  lineHeight: string,
  textAlign: "center" |"left" | "right",
}

type State = {
  size: number,
  bold: boolean,
  lineHeight: string,
  textAlign: "center" | "left" | "right",
}

class BaseText extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = props;
  }
  render() {
    const style = {
      fontSize: this.state.size,
      lineHeight: this.state.lineHeight,
      textAlign: this.state.textAlign,
    }

    return (
      <div style={ style }>{this.props.children}</div>
    );
  }
}

export default BaseText;