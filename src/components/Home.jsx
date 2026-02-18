import Header from "./Header";
import CardPizza from "./CardPizza";
import pizzaBanner from "../assets/images/banner.jpg";
import { pizzas } from "../pizzas";
const Home = () => {

    return (
        <>

            <Header image={pizzaBanner} />
            <div className="container my-5">

                <div className="row g-4"> 

{pizzas.map(el => (

  <div className="col-12 col-md-4" key={el.id}> 
      <CardPizza
          name={el.name}
          price={el.price}
          ingredients={el.ingredients}
          img={el.img}
          descripcion={el.desc}
      />
  </div>
))}

                </div>



            </div>



        </>
    )
}

export default Home;