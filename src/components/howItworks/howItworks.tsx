/**
 * IMPORTS
 */
import React from "react";
import { Phone, UserCheck, Rocket } from "lucide-react";

// commons
import { ImageWithFallback } from "../../common/images/ImageWithFallback";
// @ts-ignore
import ImageMockUpFitmap from "../../assets/mock-up-fitmap.png"

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Aceite as permissões de acesso do app",
    description:
      "Confiramando as permisões vocês está pronto para encontrar os melhores personais proxímos de você.",
  },
  {
    number: "02",
    icon: UserCheck,
    title: "Compare e Escolha",
    description:
      "Veja perfis, especialidades, avaliações e escolha o profissional ideal.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Comece Seu Treino",
    description: "Entre em contato, agende sua aula e comece a transformação.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Como <span className="text-green-500">Funciona</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Em apenas 3 passos simples você encontra seu personal trainer
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-green-500/10 border border-green-500 rounded-2xl flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-green-500 group-hover:text-black transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-green-500/40 mb-2">{step.number}</div>
                    <h3 className="text-2xl text-white mb-2">{step.title}</h3>
                    <p className="text-white/60 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border-2 border-green-500/20">
              <ImageWithFallback
                src={ImageMockUpFitmap}
                alt="Workout Training"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-500 rounded-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-green-500/20 rounded-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * EXPORTS
 */
export { HowItWorks };
