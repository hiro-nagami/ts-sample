import { atomFamily, selectorFamily, useRecoilCallback } from "recoil";

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

type Content = {
    data: string
}

export const fetchData = async (props: {id: string, count: number}): Promise<Content> => {
    return { data: `data-${props.id}-${props.count}` }
}

export const cacheCountState = atomFamily<number, string>({
    key: 'cacheCountState',
    default: 0
})

export const cachableContentState = selectorFamily<Content | undefined, string>({
    key: 'cachableContentState',
    get: (id: string) => async ({ get }): Promise<Content | undefined> => {
        const cacheCount = get(cacheCountState(id))
        return await fetchData({ id, count: cacheCount})
    }
})

export const useFetch = () => useRecoilCallback(({ snapshot }) => async (id: string) => {
    return snapshot.getPromise(cachableContentState(id))
})

export const useCountUp = () => useRecoilCallback(({ set }) => async (id: string) => {
    set(cacheCountState(id), x => x + 1)
})