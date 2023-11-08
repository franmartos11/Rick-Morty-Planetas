import Formulary from '../Components/Form/Formulary';
import Title from '../Components/Title/Title.jsx';
const Home = () =>{

    return(
        <div className='home'>
            <Title text='Completa el formulario para generar tu base de datos de posibles clientes'></Title>
            <Formulary></Formulary>
        </div>
    )
} 
export default Home