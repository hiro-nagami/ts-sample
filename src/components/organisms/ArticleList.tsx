import { VStack } from '@chakra-ui/react';
import { NO_IMAGE_URL } from '../../utils/constants';
import { Article } from '../../models/Article';
import ArticleSection from '../molecules/ArticleSection';

type TProps = {
    articles: Article[],
}

export const ArticleList = (props: TProps) => {
    return (
        <VStack w='full' spacing={8}>
            { props.articles.map((article, index) => (
                <ArticleSection 
                    key={index}
                    description={article.title}
                    imageUrl={article.imageUrl ?? NO_IMAGE_URL}
                />   
            ))}
        </VStack>
    )
}