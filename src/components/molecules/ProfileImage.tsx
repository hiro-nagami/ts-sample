import * as React from "react";
import User from "../../models/User";
import { Image } from "../atoms/Image";
import Text from "../atoms/Text";

type Props = HTMLElement & { 
  user: User;
}

type State = {
  isError: boolean;
}

const selfStyle: React.CSSProperties = {
  position: 'relative',
  width: 100,
  height: 100,
  border: '1px solid #ddd',
  borderRadius: '50%',
  overflow: 'hidden',
};

class ProfileImage extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props);

    this.state = {
      isError: false
    }

    this.onError = this.onError.bind(this);
  }

  public componentWillReceiveProps (nextProps: Props) {
    this.setState({
      isError: false
    })
  }
  
  public render () {
    const { user } = this.props;
    const child = this.state.isError ? <Text text="name" />: <Image imageUrl={user.thumbnail} onError={this.onError}/>

    return (
      <div style={selfStyle}>
        {child}
      </div>
   );
  }

  private onError (): void {
    this.setState({
      isError: true
    })
  }
}

export default ProfileImage; 