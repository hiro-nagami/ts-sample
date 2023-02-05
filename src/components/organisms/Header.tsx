import * as React from 'react';
import BaseText from '../atoms/BaseText';

type Props = {}

type State = {}

const style = {
    height: '60px',
    with: '100%',
    // filter: "drop-shadow(10px 10px 10px rgba(0,0,0,0.6))",
    boxShadow: "0px 2px 3px -3px rgba(0,0,0,0.6)",
    padding: "0 20px",
}

class Header extends React.Component<Props, State> {
    render() {
        return (
            <div style={ style }>
                <BaseText size={ 24 } bold={ true } lineHeight={ "60px" } textAlign={ 'left' }>React</BaseText>
            </div>
        );
    }
}

export default Header;