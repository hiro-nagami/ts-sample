import { atom, atomFamily, selector, selectorFamily, SerializableParam, useRecoilCallback, useRecoilState, useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from "recoil";

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

type Content = {
    data: string
}


export const fetchData = async (props: {id: string, count: number}): Promise<Content> => {
    // await sleep(3000) 
    return { data: `data-${props.id}-${props.count}` }
}

export const cacheCountState = atomFamily<number, string>({
    key: 'cacheCountState',
    default: 0
})


export const contentsState = atomFamily<Content | undefined, SerializableParam>({
    key: 'contentsState',
    default: undefined
})

// export const cachableContentState = selectorFamily<Content | undefined, { id: string, cacheCount: number }>({
//     key: 'cachableContentState',
//     get: ({ id, cacheCount }) => async ({ get }): Promise<Content | undefined> => {
//         const contentStateKey = { id: id, cacheCount: cacheCount }
//         const contents = get(contentsState(contentStateKey))

//         if (contents) return contents

//         // const set = useSetRecoilState(contentsState(contentStateKey))

//         const result = await fetchData(`${id}-${cacheCount}`)
//         // set(result)

//         return result
//     }
// })

export const useFetch = () => useRecoilCallback(({ snapshot, set }) => async (id: string) => {
    const cacheCount = await snapshot.getPromise(cacheCountState(id))
    const contentStateKey = { id: id, cacheCount: cacheCount }

    const contents = await snapshot.getPromise(contentsState(contentStateKey))

    if (contents) return contents

    const value = await fetchData({ id, count: cacheCount })
    set(contentsState(contentStateKey), value)

    return value
})

export const useCountUp = () => useRecoilCallback(({ set }) => async () => {
    set(cacheCountState('key1'), x => x + 1)
})

export const fetchEnableContent = (key: string) => {
    const setCacheCount = useSetRecoilState(cacheCountState(key))
    setCacheCount(count => count + 1)
}