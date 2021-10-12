import cJob from './jobModule'
import {Router,Request,Response,NextFunction} from 'express'

const db = new cJob
const router = Router()


router.get('/', async (req:Request, res:Response, next:NextFunction) => {
    try {
        const data = await db.getAllJob()
        res.setHeader('content-type', 'application/json');
        res.statusCode = 200;
        res.json(data)
    } catch (e) {
        next(e);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
       const data = await db.getById(req)
    if (data == null) {
        throw new Error(`There is no worker with id: ${req.params.id}`)
    } else {
       res.setHeader('content-type', 'application/json');
        res.statusCode = 200;
        res.json(data)
    }
    } catch (e) {
        next(e);
    }
});


router.post('/', async (req, res, next) => {
    try {
       const data = await db.addJob(req)
       res.setHeader('content-type', 'application/json');
        res.statusCode = 200;
        res.json(data)
    } catch (e) {
        next(e);
    }
});

router.put('/:id',async (req, res, next) => {
    try{ 
        const data = await db.updJob(req)
        res.setHeader('content-type', 'application/json');
        res.statusCode = 200;
        res.json(data)
          
    } catch (e) {
        next(e);
    }
});

router.delete('/:id',async (req, res, next) => {
    try{ 
        await db.delJob(req)   
        res.setHeader('content-type', 'application/json');
        return res.sendStatus(204)
    } catch (e) {
        next(e);
    }
});


router.get('/contract/:id',async (req, res, next) => {
    try {
        const name = await db.getCont(req)
        res.setHeader('content-type', 'application/json');
        res.statusCode = 200;
        res.json(name)
    } catch (e) {
        next(e);
    }
});


router.delete('/contract/:id',async (req, res, next) => {
    try{ 
        await db.delCont(req)
        res.setHeader('content-type', 'application/json');
        return res.sendStatus(204)
    } catch (e) {
        next(e);
    }
});

module.exports = router