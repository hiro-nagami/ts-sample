import { useEffect } from "react";
import { useRecoilValue, RecoilValue } from "recoil";

type Props<T> = {
    node: RecoilValue<T>
    onChange: (value: T) => void
}

export const RecoilObserver = <T,>({ node, onChange }: Props<T>) => {
    const value = useRecoilValue(node);
    useEffect(() => {
        onChange(value)
    }, [onChange, value])

    return null;
};