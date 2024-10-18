interface MenuProperty{
    id: number;
    text: string;
    to: string; // Link to navigate
}

export interface ProfileModel{
    name:string;
    icon?:any;
    submenu?:Array<MenuProperty>
}

export interface MenuModel{
    buttons?:Array<MenuProperty>;
    profile?:ProfileModel
}