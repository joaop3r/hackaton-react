import { ChangeEvent, useState } from "react";

type Props ={
    onAdd: (email: string, password: string)=> void;
}

export const LoginForm =({onAdd}:Props)=>{
    const [email, setEmail] = useState('')

    const handleEmailChange =(e:ChangeEvent<HTMLInputElement>)=>{
        setEmail(e.target.value);
    }
 
    const [password, setPassword] = useState('')
    
    const handlePasswordChange =(e:ChangeEvent<HTMLInputElement>)=>{
        setPassword(e.target.value);
    }

    const handleExportForm =()=>{
        if(email && password){
            onAdd(email,password);
            setEmail('');
            setPassword('');

        }else{
            alert("Por favor, preencha os campos corretamente")
        }

    }
    return (
        <div className="w-screen h-screen p-5 bg-gray-900 text-white flex justify-center">
        <div className=" border-1 p-6" >
            <h1 className="text-3xl font-bold text-center"> Sistema de Login</h1>
            <div className="my-6">
                <label className="block text-lg mb-2" htmlFor="emailField"> Endereço de e-mail</label>
                <input
                 className="w-full p-2 rounded-md text-lg bg-gray-800 border border-gray-600 outline-yellow-500" 
                 type="email" id="emailField" placeholder="example@email.com" value={email}
                  onChange={handleEmailChange}/>
            </div>
            <div className="">
                <div className="flex justify-between center">
                <label className="block text-lg mb-2" htmlFor="passwordField">Senha </label>
                <a className= "text-yellow-500  ">Esqueceu a senha?</a>
                </div>
                    <input className="w-full p-2 rounded-md text-lg bg-gray-800 border border-gray-600 outline-yellow-500"
                    type="password" id="passwordField" value={password}
                    onChange={handlePasswordChange}/>
            </div>
            <div className="my-6">

                <button onClick={handleExportForm}
                className="w-full p-2 rounded-md text-xl font-bold border-none text-white bg-yellow-500 hover:opacity-50">
                    Entrar</button>
            </div>
            <div className="text-gray-400 text-center">
                Não é cadastrado?? <a href="" className="text-yellow-500 font-bold">Faça seu cadastro agora</a>
            </div>
        
        </div>
    </div>
    );
}