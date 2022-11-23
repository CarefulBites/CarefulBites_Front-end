$(() => {
    $('#gridContainer').dxDataGrid({
      dataSource: customers,
      keyExpr: 'ID',
      filterRow: {
        visible: true,
        applyFilter: 'auto',
      },
      searchPanel: {
        visible: true,
        width: 240,
        placeholder: 'Search...',
      },
      headerFilter: {
        visible: true,
      },
      editing: {
        mode: 'cell',
        allowUpdating: true,
        allowAdding: true,
        allowDeleting: true,
      },
      columns: ['CompanyName', 'City', 'State', 'Phone', 'Fax'],
      showBorders: true,
    })
    const popupContentTemplate = function () {
      return $('<div>').append(
        $(`<p>Full Name: <span>${employee.FirstName}</span>
                           <span>${employee.LastName}</span></p>`),
        $(`<p>Birth Date: <span>${employee.BirthDate}</span></p>`),
        $(`<p>Address: <span>${employee.Address}</span></p>`),
        $(`<p>Hire Date: <span>${employee.HireDate}</span></p>`),
        $(`<p>Position: <span>${employee.Position}</span></p>`),
      );
    };
  });