# ⏳ Verificador de Idade Dinâmico

Uma aplicação web simples, interativa e responsiva que calcula a idade do usuário com base no ano de nascimento informado e identifica sua faixa etária e gênero, atualizando a interface dinamicamente com textos e imagens correspondentes.

---

## 🚀 Demonstração

O projeto consiste em um formulário onde o usuário insere seu ano de nascimento e seleciona seu sexo (Masculino ou Feminino). Ao clicar em "Verificar", o sistema realiza o cálculo e renderiza o perfil ideal:

* **Bebê / Criança:** 0 a 9 anos
* **Jovem:** 10 a 20 anos
* **Adulto(a):** 21 a 49 anos
* **Idoso(a):** 50 anos ou mais

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as tecnologias fundamentais da web (Vanilla Web Stack):

* **HTML5:** Estruturação semântica do formulário e das seções.
* **CSS3:** Estilização moderna com uso de sombras (`box-shadow`), bordas arredondadas e design centralizado.
* **JavaScript (ES6):** Toda a lógica de negócios da aplicação.

---

## 💡 Recursos Técnicos Implementados

Analisando o código, destacam-se os seguintes conceitos práticos de programação front-end:

* **Manipulação Avançada do DOM:** Uso de `document.createElement('img')` e `setAttribute` para injetar e configurar imagens dinamicamente na página via JS.
* **Tratamento de Datas Realistas:** Uso da API nativa do JavaScript (`new Date().getFullYear()`) para garantir que o cálculo da idade utilize sempre o ano corrente de forma automatizada.
* **Validação de Dados de Entrada:** Sistema de segurança básica que impede o envio de campos vazios ou de anos posteriores ao ano atual, exibindo um alerta de erro amigável ao usuário.
* **Estilização Dinâmica via JS:** Centralização do texto de resposta configurada diretamente pelo script (`res.style.textAlign = 'center'`).
