import { useDisclosure } from '@chakra-ui/react';
import { createContext, useCallback, useState } from 'react';

type AlertContent = {
    readonly title?: string
    readonly message?: string
    readonly okText: string
    readonly cancelText?: string
}

type TContextParams = {
    readonly content: AlertContent
    readonly isOpen: boolean
}

interface ContextInterface {
    readonly setContent: (props: AlertContent) => void
    readonly onOpen: () => void
    readonly onClose: () => void
}

export const AlertDialogContext = createContext<ContextInterface & TContextParams>({ 
    content: { okText: 'ok' },
    isOpen: false,
    setContent: async () => { throw new Error('Function not implemented.') },
    onOpen: async () => { throw new Error('Function not implemented.') },
    onClose: async () => { throw new Error('Function not implemented.') },
})

type TProviderProps = {
    readonly children: React.ReactNode
}

export const AlertDialogProvider = (props: TProviderProps) => {
    const [ title, setTitle ] = useState<string | undefined>(undefined)
    const [ message, setMessage ] = useState<string | undefined>(undefined)
    const [ okText, setOkText ] = useState<string>("OK")
    const [ cancelText, setCancelText ] = useState<string | undefined>(undefined)
    const { isOpen, onOpen, onClose } = useDisclosure()

    const setContent = useCallback((params: AlertContent) => {
        setTitle(params.title)
        setMessage(params.message)
        setOkText(params.okText)
        setCancelText(params.cancelText)
    }, [])

    const value = {
        content: {
            title,
            message,
            okText,
            cancelText,
        },
        isOpen,
        setContent,
        onOpen,
        onClose,
    }

    return (
        <AlertDialogContext.Provider value={ value }>
            { props.children }
        </AlertDialogContext.Provider>
    )
}
