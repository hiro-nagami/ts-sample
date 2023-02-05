import { Button } from '@chakra-ui/react';
import { useCallback } from 'react';

type Props = {
    isActive: boolean,
    children: React.ReactNode
}
  

const BaseButton = (props: Props) => {
    const onMouseEnterEvent = useCallback(() => {
    }, [])

    const onMouseLeaveEvent = useCallback(() => {
    }, [])

    return (
        <Button w='full' h={ 19 } onMouseEnter={ onMouseEnterEvent } onMouseLeave={ onMouseLeaveEvent }>
            { props.children }
        </Button>
    );
}

export default BaseButton;