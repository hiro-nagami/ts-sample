import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react"
import { Props, Select as ChakraSelect } from "chakra-react-select"
import { FieldValues, useController, UseControllerProps } from "react-hook-form"

export type TSelectOption = {
    value: string,
    label: string,
}

type SelectFormProps<Option> = {
    label?: string,
    isMulti?: boolean,
    isOptional?: boolean,
    options: TSelectOption[],
    placeholder?: string,
    selectedValue: TSelectOption | TSelectOption[],
    errorMessage?: string;
} & Props<Option>

export type RhfSelectFormProps<T extends FieldValues> = Omit<
  SelectFormProps<TSelectOption>,
  "selectedValue"
> &
  UseControllerProps<T>

const SelectForm = (props: SelectFormProps<TSelectOption>) => {
    const {
        name,
        label,
        isMulti,
        isOptional,
        options,
        placeholder,
        selectedValue,
        errorMessage,
        ...rest
    } = props;

    const newOptions = isOptional ? [{ value: "", label: "選択してください" }, ...options] : options
    
    return  (
        <FormControl id={ name } isInvalid={ !!errorMessage }>
            { label ? <FormLabel>{ label }</FormLabel> : null }
            <ChakraSelect 
                value={ selectedValue }
                isMulti={ isMulti }
                options={ newOptions }
                placeholder={ placeholder }
                { ...rest }
            />
            { !!errorMessage && <FormErrorMessage>{ errorMessage }</FormErrorMessage> }
        </FormControl>
    )
}

export const RhfSelectForm = <T extends FieldValues, >(props: RhfSelectFormProps<T>) => {
    const {
        label,
        isMulti,
        isOptional,
        options,
        placeholder,
        name,
        control,
        onChange: cuntomOnChange,
    } = props;

    const { 
        field: { onChange, onBlur, ref, value: selectedValue, ...rest  },
        fieldState: { error },
    } = useController<T>({ name, control })
    
    return (
            <SelectForm 
                label={ label }
                selectedValue={ selectedValue }
                isMulti={ isMulti }
                isOptional={ isOptional }
                options={ options }
                onChange={ (e, a) => {
                    onChange(e)
                    if (cuntomOnChange) cuntomOnChange(e,a)
                }}
                onBlur={ onBlur }
                placeholder={ placeholder ?? "選択" }
                errorMessage={ error?.message }
                // ref={ ref }
            />
    )
}