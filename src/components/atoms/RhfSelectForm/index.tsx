import { FieldValues, useController } from "react-hook-form"
import * as Chakra from "./chakra";
import * as Antd from "./antd";
import { RhfSelectFormProps } from "./types";
import { useRecoilValue } from "recoil";
import { UiType, UiTypeState } from "../../../hooks/recoil";

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

    const uiType = useRecoilValue(UiTypeState)

    const Select = uiType == UiType.CHAKRA ? Chakra.SelectForm : Antd.SelectForm

    return (
        <Select
            label={ label }
            selectedValue={ selectedValue }
            isMulti={ isMulti }
            isOptional={ isOptional }
            options={ options }
            onChange={ (e) => {
                onChange(e)
                if (cuntomOnChange) cuntomOnChange(e)
            }}
            onBlur={ onBlur }
            placeholder={ placeholder ?? "選択" }
            errorMessage={ error?.message }
            // ref={ ref }
        />
    )
}