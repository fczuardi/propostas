<p style="text-align:center">
    <img src="___LOGO_PATH___" />
</p>

### Proposta

-----

<p class="lead">
___PROJECT_NAME___
</p>

<div class="columns">
    <div class="one-half column centered">

___CITY___, ___DATE___\
Cliente: **___CLIENT_NAME___**\
A/C: **___RECIPIENTS___**
    </div>
</div>

<div style="page-break-before: always;" />

Resumo
======

- Desenvolvimento de um Chat Bot para a plataforma Telegram.
- Conversa guiada, baseada em menus de botões e mensagens de comando.
- Integração do bot com ___API_INTEGRATION_1___ e ___API_INTEGRATION_2___.
- Respostas e menus do bot configuráveis via ___API_INTEGRATION_1___, ___API_INTEGRATION_2___ ou arquivo local de configuração.
- Código fonte licenciado em licença open source (___LICENSE_NAME___).
- Projeto dividido em 7 módulos de funcionalidade.

---

### Preços e prazos

- Valor total: <mark>___TOTAL_VALUE___</mark>
- Duração total: ___DURATION___
<br>

#### Módulos, preços e prazos individualizados

|Módulo | Funcionalidades | Prazo |  Preço|
|:------|:---------------:|:-----:|------:|
|1 | ___STAGE_1_FEATURES___ | ___STAGE_1_DURATION___ | ___STAGE_1_PRICE___ |
|2 | ___STAGE_2_FEATURES___ | ___STAGE_2_DURATION___<br>ou ___STAGE_2_BUNDLE_DURATION___ | ___STAGE_2_PRICE___<br>ou ___STAGE_2_BUNDLE_PRICE___|
|3 | ___STAGE_3_FEATURES___ | ___STAGE_3_DURATION___ | ___STAGE_3_PRICE___ |
|4 | ___STAGE_4_FEATURES___ | ___STAGE_4_DURATION___ | ___STAGE_4_PRICE___ |
|5 | ___STAGE_5_FEATURES___ | ___STAGE_5_DURATION___ <br>ou ___STAGE_5_BUNDLE_DURATION___ | ___STAGE_5_PRICE___<br>ou ___STAGE_5_BUNDLE_PRICE___|

---

### Validade

Este orçamento é válido até o dia ___EXPIRATION_DATE___.

### Referências:

1. Texto da licença ___LICENSE_NAME___: [___LICENSE_ANCHOR___](___LICENSE_URL___)

<div style="page-break-before: always;" />

Descrição do projeto
====================

Desenvolver um assistente de chat (bot) para Telegram que funcione como 
interface de interação para os ___USER_TYPE_1___ e para os ___USER_TYPE_2___ do projeto ___SHORT_PROJECT_NAME___.

Aos ___USER_TYPE_1___ o bot deve:

- ___FEATURE_1A___ 
  - ```___COMMAND_1A___``` (funcionalidade 1)
- ___FEATURE_1B___
  - ```___COMMAND_1B___``` (funcionalidade 1)
- ___FEATURE_2___
  - ```___COMMAND_2___``` (funcionalidade 2)

As respostas devem ser enviadas a uma ___API_1_CHANNEL___ e o status das submissões também deve usar como fonte uma ___API_1_CHANNEL___.

Aos ___USER_TYPE_2___ o bot deve apresentar 4 comandos 
principais acessíveis via menu (botões de um teclado customizado):

- ```___COMMAND_1___``` (funcionalidade 3)
- ```___COMMAND_2___``` (funcionalidade 4)
- ```___COMMAND_3___``` (funcionalidade 5)
- ```___COMMAND_4___``` (funcionalidade 7)

Além dessas, o bot deve ainda ser capaz de:
- ___FEATURE_6___ (funcionalidade 6)

<div style="page-break-before: always;" />

### Funcionalidades

#### 1. ___FEATURE_1_TITLE___
#### 2. ___FEATURE_2_TITLE___
#### 3. ___FEATURE_3_TITLE___
#### 4. ___FEATURE_4_TITLE___
#### 5. ___FEATURE_5_TITLE___
#### 6. ___FEATURE_6_TITLE___
#### 7. ___FEATURE_7_TITLE___
#### 8. ___FEATURE_8_TITLE___

-----
<div style="page-break-before: always;" />

Detalhamento das funcionalidades
================================

### 1. ___FEATURE_1_TITLE___

A primeira interação de uma aspirante com o robô é adicioná-lo à sua lista de contatos, como resposta o robô deve se apresentar e em seguida apresentar os termos de uso junto com um diálogo para confirmação de aceite.

Para um exemplo de como uma confirmação dessas é apresentada na forma de teclado customizado no Telegram com botões de "Aceito"/"Não aceito", veja o exemplo abaixo de um outro bot:

