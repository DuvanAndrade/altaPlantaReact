import { DATA } from "../mock/data"

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(DATA)
        }, 3000)
    }) 
}