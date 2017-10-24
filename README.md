On remote machine:

```
$ git clone https://github.com/julien-f/socket-keepalive-tests
$ cd socket-keepalive-tests
$ yarn
$ node net/server.js
listening on tcp://[::]:38479
```

On local machine:

```
$ git clone https://github.com/julien-f/socket-keepalive-tests
$ cd socket-keepalive-tests
$ yarn
$ node net/client remote-machine:38479
```

Now cut the connection between local and remote machine and notice the
client does not detect anything.
