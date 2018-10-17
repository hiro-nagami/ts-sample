import * as React from "react";
import * as ReactDOM from 'react-dom';
import Hello from './molecules/Hello';
import InfiniteScroller from "./molecules/InfiniteScroller";
import * as Marked from "marked";
import Editor from "./molecules/Editor";
import Preview from "./molecules/Preview";

interface AppProps {

}

type AppState = {
    markdown: string,
}

class App extends React.Component<AppProps, AppState> {

    constructor(props: AppProps) {
        super(props)
        this.state = { markdown: "" }
    }

    render() {
        const texts = Array.from(Array(100).keys()).map((key) => {
            return `No.${key + 1}`
        })
        
        return (
            <React.Fragment>
                <Hello compiler='TypeScript' framework='React' />
                <Editor onChangeMarkdown={(markdown) => { this.setState({ markdown })}} />
                <Preview html={Marked.parse(this.state.markdown)} />
                {/* <InfiniteScroller texts={texts} /> */}
            </React.Fragment>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)