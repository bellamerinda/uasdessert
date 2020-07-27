import Navbar from '../component/navbar';
import Layout from '../layouts/layout';

function Landingpage() {
    return(
      <Layout>
        <Navbar />
        <div className="container">
        <img src="images/awal.jpg" width="50" /> 
        </div>
      </Layout>
    );
  }

export default Landingpage;

