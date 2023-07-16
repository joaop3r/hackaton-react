import {Link} from 'react-router-dom'
export const HomePage = ()=>{
    return(
        <div className='flex  justify-center'>
            Página Inicial
            <Link to='/teste'>Pagina de Teste</Link>
            <Link to='/login'>Pagina de Login</Link>
        </div>
    );
}