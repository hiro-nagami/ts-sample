import BaseText from '../atoms/BaseText';
import BaseImage from '../atoms/BaseImage';

type TProps = {
    imageUrl: string,
    name: string,
}

export const ProfileSection  = (props: TProps) => {
    return (
        <>
            <BaseImage  imageUrl={ props.imageUrl }></BaseImage>
            <BaseText>{ props.name }</BaseText>
        </>
    );
}