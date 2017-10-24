const socket = require('net').connect(
  require('split-host').default(process.argv[2]),
  () => {
    console.log('socket')
    socket
      .once('aborted', console.log.bind(console, 'socket aborted'))
      .once('close', console.log.bind(console, 'socket close'))
      .once('error', console.log.bind(console, 'socket error'))
  }
).setKeepAlive(true)
