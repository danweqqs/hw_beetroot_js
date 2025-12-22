import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import MapBlock from "./components/MapBlock/MapBlock";
import BucketList from "./components/BucketList/BucketList";
import CountrySlider from "./components/CountrySlider/CountrySlider";
import Footer from "./components/Footer/Footer";
import { Toaster } from 'react-hot-toast';
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Profile />
      <MapBlock />
      <CountrySlider />
      <BucketList />
      <Footer />

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#333',
            color: '#fff',
          },
        }}
      />
    </div>
  );
}

export default App;