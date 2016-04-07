# Gerador de PDF

1. Escreva o template em markdown ```template.md```
2. Utilize o nome das variáveis de ambiente que quer substituir usando 3
underscores de cada lado, e.g. ```___MINHA_VARIAVEL__```
3. Crie um arquivo ```.env``` com as substituições (ver ```.env-sample```)
4. Execute este ```.env``` para setar as variáveis de ambiente
5. Rode ```./index.js``` para enxertar os valores no template e gerar um novo
markdown ```p1.md```
6. Rode ```npm run pdf``` para converter para PDF.

Ou simplesmente:

```
npm test && npm run pdf
```
