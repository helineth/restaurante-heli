import styles from  './Cardapio.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';
import Buscador from 'assets/cardapio/Buscador';
import { useState } from 'react';
import Filtros from './Filtros';
import Ordenador from 'assets/cardapio/Ordenador';


export default function Cardapio(){
    const [busca, setBusca ] = useState("");
    const [filtro, setFiltro] = useState<number | null>(null);
const [ordenador, setOrdenador] = useState("");
    return(
        <main>
            <nav className={styles.menu}> 
            <Logo/>
            </nav>
           <header className={styles.header}>
            <div className={styles.header__text}>
                O melhor da cidade de Luanda
            </div>
           </header>
           <section className={styles.cardapio}>
            <h3 className={styles.cardapio__titulo}>Cardápio</h3>
            <Buscador
            busca={busca}
            setBusca={setBusca}
            />

            <div className={styles.cardapio__filtros}>
<Filtros
filtro={filtro} setFiltro={setFiltro}

/>
<Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
            </div>
           </section>
        </main>
    )
}