import { getCollection } from "@/lib/db";
export async function GET(){
    try{
        const collection = await getCollection('result_name')
        const result_names = await collection.find().toArray()

        return new Response(JSON.stringify(result_names),{
            headers: { 'Content-Type': 'application/json' },
            status:200
        })
    }
    catch(error){
        console.error(`Error fetching result names. Error : ${error}`)
        return new Response(JSON.stringify("Cannot fetch result_names"),{
            headers: { 'Content-Type': 'application/json' },
            status:500
        })
    }
}