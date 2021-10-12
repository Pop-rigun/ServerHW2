import WorkerSchema from './modelWorker'
import { CompanyWorker } from './workerType'
import { CompanyContract } from './contractType'
import JobSchema from './modelJob'
import {Request} from 'express'
import ContractSchema from './modelContract'




export default class cWorker {
    constructor(){}

    async  addWorker (req:Request):Promise<CompanyWorker> {
        const data:CompanyWorker = await WorkerSchema.create(req.body)
        return data
    }

    async  getAllWorkers ():Promise<Worker[]> {
        const data:Worker[] = await WorkerSchema.find({})
        return data
    }

    async  getById (req:Request):Promise<Worker> {
        const data:Worker = await WorkerSchema.findById(req.params.id,(err,req:Request) => {
            if(err)
            {
                console.log("Error.There is no worker with id"+ req.params.id)
            }
        })
        return data
    }

    async  updWorker (req:Request):Promise<Worker> {
        const data:Worker = await WorkerSchema.findByIdAndUpdate(req.params.id, req.body)
        return data
    }


     async delWorker (req:Request):Promise<void> {
        await ContractSchema.deleteMany({workerId:req.params.id})
        await WorkerSchema.findByIdAndDelete(req.params.id)
    }

    async  getAllCont ():Promise<CompanyContract[]>{
        const data:CompanyContract[] = await ContractSchema.find({})
        return data
    }

    async  getCont (req:Request){
        const data:CompanyContract[] = await ContractSchema.find({workerId:req.params.id})
        const Sal = {
            TotalSalary:0
        }
        data.forEach(el => {
            Sal.TotalSalary+=el.jobSalary
        })
        //data.push(Sal)
        return data
    }

    async  delCont (req:Request):Promise<void>{
        await ContractSchema.findByIdAndDelete(req.params.id) 
    }

    async  addCont (req:Request):Promise<CompanyContract> {
    const {workerId,jobId,jobHours,jobSalary} = req.body
    const test1 = await WorkerSchema.findById(workerId)
    if (test1 ==null) {
        throw new Error(`Threre is no worker with id ${workerId}`)
    }
    const test2 = await JobSchema.findById(jobId)
    if (test2 ==null) {
        throw new Error(`Threre is no worker with id ${workerId}`)
    }
    const test3 = await ContractSchema.find({workerId:workerId})
    console.log(test3)
    let temptest3:number = 0
    test3.forEach(el => {
        temptest3 += el.jobHours
    });
    if (temptest3 + +jobHours > 20) {
        throw new Error(`Threre will be more then 20 working hours ${workerId}`)
    }
        const workerName:string = test1.workerName
        const jobName:string = test2.jobName
        const data = await ContractSchema.create({
            workerId:workerId,
            jobId:jobId,
            workerName:workerName,
            jobName:jobName,
            jobHours:jobHours,
            jobSalary:jobSalary,
            jobDate: new Date
        })
        return data
    }
}



