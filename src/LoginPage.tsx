// import { LockOutlinedIcon } from "@mui/icons-material/LockOutlined";
import { CheckBox } from "@mui/icons-material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Container,
  Paper,
  Avatar,
  Typography,
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
  Button
} from "@mui/material";

const LoginPage = () => {
  const handleSubmit = () => {
    console.log("login");
  };
  return (
    <Container maxWidth="xs">
      <Paper elevation={10} sx={{ marginTop: 8, padding: 2 }}>
        <Avatar
          sx={{
            mx: "auto",
            bgcolor: "secondary.main",
            textAlign: "center",
            mb: 1,
          }}
        >
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ textAlign: "center" }}>
          Sign In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            placeholder="Enter username"
            fullWidth
            required
            autoFocus
            sx={{ mb: 2 }}
          />
          <TextField
            placeholder="Enter password"
            fullWidth
            required
            type="password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button type="submit" variant="contained" fullWidth sx={{mt: 1}}>
            Sign in
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginPage;
