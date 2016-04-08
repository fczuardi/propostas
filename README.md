# Gerador de PDF

1. Escreva o template em markdown ```template.md```
2. Utilize o nome das variáveis de ambiente que quer substituir usando 3
underscores de cada lado, e.g. ```___MINHA_VARIAVEL__```
3. Crie um arquivo ```.env``` com as substituições (ver ```.env-sample```)
4. Execute este ```.env``` para setar as variáveis de ambiente: ```source .env```
5. Rode ```./index.js``` para enxertar os valores no template e gerar um novo
markdown ```p1.md```
6. Rode ```npm run pdf``` para converter para PDF.

### Resumindo:

```
source .env
npm test
npm run pdf
```

## Customizando o estilo

Este gerador de PDF utiliza como css base o [Primer](http://primercss.io/) e
por cima dele aplica os conteúdos do arquivo ```custom.css```.

Portanto, basta editar o arquivo ```custom.css``` para incluir qualquer novas
regras de estilo por cima do Primer.

## Opções do remarkable

Este projeto utiliza o [markdown-pdf](https://www.npmjs.com/package/markdown-pdf)
para gerar PDF, e este utiliza o [remarkable](https://www.npmjs.com/package/remarkable)
e suas opções de configuração.

Para modificar estas opções, edite o arquivo ```package.json```, na linha que
começa com ```"remarkable"```.
