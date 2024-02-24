import ReactPaginate from "react-paginate";
import cl from './Pagination.module.css'
function Pagination({onChangePage}) {
    return ( 
        <ReactPaginate
        className={cl.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={e => onChangePage(e.selected+1)}
        pageRangeDisplayed={10}
        pageCount={10}
        previousLabel="<"
        renderOnZeroPageCount={null}
        forcePage = {onChangePage}
        disableInitialCallback = {false}
        nextClassName = {cl.none}
        previousClassName = {cl.none}
        disabledClassName = {cl.active}
      />
     );
}

export default Pagination;