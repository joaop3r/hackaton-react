import { api } from "@/api";
import { LoginForm } from "@/components/LoginForm";


export const Login =()=>{
    const handleSubmitForm = async (email: string, password:string)=>{
        let json = await api.loginPost(email, password,1);
        if(json.id){
            alert("Login Realizado com sucesso");
        }else{
            alert("Não foi possível realizar o Login");
        }
        
    }   
    
    return(
     <LoginForm onAdd={handleSubmitForm}/>
    );
}