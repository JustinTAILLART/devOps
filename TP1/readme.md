# TP1 

Commande pour le lancement du projet :
```
git clone https://github.com/JustinTAILLART/devOps/tree/main
cd .\TP1
npx tsc
node build/index.js
```
"index.js" va verifier, quand on se connecte au serveur que l'on a créé, si la requête HTTP est de type get et si la route de la requête est "/ping" et si c'est le cas elle retournera les headers de la requête au format json.

//--------------------------------------------------------------------------------------------------------------------------------------

TP02

On lance notre API du TP1 via docker et un port de forwarding, au quel on peut se connecté une fois que le docker est lancé"

Les commande pour lancer notre image docker:

docker build -t tp2 .

docker run -it --rm -p 8081:8080 -e PING_LISTEN_PORT=8080 tp2

dans un nouveau terminal pour vérifier que tout à bien marché:
curl http://localhost:8081/ping -v

//--------------------------------------------------------------------------------------------------------------------------------------

TP 03

Notre docker-compose permet de répartir les reqêtes de notre API sur 4 API différentes grâce a du loadbalancing géré par docker. 

en ce positionnant dans le bon dans le bon répertoire on ouvre un terminal et on fait 

docker-compose up --build

et dans un autre terminal on fait plusieur curl http://localhost:8081/ping

On peut voir sur notre premier terminal qu'à chaque nouvel requête echange avec une de nos 4API

