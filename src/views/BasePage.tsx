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
import { PagenationProvider } from '../hooks/provider/pagenation'
import usePagenation from '../hooks/usePagenation'

type TProps = {

}

const Component = (props: TProps) => {
    const { 
        page,
        count,
        setCount,
        setAllCount,
     } = usePagenation()

    const [ articles, setArticles ] = useState<Article[]>([])
    const { loadArticles } = useArticle()

    useEffect(() => {
        setCount(10)
    }, [])

    useEffect(() => {
        const query = new LoadArticleQuery({
            page: page,
            limit: count
        })

        loadArticles(query)
        .then(res => {
            setArticles(res.articles)
            setAllCount(res.pageCount)
        })
        .catch(err => {
            console.log(err)
        })
    }, [page, count])

    return (
        <Container w='full'>
            <Header />
            <VStack w='full'>
                <ArticleList articles={ articles }/>
                <Pagenation />
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
            <PagenationProvider>
                <Component { ...props }/>
            </PagenationProvider>
        </ArticleProvider>
    )
}