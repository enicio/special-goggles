
# API de cadastro de aquipamentos

API para cadastro e gerenciamento de equipamentos indutriais


## API Reference

### Rotas para os equipamentos 

#### Cadastrar novo equipamento
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
  GET /assets/${id}
```

| Parameter | Description                       |
| :-------- |:-------------------------------- |
|    `id`    | Retorna um objeto com os dados do equipamento especificado   |

#### Listagem de equipamentos por filial da empresa

```http
  GET /assets/unit/${id}
```

| Parameter | Description                       |
| :-------- |:-------------------------------- |
|    `id`    | Retorna um array de objetos com todos os equipamentos da filial  |

#### Atualização do equipamento

```http
  PUT /assets/${id}
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
  DELETE /assets/${id}
```

| Parameter | Description                       |
| :-------- |:-------------------------------- |
|    `id`    | Retorna um array de objetos com todos os equipamentos da filial  |