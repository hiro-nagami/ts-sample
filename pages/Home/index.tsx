import { useEffect, useState } from 'react'
import Header from '../../src/components/organisms/Header'
import { ArticleList } from '../../src/components/organisms/ArticleList'
import { ProfileSection } from '../../src/components/molecules/ProfileSection'
import { Box, Container, VStack } from '@chakra-ui/react'
import useArticle from '../../src/hooks/useArticles'
import { ArticleProvider, LoadArticleQuery } from '../../src/hooks/provider/articles'
// import reactLogo from '../../src/assets/react.svg'
import { Article } from '../../src/models/Article'
import { Pagenation } from '../../src/components/molecules/Pagenation'
import { PagenationProvider } from '../../src/hooks/provider/pagenation'
import usePagenation from '../../src/hooks/usePagenation'

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
                    <ProfileSection imageUrl={ '' } name="Sample Name"/>
                </Box>
            </VStack>
        </Container>
    )
}

const Page = (props: TProps) => {
    return (
        <ArticleProvider>
            <PagenationProvider>
                <Component { ...props }/>
            </PagenationProvider>
        </ArticleProvider>
    )
}

export default Page