/**
 * IMPORTS
 */
import React from "react";

import { Dumbbell, Instagram, Facebook, Twitter, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Dumbbell className="w-8 h-8 text-green-500" />
              <span className="text-2xl text-white">FitMap</span>
            </div>
            <p className="text-white/60 mb-6">
              Conectando pessoas aos melhores personal trainers do Brasil.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/p/DWRksJ0joA9/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-green-500 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 hover:bg-green-500 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 hover:bg-green-500 rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white mb-4">Para Alunos</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-green-500 transition-colors"
                >
                  Encontrar Personal
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-green-500 transition-colors"
                >
                  Como Funciona
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-green-500 transition-colors"
                >
                  Planos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-green-500 transition-colors"
                >
                  Avaliações
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Para Personal Trainers</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-green-500 transition-colors"
                >
                  Cadastrar-se
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-green-500 transition-colors"
                >
                  Benefícios
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-green-500 transition-colors"
                >
                  Suporte
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-green-500 transition-colors"
                >
                  Central de Ajuda
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-green-500 transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-green-500 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-green-500 transition-colors"
                >
                  Carreiras
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-green-500 transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/10 pt-12 mb-12">
          <div className="max-w-md">
            <h3 className="text-white mb-2">Fique por dentro das novidades</h3>
            <p className="text-white/60 mb-4">
              Receba dicas de treino e novidades direto no seu e-mail
            </p>
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-green-500 transition-colors"
                />
              </div>
              <button className="bg-green-500 hover:bg-green-600 text-black px-6 rounded-lg transition-colors">
                Inscrever
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40">
            © 2026 FitMap. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a
              href="privacy-policy"
              className="text-white/40 hover:text-green-500 transition-colors"
            >
              Termos de Uso
            </a>
            <a
              href="terms-of-use"
              className="text-white/40 hover:text-green-500 transition-colors"
            >
              Privacidade
            </a>
            <a
              href="#"
              className="text-white/40 hover:text-green-500 transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/**
 * EXPORTS
 */
export { Footer };
