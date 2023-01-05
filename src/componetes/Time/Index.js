import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {

    const colorBgCss = { backgroundColor: props.corSecundaria }
    const  borderCss = { borderColor: props.corPrimaria}
    return (

        props.colaboradores.length > 0 && 
        
        <section className='time' style={colorBgCss}>
            <h3 style={borderCss}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador 
                corBackground={props.corPrimaria}
                key={colaborador.nome}
                nome={colaborador.nome} 
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}/>)}
            </div>
        </section>
    )
}

export default Time