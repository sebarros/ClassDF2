import AppNavbar from "./components/AppNavbar";

//App representa la pantalla principal de nuestra aplicación de React
function App(){
  return(
<>    
    <AppNavbar/>
    <main className="container">
      <section id="inicio" className="mb-4">
        <p className="text-secondary mb-1">Proyecto VCM Full Stack II</p>
        <h1 className="h3">Gestión de evaluaciones Psicolaborales</h1>
        <p className="text-secondary">Resumen general de l proceso de evaluación</p>
      </section>

      <section className="row g-3 mb-5">
        <div className="col-6 col-lg-3">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="h3">12</h2>
              <p className="mb-0">Candidatos</p>
            </div>
          </div>
        </div>
        <div className="col-6 col-lg-3">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="h3">12</h2>
              <p className="mb-0">Pendientes</p>
            </div>
          </div>
        </div>
        <div className="col-6 col-lg-3">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="h3">12</h2>
              <p className="mb-0">En proceso</p>
            </div>
          </div>
        </div>
        <div className="col-6 col-lg-3">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="h3">12</h2>
              <p className="mb-0">Finalizados</p>
            </div>
          </div>
        </div>
      </section>

      <section className="row g-4">
        <div id="candidatos" className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="h5">Candidatos</h2>
              <p>Consultar y registrar candidatos</p>
              <button className="btn btn-primary">Ver candidatos</button>
            </div>
          </div>
        </div>
        <div id="solicitudes" className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="h5">Solicitudes</h2>
              <p>Gestionar solicitudes de evaluación</p>
              <button className="btn btn-outline-primary">Ver solicitudes</button>
            </div>
          </div>
        </div>
      </section>

    </main>
    </>
  );

}

export default App;