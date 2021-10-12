import mongoose from 'mongoose'
import { CompanyJob } from './JobType'

const JobSchema = new mongoose.Schema<CompanyJob>({
    jobName: {type: String ,required: true},
})

export = mongoose.model('JobSchema',JobSchema)