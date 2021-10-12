import mongoose from 'mongoose'

type NameOfJob = string

export interface CompanyJob extends mongoose.Document{
    jobName:NameOfJob
}