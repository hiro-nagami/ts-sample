import { Box, useDisclosure, VStack } from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { NO_IMAGE_URL } from '../../constants';
import { Article } from '../../models/Article';
import ArticleSection from '../molecules/ArticleSection';
import { CkrAlertDialog } from '../molecules/CkrAlertDialog';
import { Filter } from './Filter';

type TProps = {
    articles: Article[],
}

const Component = (props: TProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ data, setData ] = useState<any>({})

    const onClick = useCallback((data: any) => {
        setData(data)
        onOpen()
    }, [])

    const onOk = () => {
        onClose()
        console.log(`%o`, data)
    }

    const onCancel = () => {
        onClose()
    }

    const content = {
        title: "検索",
        message: `下記の内容で検索しますか？\n\n${JSON.stringify(data)}`,
        okText: "検索",
        cancelText: "",
    }

    return (
        <Box>
            <Filter onSubmit={ onClick } />
            <CkrAlertDialog content={ content } isOpen={ isOpen } onOk={ onOk } onCancel={ onCancel } />
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
        <Component { ...props } />
    )
}