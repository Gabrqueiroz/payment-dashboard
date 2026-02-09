import { useState } from "react";
import {
  TextField,
  Button,
  Stack,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import { Typography, Link } from "@mui/material";

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("Login com:", { email, password });
    } catch (error) {
      console.error("Erro no login", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <Stack spacing={2}>
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
