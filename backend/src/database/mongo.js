import { text } from 'express'
import { MongoClient} from 'mongodb'

export const Mongo = {
    async connect ({mongoConnectionString, mongoDbname})  {
        try{
        const client = new MongoClient(mongoConnectionString)

        await client.connect()
        const db = client.db(mongoDbname)

        this.client = client
        this.db = db

        return 'Connected to mongo! '
    } catch(error){
        return { text: "Error during mongo connecction", error}
    }
}
}