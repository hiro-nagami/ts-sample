import * as React from "react";
import * as InfiniteScroll from 'react-infinite-scroller';

type Props = React.Props<HTMLElement> & { 
    hasMore: boolean;
    onLoad: (page: number) => Promise<void>;
 }

 interface State {}

class InfiniteScroller extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.onLoad = this.onLoad.bind(this)
    }

    private onLoad(page: number) {
        this.props.onLoad(page);
    }

    public render() {
        return (
            <div style={{height: '100vh', overflow: 'scroll'}}>
                <InfiniteScroll pageStart={0} 
                                hasMore={this.props.hasMore}
                                loadMore={this.onLoad}
                                loader={<div className="loader" key={0}>Loading ...</div>}
                                threshold={50}
                                useWindow={false}
                >

                    {this.props.children}
                </InfiniteScroll>
            </div>
        )
    }
}

export default InfiniteScroller;