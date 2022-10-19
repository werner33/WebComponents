
import EmailSubscriptionForm from './components/emailSubscriptionForm/EmailSupscriptionForm';
import ProductCards from './components/productCards/ProductCards';

import './App.css';



function App() {
  
  return (
    <div className="App">
      <ProductCards title="Awesome Products" />
      <EmailSubscriptionForm />
    </div>
  );
}

export default App;
