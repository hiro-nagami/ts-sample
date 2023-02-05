import { Box } from '@chakra-ui/react';
import BaseText from '../atoms/BaseText';

type Props = {}

const Header = (props: Props) => {
    return (
        <Box>
            <BaseText size={ 24 } bold={ true } lineHeight={ "60px" } textAlign={ 'left' }>React</BaseText>
        </Box>
    );
}

export default Header;