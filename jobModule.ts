import JobSchema from './modelJob'
import { CompanyJob } from './JobType'
import { CompanyContract } from './contractType'
import ContractSchema from './modelContract'
import {Request} from 'express'

export default class cJob{
    constructor(){}

    async addJob (req:Request):Promise<CompanyJob> {
        const data:CompanyJob = await JobSchema.create(req.body)
        return data
    }

    async getAllJob ():Promise<CompanyJob[]> {
        const data:CompanyJob[] = await JobSchema.find({})
        return data
    }

    async getById (req:Request):Promise<CompanyJob> {
        const data:CompanyJob = await JobSchema.findById(req.params.id)
        return data
    }

    async updJob (req:Request):Promise<CompanyJob> {
        const data:CompanyJob = await JobSchema.findByIdAndUpdate(req.params.id, req.body)
        return data
    }


    async delJob (req:Request):Promise<void> {
        await ContractSchema.deleteMany({jobId:req.params.id})
        await JobSchema.findByIdAndDelete(req.params.id)
    }

    async getAllCont () {
        const data:CompanyContract[] = await ContractSchema.find({})
        return data
    }


    async getCont (req:Request){
        const data:CompanyContract[] = await ContractSchema.find({jobId:req.params.id})
        if(data == null) {
            throw new Error(`Threre is no job with id ${req.params.id}`)
        }
        const Sal = {
            TotalSalary:0
        }
        data.forEach(el => {
            Sal.TotalSalary+=el.jobSalary
        })
        //data.push(Sal)
        return data
    }



    async delCont (req:Request){
         await ContractSchema.findByIdAndDelete(req.params.id)
    }
}

