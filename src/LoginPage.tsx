// import { LockOutlinedIcon } from "@mui/icons-material/LockOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Container, Paper, Avatar, Typography, Box } from "@mui/material";

const LoginPage = () => {
  const handleSubmit = () =>{
    console.log('login')
  }
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
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1 }}
        ></Box>
      </Paper>
    </Container>
  );
};

export default LoginPage;
