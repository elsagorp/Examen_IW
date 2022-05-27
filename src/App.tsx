import React, { FC, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './containers/Layout';
import Characters from './components/characters';
import CharactersSta from './components/charactersFilterSta';
import CharactersGen from './components/charactersFilterGen';
import CharactersFu from './components/charactersFilterFull';
import CharactersNam from './components/charactersFilterNam';
import CharactersFull from './components/charactersF';
import CharactersF from './components/charactersF2';
import CharactersFF from './components/charactersF3';
import Index from './components';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';


import Buscador from './components/Buscador';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

const App: FC = () => {
  const[sta, setSta] = useState<string> (""); 
  const [pagina, setPagina] = useState(1);
  const [status, setStatus] = useState(false);
  const [gener, setGener] = useState(false);
  const [gen, setGen] = useState<string> ("");
  const [nam, setNam] = useState(false);
  const [name, setName] = useState<string> ("");
//      {status || gener || nam  || <Index page={pagina} changePage={setPagina} />}
  return (
    <Layout>
      <ApolloProvider client={client}>
      <Buscador changeSta = {setSta} changeGen = {setGen} changeStaF ={setStatus} changeGenF = {setGener} changeNam = {setName} changeNamF = {setNam}/>
       {!status && !gener && !nam &&<Characters page={pagina} filtsta ={status} status = {sta} filtgen = {gener} gender = {gen}/>}
       {status && !gener && !nam && <CharactersSta page={pagina} filtsta ={status} status = {sta} filtgen = {gener} gender = {gen}/>}
       {!status && gener && !nam &&<CharactersGen page={pagina} filtsta ={status} status = {sta} filtgen = {gener} gender = {gen}/>}  
       {status && gener && !nam &&<CharactersFu page={pagina} filtsta ={status} status = {sta} filtgen = {gener} gender = {gen} name = {name} filtnam = {nam}/>}  
       {!status && !gener && nam && <CharactersNam page={pagina} filtsta ={status} status = {sta} filtgen = {gener} gender = {gen} name = {name} filtnam = {nam}/>}
       {status && gener && nam && <CharactersFull page={pagina} filtsta ={status} status = {sta} filtgen = {gener} gender = {gen} name = {name} filtnam = {nam}/>}
       {status && !gener && nam && <CharactersF page={pagina} filtsta ={status} status = {sta} filtgen = {gener} gender = {gen} name = {name} filtnam = {nam}/>}
       {!status && gener && nam && <CharactersFF page={pagina} filtsta ={status} status = {sta} filtgen = {gener} gender = {gen} name = {name} filtnam = {nam}/>}
       
       <Index page={pagina} changePage={setPagina} />
      
      </ApolloProvider>
    </Layout>
  );
}


export default App;
