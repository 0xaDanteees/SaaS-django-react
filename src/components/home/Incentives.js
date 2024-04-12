/* This example requires Tailwind CSS v2.0+ */
const incentives = [
    {
      name: 'Atención efectiva',
      imageSrc: 'https://res.cloudinary.com/dejepmxba/image/upload/v1682240952/teos/undraw_notify_re_65on_sahdi3.svg',
      description: "Los miembros de nuestro equipo tienen las habilidades y herramientas necesarias para analizar grandes conjuntos de datos y extraer información valiosa. Esto puede ayudar a tu empresa a tomar decisiones más informadas y basadas en datos concretos.",
    },
    {
      name: 'Soluciones efectivas',
      imageSrc: 'https://res.cloudinary.com/dejepmxba/image/upload/v1682240952/teos/undraw_success_factors_re_ce93_nfaekt.svg',
      description: "las soluciones de datos pueden ayudar a su empresa a comprender mejor a sus clientes y sus necesidades, lo que puede mejorar la satisfacción del cliente y la fidelidad a la marca.",
    },
    {
      name: 'Autenticidad de la información',
      imageSrc: 'https://res.cloudinary.com/dejepmxba/image/upload/v1682240952/teos/undraw_our_solution_re_8yk6_joqtzq.svg',
      description:
        "Nuestros datasets permiten a nuestros clientes tomar decisiones informadas basadas en datos precisos y confiables, lo que puede mejorar la eficiencia operativa, reducir costos y aumentar la rentabilidad",
    },
  ]
  
  export default function Incentives() {
    return (
      <div className="">
        <div className="max-w-7xl mx-auto sm:px-2 py-12 lg:px-4">
          <div className="max-w-2xl mx-auto px-4 lg:max-w-none">
            <div className="incentives-container max-w-3xl">
              <h2 className="gradient__text text-4xl font-gilroy-bold tracking-tight text-gray-600 dark:text-dark-txt">
                Your data, your wisdom
              </h2> 
              <p className="incentivemt-4 text-gray-500">
                En Teos Analytics estamos seguros que tu empresa jámas será la misma despues de contratar nuestros servicios. Ofrecemos las mejores soluciones B2B en el latinoamerica.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
              {incentives.map((incentive) => (
                <div key={incentive.name} className="sm:flex lg:block">
                  <div className="incentives__img sm:flex-shrink-0">
                    <img className="w-16 h-16" src={incentive.imageSrc} alt="" />
                  </div>
                  <div className="incentives-container mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                    <div/>
                    <h3 className="text-sm font-gilroy-medium text-gray-900 dark:text-white">{incentive.name}</h3>
                    <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  