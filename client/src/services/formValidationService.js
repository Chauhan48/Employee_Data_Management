export const formValidation = (employeeData = {}) => {
  const errors = {};

  if (!employeeData.name || employeeData.name.trim() === "") {
    errors.name = "Name is required";
  } else if (employeeData.name.trim().length < 2) {
    errors.name = "Name should be at least 2 characters";
  }

  if (!employeeData.email || employeeData.email.trim() === "") {
    errors.email = "Email is required";
  } else if (
    !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(employeeData.email)
  ) {
    errors.email = "Invalid email format";
  }

  if (!employeeData.position || employeeData.position.trim() === "") {
    errors.position = "Position is required";
  }

  return errors;
};