![bot Tela Social usado no evento Latinoware 2016](https://cloud.githubusercontent.com/assets/7760/19816942/28d54398-9d28-11e6-99ae-cfba1058b842.png)

Uma vez aceitados os termos, o robô inicia então uma sequência de perguntas 
de formulário que aguardam respostas textuais ou de múltipla escolha (botões) por parte da ___USER_TYPE_1_SINGULAR___.

Esta sequência de perguntas é definida pelos admnistradores do bot via uma ___API_1_CHANNEL___ cujas credenciais de acesso são passadas na configuração de lançamento do bot.

As respostas são armazenadas nesta mesma ___API_1_CHANNEL___ ao final do questionário.

A interação entre o bot e a ___API_1_CHANNEL___ é feita por meio da [___API_1_NAME___](___API_1_URL___)

---

### 2. ___FEATURE_2_TITLE___

Após a submissão das respostas do formulário para a ___API_1_CHANNEL___, a ___USER_TYPE_1_SINGULAR___ tem a opção de consultar o status da sua aplicação por meio de uma mensagem de comando ```___COMMAND_2___```. Esta ação faz com que o bot consulte ___API_1_ATTRIBUTE___ e retorne o valor.

Além disso, um proceso periódico (cron job) ou outra espécie de "trigger" verifica de tempos em tempos (ou a cada atualização dos dados) na ___API_1_CHANNEL___ o status de cada submissão e, se o status tiver mudado para ___API_1_STATUS_1___ ou ___API_1_STATUS_2___ notifica proativamente este resultado à pessoa interessada.

---

### 3. ___FEATURE_3_TITLE___

Quando uma ___USER_TYPE_1_SINGULAR___ torna-se uma ___USER_TYPE_2_SINGULAR___ o menu de opções e comandos do bot muda. Um dos novos comandos disponíveis passa a ser o ```___COMMAND_1___``` que serve para ___COMMAND_1_PURPOSE___.

Este comando inicia também uma sequência de perguntas de formulário semelhante à da funcionalidade 1, porém desta vez um formulário de ___FEATURE_3_FORM___.

O funcionamento e integração com a ___API_1_NAME___ são os mesmos da funcionalidade 1.

---

### 4. ___FEATURE_4_TITLE___

Após uma ___USER_TYPE_1_SINGULAR___ tornar-se uma ___USER_TYPE_2_SINGULAR___ o comando ```___COMMAND_2___``` ganha uma nova função, a de ___COMMAND_2_PURPOSE___.

Esta funcionalidade é análoga à funcionalidade 2 e o mesmo fluxo de interação com APIs acontece aqui.

---
<div style="page-break-before: always;" />

### 5. ___FEATURE_5_TITLE___

Uma ___USER_TYPE_2_SINGULAR___ deve poder ___COMMAND_3_PURPOSE___ utilizando o comando ```___COMMAND_3___```. Esta ação retorna ___COMMAND_3A_RETURN___ que é formada a partir de uma ___API_2_CHANNEL___, uma vez escolhido o ítem desejado o ___COMMAND_3B_RETURN___ é enviado como um anexo de Telegram para a ___USER_TYPE_2_SINGULAR___. 

A interação entre o bot e a ___API_2_CHANNEL___ é feita por meio da [___API_2_NAME___](___API_2_URL___)

---

### 6. ___FEATURE_6_TITLE___

Além da interface normal do bot com os ___USER_TYPE_1___ e com os ___USER_TYPE_2___, o bot deve também reconhecer uma lista de contatos de Telegram como sendo a lista de pessoas com privilégios admnistrativos.

A estas pessoas, um comando extra ```___COMMAND_5___``` ficará disponível, a função deste
comando é repassar alertas e mensagens pontuais a todos os ___USER_TYPE_2___

---

### 7. ___FEATURE_7_TITLE___

Um grupo de Telegram poderá ser configurado para ser o grupo de ___USER_TYPE_4___. E mensagens enviadas por ___USER_TYPE_2___ via comando ___COMMAND_4___ serão redirecionadas para este grupo. As integrantes deste grupo podem responder à mensagens específicas utilizando a funcionalidade de "reply" do Telegram, e o bot interpretará esta ação como um comando e redirecionará esta resposta à autora da mensagem original.

---

### 8. ___FEATURE_8_TITLE___

Todas as interações e metadados das mensagens trocadas com o bot ficam armazenadas em um arquivo de log bruto, para futuramente poderem ser parseadas e utilizadas para a extração de dados estatísticos.

<div style="page-break-before: always;" />

Pagamento
=========

O pagamento será feito em uma única parcela no valor total de ___TOTAL_VALUE___ em até ___PAYDAY_INTERVAL___ após a entrega dos ___FIRST_DELIVERY___. Aproximadamente ___PAYDAY___ se considerarmos o cumprimento dos prazos acima e início em ___JOB_START___.

---

___CITY___, ___DATE___

___MNMO_NAME___
CNPJ: ___MNMO_CNPJ___
___MNMO_PERSON___ (mnmo)
RG: ___MNMO_PERSON_ID___
Assinatura:

