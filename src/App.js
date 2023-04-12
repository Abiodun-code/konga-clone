import BarShop from './components/body/BarShop';
import Categories from './components/body/Categories';
import KongaList from './components/body/KongaList';
import KongaListItem from './components/body/KongaListItem';
import KongaNote from './components/body/KongaNote';
import KongaShop from './components/body/KongaShop';
import KongaShopList from './components/body/KongaShopList';
import KongaSlider from './components/body/KongaSlider';
import LaptopBrand from './components/body/LaptopBrand';
import Mobile from './components/body/Mobile';
import ProCard from './components/body/ProCard';
import TopKonga from './components/body/TopKonga';
import Hello from './components/body/Hello';

function App() {
  return (
    <div>
      <TopKonga/>
      <KongaList/>
      <KongaListItem/>
      <Categories/>
      <KongaSlider />
      <KongaShop/>
      <KongaShopList/>
      <Mobile/>
      <BarShop/>
      <ProCard/>
      <LaptopBrand/>
      <KongaNote/>
      <Hello />
    </div>
  );
}

export default App;
