
import mongoose from 'mongoose'
import { CompanyWorker } from './workerType'

const WorkerSchema = new mongoose.Schema<CompanyWorker>({
    workerName: {type: String ,required: true},
})


export = mongoose.model('WorkerSchema',WorkerSchema)
