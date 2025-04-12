function ExpenseTable({ expenses, onDelete, onSort, sortConfig }) {
    // Helper function to display sort indicator (arrow) in table header
    const getSortIndicator = (key) => {
      if (!sortConfig) return null; // No sorting configured
      if (sortConfig.key === key) {
        // Show up or down arrow based on sort direction
        return sortConfig.direction === 'ascending' ? ' ↑' : ' ↓';
      }
      return null;
    };
  
    return (
      <div className="table-container">
        <table className="expense-table">
          <thead>
            <tr>
             
              <th onClick={() => onSort('description')}>
                Description{getSortIndicator('description')}
              </th>
              <th>Amount ($)</th>
              <th onClick={() => onSort('category')}>
                Category{getSortIndicator('category')}
              </th>
        
              <th>Action</th>

            </tr>
          </thead>
          <tbody>
            
            {expenses.length > 0 ? (
              
              expenses.map(expense => (
                <tr key={expense.id}>
                  <td>{expense.description}</td>
                  <td>{expense.amount.toFixed(2)}</td> {}
                  <td>{expense.category}</td>
                  
                  <td>
                
                    <button 
                      onClick={() => onDelete(expense.id)}
                      className="delete-button"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
             
              <tr>
                <td colSpan="4">No expenses found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default ExpenseTable;