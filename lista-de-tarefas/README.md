# 🎯 Lista de Tarefas (To-Do List)

Uma aplicação interativa de gerenciamento de tarefas desenvolvida para consolidar conceitos fundamentais de manipulação dinâmica do DOM, tratamento de dados e estilização avançada com JavaScript Vanilla e CSS3.

## 🚀 Demonstração

Você pode visualizar e testar a aplicação online clicando no link abaixo:
👉 [Acesse a Lista de Tarefas Aqui](https://larissadarochanunes.github.io/Projetos-Frontend/lista-de-Tarefas/index.html)

---

## 💻 Sobre o Projeto

O projeto consiste em uma lista de tarefas onde o usuário pode adicionar suas pendências diárias. A aplicação processa a entrada do usuário em tempo real, cria elementos na tela dinamicamente e gerencia estados de sucesso ou erro com feedbacks visuais personalizados.

A interface conta com uma identidade visual elegante baseada em tons terrosos (`#331F19`, `#CBBBA7`) e detalhes em vinho (`#60041A`), utilizando efeitos de transição para uma experiência de uso mais fluida.

### 🧠 Recursos e Conceitos Praticados:

* **Manipulação Dinâmica do DOM:** Criação automatizada de novos elementos HTML (`<li>`) através do método `document.createElement()`, permitindo a inserção de novas tarefas na estrutura `<ul>` sem recarregar a página.
* **Validação e Tratamento de Dados:**
  * Uso do método `.trim()` para eliminar espaços em branco acidentais inseridos pelo usuário.
  * Estruturação de condicionais (`if/else`) para validação de campos vazios.
* **Feedbacks de Status em Tempo Real:** 
  * Exibição de alertas de erro customizados (em vermelho `#a34743`) caso o usuário tente adicionar uma tarefa vazia.
  * Alertas de sucesso (em verde `#28a745`) confirmando a inclusão do item.
* **Limpeza de Estado:** Reinicialização automática do campo de texto (`input.value = ""`) logo após a inserção, permitindo que o usuário digite a próxima tarefa imediatamente.
* **Design e CSS Avançado:**
  * Alinhamento centralizado perfeito na tela utilizando **Flexbox Layout**.
  * Transições suaves (`transition: 0.3s ease`) nos estados de interação do botão (`:hover`).
  * Efeitos de profundidade com sombras internas (`box-shadow: inset`) no campo de texto e feedback visual no estado de foco (`:focus`).

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído de forma nativa, utilizando a tríade fundamental do desenvolvimento web:

* **HTML5:** Estruturação da interface e container do app.
* **CSS3:** Design responsivo (com `max-width`), paleta de cores personalizada e estilização de estados interativos.
* **JavaScript (ES6):** Lógica de negócios, captura de eventos (`onclick`) e manipulação de nós do DOM.
