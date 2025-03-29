"use client";
import { TextField, Button, Snackbar } from "@mui/material";
import { useState, useRef } from "react";

export default function Criacao() {
  const [produto, setProduto] = useState({
    nome: "",
    descricao: "",
    preco: "",
    quantidade: ""
  });

  const [erro, setErro] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const descricaoRef = useRef<HTMLInputElement>(null);
  const precoRef = useRef<HTMLInputElement>(null);
  const quantidadeRef = useRef<HTMLInputElement>(null);
  const botaoRef = useRef<HTMLButtonElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduto((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    nextRef: React.RefObject<HTMLInputElement | HTMLButtonElement>
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();
      nextRef.current?.focus();
    }
  };

  const handleSubmit = () => {
    if (!produto.nome || !produto.descricao || !produto.preco || !produto.quantidade) {
      setErro("Todos os campos são obrigatórios.");
      setOpenSnackbar(true);
      return;
    }

    if (isNaN(Number(produto.preco)) || isNaN(Number(produto.quantidade))) {
      setErro("Preço e quantidade devem ser números válidos.");
      setOpenSnackbar(true);
      return;
    }

    // Lógica para adicionar o produto ao estoque
    console.log("Produto adicionado:", produto);

    // Resetar o formulário
    setProduto({
      nome: "",
      descricao: "",
      preco: "",
      quantidade: ""
    });

    setErro("");
    setOpenSnackbar(false);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <TextField
        label="Nome do Produto"
        variant="outlined"
        name="nome"
        value={produto.nome}
        onChange={handleChange}
        onKeyDown={(e) => handleKeyDown(e, descricaoRef)}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Descrição do Produto"
        variant="outlined"
        name="descricao"
        value={produto.descricao}
        onChange={handleChange}
        onKeyDown={(e) => handleKeyDown(e, precoRef)}
        fullWidth
        margin="normal"
        inputRef={descricaoRef}
        required
      />
      <TextField
        label="Preço do Produto"
        variant="outlined"
        name="preco"
        value={produto.preco}
        onChange={handleChange}
        onKeyDown={(e) => handleKeyDown(e, quantidadeRef)}
        fullWidth
        margin="normal"
        type="number"
        inputRef={precoRef}
        required
      />
      <TextField
        label="Quantidade do Produto"
        variant="outlined"
        name="quantidade"
        value={produto.quantidade}
        onChange={handleChange}
        onKeyDown={(e) => handleKeyDown(e, botaoRef)}
        fullWidth
        margin="normal"
        type="number"
        inputRef={quantidadeRef}
        required
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        style={{ marginTop: "10px" }}
        ref={botaoRef}
        onClick={handleSubmit}
      >
        Adicionar Produto ao Estoque
      </Button>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={erro}
      />
    </div>
  );
}