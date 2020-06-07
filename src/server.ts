import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import {errors} from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

// Rota: endereço completo da nossa requisição
// Recurso: qual entidade estamos acessando do sistema

// GET: buscar uma ou mais informação do backend
// POST: criar uma nova informação no backend
// PUT: atualizar uma informação existente do backend
// DELETE: remover uma informação do backend

//POST http://localhost:3333/users - Criar um usuário
//GET http://localhost:3333/users - Listar um usuário
//GET http://localhost:3333/users/5 - Buscar dados do usuário com id 5

//Request Param: parâmetros que vem na própria rota que identificam um recurso
// Query Param: parâmtros que vem na própria rota geralmente opcionais para filtros, paginação
// Request Body: parâmetros para criação/atualização de informações

//JSON




app.listen(3333);