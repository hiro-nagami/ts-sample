import { Button, Container, FormControl } from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import { SelectForm, TSelectOption } from "../../atoms/SelectForm";

type TResult = {
    select: {
        value: string,
        label: string,
    }
}

type TProps = {

}

type TDefaultValues = {
    select: TSelectOption[],
    multiSelect: TSelectOption[],
}

export const Filter = (props: TProps) => {
    const defaultValues = {
        select: 
        // [
            // { value: '1', label: '1' },
            { value: '2', label: '2' },
            // { value: '3', label: '3' },
            // { value: '4', label: '4' },
        // ],
        multiSelect:
        //  [
            // { value: '5', label: '5' },
            // { value: '6', label: '6' },
            { value: '7', label: '7' },
            // { value: '8', label: '8' },
        // ],
    }
    const { control, handleSubmit } = useForm({ defaultValues });

    const onSubmit = (data: any) => {
        const { select, selectMulti } = data
        console.log(select, selectMulti)
    }

    const selectOptios: TSelectOption[] = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
    ]

    const multiSelectOptions: TSelectOption[] = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
    ]

    return (
        <Container as='form' onSubmit={ handleSubmit(onSubmit) }>
            <Controller
                name='select'
                control={ control }
                rules={{ required: "Please enter at one select." }}
                render={({ field, fieldState }) => (
                    <SelectForm 
                        name='select'
                        options={ selectOptios }
                        defaultValue={ field.value }
                        error={ fieldState.error }
                        ref={ field.ref }
                    />
                )}
            />

            <Controller
                name='multiSelect'
                control={ control }
                rules={{ required: "Please enter at least one select." }}
                render={({ field, fieldState }) => (
                    <SelectForm 
                        name='multiSelect'
                        options={ multiSelectOptions }
                        defaultValue={ field.value }
                        error={ fieldState.error }
                        ref={ field.ref }
                        isMulti
                    />
                )}
            />
            <Button type='submit' w='fill'>Submit</Button>
        </Container>

    )
}