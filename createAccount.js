$(() => {
  if (themeLayout = 'light') {
    DevExpress.ui.themes.current("material.blue.light");
  }
  else{
    DevExpress.ui.themes.current("material.blue.dark");
  }

  const sendRequest = function (value) {
    const invalidEmail = 'test@dx-email.com';
    const d = $.Deferred();
    setTimeout(() => {
      d.resolve(value !== invalidEmail);
    }, 1000);
    return d.promise();
  };

  const formWidget = $('#form').dxForm({
    formData,
    readOnly: false,
    showColonAfterLabel: true,
    showValidationSummary: true,
    validationGroup: 'customerData',
    items: [{
      itemType: 'group',
      caption: 'Create account',
      items: [{
        dataField: 'Email',
        validationRules: [{
          type: 'required',
          message: 'Email is required',
        }, {
          type: 'email',
          message: 'Email is invalid',
        }, {
          type: 'async',
          message: 'Email is already registered',
          validationCallback(params) {
            return sendRequest(params.value);
          },
        }],
      }, {
        dataField: 'Password',
        editorOptions: {
          mode: 'password',
        },
        validationRules: [{
          type: 'required',
          message: 'Password is required',
        }],
      }, {
        label: {
          text: 'Confirm Password',
        },
        editorType: 'dxTextBox',
        editorOptions: {
          mode: 'password',
        },
        validationRules: [{
          type: 'required',
          message: 'Confirm Password is required',
        }, {
          type: 'compare',
          message: "'Password' and 'Confirm Password' do not match",
          comparisonTarget() {
            return formWidget.option('formData').Password;
          },
        }],
      }],
    }, {
      itemType: 'group',
      items: [{
        dataField: 'Accepted',
        label: {
          visible: false,
        },
        editorOptions: {
          text: 'I agree to the Terms and Conditions',
        },
        validationRules: [{
          type: 'compare',
          comparisonTarget() { return true; },
          message: 'You must agree to the Terms and Conditions',
        }],
      }],
    }, {
      itemType: 'button',
      horizontalAlignment: 'left',
      buttonOptions: {
        text: 'Register',
        type: 'success',
        useSubmitBehavior: true,
      },
    }],
  }).dxForm('instance');

  $('#form-container').on('submit', (e) => {
    DevExpress.ui.notify({
      message: 'You have submitted the form',
      position: {
        my: 'center top',
        at: 'center top',
      },
    }, 'success', 3000);

    e.preventDefault();
  });
  
  $("#theme-button").dxButton({
    text: "change theme",
    styling: 'contained',   
    onClick: () => {
      if (DevExpress.ui.themes.current() == "material.blue.dark") {
        DevExpress.ui.themes.current("material.blue.light");
        themeLayout = 'light'
      } else {
        DevExpress.ui.themes.current("material.blue.dark");
        themeLayout = 'dark'
      }
    }
  });
});

