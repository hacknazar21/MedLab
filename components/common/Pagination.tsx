import React from "react";
import ReactPaginate from "react-paginate";
import useHttp from "../../hooks/hooks.http";

interface OwnProps {
  pageCount: number;
  link: string;
  setter: Function;
}
type Props = OwnProps;

export default function Pagination(props: Props) {
  const { request } = useHttp();

  const handlePageClick = async ({ selected }) => {
    try {
      const data = await request(props.link + (selected + 1));
      console.log(data.results);
      props.setter(data.results);
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={1}
      pageCount={props.pageCount}
      previousLabel="<"
      className="single-page-pagination"
      renderOnZeroPageCount={null}
    />
  );
}
