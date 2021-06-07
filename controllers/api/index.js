const router = require('express').Router();

/* update these routes and routers to the relate to the 
"new" routes" that will reside in the api directory too...*/

/* START WITH POST ROUTE then ADD THE OTHERS AFTER TESTING */

const userRoutes = require('./user-routes');
/*const projectRoutes = require('./projectRoutes');*/

router.use('/users', userRoutes);
/*router.use('/projects', projectRoutes); */

module.exports = router;