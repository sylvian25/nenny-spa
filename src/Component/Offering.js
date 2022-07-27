import "../Services.css";
import Shook from '../Asset/ending.png';
 
const Offering = () => {
    return ( 
        <section className="section-2">
          <div>
              <div className="emoji">
              <button>Exclusive product</button>
              <h2>Sugar Scrubs</h2>
              <p>Sugar scrubs brighten tired, dull-looking skin to promote healthy, smooth, 
                  and flawless skin. Sugar scrubs also fight skin aging in a natural way. </p>
              <p>Ingredients: brown sugar, coconut, jojoba, olive, almond, or grapeseed.  </p>
              <p className="view"> view product</p> 
              </div>
            </div>
             <div>
             <img style={{
            width:"100%",
            height:"100%",
          }} className="shook" src={Shook}  alt=''></img> 
            </div> 
        </section>
     );
}
 
export default Offering;