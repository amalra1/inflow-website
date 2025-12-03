export type SolutionDetail = {
  id: string;
  title: string;
  description: string[];
  detailsList: string[];
  imageUrl: string;
  conclusion: string;
};

export const detailedSolutions: SolutionDetail[] = [
  {
    id: 'APIS',
    title: "API's",
    description: [
      'Transforme a comunicação entre sistemas e potencialize seus negócios com nossas soluções de APIs. Desenvolvemos e integramos APIs personalizadas e microsserviços que conectam seus sistemas internos e plataformas externas de forma segura, rápida e escalável.',
    ],
    detailsList: [
      'Criação e integração de links e gateways de pagamento: facilite transações online de forma confiável e eficiente.',
      'Desenvolvimento de APIs e microsserviços sob medida: automatize processos, melhore a performance e garanta integração total entre seus sistemas.',
      'Integração com APIs terceiras (pagamentos, ERPs, CRMs): conecte suas ferramentas favoritas e otimize seu fluxo de trabalho sem complicações.',
      'Conecte suas ferramentas favoritas e otimize seu fluxo de trabalho sem complicações.',
    ],
    imageUrl: '/solutions-section-icons/big-icons/apis.svg',
    conclusion:
      'Com nossas soluções, seu negócio ganha agilidade, segurança e inovação, entregando experiências mais completas para seus clientes e operações mais inteligentes para sua equipe.',
  },
];
