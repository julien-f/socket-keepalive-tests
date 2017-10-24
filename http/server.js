require('http').createServer((req, res) => {
  setTimeout(() => {
    res.end(req.url)
  }, 10e3)
})
  .listen(
    require('split-host').default(process.argv[2]),
    function () {
      const _ = this.address()
      console.log('listening on http://[%s]:%s', _.address, _.port)
    }
  )
