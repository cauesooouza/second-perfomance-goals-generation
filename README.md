# Projeto de gerenciamento de farmacia
Este é um projeto desenvolvido com o framework **NestJS** para gerenciamento de uma farmacia ficticia que possui apenas produtos e catergorias dos produtos. 
O projeto permite realizar operações CRUD (Create, Read, Update, Delete) em ambas as entidades, através das rotas /product e /category.

## Requisitos
Antes de começar, certifique-se de ter o seguinte instalado em sua máquina:

- Node.js
- npm (gerenciador de pacotes Node.js)
- NestJS CLI (opcional, mas recomendado para criar novos módulos e controladores rapidamente)
- Mysql
## Instalação

1. Clone este repositório:
```
git clone https://github.com/cauesooouza/second-perfomance-goals-generation
```
2. Acesse o diretório do projeto:
```
cd second-perfomance-goals-generation
```
3. Instale as dependencias do projeto:
```
npm install
```

## Configuração do banco de dados
O projeto utiliza um banco de dados **MySql** por padrão. Certifique-se de ter instalado em sua máquina local e configure corretamente, ou altere para um banco de dados de sua preferencia.
## Executando o servidor
Para iniciar o servidor, execute:
`npm run start`
## Rotas

### Produtos

- GET /product: Retorna todos os produtos cadastrados.
- GET /product/id/{int} : Retorna o produto pelo id
- GET /product/name/{string} : Retorna o produto pelo nome
- POST /product: Cria um novo produto
- PUT /product: Atualiza um produto
- DELETE /product/delete/{int}: Deleta um produto pelo id

### Categorias
- GET /category: Retorna todas as categorias cadastradas.
- GET /category/id/{int} : Retorna a categoria pelo id
- GET /category/name/{string} : Retorna a categoria pelo nome
- POST /category: Cria uma nova categoria
- PUT /category: Atualiza uma categoria
- DELETE /category/delete/{int}: Deleta uma categoria pelo id