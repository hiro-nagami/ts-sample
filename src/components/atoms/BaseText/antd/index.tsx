import { Typography } from 'antd';
import * as React from 'react';
import { Props } from '../types';

const Component = (props: Props) => {
  return (
    <Typography>
      { props.children }
    </Typography>
  )
}

export default Component