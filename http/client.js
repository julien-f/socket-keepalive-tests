require('http').request(
  require('split-host').default(process.argv[2]),
  res => {
    console.log('res')
    res
      .once('aborted', console.log.bind(console, 'res aborted'))
      .once('close', console.log.bind(console, 'res close'))
      .once('error', console.log.bind(console, 'res error'))
  }
)
  .once('socket', socket => {
    console.log('socket')
    socket.setKeepAlive(true)
    socket
      .once('close', console.log.bind(console, 'socket close'))
      .once('error', console.log.bind(console, 'socket error'))
  })
  .once('abort', console.log.bind(console, 'req abort'))
  .once('aborted', console.log.bind(console, 'req aborted'))
  .once('error', console.log.bind(console, 'req error'))
  .end()
