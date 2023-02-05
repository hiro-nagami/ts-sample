import { Box, Center } from "@chakra-ui/react"
import ReactPaginate from "react-paginate"
import './style.css'


type TProps = {
    handlePageClick: (data: { selected: number }) => void
    limit: number
}

export const Pagenation = (props: TProps) => {
    return <Center width='100%' overflow='hidden'>
        <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={props.handlePageClick}
            pageRangeDisplayed={3}
            pageCount={props.limit}
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