# AngularStudyHub

Este projeto foi criado para estudar e praticar conceitos avançados do Angular, incluindo **Lazy Loading, Signals, RxJS, gerenciamento de estado e otimização de performance**.

## 🚀 Tecnologias Utilizadas
- **Angular 16**
- **RxJS** para programação reativa
- **Signals** para gerenciamento de estado
- **JSON Server** para simular uma API REST
- **Lazy Loading** para carregamento otimizado
- **ChangeDetectionStrategy.OnPush** para melhor performance

---

## 🛠️ Como Rodar o Projeto

### 1️⃣ Instalar as Dependências
```sh
npm install
```

### 2️⃣ Iniciar o Servidor Fake (JSON Server)
```sh
json-server --watch db.json --port 3000
```
Esse comando iniciará o servidor local em `http://localhost:3000/`, onde armazenamos os produtos e pedidos.

### 3️⃣ Rodar a Aplicação Angular
```sh
ng serve
```
Acesse `http://localhost:4200/` no navegador para ver a aplicação em execução.

---

## 📂 Estrutura do Projeto

```
src/
 ├── app/
 │   ├── core/                  # Módulo Core (Serviços e Configurações Globais)
 │   │   ├── services/           # Serviços compartilhados (API, Carrinho, Pedidos)
 │   │   │   ├── cart.service.ts
 │   │   │   ├── product.service.ts
 │   │   │   ├── order.service.ts
 │   │   ├── core.module.ts
 │   ├── shared/                 # Componentes reutilizáveis (ex: botões, modais)
 │   ├── features/               # Módulos de funcionalidades
 │   │   ├── dashboard/          # Catálogo de produtos
 │   │   │   ├── dashboard.component.ts
 │   │   │   ├── dashboard.component.html
 │   │   │   ├── dashboard.component.scss
 │   │   │   ├── dashboard-routing.module.ts
 │   │   │   ├── dashboard.module.ts
 │   │   ├── cart/               # Carrinho de compras
 │   │   │   ├── cart.component.ts
 │   │   │   ├── cart.component.html
 │   │   │   ├── cart.component.scss
 │   │   │   ├── cart-routing.module.ts
 │   │   │   ├── cart.module.ts
 │   ├── app.component.ts        # Componente raiz
 │   ├── app.module.ts           # Módulo principal
 │   ├── app-routing.module.ts   # Rotas principais (Lazy Loading)
 ├── assets/                     # Imagens, ícones, fontes
 ├── environments/                # Configurações para dev/prod
 ├── db.json                      # Banco de dados fake para o JSON Server
 ├── styles.scss                  # Estilos globais
```

---

## 📌 Funcionalidades Implementadas

✅ **Listagem de produtos** com dados carregados via API (`ProductService`).  
✅ **Adição de produtos ao carrinho**, usando `CartService` e `Signals` para gerenciamento de estado.  
✅ **Persistência do carrinho no localStorage**, garantindo que os itens não se percam ao recarregar a página.  
✅ **Página do Carrinho**, permitindo visualizar, remover itens e esvaziar o carrinho.  
✅ **Finalização da compra (Checkout)**, enviando os pedidos para o `JSON Server`.  
✅ **Lazy Loading** para carregamento eficiente dos módulos de `Dashboard` e `Cart`.  
✅ **Otimização de performance** com `ChangeDetectionStrategy.OnPush`.  
✅ **Animações suaves** ao remover itens do carrinho.  
✅ **Botão de atalho para o carrinho** na página `Dashboard`, mostrando a quantidade de itens.  

---

## 📦 Comandos Úteis

🔹 **Gerar um Componente**
```sh
ng generate component nome-do-componente
```
🔹 **Gerar um Serviço**
```sh
ng generate service core/services/nome-do-servico
```
🔹 **Gerar um Módulo**
```sh
ng generate module features/nome-do-modulo --routing
```

---

## 🔗 Links Úteis

🔹 [Documentação Oficial do Angular](https://angular.io/docs)  
🔹 [RxJS: Guia de Observables](https://rxjs.dev/guide/observable)  
🔹 [JSON Server](https://github.com/typicode/json-server)  

---

🚀 **Este projeto foi desenvolvido para consolidar conhecimentos em Angular e boas práticas de desenvolvimento front-end.**
