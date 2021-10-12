import mongoose from 'mongoose'

type NameOfWorker = string

export interface CompanyWorker extends mongoose.Document{
    workerName:NameOfWorker
}
