import {JSServeAxios} from "../axiosConfig";
import {BASE_URL} from "../utils/constants";

export default async function GetPokemonList(url = '/pokemon?limit=20offset=0') {
   return  await JSServeAxios.get(url).then(response => {
       const { data } = response
       if(Array.isArray(data.results)) {
           const {results , next, previous} = data
           const nexUrl = next.replace(BASE_URL,'')
           return {results , nexUrl, previous}
       }
    })
}