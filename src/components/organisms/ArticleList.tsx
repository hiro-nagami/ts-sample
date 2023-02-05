import { Box } from '@chakra-ui/react';
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

type TProps = {
    articles: Article[],
}

export const ArticleList = (props: TProps) => {
    const [ articles, setArticles ] = React.useState<Article[]>([])

    React.useEffect(() => {
        setArticles(props.articles)
    }, [])

    return (
        <Box>
            { articles.map((æarticle, index) => (
                    <ArticleSection 
                    key={index}
                    imageUrl={æarticle.imageUrl}
                    description={æarticle.description}
                />   
            ))}
        </Box>
    )
}