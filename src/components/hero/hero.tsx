/**
 * IMPORTS
 */
import React from "react";

import { Search, Dumbbell } from "lucide-react";

// components
import { Button } from "../ui/button";

// commons
import { ImageWithFallback } from "../../common/images/ImageWithFallback";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1643142313816-0d9c86c49f91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBmaXRuZXNzfGVufDF8fHx8MTc2MTg0MDU0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Personal Trainer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70"></div>
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Dumbbell className="w-8 h-8 text-green-500" />
            <span className="text-2xl text-white">FitMap</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-white/80 hover:text-green-500 transition-colors"
            >
              Benefícios
            </a>
            <a
              href="#how-it-works"
              className="text-white/80 hover:text-green-500 transition-colors"
            >
              Como Funciona
            </a>
            <a
              href="#testimonials"
              className="text-white/80 hover:text-green-500 transition-colors"
            >
              Depoimentos
            </a>
          </div>
          <Button
            variant="outline"
            className="border-green-500 text-black hover:bg-green-500 hover:text-black cursor-pointer"
            onClick={() =>
              window.open(
                "https://wa.me/5531982132421?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20FitMap.",
                "_blank"
              )
            }
          >
            Entre Contato
          </Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="max-w-3xl">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-green-500/20 border border-green-500 rounded-full text-green-500">
              Sua jornada fitness começa aqui
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl text-white mb-6">
            Encontre o <span className="text-green-500">Personal Trainer</span>{" "}
            Perfeito para Você
          </h1>
          <p className="text-xl text-white/70 mb-10 leading-relaxed">
            Conectamos você aos melhores profissionais de educação física da sua
            região. Transforme seu corpo, mude sua vida.
          </p>


          {/**VOLTAR QUANDO PUBLICAR APP NA LOJA */}
          {/* <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-black gap-2"
            >
              <Search className="w-5 h-5" />
              Encontrar Personal
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-black"
            >
              Sou Personal Trainer
            </Button>
          </div> */}

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/10">
            <div>
              <div className="text-4xl text-green-500 mb-2">500+</div>
              <div className="text-white/60">Personal Trainers</div>
            </div>
            <div>
              <div className="text-4xl text-green-500 mb-2">2k+</div>
              <div className="text-white/60">Alunos Ativos</div>
            </div>
            <div>
              <div className="text-4xl text-green-500 mb-2">50+</div>
              <div className="text-white/60">Cidades</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-green-500 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-green-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

/**
 * EXPORTS
 */
export { Hero };
