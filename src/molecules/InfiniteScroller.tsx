import * as React from "react";
import Text from '../atoms/Text'
import * as InfiniteScroll from 'react-infinite-scroller';

interface InfiniteScrollerProps { 
    texts: string[];
 }

 interface InfiniteScrollerStates { 
    children: JSX.Element[];
    page: number;
 }

class InfiniteScroller extends React.Component<InfiniteScrollerProps, InfiniteScrollerStates> {
    constructor(props: any) {
        super(props)

        this.state = {
            children: [],
            page: 0
        }

        this.loadNumbers = this.loadNumbers.bind(this)
    }

    sleep(milliseconds: number) {
        return new Promise<void>(resolve => {
            setTimeout(() => resolve(), milliseconds);
        });
    }

    async loadNumbers(page: number) {
        let start = (page-1 < 0 ? 0 : page - 1) * 10;
        let end = page * 10 - 1
        const texts = this.props.texts.slice(start, end);
        console.log(start, end, texts);

        const components: JSX.Element[] = texts.map((text, index) => {
            return <Text text={text} key={start+index+1} />
        });

        let currentChildren = this.state.children;
         const newChildren = currentChildren.concat(components)

        await this.sleep(1000);
        this.setState({children: newChildren, page: page})
    }

    render() {
        return (
            <InfiniteScroll pageStart={0} 
                            hasMore={this.state.page < 100}
                            loadMore={this.loadNumbers}
                            loader={<div className="loader" key={0}>Loading ...</div>}
                            useWindow={false}
            >
                
            
                    {this.state.children}
                
            </InfiniteScroll>
        )
    }
}

export default InfiniteScroller;