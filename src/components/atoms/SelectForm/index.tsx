
import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react"
import { Select } from "chakra-react-select"

export type TSelectOption = {
    value: string,
    label: string,
}

type TError = {
    message?: string,
}

type TProps = {
    name: string
    isMulti?: boolean,
    options: TSelectOption[],
    defaultValue?: TSelectOption,
    error?: TError
    ref: any,
}

export const SelectForm = (props: TProps) => {
    const { name, isMulti, options, defaultValue, error, ref } = props;
    console.log("error", error?.message)

    return (
        <FormControl id={ name } isInvalid={ !!error }>
            <FormLabel>セレクト</FormLabel>
            <Select 
                defaultValue={ defaultValue }
                isMulti={ isMulti }
                options={ options }
                ref={ ref }
            />
            <FormErrorMessage>{error && error.message}</FormErrorMessage>
        </FormControl>
    )
}