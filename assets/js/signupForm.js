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
          stringLength: {
            min: 6,
            message: 'The password must have at least 6 characters'
          }
        }
      },
      pass2: {
        validators: {
          notEmpty: {
            message: 'The confirm password is required and cannot be empty'
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
