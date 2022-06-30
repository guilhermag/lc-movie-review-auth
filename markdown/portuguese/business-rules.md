# Regras de negócio

## Introdução

A Auth API é um app que recebe as credenciais de um usuário, as valida, salva as tentaivas de login em cache, envia um erro se as credenciuais estão erradas ou um token de validação se estiverem corretas.

## Descrição

- Na Auth API é possível autenticar um usuário.
  - Para fazer o login é necessário um email e senha válidos.
  - Para fazer o login são necessários credenciais de um usuário já existente.
- Toda tentativa falha de login será salva em cache.
  - Depois de 3 tentativas falhas o sistema irá ser bloqueado por 2 minutos.
    - Na quarta tentativa o app irá enviar a seguinte mensagem ```Number of login attempts was exceeded, wait for 2 MINUTES```.
  - Toda tentativa falha de login gera uma mensagem de erro.
- Se as credenciais forem corretas o app irá enviar um token de validação.

[Link para o documento principal.](./README.md)
