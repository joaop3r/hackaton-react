import { LoginForm } from "@/components/LoginForm";


export const Login =()=>{
    const handleSubmitForm =(email: string, password:string)=>{
        alert(email +''+password);
    }   
    
    return(
     <LoginForm onAdd={handleSubmitForm}/>
    );
}