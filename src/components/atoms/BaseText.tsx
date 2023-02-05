import * as React from 'react';

type Props = {
  size: number,
  bold: boolean,
  lineHeight: string,
  textAlign: "center" |"left" | "right",
  children: React.ReactNode
}


const BaseText = (props: Props) => {

  const style = {
    fontSize: props.size,
    lineHeight: props.lineHeight,
    textAlign: props.textAlign,
  }

  return (
    <div style={ style }>
      { props.children }
      </div>
  );
}

export default BaseText;