import { DATA } from '../mock/data.json'

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(DATA)
        }, 100)
    }) 
}