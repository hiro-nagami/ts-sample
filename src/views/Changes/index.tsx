import { Button, List, Select } from "antd"
import { useRecoilState, useRecoilValue } from "recoil"
import { datasSelector, changeCountAtom } from "../../hooks/recoil/contents"
import { useState } from "react"

type ItemType = {
    key: string
    default: string
}

const items: ItemType[] = [
    { 
        key: 'key001',
        default: 'data001',
    },
    {
        key: 'key002',
        default: 'data002',
    },
    {
        key: 'key003',
        default: 'data003',
    },
    {
        key: 'key004',
        default: 'data004',
    },
    {
        key: 'key005',
        default: 'data005',
    },
]

const CountItem = (props: { id: string }) => {
    const currentCount = useRecoilValue(changeCountAtom(props.id))
    console.log(`render CountItem(${props.id}):`, currentCount)
    return <>
        {props.id}: {currentCount}
    </>
}

const CountUpButton = (props: {item: ItemType}) => {
    const [value, set] = useRecoilState(datasSelector(props.item.key))

    return (
        <Button 
            onClick={() => set(value ?? props.item.default)}
        >
            Count Up
        </Button>
    )
}

const UpdateForm = () => {
    const [current, setCurrent] = useState<ItemType>(items[0])

    return (
        <>
            <Select
                options={items.map(item => ({ value: item.key, label: item.key, default: item.default }))}
                defaultValue={current}
                onSelect={(value, option) => {
                    console.log(`onSelect`, value, option)
                    setCurrent({ key: option.value, default: option.default })
                }}
                style={{width: '300px'}}
            />
            <CountUpButton item={current} />
        </>
    )
}

const ChangesCount = () =>  {
    return (
        <>
            <UpdateForm />
            <List
                dataSource={items}
                renderItem={(item ,index) => 
                    <List.Item>
                        <CountItem id={item.key} />
                    </List.Item>
                }
            />
        </>
    )
}

export const Changes = () => {
    return (<>
        <ChangesCount />
    </>)
}