import { Select } from "@chakra-ui/react"
import { Controller, useForm } from "react-hook-form"

type TProps = {

}

export const InputForm = (props: TProps) => {
    const onSubmit = (data: any) => console.log(data)
    const { register, handleSubmit, control } = useForm()

    const defaultValues = {
        select: {}
    }

    return (
        <Controller
            name='select'
            control={control}
            render={({ field }) => (<Select {...field}/>)}
        />
    )
}