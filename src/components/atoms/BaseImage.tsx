import * as React from 'react';

type Props = {
    imageUrl: string;
    width: number,
    height: number,
    rounded: boolean,
}
  
type State = {
    imageUrl: string;
    width: number,
    height: number,
    rounded: boolean,
}

class BaseImage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = this.props;
    }

    render () {
        return (
            <img width={ this.state.width } 
                 height={ this.state.height } 
                 src={this.state.imageUrl || ''} 
                 style={{ borderRadius: this.state.rounded ? this.state.width / 2.0 : 0 }}/>
        );
      }
}

export default BaseImage;