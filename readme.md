
# API de cadastro de aquipamentos

API para cadastro e gerenciamento de equipamentos indutriais


## API Reference

### Rotas para os equipamentos 

### Cadastrar novo equipamento
```http
    POST /assets
```
Deve ser enviado um Multipart Form com os seguintes dados.

| Parameter | Description                       |
| :-------- | :-------------------------------- |
|  `data`   |  json com os dados de cadastro esperados |
|  `image`   |  arquivo de image |

Deve ser enviado um JSON com o seguinte formato

```json
{
  "model": "motor",
  "status": "Alerting",
  "health": 70,
  "name": "Motor H13D-1",
  "unitId": 1,
  "companyId": 1
}
```

#### Listar todos os equipamentos

```http
  GET /assets
```

| Parameter | Description                       |
| :-------- |  :-------------------------------- |
|           |  Retorna um array com todos os equipamentos |


#### Listagem por id

```http
  GET /assets/:assetid
```

| Parameter | Description                       |
| :-------- |:-------------------------------- |
|    `id`    | Retorna um objeto com os dados do equipamento especificado   |

#### Listagem de equipamentos por filial da empresa

```http
  GET /assets/unit/:assetid
```

| Parameter | Description                       |
| :-------- |:-------------------------------- |
|    `id`    | Retorna um array de objetos com todos os equipamentos da filial  |

#### Atualização do equipamento

```http
  PUT /assets/:assetid
```

| Parameter | Description                       |
| :-------- |:-------------------------------- |
|    `id`    | Atualiza o equipamento especificado pelo id. | 

Deve ser enviado um JSON com o seguinte formato com os dados que deseja atualizar.


```json
{
  "model": "HVX-11",
  "name": "Motor azul com update",
  "companyId": "6119f7f13df43dfd795c8fd2",
  "unitId": "6119fe56667d2861a2f90f61",
  "description": "Teste de update",
  "status": "Alerting",
  "health": 50,
  "image": "http://localhost:5000/images/5a51a7536da77598f86fe2829712f836-motor-1.jpeg"
}
```

#### Deletar equipamento

```http
  DELETE /assets/:assetid
```

| Parameter | Description                       |
| :-------- |:-------------------------------- |
|    `id`    | Retorna um array de objetos com todos os equipamentos da filial  |

### Rotas para empresas


#### Cadastrar nova empresa
```http
    POST /companies
```

| Parameter | Description                       |
| :-------- | :-------------------------------- |
|     |  Cadastra nova empresa |


Deve ser enviado um JSON com o seguinte formato

```json
{
"name": "Nome da industria"
}
```
#### Listar todas as  empresas

```http
  GET /companies
```

| Parameter | Description                       |
| :-------- |  :-------------------------------- |
|           |  Retorna um array com todas as empresas. |

### Rotas para filiais

#### Cadastrar nova filial
```http
    POST /units
```

| Parameter | Description                       |
| :-------- | :-------------------------------- |
|     |  Cadastra nova filial |

#### Cadastrar nova filial
```http
    GET /units
```

| Parameter | Description                       |
| :-------- | :-------------------------------- |
|     |  Lista todas as filiais. |

### Rotas para usuários

#### Cadastrar novo usuário

```http
    POST /users
```
| Parameter | Description                       |
| :-------- | :-------------------------------- |
|     |  Cadastra novo usuário |

Deve ser enviado um JSON com o seguinte formato.


```json
{
  "email": "emerson@tractian.com.br",
  "name": "Emerson",
  "unitId": "1ss",
  "companyId": "1sa"
}
```

#### Lista todos os usuários

```http
    GET /users
```
| Parameter | Description                       |
| :-------- | :-------------------------------- |
|     |  Retorna um array de objetos com os dados de todos os usuários |
 
