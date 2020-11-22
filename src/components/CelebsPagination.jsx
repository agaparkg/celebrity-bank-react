import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const CelebsPagination = (props) => {
  return (
    <Pagination aria-label="Page navigation example">
      <PaginationItem disabled={props.activePage <= 1}>
        <PaginationLink first href="#" onClick={() => props.handlePageChange(1)}/>
      </PaginationItem>
      <PaginationItem disabled={props.activePage <= 1}>
        <PaginationLink previous href="#"  onClick={() => props.handlePageChange(props.activePage - 1)} />
      </PaginationItem>
      <PaginationItem active={props.activePage === 1} >
        <PaginationLink href="#" onClick={() => props.handlePageChange(1)}>
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem active={props.activePage === 2}>
        <PaginationLink href="#" onClick={() => props.handlePageChange(2)}>
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem active={props.activePage === 3}>
        <PaginationLink href="#" onClick={() => props.handlePageChange(3)}>
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem active={props.activePage === 4}>
        <PaginationLink href="#" onClick={() => props.handlePageChange(4)}>
          4
        </PaginationLink>
      </PaginationItem>
      <PaginationItem active={props.activePage === 5}>
        <PaginationLink href="#" onClick={() => props.handlePageChange(5)}>
          5
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href="#" onClick={() => props.handlePageChange(props.activePage + 1)}/>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink last href="#" onClick={() => props.handlePageChange(props.total_pages)}/>
      </PaginationItem>
    </Pagination>
  )
}

export default CelebsPagination;