
import Sidebar from './Sidebar';
import NavBar from './NavBar';
import AllSeedbarPages from './AllSeedbarPages';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthChecker from '../AuthChecker';
export default function AdminDashboard() {

  return (
    <div className='d-flex'>
      <AuthChecker userType={'admin'}/>
        <div className='w-auto'>
            <Sidebar/>
        </div>
        
        <div className='col'>
            <NavBar/>
            <div>
        <AllSeedbarPages/>

        </div>
            
        </div>
        
        
 
          
        

    </div>
  )
}
