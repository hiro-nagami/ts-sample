import { useContext } from "react";
import { PagenationContext } from "./provider/pagenation";

export default function usePagenation() {
    const { 
        page,
        count,
        allCount,
        setPage,
        setCount,
        setAllCount,
    } = useContext(PagenationContext)

    return {
        page,
        count,
        allCount,
        setPage,
        setCount,
        setAllCount,
    };
}