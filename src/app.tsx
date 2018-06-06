import * as React from "react";
import * as ReactDOM from 'react-dom';
import Hello from './molecules/Hello';
import InfiniteScroller from "./molecules/InfiniteScroller";

class App extends React.Component {
    render() {
        const texts = Array.from(Array(1000).keys()).map((key) => {
            return `No.${key + 1}`
        })
        
        return (
            <React.Fragment>
                <Hello compiler='TypeScript' framework='React' />
                <div style={{height: 300, overflow: 'scroll'}}>
                    <InfiniteScroller texts={texts} />
                </div>
            </React.Fragment>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)