import { Image } from '@chakra-ui/react';
import { NO_IMAGE_URL } from '../../utils/constants';

type Props = {
    imageUrl: string
}

export const BaseImage = (props: Props) => {
    return (
        <Image
            w='100%'
            overflow='hidden'
            objectFit='cover'
            src={ props.imageUrl ?? NO_IMAGE_URL} 
        />
    )
}

export default BaseImage