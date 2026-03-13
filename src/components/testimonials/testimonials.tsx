/**
 * IMPORTS
 */
import React from "react";
import { Star } from "lucide-react";
// commons
import { ImageWithFallback } from "../../common/images/ImageWithFallback";

const testimonials = [
  {
    name: "Marina Silva",
    role: "Aluna",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    content:
      "Encontrei minha personal trainer ideal em menos de 1 dia! Já perdi 8kg em 3 meses e me sinto muito mais confiante.",
    rating: 5,
  },
  {
    name: "Carlos Eduardo",
    role: "Aluno",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    content:
      "A plataforma é super fácil de usar. Consegui comparar vários profissionais e escolher o que mais se encaixava no meu perfil.",
    rating: 2,
  },
  {
    name: "Juliana Santos",
    role: "Personal Trainer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    content:
      "Como personal trainer, o FitMap me ajudou a conseguir mais alunos e organizar melhor minha agenda. Recomendo!",
    rating: 4,
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            O que dizem nossos <span className="text-green-500">usuários</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Histórias reais de pessoas que transformaram suas vidas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-black border border-green-500/20 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-green-500 text-green-500"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-white/80 mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <ImageWithFallback
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-green-500"
                />
                <div>
                  <div className="text-white">{testimonial.name}</div>
                  <div className="text-white/40">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * EXPORTS
 */
export { Testimonials };
