import { ChangeEvent, useState } from "react"

type Props = {
    onAdd: (title:string, body:string)=> void;
}

 export const PostForm =({onAdd}:Props)=>{
    const [addTitleText, setAddTitleText]= useState('');
    const [addBodyText, setAddBodyText] = useState('');

const handleAddTittleChange=(e:ChangeEvent<HTMLInputElement>)=>{
    if(e.target.value !=="")
    setAddTitleText(e.target.value);
}

const handleAddBodyChange =(e:ChangeEvent<HTMLTextAreaElement>)=>{
    setAddBodyText(e.target.value);
}

 const handleAddClick =()=>{
    if(addTitleText && addBodyText){
        onAdd(addTitleText,addBodyText);
        setAddBodyText('');
        setAddTitleText('');
    }else{
        alert("Preencha os campos");
    }
 }
    return(
        <fieldset className="border-2 mb-3">
            <legend>Adicionar Novo Post</legend>
                <input value={addTitleText} onChange={handleAddTittleChange}
                 className="block border" type="text" placeholder="Digite um Título"
                />
                <textarea value={addBodyText} onChange={handleAddBodyChange} className="block border"></textarea>
                <button onClick={handleAddClick} className="block border">Adicionar</button>
    </fieldset>
    );
 }