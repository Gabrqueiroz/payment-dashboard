import { useState } from "react";
import {
  TextField,
  Button,
  Stack,
  CircularProgress,
  Typography,
  Link,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { login } from "../../../services/authService";

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const user = await login({ email, password });

      // salva usuário logado
      localStorage.setItem("user", JSON.stringify(user));

      console.log("Usuário logado:", user);

      navigate("/dashboard");
    } catch (err) {
      console.error("Erro no login", err);
      setError("Email ou senha inválidos");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <Stack spacing={2}>

        {error && <Alert severity="error">{error}</Alert>}

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
          {loading ? <CircularProgress size={24} color="inherit" /> : "Entrar"}
        </Button>

        <Typography variant="body2" textAlign="center">
          Não tem uma conta?{" "}
          <Link component="button" variant="body2" onClick={() => navigate("/register")}>
            Criar conta
          </Link>
        </Typography>
      </Stack>
    </form>
  );
};

export default LoginForm;
