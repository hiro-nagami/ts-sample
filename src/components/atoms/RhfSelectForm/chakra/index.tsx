import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { SelectFormProps } from "../types";

export const SelectForm = (props: SelectFormProps) => {
    const {
        name,
        label,
        isMulti,
        isOptional,
        options,
        placeholder,
        selectedValue,
        errorMessage,
        onBlur,
        ...rest
    } = props;

    const newOptions = isOptional ? [{ value: "", label: "選択してください" }, ...options] : options
    
    return  (
        <>
            <FormControl id={ name } isInvalid={ !!errorMessage }>
                { label ? <FormLabel>{ label }</FormLabel> : null }
                <Select
                    value={ selectedValue }
                    isMulti={ isMulti }
                    options={ newOptions }
                    placeholder={ placeholder }
                    onBlur={ onBlur }
                    { ...rest }
                />
                { !!errorMessage && <FormErrorMessage>{ errorMessage }</FormErrorMessage> }
            </FormControl>
        </>
    )
}
