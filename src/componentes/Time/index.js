import Colaborador from '../Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba';

const Time = ({ time, colaboradores, aoDeletar, mudarCor }) => {
    return (
        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, "0.6") }}>
            <input onChange={evento => mudarCor(evento.target.value, time.id)} value={time.cor} type='color' className='corTime' />
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => <Colaborador key={indice} colaborador={colaborador} corDeFundo={time.cor} aoDeletar={aoDeletar} />)}
            </div>
        </section>

    )
}
export default Time