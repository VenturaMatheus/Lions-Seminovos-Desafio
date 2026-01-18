# Lions Seminovos – Desafio Front-end

## 📌 Sobre o projeto

Este projeto foi desenvolvido como parte do **desafio para a vaga de Desenvolvedor Front-end da Lions Seminovos**.

A proposta foi criar uma aplicação front-end **inspirada no site oficial da Lions Seminovos**, focando nas páginas:

* Página Inicial (Home)
* Catálogo de veículos
* Agende sua visita

O site oficial foi utilizado apenas como **referência visual e conceitual**, respeitando a orientação de não copiar funcionalidades completas, mas sim, interpretar o layout, identidade visual e experiência do usuário.

---

## 🎯 Objetivo do desafio

* Criar uma aplicação front-end simples, funcional e responsiva
* Utilizar HTML, CSS e JavaScript puro
* Trabalhar com layout responsivo (mobile, tablet e desktop)
* Demonstrar organização de código, boas práticas e clareza estrutural
* Incluir ao menos um botão direcionando para uma página externa

---

## 🧱 Estrutura do projeto

```
📦 projeto-lions-seminovos
 ┣ 📂 assets
 ┃ ┣ 📂 css
 ┃ ┃ ┣ 📜 style.css        # Estilos globais
 ┃ ┃ ┣ 📜 catalogo.css     # Estilos específicos do catálogo
 ┃ ┃ ┗ 📜 visita.css       # Estilos específicos da página de visita
 ┃ ┣ 📂 img               # Imagens do projeto
 ┃ ┣ 📂 js
 ┃ ┃ ┗ 📜 script.js        # Scripts de interação (menu mobile)
 ┣ 📜 index.html           # Página inicial
 ┣ 📜 catalogo.html        # Página de catálogo
 ┣ 📜 visita.html          # Página de agendamento
 ┣ 📜 .gitignore
 ┗ 📜 README.md
```

---

## 🖥️ Tecnologias utilizadas

* **HTML5** – estrutura semântica
* **CSS3** – estilização e responsividade

  * Variáveis CSS (`:root`)
  * Flexbox e Grid Layout
  * Media queries (mobile-first)
* **JavaScript (Vanilla)** – interações simples

  * Menu mobile (hamburger)

---

## 📱 Responsividade

O layout foi pensado para funcionar corretamente em diferentes tamanhos de tela:

* **Mobile**: menu hamburger, layout em coluna única
* **Tablet**: grids adaptáveis
* **Desktop**: layout mais espaçado e visualmente equilibrado

---

## 🔗 Funcionalidades implementadas

* Navegação entre páginas
* Menu mobile interativo
* Catálogo de veículos em formato de cards
* Página de agendamento com formulário
* Botão de contato externo via WhatsApp

> O formulário de agendamento possui apenas caráter demonstrativo, sem envio real de dados.

---

## 🚀 Como executar o projeto

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
```

2. Acesse a pasta do projeto:

```bash
cd projeto-lions-seminovos
```

3. Abra o arquivo `index.html` diretamente no navegador

---

## 🧠 Decisões e considerações

* Separei **estilos globais** (`style.css`) dos **estilos por página** (`catalogo.css`, `visita.css`) para facilitar manutenção
* Mantive o JavaScript **vanilla e acessível** (aria-label, aria-expanded, fechamento com ESC/click fora)
* O header é **fixo com leve opacidade e blur** para legibilidade
* A seção hero usa `background-position: 65% center` para favorecer a leitura do preço na imagem
* Abordagem **mobile-first** com breakpoints em 768px, 1024px e 1920px
* Evitei funcionalidades fora do escopo e priorizei **clareza e objetividade**
* Visual limpo, profissional e coerente com o segmento automotivo

---

## ✅ Checklist do desafio

- Aplicação inspirada no site da Lions Seminovos 
- Três páginas principais: Home, Catálogo e Agendamento
- Elementos gráficos públicos e favicon
- Botão externo para WhatsApp em todas as páginas
- Layout responsivo e acessível (HTML semântico + ARIA)
- README com decisões técnicas e instruções de execução

---

## 🔗 Referências

- Site oficial (referência visual): https://lionsseminovos.com.br/

---

## 👤 Autor

Desenvolvido por **Matheus Ventura Gomes**

Projeto criado exclusivamente para fins de avaliação no processo seletivo da Lions Seminovos.
