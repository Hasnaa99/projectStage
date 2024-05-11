const Pagination = ({ employesPerPage, totalEmployes, paginate, currentPage }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalEmployes / employesPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav>
        <ul className='pagination justify-content-center'>
          {pageNumbers.map(number => (
            <li key={number} className='page-item'>
              <button onClick={() => paginate(number)} className={`page-link ${currentPage === number ? 'active' : '' }`}>
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  export default  Pagination;