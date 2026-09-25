function AppNavbar(){
    return(
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container">
                <a href="#inicio" className="navbar-brand">VCM Psicolaboral</a>
                {/*Boton oculto*/}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuPrincipal">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="menuPrincipal">
                    <div className="navbar-nav ms-auto">
                        <a className="nav-link" href="#inicio">Inicio</a>
                        <a className="nav-link" href="#candidatos">Candidatos</a>
                        <a className="nav-link" href="#solicitudes">Solicitudes</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default AppNavbar;