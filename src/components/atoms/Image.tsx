import { useEffect, useState } from 'react';
import { NO_IMAGE_URL } from '../../utils/constants';

type Props = {
  imageUrl: string | null
  onError?: () => void;
}

const imageStyle = {
  width: 'inherit',
  height: 'inherit',
}

export const Image = (props: Props) => {
  const [ currentImageUrl, setCurrentImageUrl ] = useState<string>(NO_IMAGE_URL)

  useEffect(() => {
    if (props.imageUrl) setCurrentImageUrl(props.imageUrl)
  }, [])

  
  return (
    <div style={imageStyle}>
      <img src={ currentImageUrl } onError={() => setCurrentImageUrl(NO_IMAGE_URL)} />
    </div>
  )
}