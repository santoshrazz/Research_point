import axios from "axios"
import { Navigate } from 'react-router-dom'

export class AllUtility {
    navigate;
    constructor() {
        this.navigate = Navigate();
    }
    async deleteJob(jobId) {
        try {
            const url = `/job/deleteJob${jobId}`
            const res = await axios.get(url);
            if (res.status === 200) {
                Navigate('/alljobs')
            }

        } catch (error) {

        }
    }
}