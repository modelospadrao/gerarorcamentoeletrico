// ========================================
// CONFIGURAÇÃO DOS DADOS DO PRESTADOR
// ========================================
// Este arquivo contém os dados que serão carregados automaticamente no sistema
// Preencha as informações abaixo com seus dados

const dadosPrestador = {
    // Informações Básicas
    nome: "Aldenir Nascimento",
    cpfCnpj: "010.349.783-81",
    email: "aldenirnascimento@live.com",
    telefone: "(85) 98684-9656",
    telefoneSecundario: "(85) 3110-2300", // Opcional
    
    // Endereço Completo
    endereco: "Avenida Santos Dumont, 3131, Sala 821-A, Aldeota, Fortaleza-CE, CEP 60150-165",
    
    // Dados Adicionais (Opcional)
    inscricaoEstadual: "",
    inscricaoMunicipal: "",
    site: "",
    
    // Informações Bancárias para o rodapé (Opcional)
    banco: "Banco do Brasil",
    agencia: "1234-5",
    conta: "12345-6",
    chavePix: "(85) 98684-9656"
};

// ========================================
// CONFIGURAÇÃO DOS ARQUIVOS DE IMAGEM
// ========================================
// Coloque os arquivos de imagem na MESMA PASTA do HTML
// Os nomes abaixo devem corresponder aos arquivos

const arquivosImagem = {
    // Logo da empresa (aparece no cabeçalho superior direito)
    // Formatos aceitos: PNG, JPG, JPEG
    // Tamanho recomendado: 200x80 pixels
    logo: "logo.png",
    
    // QR Code do PIX (aparece na seção de pagamento)
    // Formatos aceitos: PNG, JPG, JPEG
    // Tamanho recomendado: 200x200 pixels
    qrcodePix: "qrcode-pix.png"
};

// ========================================
// CONFIGURAÇÕES DE GARANTIA PADRÃO
// ========================================
// Você pode definir textos padrão que aparecem automaticamente

const textosPadrao = {
    garantiaPeriodo: "12 meses",
    garantiaCobertura: "Defeitos de fabricação e instalação",
    garantiaCondicoes: `12 meses a partir da entrega dos produtos
Cobertura: defeito de fabricação
90 dias para serviços e instalações dos produtos conforme a especificação do fabricante
Para acionar a garantia entrar em contato: (85) 98684-9656`,
    
    meiosPagamento: "Transferência bancária, dinheiro, cartão de crédito, cartão de débito ou PIX",
    
    condicoesPagamento: `50% de entrada na aprovação + 50% no faturamento referente ao material
10% de entrada no início da obra para custear gastos de alimentação e locomoção
Sinal de 50% e o valor restante após a conclusão`
};

// ========================================
// NÃO ALTERE DAQUI PARA BAIXO
// ========================================
// Exporta os dados para serem usados pelo sistema
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { dadosPrestador, arquivosImagem, textosPadrao };
}
