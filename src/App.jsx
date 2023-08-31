
import Secao from './components/Secao'
import Rodape from './components/Rodape'
import viteLogo from './assets/vite.svg'
import Lista from './components/Lista'


export default function App(){

  let viteAtl = 'Vite Logo'

  let nomes = ['Leo','Yuuki','Santos'];

  return(
    <>
      <Lista />
        <Secao  viteLogoProps={viteLogo} viteAtlProps={viteAtl} nomesProps={nomes}/>
      <Rodape />
      
    </>
  );

}