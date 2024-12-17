import { useState } from 'react'


function App() {
  const [post, setPost] = useState([])


  const [newTitle, setNewTitle] = useState("ciao")


  const handleSubmit = (event) => {
    event.preventDefault();

    //creo l'oggetto del nuovo post
    let newPost = [newTitle];

    //aggiorno il post, aggiungendo il nuovo post
    setPost ([...post, newPost]);

    //ripulisco i campi
    setNewTitle("");
    
  }

  const elimina = (cancellaTitolo) =>{
    const cancellato =  post.filter((curtitle) =>{curtitle !== cancellaTitolo})
    console.log(cancellato);
    
    setPost(cancellato);
  }



  return (
    <>

      <div className='container'>
        <form action="" onSubmit={handleSubmit}>
          <h1 className='text-center mt-3'>Blog form</h1>
          <div className="input-group mt-5 ">
            <span className="input-group-text" htmlFor="titolo">titolo</span>
            <input
              value={newTitle}
              onChange={(event) => { setNewTitle(event.target.value) }}
              type="text"
              className="form-control"
              id='titolo' />
          </div>

          <h2>prova : {newTitle}</h2>
          <button type='submit' className='btn btn-primary'>invia</button>

          
        </form>


        <br />
        <section>
        <h2>lista</h2>
        <ul>
        {post.map((curtitle , index) => {

          return(<li key={index}>{curtitle}  
          <button onClick={() =>{elimina(curtitle)}}>🗑️</button></li>)
        })}
        </ul>
      </section>

      </div>
    </>
  )
}

export default App
