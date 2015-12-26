'use strict';

import {Router} from 'express';
import * as controller from './user.controller';
import * as auth from '../../auth/auth.service';

var router = new Router();

router.get('/', auth.hasRole('admin'), controller.index);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);
router.post('/:id/events', auth.hasRole('admin'), controller.createEvent);
router.delete('/:id/events', auth.hasRole('admin'), controller.destroyEvent);
router.get('/me', auth.isAuthenticated(), controller.me);
router.post('/me/events', auth.isAuthenticated(), controller.createEvent);
router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/', controller.create);

export default router;