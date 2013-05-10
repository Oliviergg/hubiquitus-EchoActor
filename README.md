# Building an Echo Actor
Source file for [lesson 1 ](http://hubiquitus.com/2013/04/24/lecon-1-echo-avec-hubiquitus/)

- Running Engine/Topology

```
node launch.js
```

- Running

```
node client.js -echo MyName
```

- result :

```
Send Message : { actor: 'urn:localhost:echo',
  type: 'string',
  persistent: undefined,
  payload: 'oliviergg',
  timeout: 10000 }
Received : { payload: 'Hello oliviergg',
  actor: 'urn:localhost:u1/9700f4ca-d45a-4aea-86fe-3ed71ff459f7',
  publisher: 'urn:localhost:echo/500bf501-68fd-48ee-bc80-a4ff59d93ae4',
  msgid: 'f4f24b68-f854-4790-a716-1f0bc74eddaf#9fc675ef-c020-482f-b3ff-1e9f385e30c4#4fead33d-7c83-46f3-9de6-8f189170bd69',
  sent: 1368182274140,
  convid: 'f4f24b68-f854-4790-a716-1f0bc74eddaf#9fc675ef-c020-482f-b3ff-1e9f385e30c4',
  published: 1368182274140 }
 ```