
/**
 * IMPORTS
 */

import React from "react";
import { Shield, Lock, Eye, FileText, Users, Bell } from "lucide-react";

function PrivacyPolicy() {
  return (
    <div className="flex flex-col">
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-black to-gray-900 text-white py-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 text-[#00FF7F] mx-auto mb-4" />
            <h1 className="text-2x md:text-5xl font-bold mb-4" style={{ color: "#1e1e1e" }}>Política de Privacidade</h1>
            <p className="text-gray-300 text-lg" style={{ color: "#1e1e1e" }}>
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 px-6 md:px-12">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">

            {/* Introduction */}
            <div className="mb-12">
              <p className="text-2xl font-bold mb-4 text-gray-700 leading-relaxed mb-4">
                A Fitmap ("nós", "nosso" ou "nossa") está comprometida em proteger a privacidade e segurança dos dados pessoais de nossos usuários. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais quando você utiliza nossa plataforma.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Ao utilizar o Fitmap, você concorda com as práticas descritas nesta política. Se você não concordar com qualquer parte desta política, por favor, não utilize nossos serviços.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#00FF7F] rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-black" />
                </div>
                <h2 className="text-2xl font-bold">1. Informações que Coletamos</h2>
              </div>

              <h3 className="font-bold text-lg mb-3 ml-13">1.1 Informações Fornecidas por Você</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-13">
                <li>Nome completo, e-mail e telefone</li>
                <li>Dados de cadastro (CPF/CNPJ para personal trainers)</li>
                <li>Localização geográfica (quando você autoriza)</li>
                <li>Informações de perfil (foto, biografia, especialidades)</li>
                <li>Histórico de comunicações na plataforma</li>
              </ul>

              <h3 className="font-bold text-lg mb-3 ml-13">1.2 Informações Coletadas Automaticamente</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-13">
                <li>Endereço IP e informações do dispositivo</li>
                <li>Dados de navegação e uso da plataforma</li>
                <li>Cookies e tecnologias semelhantes</li>
                <li>Logs de acesso e atividades</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#00FF7F] rounded-lg flex items-center justify-center">
                  <Eye className="w-5 h-5 text-black" />
                </div>
                <h2 className="text-2xl font-bold">2. Como Utilizamos suas Informações</h2>
              </div>

              <p className="text-gray-700 mb-4">Utilizamos suas informações pessoais para:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Fornecer, manter e melhorar nossos serviços</li>
                <li>Conectar alunos e personal trainers</li>
                <li>Processar transações e pagamentos</li>
                <li>Enviar notificações e comunicações importantes</li>
                <li>Personalizar sua experiência na plataforma</li>
                <li>Prevenir fraudes e garantir a segurança</li>
                <li>Cumprir obrigações legais e regulatórias</li>
                <li>Realizar análises e pesquisas para melhorias</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#00FF7F] rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-black" />
                </div>
                <h2 className="text-2xl font-bold">3. Compartilhamento de Informações</h2>
              </div>

              <p className="text-gray-700 mb-4">Podemos compartilhar suas informações nas seguintes situações:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Com outros usuários:</strong> Informações de perfil são visíveis para facilitar conexões</li>
                <li><strong>Com prestadores de serviços:</strong> Empresas terceiras que nos auxiliam (hospedagem, pagamentos, análise)</li>
                <li><strong>Por exigência legal:</strong> Quando necessário para cumprir leis, regulamentos ou ordens judiciais</li>
                <li><strong>Proteção de direitos:</strong> Para proteger nossos direitos, privacidade, segurança ou propriedade</li>
                <li><strong>Com seu consentimento:</strong> Em outras situações mediante sua autorização expressa</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#00FF7F] rounded-lg flex items-center justify-center">
                  <Lock className="w-5 h-5 text-black" />
                </div>
                <h2 className="text-2xl font-bold">4. Segurança dos Dados</h2>
              </div>

              <p className="text-gray-700 mb-4">
                Implementamos medidas técnicas e organizacionais apropriadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Criptografia de dados em trânsito e em repouso</li>
                <li>Controles de acesso rigorosos</li>
                <li>Monitoramento contínuo de segurança</li>
                <li>Auditorias regulares de segurança</li>
                <li>Treinamento de equipe em proteção de dados</li>
              </ul>
            </div>

            {/* Section 05 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                5. Pagamentos
              </h2>

              <p className="text-gray-700 mb-4">
                Os pagamentos realizados dentro do aplicativo FitMap são
                processados pela Google Play Store, operada pela Google LLC.
              </p>

              <p className="text-gray-700 mb-4">
                Não armazenamos informações completas de cartões de crédito
                ou dados financeiros sensíveis em nossos servidores.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg text-gray-700">
                Ao realizar uma compra no aplicativo, você também estará
                sujeito aos Termos de Serviço e à Política de Privacidade
                da Google.
              </div>

              <p className="mt-4 text-sm text-gray-600">
                Mais informações:
                <br />

                <a
                  href="https://payments.google.com/payments/apis-secure/get_legal_document?ldo=0&ldt=privacynotice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Política de Privacidade do Google Payments
                </a>
              </p>
            </div>




            {/* Section 06 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#00FF7F] rounded-lg flex items-center justify-center">
                  <Bell className="w-5 h-5 text-black" />
                </div>
                <h2 className="text-2xl font-bold">6. Seus Direitos (LGPD)</h2>
              </div>

              <p className="text-gray-700 mb-4">
                De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem os seguintes direitos:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Acesso:</strong> Solicitar confirmação e acesso aos seus dados pessoais</li>
                <li><strong>Correção:</strong> Corrigir dados incompletos, inexatos ou desatualizados</li>
                <li><strong>Anonimização ou exclusão:</strong> Solicitar anonimização ou eliminação de dados desnecessários</li>
                <li><strong>Portabilidade:</strong> Solicitar a portabilidade dos dados a outro fornecedor</li>
                <li><strong>Revogação do consentimento:</strong> Revogar o consentimento a qualquer momento</li>
                <li><strong>Oposição:</strong> Se opor ao tratamento de dados em determinadas situações</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Para exercer seus direitos, entre em contato através do e-mail: <strong>privacidade@fitmap.com.br</strong>
              </p>
            </div>

            {/* Section 07 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">7. Cookies e Tecnologias Semelhantes</h2>
              <p className="text-gray-700 mb-4">
                Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência, analisar o uso da plataforma e personalizar conteúdo. Você pode controlar o uso de cookies através das configurações do seu navegador.
              </p>
            </div>

            {/* Section 08 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">8. Retenção de Dados</h2>
              <p className="text-gray-700">
                Mantemos suas informações pessoais pelo tempo necessário para cumprir os propósitos descritos nesta política, a menos que um período de retenção mais longo seja exigido ou permitido por lei.
              </p>
            </div>

            {/* Section 09 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">9. Menores de Idade</h2>
              <p className="text-gray-700">
                Nossos serviços são destinados a pessoas maiores de 18 anos. Não coletamos intencionalmente informações de menores de idade. Se você acredita que coletamos dados de um menor, entre em contato conosco imediatamente.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">10. Alterações nesta Política</h2>
              <p className="text-gray-700">
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre alterações significativas através da plataforma ou por e-mail. Recomendamos que você revise esta política regularmente.
              </p>
            </div>




            {/* Section 11 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">11. Contato</h2>
              <p className="text-gray-700 mb-4">
                Se você tiver dúvidas sobre esta Política de Privacidade ou sobre o tratamento de seus dados pessoais, entre em contato:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700"><strong>Fitmap</strong></p>
                <p className="text-gray-700">E-mail: wltech2022@gmail.com</p>
                <p className="text-gray-700">E-mail do Encarregado de Dados (DPO): dpo@fitmap.com.br</p>
              </div>
            </div>

            {/* Footer Notice */}
            <div className="border-t pt-8 mt-12">
              <p className="text-gray-600 text-sm text-center">
                Esta Política de Privacidade está em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) e outras legislações aplicáveis.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}


/**
 * EXPORTS
 */
export {
  PrivacyPolicy
}