'use client';
import { Button, TextField, Snackbar, Alert } from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export default function Categorias() {
  const [form, setForm] = useState(false);
  const [categoria, setCategoria] = useState({ nome: "" });
  const [erro, setErro] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategoria({ ...categoria, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    if (!categoria.nome.trim()) {
      setErro("Todos os campos são obrigatórios.");
      setOpenSnackbar(true);
      return;
    }
    console.log("Categoria cadastrada:", categoria);
    setCategoria({ nome: "" }); 
  };

  return (
    <div>
      <MuiLink component={Link} href="/listar_categorias">
        Listar categorias
      </MuiLink>
      <br />

      <Button onClick={() => setForm((prev) => !prev)}>
        {form ? "Fechar Formulário" : "Criar Categoria"}
      </Button>

      {form && (
        <div>
          <TextField
            label="Nome da categoria"
            variant="outlined"
            name="nome"
            value={categoria.nome}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth>
            Cadastrar categoria
          </Button>
        </div>
      )}

      {}
      <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={() => setOpenSnackbar(false)}>
        <Alert severity="error">{erro}</Alert>
      </Snackbar>
    </div>
  );
}
