# 🤖 Relatório de Uso de Inteligência Artificial — OrbitClean Edge

Este documento explica de forma bem direta como nós usamos a Inteligência Artificial (Gemini) para ajudar a construir a parte visual e a lógica do nosso projeto de Web Development para a Global Solution 2026.

---

## 🎨 1. Criação do Visual e das Imagens do Site
* **O que pedimos:** Como nosso projeto é sobre monitoramento de satélites e lixo espacial, pedimos ideias de design para deixar a página com uma cara moderna e tecnológica. Também usamos a IA para nos orientar na criação e escolha das imagens e gráficos técnicos que mostram os satélites conversando entre si em rede (mesh) e o avanço da Síndrome de Kessler.
* **O que a IA retornou:** Sugeriu uma identidade visual voltada para o tema aeroespacial, recomendando a paleta de cores escura (grafite e azul/laranja para os alertas) que aplicamos no CSS.
* **O que mudamos/rejeitamos e o motivo:** O conceito ficou ótimo e aceitamos. Só mudamos a posição dos botões principais da abertura do site (*Hero*), centralizando-os para que quem entrasse no site achasse o conteúdo mais rápido.

---

## 🎨 2. Sistema de Troca de Temas (Cores de Fundo)
* **O que pedimos:** Para cumprir a exigência de ter 3 temas de cores no site, pedimos um código em JavaScript puro que mudasse o fundo e as letras da página quando o usuário clicasse em botões seletores.
* **O que a IA retornou:** Criou a lógica dos botões para o menu de navegação, as classes de estilo para o Modo Eclipse (tudo preto) e Modo Estação de Solo (tudo claro), além do script para ativar essas mudanças no clique do mouse.
* **O que mudamos/rejeitamos e o motivo:** Funcionou bem de primeira. A única coisa que tivemos que corrigir na mão foi o topo do site (o cabeçalho): ele era transparente e, quando o usuário ativava o modo claro, as letras do menu sumiam no fundo. Forçamos o cabeçalho a ficar com uma cor sólida no modo claro para resolver o problema de leitura.

---

## 📝 3. Validação do Formulário de Contato
* **O que pedimos:** Pedimos ajuda para criar um script simples em JavaScript que checasse se o usuário preencheu todos os campos do formulário de parceria antes de enviar, bloqueando o envio se houvesse algo em branco.
* **O que a IA retornou:** A estrutura do formulário com avisos de erro escondidos, o estilo das bordas vermelhas para quando o campo estivesse errado e a lógica usando o comando `.trim()` para identificar campos vazios ou cheios de espaços.
* **O que mudamos/rejeitamos e o motivo:** Manteve-se o script sugerido. A única alteração do grupo foi colocar um aviso de "Sucesso" que some sozinho depois de 5 segundos. Do jeito que a IA tinha feito, o aviso verde ficava travado na tela para sempre, o que deixava o visual poluído depois do envio.

---

## 🧠 4. Criação do Quiz de 10 Perguntas
* **O que pedimos:** Nós pedimos para a IA gerar especificamente 10 perguntas bem técnicas e contextualizadas sobre o nosso tema (velocidade de detritos, Síndrome de Kessler e peças do nosso Arduino), para que pudéssemos montar um Quiz dinâmico na mesma tela que calculasse a pontuação final do usuário.
* **O que a IA retornou:** Entregou o banco de dados com as 10 perguntas técnicas prontas com as alternativas corretas mapeadas.
* **O que mudamos/rejeitamos e o motivo:** As perguntas ficaram perfeitas e encaixaram direto na nossa estrutura. Nós só reescrevemos as mensagens que aparecem na tela de resultado final. As mensagens originais eram muito genéricas, então mudamos para termos do mundo dos satélites (como "Elite Aeroespacial" ou "Risco Crítico de Colisão") para combinar muito mais com o nosso pitch.

---
_Nota: Para manter o projeto organizado e não quebrar o site, cada uma dessas funções foi desenvolvida e testada em branches separadas no GitHub antes de juntarmos tudo na branch principal._