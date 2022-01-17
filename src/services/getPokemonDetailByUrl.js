import {JSServeAxios} from "../axiosConfig";

export default async function getPokemonDetailByUrl ({url}={}){
    return await JSServeAxios.get(url).then((response=>{
        const { data } = response
        return data
    }))
}