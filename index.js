$(() => {

    $('#itemGrid').dxDataGrid({
      dataSource: ItemStore,
      keyExpr: 'itemId',
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
        mode: 'row',
        allowUpdating: true,
        allowAdding: true,
        allowDeleting: true,
      },
      onEditingStart: function(e) {
        row = e.data
      },
      columns: [
        {
        dataField:'itemId',
        dataType:'number'
        }, 
        {
          dataField:'name',
          dataType:'string'
        }, 
        {
          dataField:'amount',
          dataType:'number'
        }, 
        {
          dataField:'unit',
        }, 
        {
          dataField:'itemStorageId',
        }, 
        {
          dataField:'caloriesPer',
          dataType:'number'
        }, 
        {
          dataField:'expirationDate',
          dataType:'date'
        }, 
        {
          dataField:'openDate',
          dataType:'date'
        }, 
        {
          dataField:'daysAfterOpen',
          dataType:'number'
        },],
      showBorders: true,
    })
    const popupContentTemplate = function () {
      return $('<div>').append(
        $('<div />').attr('id', 'login-form').dxForm({
          labelMode: 'floating',
          formData: userForm[0],
          readOnly: false,
          showColonAfterLabel: true,
          labelLocation: 'left',
          minColWidth: 300,
          colCount: 1,
        })
        // $(`
        // <form action="post" aria-placeholder="Username">
        //     <div class="container">
        //         <label for="uname"><b>Username</b></label>
        //         <input type="text" id="username" placeholder="Enter Username" name="uname" required>
            
        //         <label for="psw"><b>Password</b></label>
        //         <input type="password" id="password" placeholder="Enter Password" name="psw" required>
        //     </div>
        // </form>`)
      );
    };
    const popup = $('#popup-login').dxPopup({
      contentTemplate: popupContentTemplate,
      width: 300,
      height: 300,
      container: '.dx-viewport',
      showTitle: true,
      title: 'Log In',
      visible: false,
      dragEnabled: false,
      hideOnOutsideClick: true,
      showCloseButton: false,
      toolbarItems: [{
        widget: 'dxButton',
        toolbar: 'bottom',
        location: 'center',
        options: {
        text: 'Log In',
        onClick() {
          alert('TEST')
        },
      }
      },{
        widget: 'dxButton',
        toolbar: 'bottom',
        location: 'center',
        options: {
        text: 'Create Account',
        onClick() {
          location.href = '/CreateAccount.html'
        },
      }
      }]
    }).dxPopup('instance');

    $("#popup-button").dxButton({
      styling: 'contained',
      icon: 'user',
      text: "Log In",
      onClick: () => {
          popup.show();
      }
    });
    $("#theme-button").dxButton({
      text: "change theme",
      styling: 'contained',
      onClick: () => {
        if (DevExpress.ui.themes.current() == "material.blue.dark") {
          DevExpress.ui.themes.current("material.blue.light");
        } else {
          DevExpress.ui.themes.current("material.blue.dark");
        }
      }
    });
  });
