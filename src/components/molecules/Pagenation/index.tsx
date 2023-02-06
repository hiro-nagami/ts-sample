import { Center } from "@chakra-ui/react"
import ReactPaginate from "react-paginate"
import usePagenation from "../../../hooks/usePagenation"
import './style.css'

type TProps = {}

export const Pagenation = (props: TProps) => {
    const { count, allCount, setPage } = usePagenation()

    return <Center width='100%' overflow='hidden'>
        <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={(data) => setPage( data.selected )}
            pageRangeDisplayed={3}
            pageCount={ (allCount + count - 1) / count }
            previousLabel="<"
            marginPagesDisplayed={1}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
        />
    </Center>
}