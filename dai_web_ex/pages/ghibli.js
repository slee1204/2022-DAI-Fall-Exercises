import { motion } from 'framer-motion';
import { useState } from 'react';
import axios from 'axios';
import { Card, Icon, Image } from 'semantic-ui-react'




export default function Ghibli(){

  const [numMovies, setNumMovies] = useState(0);
  const [movies, setMovies] = useState([]);
  const [sel, setSel] = useState(0);
 
  const GetGhibliMovies = async () => {
    // location.href = "https://ghibliapi.herokuapp.com/films"
    //await means please wait for the line to finish before moving on the the next line
    const results = await axios.get("https://ghibliapi.herokuapp.com/films");

    console.log(results);
    setNumMovies(results.data.length);
    setMovies([
        ...results.data
    ])

    // axios.get(...).then(results=>{})
    numMovies = 0
  }

  return (
  
  
    <div>
      <button onClick={()=>GetGhibliMovies()}>Get All Ghibli Movies</button>
      <h3>There are # {numMovies} movies from the DB</h3>
      {
        numMovies > 0 && movies.map(
            (o,i)=>(
                    <motion.div
                        onClick={()=>setSel(i)}
                        style={{
                            position: "absolute",
                            left: 0,
                            top: i*50,
                            zIndex: i

                        }}
                        initial={{
                            opacity: 0,
                            x: -1000
                        }}
                        animate={{
                            opacity: 1,
                            x: sel === i ? 100 : 0
                        }}
                        transition={{
                            duration: 0.5,
                            // delay: sel === i ? 0 : 0.5*i
                        }}

                    >
                        <Card>
                            <Image src={o.image} wrapped ui={false} />
                            <Card.Content>
                            <Card.Header>{o.title}</Card.Header>
                            <Card.Meta>
                                <span className='date'>{o.original_title}</span>
                            </Card.Meta>
                            <Card.Description>
                            {o.description}
                            </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                            <a>
                                <Icon name='user' />
                                {o.producer} / {o.director}
                            </a>
                            </Card.Content>
                        </Card>
                    </motion.div>
                    )
                    )
        }
    </div>
    )
}