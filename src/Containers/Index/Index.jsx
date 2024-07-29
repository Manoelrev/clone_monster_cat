import * as std from './style';

function Index() {
    return (
        <std.header>
            <std.Container>
            <div>
                <h1>Monster Cat Clone</h1>
            </div>
            <div className='bloco_input'>
                <p>Ver descrição da Musica</p>
                <input id='input_musica_id' placeholder='Insira a id da musica'/>
                <button>
                    <a id='button_id' href={""} onMouseEnter={function (){
                    document.getElementById("button_id").href = "/" + document.getElementById('input_musica_id').value}}>
                    <span className="material-symbols-outlined">play_arrow</span> Click Aqui
                    </a>
                </button>
            </div>
            </std.Container>
        </std.header>
    )
}

export default Index