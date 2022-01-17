import {JSServeAxios} from "../axiosConfig";

export default async function GetPokemonDetailById (Id= 0){
    return await JSServeAxios.get(`/pokemon/${Id}`).then((response=>{
        const { data } = response
        return data
    }))
}