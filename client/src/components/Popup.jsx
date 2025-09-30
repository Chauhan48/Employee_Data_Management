import { Box, Button, Modal, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { addEmployeeData, updateEmployeeData } from "../services/apiServices";
import { formValidation } from "../services/formValidationService";
import ErrorMessage from "./ErrorMessage";

export default function Popup({ open, closePopup, data, displayMessage, addOrUpdate }) {
  const [employeeData, setEmployeeData] = useState(data || {
    name: '', email: '', position: ''
  });
  const [errors, setErrors] = useState({});
  const [showError, setShowError] = useState(false);

  const handleClick = async () => {
    const validations = formValidation(employeeData);
    
    if (Object.keys(validations).length > 0) {
      setErrors(validations);
      setShowError(true);
      
      setTimeout(() => setShowError(false), 3000);
      return;
    }
    
    let response;
    if (addOrUpdate === 'Add') {
      response = await addEmployeeData(employeeData);
    } else {
      response = await updateEmployeeData(employeeData);
    }
    
    displayMessage(response.message);
    closePopup();
  };

  const handleFieldChange = (field, value) => {
    setEmployeeData((prev) => ({ ...prev, [field]: value }));
    
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
      
      if (Object.keys(errors).length === 1) {
        setShowError(false);
      }
    }
  };

  const getErrorMessage = () => {
    if (errors.name) return errors.name;
    if (errors.email) return errors.email;
    if (errors.position) return errors.position;
    return '';
  };

  return (
    <Modal open={open} onClose={closePopup}>
      <>
        {showError && <ErrorMessage message={getErrorMessage()} />}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 3,
            minWidth: 400,
          }}
        >
          <Typography variant="h6" mb={2} fontWeight="bold" textAlign="center">
            {addOrUpdate}
          </Typography>

          <Stack spacing={2}>
            <TextField
              label="Name"
              value={employeeData.name}
              onChange={(e) => handleFieldChange('name', e.target.value)}
              error={!!errors.name}
              helperText={errors.name}
              fullWidth
            />
            <TextField
              label="Email"
              value={employeeData.email}
              onChange={(e) => handleFieldChange('email', e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
              fullWidth
            />
            <TextField
              label="Position"
              value={employeeData.position}
              onChange={(e) => handleFieldChange('position', e.target.value)}
              error={!!errors.position}
              helperText={errors.position}
              fullWidth
            />

            <Button
              sx={{ mt: 1 }}
              variant="contained"
              color="primary"
              onClick={handleClick}
            >
              {addOrUpdate}
            </Button>
          </Stack>
        </Box>
      </>
    </Modal>
  );
}