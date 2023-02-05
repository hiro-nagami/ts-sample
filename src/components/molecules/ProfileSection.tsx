import * as React from 'react';
import BaseText from '../atoms/BaseText';
import BaseImage from '../atoms/BaseImage';

type Props = {
    imageUrl: string,
    name: string,
}

type State = {
    imageUrl: string,
    name: string,
}

const style = {
    width: "150px",
    border: "solid 1px #eee",
    boxShadow: "0px 2px 3px -3px rgba(0,0,0,0.6)",
    padding: "20px 20px",
    margin: "40px 0",
}

class ProfileSection extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = props;
    }

    render() {
        return (
            <div style={ style }>
                <BaseImage width={ 150 } height={ 150 } imageUrl={ this.state.imageUrl } rounded={ true }></BaseImage>
                <div style={{ margin: "0 auto", width: "60px" }}>
                    <BaseText size={ 14 } bold={ true } lineHeight={ "18px" } textAlign={ 'center' }>{ this.state.name }</BaseText>
                </div>
            </div>
        );
    }
}

export default ProfileSection;