import { useState } from "react";
import {
  TextField,
  Button,
  Stack,
  CircularProgress,
  Typography,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("http://localhost:8080/users", {
        fullName,
        email,
        password,
      });

      alert("Conta criada com sucesso!");
      navigate("/login");
    } catch (error) {
      console.error("Erro ao registrar", error);
      alert("Erro ao criar conta");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <Stack spacing={2}>
        <TextField
          label="Nome completo"
          fullWidth
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />

        <TextField
          label="Email"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <TextField
          label="Senha"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button
          type="submit"
          variant="contained"
          size="large"
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Cadastrar"}
        </Button>

        <Typography variant="body2" textAlign="center">
          Já tem uma conta?{" "}
          <Link component="button" onClick={() => navigate("/login")}>
            Fazer login
          </Link>
        </Typography>
      </Stack>
    </form>
  );
};

export default RegisterForm;
