

// import { LockOutlinedIcon } from "@mui/icons-material/LockOutlined";
// import { CheckBox } from "@mui/icons-material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import MenuBookIcon from '@mui/icons-material/MenuBook';
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

import { useNavigate } from "react-router-dom";

const MenuCustomerPage = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    // console.log("login");
    navigate("/customerpackagepurchase");
  };
  return (
    <Container maxWidth="xs">
      <Paper elevation={10} sx={{ marginTop: 8, padding: 2}}>
        <Avatar
          sx={{
            mx: "auto",
            bgcolor: "info.main",
            textAlign: "center",
            mb: 1,
          }}
        >
          <MenuBookIcon />
        </Avatar>
        {/* <Typography component="h1" variant="h5" sx={{ textAlign: "center" }}>
          Log In
        </Typography> */}
        <Box component="form"  noValidate sx={{ mt: 1 }} /* onSubmit={handleSubmit} */>
          {/* <TextField
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
          /> */}
          <Button type="submit" variant="contained"  fullWidth sx={{mt: 1}} onClick={handleSubmit} >
            package purchase
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default MenuCustomerPage;

