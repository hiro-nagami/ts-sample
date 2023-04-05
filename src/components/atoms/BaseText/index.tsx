import { Props } from './types';
import Chakra from './chakraui'
import Antd from './antd'
import { UiTypeState, UiType } from '../../../hooks/recoil/uiType'
import { useRecoilValue } from 'recoil';

export const BaseText = (props: Props) => {
    const uiType = useRecoilValue(UiTypeState)

    if (uiType === UiType.CHAKRA) return (
        <Chakra {...props} />
    )

    return (
        <Antd {...props} />
    )
}