import { useCallback } from 'react';
import BaseText from '../atoms/BaseText';
import BaseImage from '../atoms/BaseImage';
import BaseButton from '../atoms/BaseButton';
import { Box, Card } from '@chakra-ui/react';

type Props = {
    imageUrl: string,
    description: string,
}

export const ArticleSection = (props: Props) => {
    const onMouseEnterEvent = useCallback(() => {

    }, [])

    const onMouseLeaveEvent = useCallback(() => {

    }, [])

    return (
        <Card w='full' onMouseEnter={ onMouseEnterEvent } onMouseLeave={ onMouseLeaveEvent } overflow='hidden'>
            <Box h='15rem' overflow='hidden'>
                <BaseImage imageUrl={ props.imageUrl } />
            </Box>
            <Box h='6rem' overflow='hidden'>
                <BaseText>{ props.description }</BaseText>
            </Box>
        </Card>
    )
}

export default ArticleSection;