const app = require('express')()
const cors = require('cors')
const PORT = 3000

app.use(cors())

app.get('/', (req, res, next) => {

})

app.get('/table')

app.listen(PORT, () => {
    console.log(`ExpressJS listening on port ${PORT}`);
})