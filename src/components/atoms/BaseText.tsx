import { Text } from '@chakra-ui/react';
import * as React from 'react';

type Props = {
  children: React.ReactNode
}


const BaseText = (props: Props) => {
  return (
    <Text size='1em'>
      { props.children }
    </Text>
  )
}

export default BaseText;