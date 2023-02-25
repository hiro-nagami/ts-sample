import { useContext } from "react";
import { AlertDialogContext } from "./provider/AlertDialog";

export const useAlertDialog = () => {
    const { 
        content,
        isOpen,
        setContent,
        onOpen,
        onClose,
    } = useContext(AlertDialogContext)

    return {
        content,
        isOpen,
        setContent,
        onOpen,
        onClose,
    }
}