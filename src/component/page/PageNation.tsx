import { Component } from "react";


interface ThisProps {
    page_limit: number,
    page_no: number,
    page_total_count: number,
    callback: (pageNumber: number) => void,
}

export class PageNation extends Component<ThisProps> {


    // Function to handle page change
    handlePageChange(pageNumber: number) {
        if (pageNumber < 1 || pageNumber > this.getTotalPages()) return;

        this.props.callback(pageNumber);

    }

    // Get the total number of pages
    getTotalPages() {
        return Math.ceil(this.props.page_total_count / this.props.page_limit);
    }

    // Get the page numbers to display
    getPageNumbers() {
        const totalPages = this.getTotalPages();
        const currentPage = this.props.page_no;
        const visiblePages = 5;

        let startPage = Math.max(currentPage - Math.floor(visiblePages / 2), 1,);
        console.log(startPage,);

        let endPage = startPage + visiblePages - 1;

        if (endPage > totalPages) {
            endPage = totalPages;
            startPage = Math.max(endPage - visiblePages + 1, 1);
        }

        let pages = [];
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        return pages;
    }

    render() {
        const { page_no } = this.props;
        const pageNumbers = this.getPageNumbers();


        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li
                        className={`page-item ${page_no === 1 ? "disabled" : ""}`}
                        onClick={() => this.handlePageChange(page_no - 1)}
                    >
                        <a className="page-link" href="#">
                            Previous
                        </a>
                    </li>

                    {/* Always show the first page with "..." */}
                    {page_no > 3 && (
                        <>
                            <li
                                className="page-item"
                                onClick={() => this.handlePageChange(1)}
                            >
                                <a className="page-link" href="#">
                                    1
                                </a>
                            </li>
                            <li className="page-item disabled">
                                <span className="page-link">...</span>
                            </li>
                        </>
                    )}

                    {/* Show the dynamic page numbers */}
                    {pageNumbers.map((page) => (
                        <li
                            key={page}
                            className={`page-item ${page === page_no ? "active" : ""}`}
                            onClick={() => this.handlePageChange(page)}
                        >
                            <a className="page-link" href="#">
                                {page}
                            </a>
                        </li>
                    ))}

                    <li
                        className={`page-item ${page_no === this.getTotalPages() ? "disabled" : ""}`}
                        onClick={() => this.handlePageChange(page_no + 1)}
                    >
                        <a className="page-link" href="#">
                            Next
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }


}