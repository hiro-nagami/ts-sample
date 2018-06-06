import * as React from "react";
import Text from '../atoms/Text'
import InfiniteScroll = require('react-infinite-scroller');

interface InfiniteScrollerProps { 
    texts: string[];
 }

class InfiniteScroller extends React.Component<InfiniteScrollerProps, {}> {
    render() {
        const children = this.props.texts.map((text) => {
            <Text text={text}></Text>
        });

        return (
            <InfiniteScroll loadMore={() => {}}>
                {children}
            </InfiniteScroll>
        )
    }
}

export default InfiniteScroller;