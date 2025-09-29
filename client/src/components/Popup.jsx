import { Box, Button, Modal, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { updateEmployeeData } from "../services/apiServices";

export default function Popup({ open, closePopup, data, displayMessage, addOrUpdate }) {
  const [employeeData, setEmployeeData] = useState(data);

  const handleClick = async () => {
    const response = await updateEmployeeData(employeeData);
    displayMessage(response.message);
    closePopup();
  };

  return (
    <Modal open={open} onClose={closePopup}>
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
            onChange={(e) =>
              setEmployeeData((prev) => ({ ...prev, name: e.target.value }))
            }
            fullWidth
          />
          <TextField
            label="Email"
            value={employeeData.email}
            onChange={(e) =>
              setEmployeeData((prev) => ({ ...prev, email: e.target.value }))
            }
            fullWidth
          />
          <TextField
            label="Position"
            value={employeeData.position}
            onChange={(e) =>
              setEmployeeData((prev) => ({ ...prev, position: e.target.value }))
            }
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
    </Modal>
  );
}