import { useEffect, useState } from 'react'
import Header from '../components/organisms/Header'
import { ArticleList } from '../components/organisms/ArticleList'
import { ProfileSection } from '../components/molecules/ProfileSection'
import { Box, Container, VStack } from '@chakra-ui/react'
import useArticle from '../hooks/useArticles'
import { ArticleProvider, LoadArticleQuery } from '../hooks/provider/articles'
import reactLogo from '../assets/react.svg'
import { Article } from '../models/Article'
import { Pagenation } from '../components/molecules/Pagenation'

type TProps = {

}

const Component = (props: TProps) => {
    const [ articles, setArticles ] = useState<Article[]>([])
    const { loadArticles } = useArticle()
    const [ limit, setLimit ] = useState(10)
    const [ selected, setSelected ] = useState(0)

    useEffect(() => {
        const query = new LoadArticleQuery({
            page: selected,
            limit: limit
        })
        console.log('selected: ', selected)
        loadArticles(query)
        .then(res => {
            console.log("%o", res.articles)
            setArticles(res.articles)
        })
        .catch(err => {
            console.log(err)
        })
    }, [selected, limit])

    const handlePageClick = (data: { selected: number }) => {
        setSelected(data.selected)
    }

    return (
        <Container w='full'>
            <Header />
            <VStack w='full'>
                <ArticleList articles={ articles }/>
                <Pagenation handlePageClick={ handlePageClick } limit={ limit }/>
                <Box w='8rem'>
                <ProfileSection imageUrl={ reactLogo } name="Sample Name"/>
                </Box>
            </VStack>
        </Container>
    )
}

export const BasePage = (props: TProps) => {
    return (
        <ArticleProvider>
            <Component { ...props }/>
        </ArticleProvider>
    )
}