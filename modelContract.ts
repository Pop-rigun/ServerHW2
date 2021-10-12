
import mongoose from 'mongoose'
import { CompanyContract } from './contractType'



const ContractSchema = new mongoose.Schema<CompanyContract>({
    workerId:{type:String  ,required: true},
    jobId:{type: String ,required: true},
    workerName:{type: String ,required: true},
    jobName: {type: String ,required: true},
    jobHours: {type: Number ,required: true},
    jobSalary: {type: Number ,required: true},
    jobDate: {type: Date ,required: true},
})


export =  mongoose.model('ContractSchema',ContractSchema)