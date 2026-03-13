/**
 * IMPORTS
 */
import React from "react";

// components
import { Button } from "../ui/button";

// commons
import { ImageWithFallback } from "../../common/images/ImageWithFallback";
import { DownloadAppModal } from "../modal-alert";


function CTA() {
  return (
    <>

      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1605296867724-fa87a8ef53fd"
            alt="Fitness Motivation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl text-white mb-6">
            Pronto para <span className="text-green-500">transformar</span> seu
            corpo?
          </h2>

          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Junte-se a milhares de pessoas que já encontraram seus personal
            trainers no FitMap. Sua melhor versão está a um clique de distância.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-2">

            {/* DOWNLOAD ANDROID */}
            <DownloadAppModal />

            <Button
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-black px-8"
              onClick={() =>
                window.open(
                  "https://wa.me/5531982132421?text=Olá!%20Sou%20Personal%20Trainer%20e%20tenho%20interesse%20em%20divulgar%20meus%20treinos%20no%20FitMap.%20Poderia%20me%20explicar%20como%20funciona?",
                  "_blank"
                )
              }
            >
              Cadastrar como Personal
            </Button>

          </div>

          <p className="text-white/40 mt-8">
            Sem taxas de cadastro • Cancele quando quiser
          </p>
        </div>

      </section>
    </>


  );
}

export { CTA };