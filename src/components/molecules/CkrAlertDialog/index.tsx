import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button } from "@chakra-ui/react"
import { useRef } from "react"

type TProps = {
    content: {
        title?: string,
        message?: string,
        okText: string,
        cancelText?: string,
    }
    isOpen: boolean
    onOk: () => void
    onCancel?: () => void
    closeOutside?: boolean
}

const Component = (props: TProps) => {
    const {
        content: {
            title,
            message,
            okText,
            cancelText,
        },
        isOpen,
        onOk,
        onCancel,
        closeOutside,
    } = props

    const cancelRef = useRef<HTMLButtonElement | null>(null)

    return (
        <AlertDialog
            isOpen={ isOpen }
            leastDestructiveRef={ cancelRef }
            onClose={ closeOutside && onCancel ? onCancel : () => {} }
        >
            <AlertDialogOverlay>
                <AlertDialogContent>
                    { title &&
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            { title }
                        </AlertDialogHeader>
                    }
                    
                    { message &&
                        <AlertDialogBody>
                            { message }
                        </AlertDialogBody>
                    }

                    <AlertDialogFooter>
                        { cancelText && 
                            <Button ref={cancelRef} onClick={ onCancel }>
                                { cancelText }
                            </Button>
                        }
                        <Button colorScheme="red" onClick={ onOk } ml={3}>
                            { okText }
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    )
}

export const CkrAlertDialog = (props: TProps) => {
    return (
        <Component { ...props }/>
    )
}