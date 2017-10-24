require('net').createServer(socket => {
  setTimeout(() => {
    socket.end()
  }, 10e3)
})
  .listen(
    require('split-host').default(process.argv[2]),
    function () {
      const _ = this.address()
      console.log('listening on tcp://[%s]:%s', _.address, _.port)
    }
  )
