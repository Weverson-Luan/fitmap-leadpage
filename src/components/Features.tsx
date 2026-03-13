import React from "react"

import { Target, MapPin, Calendar, Award, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: 'Encontre Perto de Você',
    description: 'Personal trainers qualificados na sua região, prontos para te atender.'
  },
  {
    icon: Target,
    title: 'Treinos Personalizados',
    description: 'Planos de treino adaptados aos seus objetivos e necessidades.'
  },
  {
    icon: Calendar,
    title: 'Flexibilidade de Horários',
    description: 'Agende seus treinos nos horários que melhor se encaixam na sua rotina.'
  },
  {
    icon: Award,
    title: 'Profissionais Certificados',
    description: 'Todos os personal trainers são verificados e certificados.'
  },
  {
    icon: Shield,
    title: 'Segurança Garantida',
    description: 'Avaliações reais de alunos e profissionais verificados.'
  },
  {
    icon: Zap,
    title: 'Resultados Rápidos',
    description: 'Acompanhamento profissional para alcançar suas metas mais rápido.'
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Por que escolher o <span className="text-green-500">FitMap</span>?
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            A plataforma completa que conecta você ao personal trainer ideal
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-black border border-green-500/20 rounded-2xl p-8 hover:border-green-500/50 transition-all hover:transform hover:scale-105 duration-300"
              >
                <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-green-500" />
                </div>
                <h3 className="text-xl text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
