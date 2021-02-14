export const calcPagination = (currentPage, totalPages) => {
    const pages = [];
    let min, max;
    if (currentPage < 5) {
        min = 1;
        max = 9;
    } else if(currentPage > totalPages - 5) {
        min = totalPages - 8;
        max = totalPages;
    } else {
        min = currentPage - 4;
        max = currentPage + 4;
    }
    if (max > totalPages) {
        max = totalPages;
    }
    for (let i = min; i <= max; i++) {
        pages.push(i);
    }

    return pages;
}