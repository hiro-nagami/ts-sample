import { Box, VStack } from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { NO_IMAGE_URL } from '../../constants';
import { AlertDialogProvider } from '../../hooks/provider/AlertDialog';
import { useAlertDialog } from '../../hooks/useAlertDialog';
import { Article } from '../../models/Article';
import ArticleSection from '../molecules/ArticleSection';
import { CkrAlertDialog } from '../molecules/CkrAlertDialog';
import { Filter } from './Filter';

type TProps = {
    articles: Article[],
}

const Component = (props: TProps) => {
    const { onOpen, setContent } = useAlertDialog()
    const [ data, setData ] = useState<any>({})

    const onClick = useCallback((data: any) => {
        setContent({
            title: "検索",
            message: `下記の内容で検索しますか？\n\n${JSON.stringify(data)}`,
            okText: "検索",
            cancelText: "",
        })
        setData(data)
        onOpen()
    }, [])

    return (
        <Box>
            <Filter onSubmit={ onClick } />
            <CkrAlertDialog onOk={ () => {
                console.log(`%o`, data)
            } } />
            <VStack w='full' spacing={8}>
                { props.articles.map((article, index) => (
                    <ArticleSection 
                        key={index}
                        description={article.title}
                        imageUrl={article.imageUrl ?? NO_IMAGE_URL}
                    />   
                ))}
            </VStack>
        </Box>
    )
}

export const ArticleList = (props: TProps) => {
    return (
        <AlertDialogProvider>
            <Component { ...props } />
        </AlertDialogProvider>
    )
}