import * as React from 'react';
import ArticleSection from '../molecules/ArticleSection';

export class Article {
    imageUrl: string
    description: string

    constructor(imageUrl: string, description: string) {
        this.imageUrl = imageUrl
        this.description = description
    }
}

type Props = React.Props<HTMLImageElement> & {
    articles: Article[],
}

type State = {
    articles: Article[],
}

const style = {
    // filter: "drop-shadow(10px 10px 10px rgba(0,0,0,0.6))",
    margin: "40px 30px",
}

class ArticleList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = props;
    }

    render() {
        const articleDoms = this.state.articles.map((element, index, array) => {
            return (
                <ArticleSection 
                    key={index}
                    imageUrl={element.imageUrl}
                    description={element.description}
                />
            );
        });

        return (
            <div style={ style }>
                {articleDoms}
            </div>
        );
    }
}

export default ArticleList;