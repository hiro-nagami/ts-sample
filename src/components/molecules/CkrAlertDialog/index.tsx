import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button } from "@chakra-ui/react"
import { useRef } from "react"
import { useAlertDialog } from "../../../hooks/useAlertDialog"

type TProps = {
    onOk: () => void
    onCancel?: () => void
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
        onClose
    } = useAlertDialog()

    const cancelRef = useRef<HTMLButtonElement | null>(null)

    const onOk = () => {
        props.onOk()
        onClose()
    }

    const onCancel = () => {
        if (props.onCancel) {
            props.onCancel()
        }
        onClose()
    }

    return (
        <AlertDialog
            isOpen={ isOpen }
            leastDestructiveRef={ cancelRef }
            onClose={ onClose }
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