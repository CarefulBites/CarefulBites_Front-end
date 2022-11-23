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
    });
  });