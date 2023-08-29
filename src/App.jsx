import Cabecalho from './components/Cabecalho'
import Secao from './components/Secao'
import Rodape from './components/Rodape'
import viteLogo from './assets/vite.svg'


export default function App(){

  let viteAtl = 'Vite Logo'
  return(
    <>
      <Cabecalho />
      <Secao  viteLogoProps={viteLogo} viteAtlProps={viteAtl}/>
      <Rodape />
      

    </>
  );

}