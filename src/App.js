
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import { Flex } from '@chakra-ui/react';
import Navbar from './components/Navbar';



function App() {
  
  return (
    <div className="App">
    <Navbar/>
    <Flex>
    <Sidebar />
    <Home />
    </Flex>  
    </div>
  );
}

export default App;
