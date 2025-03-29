'use client'
import { Link as MuiLink} from "@mui/material";
import { Button } from "@mui/material";
import Link from "next/link";
import styles from '../app/styles.module.css'
export default function App(){
return(
  
  <div className={styles.div}>
    <h1 className={styles.texto1}>
    API-sistema-de-controle-de-estoque  
    </h1>  
    <h2 className={styles.buttons}>
    <Button className={styles.button1}>funcionalidades </Button>
    <Button  className={styles.button1}>. criação, listagem, atualização e remoção de produtos</Button>
      <Button  className={styles.button1}>. gerenciamento das categorias e associação com produtos</Button>
      <Button  className={styles.button1}> . Incremento e decremento da quantidade de produtos no estoque</Button>
      <Button  className={styles.button1}> .  Associação entre produtos e categorias (ao criar, atualizar ou remover um produto, a referência na categoria é atualizada automaticamente)</Button>
      <Button  className={styles.button1}>. 🔒 (Opcional) Autenticação e autorização para rotas protegidas, se necessário</Button>
    </h2>
    <MuiLink component={Link} href="/criacao" className={styles.criacao}>
    <Button>criação</Button>
    </MuiLink>
    <MuiLink component={Link} href="/categorias" className={styles.categoria}>
    <Button>categorias</Button>
    </MuiLink>
    <MuiLink component={Link} href="/listagem" className={styles.listagem}>
    <Button>listagem</Button>
    </MuiLink>
  </div>
);
}