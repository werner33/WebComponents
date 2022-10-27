
import SplitScreen from './layouts/splitScreen/SplitScreen';

import Navbar from './components/navbar/Navbar';
import EmailSubscriptionForm from './components/emailSubscriptionForm/EmailSupscriptionForm';
import ProductCards from './components/productCards/ProductCards';
import ArticleContainer from './components/articleContainer/ArticleContainer';

import './App.css';


function App() {
  
  return (
    <div className="App">
      <Navbar />
       <SplitScreen>
        <ProductCards title="Awesome Products" />
        <ArticleContainer />
      </SplitScreen>
      <EmailSubscriptionForm />
    </div>
  );
}

export default App;
