function SignupValidation(values) {
  let errors = {};
  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  }
  if (!values.password) {
    errors.password = "Password is required";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm Password is required";
  }
  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Password and Confirm Password must be same";
  }
  return errors;
}
export default SignupValidation;