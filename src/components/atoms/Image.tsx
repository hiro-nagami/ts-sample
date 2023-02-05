import { useEffect, useState } from 'react';
import { NO_IMAGE_URL } from '../../constants';

type Props = {
  imageUrl: string | null
  onError?: () => void;
}

const imageStyle = {
  width: 'inherit',
  height: 'inherit',
}

export const Image = (props: Props) => {
  const [ currentImageUrl, setCurrentImageUrl ] = useState<string>('')

  useEffect(() => {
    setCurrentImageUrl(props.imageUrl ?? '')
  }, [])

  
  return (
    <div style={imageStyle}>
      <img src={ currentImageUrl } onError={() => setCurrentImageUrl(NO_IMAGE_URL)} />
    </div>
  )
}