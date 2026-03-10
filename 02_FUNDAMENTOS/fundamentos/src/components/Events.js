const Events = () => {
    const handleMyEvent = (e) => {
        console.log('Evento disparado');
        console.log(e);
        console.log('O e dentro dos parenteses vai informar no console informações ');
    }
    return (
        <div>
            <div>
                <button onClick={handleMyEvent}> Clique aqui </button>
            </div>
            <div>
                <button onClick={() => console.log('Clicouuuuu!')} >Clique aqui tambem</button>
                <button onClick={() => {
                    if (true) {
                        console.log('isso nao deveria existir')
                    }
                }}
                >Clique aqui por favor </button>
            </div>
        </div>
    );
};

export default Events;