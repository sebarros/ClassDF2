import AppNavbar from "./components/AppNavbar";
import DashboardPage from "./pages/DashboardPage";

//App representa la pantalla principal de nuestra aplicación de React
function App(){
  return(
<>    
    <AppNavbar/>
    <DashboardPage/>
    </>
  );
}
export default App;