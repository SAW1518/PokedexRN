import axios from 'axios'
import * as rax from 'retry-axios'
import {BASE_URL} from "../utils/constants";

export const JSServeAxios = axios.create({
    baseURL: BASE_URL,
    // data: {}
    /*headers: {
        Authorization: `Bearer ${getToken()}`,
    }*/
})

/** REEINTENTOS DE ENE LA CASO DE QUE LAS PETICIONES FALLEN **/
// retry config
/*JSServeAxios.defaults.raxConfig = {
    instance: JSServeAxios,

    // Retry twice on errors that don't return a response (ENOTFOUND, ETIMEDOUT, etc).
    noResponseRetries: 2,

    // Milliseconds to delay at first.  Defaults to 100. Only considered when backoffType is 'static'
    retryDelay: 1000,

    // HTTP methods to automatically retry.  Defaults to:
    // ['GET', 'HEAD', 'OPTIONS', 'DELETE', 'PUT']
    httpMethodsToRetry: ['GET', 'HEAD', 'OPTIONS', 'DELETE', 'PUT', 'POST', 'PATCH'],

    // The response status codes to retry.  Supports a double
    // array with a list of ranges.  Defaults to:
    // [[100, 199], [429, 429], [500, 599]]
    statusCodesToRetry: [[199, 199], [400, 429], [500, 599]],

    // You can set the backoff type.
    // options are 'exponential' (default), 'static' or 'linear'
    backoffType: 'exponential'

    /!* nRetryAttempt: err => {
      const cfg = rax.getConfig(err)
      console.log(`Retry attempt #${cfg.currentRetryAttempt}`)
    } *!/
}*/
export const interceptorId = rax.attach(JSServeAxios)
/** SI AUTORIZACION POR TOKEN Y REFRESTOKEN  PUEDES USAR ESTO PARA RENOVER TU TOKEN **/
 /*
const interceptorIdd = rax.attach(JSServeAxios)
JSServeAxios.interceptors.response.use((response) => {
    return response
}, async function (error) {
    const originalRequest = error.config
    if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true
        window.location.reload(false)
    }
    return Promise.reject(error)
})*/
