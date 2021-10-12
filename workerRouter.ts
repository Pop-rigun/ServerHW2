import {Router,Request,Response,NextFunction} from 'express'
import cWorker from './workerModule'

const db = new cWorker
const router = Router()



router.get('/allworkers', async (req:Request, res:Response, next:NextFunction) => {
    try {
        const data = await db.getAllWorkers()
        res.setHeader('content-type', 'application/json');
        res.statusCode = 200;
        res.json(data)
    } catch (e) {
        next(e);
    }
});



router.get('/:id', async (req:Request, res:Response, next:NextFunction) => {
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


router.post('/', async (req:Request, res:Response, next:NextFunction) => {
    try {
       const data = await db.addWorker(req)
       res.setHeader('content-type', 'application/json');
        res.statusCode = 200;
        res.json(data)
    } catch (e) {
        next(e);
    }
});

router.put('/:id',async (req:Request, res:Response, next:NextFunction) => {
    try{ 
        const data = await db.updWorker(req)
        res.setHeader('content-type', 'application/json');
        res.statusCode = 200;
        res.json(data) 
    } catch (e) {
        next(e);
    }
});

router.delete('/:id',async (req:Request, res:Response, next:NextFunction) => {
    try{ 
        await db.delWorker(req)   
        res.setHeader('content-type', 'application/json');
        return res.sendStatus(204)
    } catch (e) {
        next(e);
    }
});



router.get('/contract/:id', async (req:Request, res:Response, next:NextFunction) => {
    try {
        const data = await db.getCont(req)
        res.setHeader('content-type', 'application/json');
        res.statusCode = 200;
        res.json(data)
    } catch (e) {
        next(e);
    }
});

router.get('/', async (req:Request, res:Response, next:NextFunction) => {
    try {
        const data = await db.getAllCont()
        res.setHeader('content-type', 'application/json');
        res.statusCode = 200;
        res.json(data)
    } catch (e) {
        next(e);
    }
});

router.post('/contract', async (req:Request, res:Response, next:NextFunction) => {
    try{
        const data = await db.addCont(req)
        res.setHeader('content-type', 'application/json');
        res.statusCode = 201;
        return res.json(data)
    } catch (e) {
        next(e);
    }
});

router.delete('/contract/:id',async (req:Request, res:Response, next:NextFunction) => {
    try{ 
        await db.delCont(req)
        res.setHeader('content-type', 'application/json');
        return res.sendStatus(204)
    } catch (e) {
        next(e);
    }
});



module.exports = router