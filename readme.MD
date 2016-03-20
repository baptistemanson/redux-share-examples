# Redux Share Examples


```
  /$$$$$$  /$$                                    
 /$$__  $$| $$                                    
| $$  \__/| $$$$$$$   /$$$$$$   /$$$$$$   /$$$$$$ 
|  $$$$$$ | $$__  $$ |____  $$ /$$__  $$ /$$__  $$
 \____  $$| $$  \ $$  /$$$$$$$| $$  \__/| $$$$$$$$
 /$$  \ $$| $$  | $$ /$$__  $$| $$      | $$_____/
|  $$$$$$/| $$  | $$|  $$$$$$$| $$      |  $$$$$$$
 \______/ |__/  |__/ \_______/|__/       \_______/
```

/!\ It is highly experimental. /!\
[See the video presentation](https://youtu.be/SPkdwmRmk5k)

Redux share is a middleware for redux to stream actions via a websocket between one or several clients and a server. It allows you to develop realtime, collaborative applications and games.

It uses a [server](https://github.com/baptistemanson/redux-share-server) and a [client](https://github.com/baptistemanson/redux-share-client).


## Dev mode: Use local version of the repo

If you wish to use your own modified client and server instead of the github one.

```
| redux-share-server/.git
| redux-share-client/.git
| redux-share-examples/
                      simple-client/
                      simple-server/
                      
```

You can run in each example folder:

```bash

$npm run local

```


This mechanism works with symbolic link. Delete and re-run to revert back to the official version of the server and client.
