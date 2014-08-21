$(document).ready(function() {
  $('#signupForm')
  .bootstrapValidator({
    // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
      fname: {
        message: 'The first name is not valid',
        validators: {
          notEmpty: {
          },
          different: {
            field: 'pass',
            message: 'The first name and password cannot be the same as each other'
          }
        }
      },
      email: {
        validators: {
          notEmpty: {
          },
          emailAddress: {
          }
        }
      },
      pass: {
        validators: {
          notEmpty: {
          },
          different: {
            field: 'fname',
            message: 'The password cannot be the same as the first name'
          },
          stringLength: {
            min: 6,
            message: 'The password must have at least 6 characters'
          }
        }
      },
      pass2: {
        validators: {
          notEmpty: {
            message: 'The password is required and cannot be empty'
          },
          different: {
            field: 'fname',
            message: 'The password cannot be the same as the first name'
          },
          stringLength: {
            min: 6,
            message: 'The password must have at least 6 characters'
          },
          identical: {
            field: 'pass',
            message: 'The confirm password must be the same as password'
          }
        }
      }
    }
  });
});
