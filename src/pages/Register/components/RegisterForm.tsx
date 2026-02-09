import { useState } from "react";
import {
  TextField,
  Button,
  Stack,
  CircularProgress,
  Typography,
  MenuItem,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { createUser } from "../../../services/userService";
import { createAccount } from "../../../services/accountService";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agency, setAgency] = useState("0001");
  const [accountType, setAccountType] = useState<"CHECKING" | "SAVINGS">("CHECKING");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1️⃣ Cria o usuário
      const user = await createUser({
        fullName,
        email,
        password,
      });

      // 2️⃣ Cria a conta usando o UUID retornado
      await createAccount({
        userId: user.id,
        agency,
        accountType,
        initialDeposit: 0,
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

        <TextField
          label="Agência"
          fullWidth
          value={agency}
          onChange={(e) => setAgency(e.target.value)}
          required
        />

        <TextField
          select
          label="Tipo de Conta"
          fullWidth
          value={accountType}
          onChange={(e) =>
            setAccountType(e.target.value as "CHECKING" | "SAVINGS")
          }
        >
          <MenuItem value="CHECKING">Corrente</MenuItem>
          <MenuItem value="SAVINGS">Poupança</MenuItem>
        </TextField>

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
          <RouterLink to="/login">Fazer login</RouterLink>
        </Typography>
      </Stack>
    </form>
  );
};

export default RegisterForm;
