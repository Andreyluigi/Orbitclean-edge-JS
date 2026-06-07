# 🛰️ OrbitClean Edge — Global Solution 2026

## 📖 Sobre o Projeto
O **OrbitClean Edge** é uma plataforma de monitoramento e simulação para evasão orbital autônoma de detritos espaciais em satélites de Órbita Baixa (LEO). O projeto soluciona o problema da alta latência de comunicação entre satélites e estações de solo, trazendo a lógica de tomada de decisão diretamente para o hardware embarcado através do conceito de **Edge AI**.

Esta entrega pertence à disciplina de **Web Development** (Engenharia de Software - 1º Ano, FIAP). Ela estende a interface visual com recursos lógicos avançados em JavaScript, simulando o comportamento em tempo real de uma constelação resiliente.

---

## 🛠️ Tecnologias Utilizadas

A arquitetura do ecossistema web e de simulação é composta por:

| Camada | Tecnologia | Descrição |
| :--- | :--- | :--- |
| **Estrutura** | HTML5 | Semântica focada em acessibilidade e SEO. |
| **Estilo** | CSS3 | Layout modular construído com Flexbox e variáveis nativas. |
| **Comportamento** | JavaScript | Manipulação do DOM, controle de estados e lógica de simulação. |
| **Embarcado** | C++ (Arduino Core) | Código lógico simulado para os microcontroladores. |
| **Ambiente** | Wokwi | Ferramenta utilizada para testes de estresse de hardware. |

---

## 🚀 Funcionalidades da Camada Web

Nesta versão focada em desenvolvimento web dinâmico, foram implementadas as seguintes lógicas:

1. **Gerenciador de Estados Críticos:** O sistema monitora a aproximação de detritos falsos e altera dinamicamente os componentes visuais da página (cores, avisos, displays) refletindo as regras de negócio:
   - **Green (Secure):** Satélite operando em órbita limpa.
   - **Yellow (Warning):** Detrito identificado no perímetro de segurança.
   - **Red (Critical Error 1202):** Ativação imediata de evasão autônoma de emergência.
2. **Terminal de Logs Interativo:** Exibição assíncrona de alertas e telemetria gerados pelo algoritmo de borda.
3. **Navegação Dinâmica Inteligente:** Controle de fluxo em páginas de rolagem única (*Single Page Application style*).
