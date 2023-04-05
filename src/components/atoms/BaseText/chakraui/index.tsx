import { Text } from '@chakra-ui/react';
import * as React from 'react';
import { Props } from '../types';

const Component = (props: Props) => {
  return (
    <Text size={ props.size ?? '1em' }>
      { props.children }
    </Text>
  )
}

export default Component