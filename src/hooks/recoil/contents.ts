import { atom, atomFamily, selectorFamily, useRecoilCallback } from "recoil";

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

const datasAtom = atom<Record<string, string | undefined>>({
    key: 'datasAtom', 
    default: {}
})

export const changeCountAtom = atomFamily<number, string>({
    key: 'changeCountAtom',
    default: 0
})

export const datasSelector = selectorFamily<string | undefined, string>({
    key: 'updateDatasSelector',
    get: (id: string) => ({ get }): string | undefined => {
        return get(datasAtom)[id]
    },
    set: (id: string) => ({get, set}, newValue) => {
        const datas = get(datasAtom)
        set(datasAtom, {
            ...datas,
            [id]: newValue as string
        })
        
        const current = get(changeCountAtom(id))
        const next = current + 1
        console.log(`Count Up [${id}]: ${current} => ${next}`)
        set(changeCountAtom(id), next)
    }
})