import Swal from "sweetalert2";

export function swalError(message:string){
    return Swal.fire({
        icon:"error",
        title:"Error",
        text:message
    })
}

export function swalSuccess(message:string){
    return Swal.fire({
        icon:"success",
        title:"Great",
        text:message
    })
}