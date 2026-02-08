import LoginForm from "./components/LoginForm";
import { Container, Paper, Typography } from "@mui/material";


const Login = () => {
  return (
     <Container maxWidth="sm">
      <Paper
        elevation={6}
        sx={{
          mt: 12,
          p: 4,
          borderRadius: 3,
        }}
      >
        <Typography variant="h5" align="center" fontWeight="bold" gutterBottom>
          Payment Dashboard
        </Typography>

        <Typography variant="body2" align="center" sx={{ mb: 3 }}>
          Acesse sua conta para continuar
        </Typography>

        <LoginForm />

      </Paper>
    </Container>
  );
};

export default Login;
