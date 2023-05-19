import React from "react";

export default function Pagination({ totalPages, currentPage, onClick }) {
    return (
        <div className="pagination-container">
            {/* 
              Create an array based on totalPages and 
              assigns the index value plus 1 to each element of the array.
            */}
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (page) => (
                    <button
                        className="pagination__btn"
                        key={page}
                        onClick={() => onClick(page)}
                        disabled={page === currentPage}
                    >
                        {page}
                    </button>
                )
            )}
        </div>
    );
}
