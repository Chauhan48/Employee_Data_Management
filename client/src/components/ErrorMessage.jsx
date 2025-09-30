import Alert from '@mui/material/Alert';
import ErrorIcon from '@mui/icons-material/Error';
import Box from '@mui/material/Box';

export default function ErrorMessage({ message }) {
  if (!message) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: 20,
        zIndex: 1400,
      }}
    >
      <Alert
        icon={<ErrorIcon fontSize="inherit" />}
        severity="error"
        sx={{
          minWidth: 300,
          maxWidth: '80%',
          textAlign: 'center',
        }}
      >
        {message}
      </Alert>
    </Box>
  );
}
