
import mongoose from 'mongoose'


type NameOfWorker = string
type NameOfJob = string
type CompanyWorkerId = string
type CompanyJobId = string
type Salary = number
type Hours = number
type HireDate = Date


export interface CompanyContract extends mongoose.Document {
    workerId:CompanyWorkerId
    jobId:CompanyJobId
    workerName:NameOfWorker
    jobName:NameOfJob
    jobHours: Hours
    jobSalary: Salary
    jobDate:HireDate
}