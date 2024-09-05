Projeto Web Back-end - API RESTful
Este é um projeto de API Web Back-end desenvolvido para a disciplina Programação Web-Backend. O objetivo é aplicar os conceitos e práticas abordados em sala de aula, utilizando tecnologias como Express e Sequelize para construir uma API RESTful.

Tecnologias Utilizadas
Node.js: Ambiente de execução JavaScript.
Express: Framework web para Node.js.
Sequelize: ORM para trabalhar com bancos de dados relacionais.
Banco de Dados: MySQL
JWT: Para autenticação e autorização.
Dotenv: Para gerenciamento de variáveis de ambiente.
Funcionalidades
Usuários e Sistema de Autenticação
Cadastro de Usuários: Permite o cadastro de novos usuários na API.
Administração de Usuários: Usuários administradores podem criar, alterar e excluir outros usuários.
Autenticação: Geração de token JWT para acesso às rotas protegidas.
Alteração de Dados Pessoais: Usuários podem alterar seus dados pessoais, enquanto administradores podem alterar os dados de qualquer usuário.
Sistema CRUD
Implementação de operações CRUD para 3 ou 4 entidades, com relacionamentos um-para-muitos ou muitos-para-muitos.
Validação adequada dos dados fornecidos pelo usuário.
Implementação de paginação nos métodos de listagem.
Restrições de acesso para usuários autenticados.
Lógica de Negócio
Implementação de operações especiais com lógica de negócio personalizada.
Criação de rotas específicas para funcionalidades avançadas.
Rotas Especiais
GET /install/: Realiza a instalação do banco de dados, criando as tabelas/coleções e populando-as com dados iniciais.
GET /docs/: Documentação da API gerada pelo Swagger.
Como Executar o Projeto
Pré-requisitos
Node.js instalado.
Banco de dados configurado (MySQL, PostgreSQL ou MongoDB).
Configurar as variáveis de ambiente no arquivo .env.
Instalação
Clone o repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/seu-repositorio.git
Instale as dependências:

Utilize ferramentas como Insomnia ou Postman para testar as rotas da API.

Estrutura do Projeto
models/: Definições das entidades e seus relacionamentos.
routes/: Definição das rotas da API.
controllers/: Implementação da lógica de cada rota.
middlewares/: Middlewares para autenticação e tratamento de erros.
config/: Configurações do banco de dados e variáveis de ambiente.
Considerações Finais
O código está organizado de forma a facilitar a manutenção e a extensão futura.
Commits incrementais foram realizados durante o desenvolvimento para melhor acompanhamento das mudanças.
O projeto segue as boas práticas de desenvolvimento em Node.js.
Licença
Este projeto é de uso exclusivo para fins acadêmicos.

