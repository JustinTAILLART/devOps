# TP1 

Commande pour le lancement du projet :
```
git clone https://github.com/JustinTAILLART/devOps/tree/main
cd .\TP1
npx tsc
node build/index.js
```
"index.js" va verifier, quand on se connecte au serveur que l'on a créé, si la requête HTTP est de type get et si la route de la requête est "/ping" et si c'est le cas elle retournera les headers de la requête au format json.