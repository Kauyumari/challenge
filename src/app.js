const express = require('express')
const app = express()
const port = 3000

app.get('/:n', (req, res) => {
   const { n } = req.params;

   if(!isNaN(Number(n))) {
      const num = Number(n)
 
      var i;
      var fib = [];

      fib[0] = 0;
      fib[1] = 1;

      for (i = 2; i <= num; i++) {
         fib[i] = fib[i - 2] + fib[i - 1];
      }

      if(num === 0) return res.status(200).send(fib[num].toString())

      return res.status(200).send(fib.pop().toString())
   } else {
      return res.status(400).send('You need a valid fivonacci index')
   }
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})