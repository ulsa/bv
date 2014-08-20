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
            message: 'The first name is required and cannot be empty'
          },
          stringLength: {
            min: 6,
            max: 30,
            message: 'The first name must be more than 6 and less than 30 characters long'
          },
          regexp: {
            regexp: /^[a-zA-Z0-9]+$/,
            message: 'The first name can only consist of alphabetical and number'
          },
          different: {
            field: 'password',
            message: 'The first name and password cannot be the same as each other'
          }
        }
      },
      email: {
        validators: {
          notEmpty: {
            message: 'The email address is required and cannot be empty'
          },
          emailAddress: {
            message: 'The email address is not a valid'
          }
        }
      },
      pass: {
        validators: {
          notEmpty: {
            message: 'The password is required and cannot be empty'
          },
          different: {
            field: 'fname',
            message: 'The password cannot be the same as the first name'
          },
          stringLength: {
            min: 8,
            message: 'The password must have at least 8 characters'
          }
        }
      }
    }
  });
});
