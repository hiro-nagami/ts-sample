import * as React from 'react';
import styled from 'styled-components';
import { NO_IMAGE_URL } from '../app/constants';

type Props = React.Props<HTMLImageElement> & {
  imageUrl: string;
}

type State = {
  currentImageUrl: string;
}

const StyledText = styled.text`
  color: #333333;
  display: block;
`;

class Image extends React.Component<Props, State> {

  constructor (props: Props) {
    super(props)
    this.state = {
      currentImageUrl: this.props.imageUrl,
    }
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
      <div>
        <img src={this.props.imageUrl} onError={this.onError} />
      </div>
    );
  }

  private onError () {
    this.setState({
      currentImageUrl: NO_IMAGE_URL,
    });
  }
}

export default Text;