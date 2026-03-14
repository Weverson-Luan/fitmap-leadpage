/**
 * IMPORTS
 */

import { FileCheck, AlertCircle, Scale, XCircle, UserCheck, CreditCard } from "lucide-react";

function TermsOfUse() {
  return (
    <div className="min-h-screen flex flex-col">


      <main className="flex-1 bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-black to-gray-900 text-white py-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <FileCheck className="w-16 h-16 text-[#00FF7F] mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#1e1e1e" }}>Termos de Uso</h1>
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
              <p className="text-gray-700 leading-relaxed mb-4">
                Bem-vindo ao Fitmap! Estes Termos de Uso ("Termos") regem o acesso e uso da plataforma Fitmap, que conecta alunos e personal trainers. Ao acessar ou usar nossos serviços, você concorda em estar vinculado a estes Termos.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Por favor, leia estes Termos cuidadosamente antes de utilizar a plataforma. Se você não concordar com qualquer parte destes Termos, não utilize nossos serviços.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#00FF7F] rounded-lg flex items-center justify-center">
                  <Scale className="w-5 h-5 text-black" />
                </div>
                <h2 className="text-2xl font-bold">1. Aceitação dos Termos</h2>
              </div>

              <p className="text-gray-700 mb-4">
                Ao criar uma conta ou utilizar o Fitmap, você declara que:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Tem pelo menos 18 anos de idade</li>
                <li>Possui capacidade legal para celebrar contratos</li>
                <li>Leu, entendeu e concorda com estes Termos</li>
                <li>Concorda em cumprir todas as leis aplicáveis</li>
                <li>Fornecerá informações verdadeiras e precisas</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#00FF7F] rounded-lg flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-black" />
                </div>
                <h2 className="text-2xl font-bold">2. Descrição do Serviço</h2>
              </div>

              <p className="text-gray-700 mb-4">
                O Fitmap é uma plataforma digital que facilita a conexão entre:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li><strong>Alunos:</strong> Pessoas que buscam serviços de personal training</li>
                <li><strong>Personal Trainers:</strong> Profissionais certificados que oferecem serviços de treinamento físico</li>
              </ul>

              <p className="text-gray-700 mb-4">
                O Fitmap atua como intermediário, fornecendo:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Plataforma para busca e descoberta de profissionais</li>
                <li>Sistema de perfis e avaliações</li>
                <li>Ferramentas de comunicação entre usuários</li>
                <li>Processamento de pagamentos (quando aplicável)</li>
                <li>Sistema de geolocalização para facilitar conexões locais</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">3. Cadastro e Conta</h2>

              <h3 className="font-bold text-lg mb-3">3.1 Criação de Conta</h3>
              <p className="text-gray-700 mb-4">
                Para utilizar nossos serviços, você deve criar uma conta fornecendo informações precisas e completas. Você é responsável por:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>Manter a confidencialidade de suas credenciais de acesso</li>
                <li>Todas as atividades realizadas em sua conta</li>
                <li>Notificar-nos imediatamente sobre qualquer uso não autorizado</li>
                <li>Manter suas informações de perfil atualizadas</li>
              </ul>

              <h3 className="font-bold text-lg mb-3">3.2 Requisitos para Personal Trainers</h3>
              <p className="text-gray-700 mb-4">
                Personal trainers devem fornecer:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Registro profissional válido (CREF)</li>
                <li>Documentos de identificação</li>
                <li>Certificações e qualificações relevantes</li>
                <li>Informações bancárias para recebimento de pagamentos</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#00FF7F] rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-black" />
                </div>
                <h2 className="text-2xl font-bold">4. Responsabilidades dos Usuários</h2>
              </div>

              <h3 className="font-bold text-lg mb-3">4.1 Conduta Geral</h3>
              <p className="text-gray-700 mb-4">Você concorda em NÃO:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>Fornecer informações falsas ou enganosas</li>
                <li>Violar direitos de propriedade intelectual</li>
                <li>Usar a plataforma para atividades ilegais</li>
                <li>Assediar, intimidar ou prejudicar outros usuários</li>
                <li>Enviar spam ou conteúdo não solicitado</li>
                <li>Tentar acessar contas de outros usuários</li>
                <li>Interferir no funcionamento da plataforma</li>
                <li>Fazer scraping ou extrair dados automaticamente</li>
              </ul>

              <h3 className="font-bold text-lg mb-3">4.2 Responsabilidades dos Personal Trainers</h3>
              <p className="text-gray-700 mb-4">Personal trainers são responsáveis por:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Fornecer serviços profissionais e de qualidade</li>
                <li>Manter certificações e registros profissionais atualizados</li>
                <li>Respeitar limitações físicas e médicas dos alunos</li>
                <li>Manter seguro de responsabilidade profissional</li>
                <li>Cumprir com todas as regulamentações aplicáveis</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#00FF7F] rounded-lg flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-black" />
                </div>
                <h2 className="text-2xl font-bold">5. Pagamentos e Taxas</h2>
              </div>

              <h3 className="font-bold text-lg mb-3">5.1 Processamento de Pagamentos</h3>
              <p className="text-gray-700 mb-4">
                O Fitmap pode processar pagamentos entre alunos e personal trainers. Os pagamentos estão sujeitos a:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>Taxa de serviço da plataforma (conforme tabela vigente)</li>
                <li>Taxas de processamento de pagamento</li>
                <li>Impostos aplicáveis</li>
              </ul>

              <h3 className="font-bold text-lg mb-3">5.2 Política de Reembolso</h3>
              <p className="text-gray-700 mb-4">
                Reembolsos podem ser solicitados de acordo com as seguintes condições:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Cancelamento com até 24 horas de antecedência: reembolso integral</li>
                <li>Cancelamento com menos de 24 horas: sem reembolso</li>
                <li>Problemas com o serviço: análise caso a caso</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">6. Propriedade Intelectual</h2>
              <p className="text-gray-700 mb-4">
                Todo o conteúdo da plataforma Fitmap, incluindo mas não limitado a textos, gráficos, logos, ícones, imagens, áudio, software e código, é de propriedade exclusiva do Fitmap ou de seus licenciadores e está protegido por leis de direitos autorais e propriedade intelectual.
              </p>
              <p className="text-gray-700">
                Você recebe uma licença limitada, não exclusiva e intransferível para acessar e usar a plataforma para fins pessoais e não comerciais.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">7. Limitação de Responsabilidade</h2>
              <p className="text-gray-700 mb-4">
                O Fitmap atua apenas como intermediário. Não somos responsáveis por:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>Qualidade dos serviços prestados pelos personal trainers</li>
                <li>Lesões ou danos decorrentes de atividades físicas</li>
                <li>Disputas entre alunos e personal trainers</li>
                <li>Perda de dados ou interrupções do serviço</li>
                <li>Conteúdo gerado por usuários</li>
                <li>Decisões tomadas com base nas informações da plataforma</li>
              </ul>

              <p className="text-gray-700 font-bold">
                IMPORTANTE: Consulte um médico antes de iniciar qualquer programa de exercícios. O Fitmap não fornece aconselhamento médico.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">8. Indenização</h2>
              <p className="text-gray-700">
                Você concorda em indenizar e isentar o Fitmap, seus diretores, funcionários e parceiros de quaisquer reivindicações, perdas, responsabilidades, danos, custos e despesas (incluindo honorários advocatícios) decorrentes de:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4 ml-4">
                <li>Seu uso da plataforma</li>
                <li>Violação destes Termos</li>
                <li>Violação de direitos de terceiros</li>
                <li>Conteúdo que você publicar na plataforma</li>
              </ul>
            </div>

            {/* Section 9 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#00FF7F] rounded-lg flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-black" />
                </div>
                <h2 className="text-2xl font-bold">9. Suspensão e Encerramento</h2>
              </div>

              <p className="text-gray-700 mb-4">
                Reservamo-nos o direito de suspender ou encerrar sua conta imediatamente, sem aviso prévio, se:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>Você violar estes Termos</li>
                <li>Houver atividade suspeita ou fraudulenta</li>
                <li>Recebermos reclamações legítimas de outros usuários</li>
                <li>For necessário para proteção da plataforma ou usuários</li>
                <li>Você solicitar o encerramento da conta</li>
              </ul>

              <p className="text-gray-700">
                Você pode encerrar sua conta a qualquer momento através das configurações da plataforma ou entrando em contato conosco.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">10. Modificações dos Termos</h2>
              <p className="text-gray-700">
                Podemos modificar estes Termos a qualquer momento. Notificaremos você sobre mudanças significativas através da plataforma ou por e-mail. O uso continuado da plataforma após as alterações constitui aceitação dos novos Termos.
              </p>
            </div>

            {/* Section 11 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">11. Lei Aplicável e Jurisdição</h2>
              <p className="text-gray-700">
                Estes Termos são regidos pelas leis da República Federativa do Brasil. Qualquer disputa será submetida ao foro da comarca de [Cidade], com exclusão de qualquer outro, por mais privilegiado que seja.
              </p>
            </div>

            {/* Section 12 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">12. Disposições Gerais</h2>

              <h3 className="font-bold text-lg mb-3">12.1 Integralidade</h3>
              <p className="text-gray-700 mb-4">
                Estes Termos constituem o acordo integral entre você e o Fitmap e substituem todos os acordos anteriores.
              </p>

              <h3 className="font-bold text-lg mb-3">12.2 Divisibilidade</h3>
              <p className="text-gray-700 mb-4">
                Se qualquer disposição destes Termos for considerada inválida, as demais disposições permanecerão em pleno vigor.
              </p>

              <h3 className="font-bold text-lg mb-3">12.3 Renúncia</h3>
              <p className="text-gray-700">
                A falha em exercer qualquer direito não constitui renúncia a esse direito.
              </p>
            </div>

            {/* Section 13 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">13. Contato</h2>
              <p className="text-gray-700 mb-4">
                Para dúvidas sobre estes Termos de Uso, entre em contato:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700"><strong>Fitmap</strong></p>
                <p className="text-gray-700">E-mail: wltech2022@gmai.com</p>
                <p className="text-gray-700">E-mail de suporte: fitmap2026@gmail.com</p>
              </div>
            </div>

            {/* Footer Notice */}
            <div className="border-t pt-8 mt-12">
              <p className="text-gray-600 text-sm text-center">
                Ao utilizar o Fitmap, você reconhece ter lido, compreendido e concordado com estes Termos de Uso e com nossa Política de Privacidade.
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
export { TermsOfUse }