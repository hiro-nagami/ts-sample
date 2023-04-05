// import { Props } from './types';
import { Container as ChakraForm } from '@chakra-ui/react'
import { Form as AntdForm } from "antd";
import { UiTypeState, UiType } from '../../../hooks/recoil/uiType'
import { useRecoilValue } from 'recoil';

type Props = {
    onSubmit: (data: any) => void
    children: React.ReactNode
}

export const Form = (props: Props) => {
    const uiType = useRecoilValue(UiTypeState)

    if (uiType === UiType.CHAKRA) return (
        <ChakraForm as='form' children={ props.children } onSubmit={ props.onSubmit } />
    )

    return (
        <AntdForm children={ props.children } onFinish={ props.onSubmit } />
    )
}