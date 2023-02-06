import { createContext, useState } from 'react';

type TContextParams = {
    page: number
    count: number
    allCount: number
}

interface ContextInterface {
    readonly setPage: (page: number) => void
    readonly setCount: (count: number) => void
    readonly setAllCount: (count: number) => void
}

export const PagenationContext = createContext<ContextInterface & TContextParams>({ 
    page: 0,
    count: 0,
    allCount: 0,
    setPage: async (_) => { throw new Error('Function not implemented.') },
    setCount: async () => { throw new Error('Function not implemented.') },
    setAllCount: async () => { throw new Error('Function not implemented.') },
})

type TProviderProps = {
    readonly children: React.ReactNode
}

export const PagenationProvider = (props: TProviderProps) => {
    const [ page, setPage ] = useState<number>(0)
    const [ count, setCount ] = useState<number>(20)
    const [ allCount, setAllCount ] = useState<number>(0)

    const value = {
        page,
        count,
        allCount,
        setPage,
        setCount,
        setAllCount,
    }

    return (
        <PagenationContext.Provider value={ value }>
            { props.children }
        </PagenationContext.Provider>
    )
}
