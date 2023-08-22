import * as React from "react";
import InfiniteScroller from "../molecules/InfiniteScroller";
import Hello from "../molecules/Hello";
import Text from "./Text";


type Props = {
  
}

type State = {
  page: number;
  texts: string[];
  displayTexts: string[];
}

class InfiniteScrollRoute extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props);

    const texts = Array.from(Array(100).keys()).map((key) => {
      return `No.${key + 1}`
    })

    this.state = {
      page: 0,
      texts,
      displayTexts: [],
    };

    this.onLoad = this.onLoad.bind(this);
  }

  public render() {    
    return (
      <React.Fragment>
        <Hello compiler='TypeScript' framework='React' />
        <InfiniteScroller onLoad={this.onLoad} hasMore={this.state.page < 10}>
          {this.state.displayTexts.map((text, index) => this.components(text, index))}
        </InfiniteScroller>
      </React.Fragment>
    );
  }

  private components (text: string, index: number) {
    return (
      <Text key={index+1} text={ text } />
    );
  }

  private onLoad (page: number): Promise<void> {
    return this.sleep(1000).then(() => {
      let start = (page - 1 < 0 ? 0 : page - 1) * 10;
      let end = page * 10 - 1
      const texts = this.state.texts.slice(start, end);
  
      const newTexts = this.state.displayTexts.concat(texts)
  
      this.setState({ 
        page,
        displayTexts: newTexts,
       })
    })
  }

  private sleep(milliseconds: number) {
      return new Promise<void>(resolve => {
          setTimeout(() => resolve(), milliseconds);
      });
  }
}

export default InfiniteScrollRoute;