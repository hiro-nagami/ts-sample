import { FieldValues, UseControllerProps } from "react-hook-form";

export type TSelectOption = {
    value: string,
    label: string,
}

export type SelectFormProps = {
    name?: string,
    label?: string,
    isMulti?: boolean,
    isOptional?: boolean,
    options: TSelectOption[],
    placeholder?: string,
    selectedValue: TSelectOption | TSelectOption[],
    errorMessage?: string;
    onChange?: (e: any) => void;
    onBlur?: (e: any) => void;
}

export type RhfSelectFormProps<T extends FieldValues> = Omit<
  SelectFormProps,
  "selectedValue"
> &
  UseControllerProps<T>