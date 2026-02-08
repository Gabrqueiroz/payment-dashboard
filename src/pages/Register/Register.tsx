import { Container, Paper, Typography } from "@mui/material";
import RegisterForm from "./components/RegisterForm";

const Register = () => {
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
          Criar Conta
        </Typography>

        <Typography variant="body2" align="center" sx={{ mb: 3 }}>
          Preencha os dados para se cadastrar
        </Typography>

        <RegisterForm />
      </Paper>
    </Container>
  );
};

export default Register;
