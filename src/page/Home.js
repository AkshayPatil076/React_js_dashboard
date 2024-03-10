import './css/Home.css'
import Nav from './Header/Nav';
import Navbar from './Header/Navbar';
// import { DOM_KEY_LOCATION } from '@testing-library/user-event/dist/keyboard/types';
// import { Display } from 'react-bootstrap-icons';

function Home(){


const arr = [
  {
    id: 1 ,
    title : 'Product List',
    bios: 'You can see the list of product ...',
    color: 'pink'
  },
  {
    id: 2 ,
    title : 'Supplier list',
    bios: 'You can see the list of Supplier ...',
    color: 'rgb(255, 207, 255)'
  },
  {
    id: 3,
    title : 'Account List',
    bios: 'You can see the list of Account ...',
    color: ' rgb(172, 237, 255)'
  },
  {
    id: 4,
    title : 'Add Supplier ',
    bios: 'You can add the  Supplier ...',
    color: ' rgb(255, 208, 120)'
  }
];
 
    return(
        <>
  
      {/* <Nav /> */}
          <div className='medhed'>
            {/* <Navbar /> */}
            <div className='home'>
              <div className='topbox'>
                <ul className='topboxdes'>
              
                    {
                      arr.map(name=>( //here we are using list for the single degine to print the multipale times .
                      
                         
                          <li className='boxdemo' key={name.id}>
                          <ul className="fsinfo">
                          <li style={{ backgroundColor:name.color }} id='iconfs'></li>

                          < li className="infofs" key={name.title}>{name.title}</li>
                         
                         <li className='infofs cl' key={name.bios}>
                         {name.bios}
                         </li>
                         <li >
                          <button className=' cl1'>
                         Submit
                         </button>
                          </li>
                         </ul>
                          </li>
                        
                      ))
                    }

                    
                </ul>
              </div>
              
            
            </div>
            
          </div>
          
         
      
        </>
    );
}

export default Home;