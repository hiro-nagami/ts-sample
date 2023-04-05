import { Form, Select } from "antd";
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
        ...rest
    } = props;

    const newOptions = isOptional ? [{ value: "", label: "選択してください" }, ...options] : options

    const mode = isMulti ? "multiple" : undefined
    
    return  (
        <Form.Item id={ name }>
            {/* { label ? <FormLabel>{ label }</FormLabel> : null } */}
            <Select
                mode={ mode }
                value={ selectedValue }
                options={ newOptions }
                placeholder={ placeholder }
                { ...rest }
            />
            {/* { !!errorMessage && <FormErrorMessage>{ errorMessage }</FormErrorMessage> } */}
        </Form.Item>
    )
}
