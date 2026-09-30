import IndicadorCard from "../components/IndicadorCard";
import CandidatoCard from "../components/CandidatoCard";

function DashboardPage(){
    const indicadores = [
        {id: 1, valor: 12, titulo: "Candidatos"},
        {id: 2, valor: 5, titulo: "Pendientes"},
        {id: 3, valor: 4, titulo: "En proceso"},
        {id: 4, valor: 3, titulo: "Finalizado"}
    ];

    const candidatos = [
        {id: 1, nombre: "Diego Diaz", cargo: "Analista Informático", estado: "Pendiente"},
        {id: 2, nombre: "Felipe Barra", cargo: "Analista de Datos", estado: "En proceso"},
        {id: 3, nombre: "Zonjgie Wu", cargo: "CEO AquaChile", estado: "Finalizado"}
    ];

    return(
        <main className="container py-4">
            <section className="mb-4">
                <p className="text-secondary mb-1">Proyecto VCM FullStack II</p>
                <h1 className="h3">Dashboard</h1>
            </section>

            <section className="row g-3 mb-5">
                {indicadores.map((indicador)=>(
                    <IndicadorCard
                        key={indicador.id}
                        valor={indicador.valor}
                        titulo={indicador.titulo}
                    />
                ))}
            </section>

            <section>
                <h2 className="h4 mb-3">Candidatos recientes</h2>
                <div className="row g-3">
                    {candidatos.map((candidato)=>(
                        <CandidatoCard
                        key={candidato.id}
                        nombre={candidato.nombre}
                        cargo={candidato.cargo}
                        estado={candidato.estado}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}
export default DashboardPage;