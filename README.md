Poke Explorer Ionic

Este projeto foi desenvolvido utilizando o framework Ionic com Angular Standalone Components, integrando com a PokeAPI RESTful para consumir dados dos Pokémons. Adotei uma abordagem componentizada e com foco em separação de responsabilidades, criando um serviço exclusivo para requisições HTTP. A estrutura do projeto segue o padrão de roteamento Angular, com lazy loading e injeção de dependências via bootstrapApplication.

A comunicação com a API é feita de forma assíncrona utilizando o HttpClient e os dados são tratados em observables. Segui o padrão de Single Responsibility Principle (SRP) para que cada componente tenha uma função bem definida. Os commits foram feitos de forma frequente e descritiva, seguindo boas práticas de versionamento.

Implementei a navegação entre telas utilizando o Router do Angular, e utilizei componentes visuais do próprio Ionic Framework para garantir um layout responsivo e com boa experiência mobile. A paginação da listagem inicial foi implementada para melhorar a usabilidade, e o detalhe de cada Pokémon exibe pelo menos 6 atributos relevantes, com design limpo e organizado.