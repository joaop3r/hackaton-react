import { Post } from "@/types/Post";
import { useState, useEffect, ChangeEvent } from "react";

export const Teste = ()=>{
    const [posts, setPosts]= useState<Post[]>([]);
    const [loading, setLoading] = useState(false);

    const[addTitleText, setAddTitleText]= useState('');
    const[addBodyText,setAddBodyText] = useState('');



    useEffect(()=>{
        loadPosts();
    },[]);

    const loadPosts =async () => {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let json = await response.json();
        setPosts(json);
    }

    const handleAddTittleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        if(e.target.value !="")
        setAddTitleText(e.target.value);
    }

    const handleAddBodyChange =(e:ChangeEvent<HTMLTextAreaElement>)=>{
        setAddBodyText(e.target.value);
    }
    
    const handleAddClick = async ()=>{
        if(addTitleText && addBodyText) {

            let response = await fetch("https://jsonplaceholder.typicode.com/posts",{
                method: 'POST',
                body: JSON.stringify({
                    title: addTitleText,
                    body: addBodyText,
                    userId: 1
                }),

                headers:{
                    'Content-Type': 'aplication/json'
                }
            });
            let json = await response.json();
                if (json.id){
                    alert('post adicionado com sucesso!');
                }else {
                    alert('ocorreu algum erro');
                }
                
        }else {
            alert("Preencha os campos");
        }
        
    }
    return(
        <div className="m-6">
            {loading &&
            <div>Carregando...</div>
            }

            <fieldset className="border-2 mb-3">
                <legend>Adicionar Novo Post</legend>
                <input value={addTitleText} onChange={handleAddTittleChange}
                className="block border" type="text" placeholder="Digite um Título"
                 />
                <textarea value={addBodyText} onChange={handleAddBodyChange} className="block border"></textarea>
                <button onClick={handleAddClick} className="block border">Adicionar</button>
            </fieldset>

            {!loading && posts.length > 0 &&
            <>
            <div> Total de Posts: {posts.length}</div>
            <div className="">
                {posts.map((item,index)=>(
                    <div key={index}>
                        <h4 className="font-bold text-xl">{item.title}</h4>
                        <small>#{item.id} - Usuário: {item.userId}</small>
                        <p>{item.body}</p>
                    </div>
                ))}
            </div>
            </>
            
            }

            {!loading && posts.length === 0 &&
                <div>Não há posts para exibir</div>
            }
        </div>
    );
}