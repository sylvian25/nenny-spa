import Navbar from '../src/Component/Navbar';
import Footer from '../src/Component/Footer';
import './Aboutus.css';
const Aboutus = () => {
    return ( 
        <section>
            <Navbar activePage={"Contactus"}/>
            <div className="about-top">
              <h1>ABOUT US</h1>
              <p>
                Here at Nen spa & saloon , is a unique channel of beauty and serenity in the heart of jos city, 
                we dare to care...we dare to share,our passion is renewing you to make it come with glory
                we are passionate about creating a beautiful enviroment for our client and professional staff .
                through our specialty ,we offer  finest services and products with sophisticated result 
                we are commited in building up relationships and providing and individual experience 
                where the whole person feels nutured an cared for .Always beauty remember is at your finger tips.
                </p>
                </div>
                <div className='about-bottom'>
                <h1>OUR MISSION</h1>
                 <p>
                    To be a sustainable leading position in providing world class beauty ,in providing skincare and wellness
                    services while adding value to life which is very important.In here we maintain a business atmosphere that 
                    has a reputation and give quality services which includes topnotch hair styling,mind refreshing and beauty 
                    operation so that our client will keep coming back for maintainance.we ensure that we go out of our way to make
                    our client feel valued and appreciated.
                 </p>
                </div>
            <Footer />
        </section>
     );
}
 
export default Aboutus;