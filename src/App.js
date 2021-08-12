import Fullname from "./component/FullName";
import Address from "./component/Address";
import Profilpic from "./component/profil/ProfilePhoto";
import Style from "./App.css" ;
function App() {
  return (
    <div className="App">
      
      <Fullname />
      <Address/>
      <Profilpic/>
    </div>
  );
}

export default App;
