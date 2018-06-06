import * as React from "react";
import * as ReactDOM from 'react-dom';
import Hello from './molecules/Hello';
import InfiniteScroller from "./molecules/InfiniteScroller";

class App extends React.Component {
    render() {
        const texts = Array.from(Array(100).keys()).map((key) => {
            return `No.${key + 1}`
        })
        
        return (
            <React.Fragment>
                <Hello compiler='TypeScript' framework='React' />
                <InfiniteScroller texts={texts} />
            </React.Fragment>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)