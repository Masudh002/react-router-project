/*export async function getVans(){
    const resp = await fetch("/api/vans")
    const data =await resp.json()
    return data.vans
}*/

export async function getVans(){
    const resp = await fetch("/api/vans")
    if(!resp.ok){
        throw{
            message:"Failed to fetch",
            stausText: resp.statusText,
            status: resp.status
        }
    }
    const data =await resp.json()
    return data.vans
}