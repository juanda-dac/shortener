import Swal from "sweetalert2";

const Toast = Swal.mixin({
    toast:true,
    position:'top-right',
    showConfirmButton:false,
    timer:2000,
    timerProgressBar:true,
});


export async function toastMessage(message:string){
    await Toast.fire({
        icon:'success',
        title:message,
    })
}

export async function toastMessageError(message:string){
    await Toast.fire({
        icon:'error',
        title:message,
    })
}