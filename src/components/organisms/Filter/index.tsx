import { Button, Container } from "@chakra-ui/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form } from "../../atoms/Form";
import { RhfSelectForm, } from "../../atoms/RhfSelectForm";

type TData = {
    selectValue: string
    multiSelectValue: string[]
}

type TProps = {
    onSubmit: (data: TData) => void,
}

const selectOptions = [
    { value: '1', label: 'one' },
    { value: '2', label: 'two' },
    { value: '3', label: 'three' },
    { value: '4', label: 'four' },
]

const multiSelectOptions = [
    { value: '5', label: 'five' },
    { value: '6', label: 'six' },
    { value: '7', label: 'seven' },
    { value: '8', label: 'eight' },
]

const Component = (props: TProps) => {
    const { 
        control,
        setValue,
        handleSubmit,
        formState: { errors }
    } = useForm<TData>();

    useEffect(() => {
        setValue("selectValue", selectOptions[0].value)
        setValue("multiSelectValue", [ multiSelectOptions[0], multiSelectOptions[2] ].map(v => v.value))
    }, [])

    const onSubmit = (data: TData) => props.onSubmit(data)

    return (
        <>
            <Form onSubmit={ handleSubmit(onSubmit) }>   
                <RhfSelectForm 
                    name='selectValue'
                    options={ selectOptions }
                    errorMessage={ errors.selectValue?.message }
                    control={ control }
                />
                <RhfSelectForm 
                    name='multiSelectValue'
                    options={ multiSelectOptions }
                    errorMessage={ errors.multiSelectValue?.message }
                    control={ control }
                    isMulti
                />
                <Button type='submit' w='fill'>Submit</Button>
            </Form>
        </>
    )
}

export const Filter = (props: TProps) => {
    return (
        <Component { ...props }/>
    )
}