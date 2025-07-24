export const validateUserIntput = (email, password, confirmPassword) => {
  const isEmailValidate = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValidate =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (confirmPassword)
    if (password !== confirmPassword)
      return { status: false, message: "Confirm password mismatched!!" };

  if (!isEmailValidate)
    return { status: false, message: "Email validation failed!!" };

  if (!isPasswordValidate)
    return { status: false, message: "Password validation failed!!" };

  return { status: true, message: "Validation Passed!" };
};
