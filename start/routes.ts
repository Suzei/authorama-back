/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import AuthorsController from '#controllers/authors_controller'
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')

router.post('/authors', [AuthorsController, 'create'])
router.get('/authors', [AuthorsController, 'all'])
