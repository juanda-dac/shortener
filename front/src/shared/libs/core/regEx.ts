export function isValidURL(url:string):boolean{
    const regex = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-./?%&=]*)?$/
    return regex.test(url)
}