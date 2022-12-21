import { Control } from "react-hook-form";
import { IFormLogin } from "../../pages/Login/types";

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    control: Control<IFormLogin, any>   
    name: "email" | "password";
    type: string;
    placeholder: string;
    errorMessage?: string;
}