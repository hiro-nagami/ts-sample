import { Button, Container } from "@chakra-ui/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { RhfSelectForm, TSelectOption } from "../../atoms/RhfSelectForm";

type TFormValues = {
    select: TSelectOption
    multiSelect: TSelectOption[]
}

type TData = {
    selectValue: string
    multiSelectValue: string[]
}

type TProps = {
    onSubmit: (data: TData) => void,
}

const selectOptions = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
]

const multiSelectOptions = [
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
]

const Component = (props: TProps) => {
    const { 
        control,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm<TFormValues>();

    useEffect(() => {
        setValue("select", selectOptions[0])
        setValue("multiSelect", [ multiSelectOptions[0], multiSelectOptions[2] ])
    }, [])

    const onSubmit = (data: TFormValues) => {
        const { select, multiSelect } = data
        
        props.onSubmit({
            selectValue: select.value,
            multiSelectValue: multiSelect.map(v => v.value)
        })
    }

    return (
        <Container as='form' onSubmit={ handleSubmit(onSubmit) }>
            <RhfSelectForm 
                name='select'
                options={ selectOptions }
                errorMessage={ errors.select?.message }
                control={ control }
            />
            <RhfSelectForm 
                name='multiSelect'
                options={ multiSelectOptions }
                errorMessage={ errors.multiSelect?.message }
                control={ control }
                isMulti
            />
            <Button type='submit' w='fill'>Submit</Button>
        </Container>

    )
}

export const Filter = (props: TProps) => {
    return (
        <Component { ...props }/>
    )
}