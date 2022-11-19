import {useEffect,useState} from 'react';
import { List,Navbar,Searcher,Counter,Spinner } from "./components";
import { useSelector,useDispatch } from 'react-redux'; //sin usar connect sino hooks
// import {connect} from 'react-redux'; para usar connect y no hooks
import {getPokemonsWithDetails} from './actions/actions';
import { getPokemon} from './api/api';

// usando connect deberíamos recibir estas props {pokemons,setPokemons}
function App() {
  //usamos el hook no el connect
  //obtenemos las propiedades del estado
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);
  const mode = useSelector(state => state.mode);

  const dispatch = useDispatch();

  const [offset, setOffset] = useState(0)
 
  useEffect(() => {
    fetchPokemons();
  }, [offset])
  
  const fetchPokemons = async () =>{
    const getPokemons = await getPokemon(offset);
    //este sería el payload que estamos enviando en mapDispatchTtoProps usando connect
    //setPokemons(getPokemons);

    //así lo usamos con hooks
    dispatch(getPokemonsWithDetails(getPokemons));
  } 
  

  return (
    <div className={`App ${mode}`}>
      <Navbar/>
     
      <Counter offset={offset} setOffset={setOffset}/>
      
      {loading ? <Spinner/> : error ? <p>{error}</p>:<List/>}
      
    </div>
  )
}

// esto es usando connect
//const mapStateToProps = (state) =>( {
//   pokemons: state.pokemons,
// })
// const mapDispatchTtoProps = (dispatch) =>  ({
//   setPokemons: (payload) => dispatch(setPokemonsActions(payload))
// });
// export default connect(mapStateToProps,mapDispatchTtoProps)(App)

//así lo hacemos con hooks
export default App;