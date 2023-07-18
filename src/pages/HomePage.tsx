import {Link} from 'react-router-dom'
export const HomePage = ()=>{
    return(
        <div className='flex m-6 gap-3 justify-center'>
            <div className='block p-4 border-2 border-gray-400'>Página Inicial</div>
            <Link className='block p-4 border-2 border-gray-400' to='/teste'>Pagina de Teste</Link>
            <Link className='block p-4 border-2 border-gray-400'  to='/login'>Pagina de Login</Link>
        </div>
    );
}