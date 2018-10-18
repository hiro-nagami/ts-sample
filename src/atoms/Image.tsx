import * as React from 'react';
// import styled from 'styled-components';
import { NO_IMAGE_URL } from '../app/constants';

type Props = React.Props<HTMLImageElement> & {
  imageUrl: string;
  onError?: () => void;
}

type State = {
  currentImageUrl: string;
}

const imageStyle = {
  width: 'inherit',
  height: 'inherit',
}

class Image extends React.Component<Props, State> {

  constructor (props: Props) {
    super(props)
    this.state = {
      currentImageUrl: this.props.imageUrl,
    }

    this.onError = this.onError.bind(this);
  }

  public componentWillReceiveProps (props: Props) {
    if (this.state.currentImageUrl !== props.imageUrl) {
      this.setState({
        currentImageUrl: props.imageUrl,
      });
    }
  }

  public render () {
    return (
      <div style={imageStyle}>
        <img src={this.state.currentImageUrl || ''} onError={this.onError} />
      </div>
    );
  }

  private onError () {
    this.setState({
      currentImageUrl: NO_IMAGE_URL,
    });

    this.props.onError();
  }
}

export default Image;