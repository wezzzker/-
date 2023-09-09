const Router = require('express')

const publishersRouter = require('./publishersRouter')
const tabletopGamesRouter = require('./tabletopGamesRouter')

const router = new Router()

router.use('/publishers',publishersRouter)
router.use('/games',tabletopGamesRouter)


module.exports = router