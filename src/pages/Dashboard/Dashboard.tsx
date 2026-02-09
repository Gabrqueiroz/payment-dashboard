
import { Box, Typography, Card, CardContent, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Box p={4} bgcolor="#f5f6fa" minHeight="100vh">
      {/* Header */}
      <Box display="flex" justifyContent="space-between" mb={4}>
        <Typography variant="h6">Olá, Gabriel</Typography>
        <Button color="primary" onClick={() => console.log("logout")}>
          Sair
        </Button>
      </Box>

      {/* Card Conta */}
      <Card sx={{ borderRadius: 3, mb: 4 }}>
        <CardContent>
          <Typography variant="subtitle2" color="text.secondary">
            Conta
          </Typography>

          <Typography variant="body1" mb={2}>
            Ag 0001 | CC 12345-6
          </Typography>

          <Typography variant="subtitle2" color="text.secondary">
            Saldo disponível
          </Typography>

          <Typography variant="h4" color="success.main" fontWeight="bold">
            R$ 2.500,00
          </Typography>
        </CardContent>
      </Card>

      {/* Botões */}
      <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
        <Button
          variant="contained"
          size="large"
          fullWidth
          sx={{ py: 2, borderRadius: 3 }}
          onClick={() => navigate("/transfer")}
        >
          Nova Transação
        </Button>

        <Button
          variant="outlined"
          size="large"
          fullWidth
          sx={{ py: 2, borderRadius: 3 }}
          onClick={() => navigate("/history")}
        >
          Histórico
        </Button>
      </Stack>
    </Box>
  );
};

export default Dashboard;