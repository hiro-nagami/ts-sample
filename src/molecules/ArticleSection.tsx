import * as React from 'react';
import BaseText from '../atoms/BaseText';
import BaseImage from '../atoms/BaseImage';
import BaseButton from '../atoms/BaseButton';

type Props = React.Props<HTMLImageElement> & {
    imageUrl: string,
    description: string,
}

type State = {
    imageUrl: string,
    description: string,
    isActive: boolean,
}

class ArticleSection extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            imageUrl: props.imageUrl,
            description: props.description,
            isActive: false,
        };

        this.onMouseEnterEvent = this.onMouseEnterEvent.bind(this)
        this.onMouseLeaveEvent = this.onMouseLeaveEvent.bind(this)
    }
    // transition: all .3s;
    render() {
        const transform = this.state.isActive ? "translateY(-5px)" : ""

        const style = {
            width: "480px",
            border: "solid 1px #eee",
            boxShadow: "0px 2px 3px -3px rgba(0,0,0,0.6)",
            padding: "20px 20px",
            margin: "25px 0",
            transition: "all .3s",
            transform,
        }

        return (
            <div style={ style } onMouseEnter={this.onMouseEnterEvent} onMouseLeave={this.onMouseLeaveEvent}>
                <BaseImage width={ 480 } height={ 270 } imageUrl={ this.state.imageUrl } rounded={ false }></BaseImage>
                <BaseText size={ 12 } bold={ true } lineHeight={ "18px" } textAlign={ 'left' }>{ this.state.description }</BaseText>
                <BaseButton width={ 480 } height={ 40 }>More</BaseButton>
            </div>
        );
    }

    onMouseEnterEvent() {
        this.state = {
            imageUrl: this.state.imageUrl,
            description: this.state.description,
            isActive: true,
        };
    }

    onMouseLeaveEvent() {
        this.state = {
            imageUrl: this.state.imageUrl,
            description: this.state.description,
            isActive: false,
        }; 
    }
}

export default ArticleSection;