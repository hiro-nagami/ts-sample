import * as React from 'react';

type Props = {
  text: string
}

class Text extends React.Component<Props,{}> {
  render() {
    return (
      <>{this.props.text}</>
    );
  }
}

export default Text;