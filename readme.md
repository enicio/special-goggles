
# API de cadastro de aquipamentos

Esta API foi desenvolvida para atender a um sistema de manutenção preditiva de ativos na industria.
Ela disponibiliza o cadastro de industrias, filiais, funcionários e equipamentos com o intuito de fornecer dados que auxiliem na tomada de decisão quanto a manutenção.

## Tecnologias utilizadas

- [node](https://nodejs.org/en/)
- [express](https://expressjs.com/)
- [Mongo](https://www.mongodb.com/pt-br)

## Para rodar o projeto

Clone o projeto

```bash
  git clone git@github.com:enicio/special-goggles.git
```

Mude para o diretório

```bash
  cd special-goggles
```

Crie um arquivo `.env` e informe a porta que deseja utilizar.

##### Por Exemplo
``` bash
    PORT=5000
    MONGO_DB_URL= Url para conexão ao Mongo DB
    DB_NAME= Nome do DB
    AWS_ACCESS_KEY_ID= Chave para o bucket do AWS S3
    AWS_SECRET_ACCESS_KEY= Chave secreta para o bucket do AWS S3
    AWS_DEFAULT_REGION= Região do seu bucket
    BUCKET_NAME= Nome do bucket
    STORAGE_TYPE= Defina como 'local' ou 'S3'. Para o caso de 'local', não são necessárias as configurações da AWS S3 e as imagens serão salvas na pasta 'upload' na raiz do projeto.
```

instale as dependencias

```bash
  yarn install
```

Inicie o servidor

```bash
  yarn run dev
```

### Aprendizados
 - Com esse projeto aprendi mais sobre organização de código e o padrão de arquitetura MSC.
 - Integração do [multer](https://www.npmjs.com/package/multer) com o Amazon S3 para armazenamento das imagens
 - A ulilização do [Mongo atlas](https://www.mongodb.com/cloud/atlas) para persistencia de dados na nuvem.

### Possiveis melhorias para o projeto
- Adicionar a funcionalizade de sockets para atualização em tempo real do status dos equipamento e notificação de usuários.
- Criar a estrutura do banco de dados e rotas para registrar chamados de manutenção, relacionando a maquina com problema, a localidade e o funcionário da manutenção.


## Links Uteis
#### O deploy da api foi realizado na Heroku

[link da api](https://aipsi.herokuapp.com/)

### Repositório com o frontend disponível
[aqui](https://github.com/enicio/special-goggles-front)


## Referencia de rotas da API

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

### Considerações finais

Fiquei contente com o resultado da implementação ate o momento. Construi um aplicação com frontend hospedado na Vercel, backend na Heroku, upload de imagens na Amazon S3 e banco de dados no Mongo Atlas. Tudo devidamente configurado com variáveis de ambiente, logo facilita muito na troca de parametros sem precisar de intervenção no código.
Tenho em mente de continuar a implementar as melhorias citadas acima para monitorar as maquinas do meu laboratório, por exemplo, minha cnc, impressora 3D e ate mesmo os meus computadores. A aquisição de dados será feita por sistemas embarcados, mas esse é um outro projeto que estou criando em paralelo e em breve terei um repositório para ele.
