# 📋 GUIA DE INSTALAÇÃO E USO - Sistema de Orçamento Elétrico

## 📦 ARQUIVOS DO SISTEMA

Você receberá 2 arquivos principais:

1. **orcamento-eletrico-completo.html** - Sistema principal
2. **config.js** - Arquivo de configuração com seus dados

## 🗂️ ESTRUTURA DE ARQUIVOS

Coloque TODOS os arquivos na **MESMA PASTA**:

```
📁 minha-pasta-orcamentos/
  ├── orcamento-eletrico-completo.html  ⚡ Sistema principal
  ├── config.js                          ⚙️ Seus dados
  ├── logo.png                           🖼️ Sua logo
  └── qrcode-pix.png                     📱 QR Code PIX
```

## 🎯 PASSO A PASSO DA INSTALAÇÃO

### PASSO 1: Edite o arquivo config.js

Abra o arquivo **config.js** em qualquer editor de texto (Bloco de Notas, Notepad++, VS Code) e preencha seus dados:

```javascript
const dadosPrestador = {
    nome: "SEU NOME AQUI",
    cpfCnpj: "000.000.000-00",
    email: "seu@email.com",
    telefone: "(85) 98765-4321",
    endereco: "Seu endereço completo"
};
```

### PASSO 2: Prepare suas imagens

#### 📸 Logo da Empresa (logo.png)
- **Nome do arquivo:** `logo.png` (exatamente assim, minúsculas)
- **Formatos aceitos:** PNG, JPG, JPEG
- **Tamanho recomendado:** 200 x 80 pixels
- **Onde aparece:** Cabeçalho do orçamento (canto superior direito)
- **Qualidade:** Alta resolução, fundo transparente (PNG recomendado)

#### 📱 QR Code PIX (qrcode-pix.png)
- **Nome do arquivo:** `qrcode-pix.png` (exatamente assim, minúsculas)
- **Formatos aceitos:** PNG, JPG, JPEG
- **Tamanho recomendado:** 200 x 200 pixels (quadrado)
- **Onde aparece:** Seção de pagamento do orçamento
- **Como gerar:** Use o app do seu banco ou site gerador de QR Code PIX

### PASSO 3: Coloque tudo na mesma pasta

```
✅ CORRETO:
📁 Orcamentos/
  ├── orcamento-eletrico-completo.html
  ├── config.js
  ├── logo.png
  └── qrcode-pix.png

❌ ERRADO:
📁 Orcamentos/
  ├── orcamento-eletrico-completo.html
  ├── config.js
  📁 imagens/
     ├── logo.png
     └── qrcode-pix.png
```

### PASSO 4: Abra o sistema

**No Computador:**
- Dê duplo clique em `orcamento-eletrico-completo.html`
- Abrirá no seu navegador padrão (Chrome, Firefox, Edge)

**No Celular:**
- Copie a pasta para seu celular
- Use um navegador (Chrome, Safari)
- Abra o arquivo HTML

## 🎨 PERSONALIZANDO AS IMAGENS

### Como mudar os nomes dos arquivos de imagem

Se você quiser usar nomes diferentes para suas imagens, edite o arquivo **config.js**:

```javascript
const arquivosImagem = {
    // Altere aqui para o nome do seu arquivo
    logo: "minha-logo.png",              // Mude aqui
    qrcodePix: "meu-qrcode.png"          // Mude aqui
};
```

### Formatos de imagem aceitos

- **PNG** ✅ Recomendado (suporta transparência)
- **JPG/JPEG** ✅ Aceito
- **GIF** ⚠️ Funciona, mas não recomendado

## 📋 NOMES EXATOS DOS ARQUIVOS

### ⚠️ IMPORTANTE - Case Sensitive!

Os nomes dos arquivos são sensíveis a maiúsculas e minúsculas:

**✅ CORRETO:**
- `logo.png`
- `qrcode-pix.png`
- `config.js`

**❌ ERRADO:**
- `Logo.png` ou `LOGO.PNG`
- `QRCode-Pix.png` ou `QRCODE-PIX.PNG`
- `Config.js` ou `CONFIG.JS`

## 🔧 CONFIGURAÇÕES AVANÇADAS

### Textos Padrão

Você pode definir textos que aparecem automaticamente no **config.js**:

```javascript
const textosPadrao = {
    garantiaPeriodo: "12 meses",
    garantiaCobertura: "Defeitos de fabricação e instalação",
    garantiaCondicoes: "12 meses a partir da entrega...",
    meiosPagamento: "PIX, Cartão, Transferência",
    condicoesPagamento: "50% entrada + 50% na conclusão"
};
```

### Múltiplos Telefones

```javascript
const dadosPrestador = {
    telefone: "(85) 98765-4321",
    telefoneSecundario: "(85) 3456-7890",  // Opcional
};
```

## 💡 FUNCIONALIDADES DO SISTEMA

### 1. ✅ Carregamento Automático
- ✓ Dados do prestador carregam automaticamente do config.js
- ✓ Logo aparece no cabeçalho
- ✓ QR Code PIX na seção de pagamento
- ✓ Textos padrão preenchidos

### 2. 🧮 Cálculo Automático
- Digite o **preço unitário**
- Digite a **quantidade**
- O **total** é calculado automaticamente
- O **TOTAL GERAL** soma tudo

**Exemplo:**
```
Serviço: Instalação elétrica
Preço: R$ 1.000,00
Quantidade: 2
Total: R$ 2.000,00 ← Calcula automaticamente
```

### 3. 📸 Upload de Imagens

**Projeto Elétrico:**
- Clique em "📐 Adicionar Projeto Elétrico"
- Selecione a imagem do projeto
- Aceita: PNG, JPG, PDF
- Aparece no orçamento

**Fotos do Local:**
- Clique em "📷 Adicionar Fotos do Local"
- Selecione múltiplas fotos
- Mostra preview de todas
- Pode remover individualmente

### 4. 📱 Responsividade

**No Celular:**
- Layout adaptado para tela pequena
- Botões maiores
- Tabelas roláveis
- PDF em formato mobile

**No Computador:**
- Layout completo
- Todas as colunas visíveis
- PDF em formato A4

### 5. 💾 Geração de PDF

**Nome do arquivo gerado:**
```
ORCAMENTO_001-2025_CLIENTE_14_11_2025.PDF
```

**Formato adaptável:**
- Celular: PDF otimizado para mobile
- Desktop: PDF formato completo

### 6. 📲 Envio WhatsApp

Após salvar o PDF:
- Clique em "📱 Enviar WhatsApp"
- Mensagem pronta com resumo
- Abre WhatsApp Web ou App
- Cole a mensagem e envie

## 🚨 SOLUÇÃO DE PROBLEMAS

### Problema: Logo não aparece

**Soluções:**
1. ✓ Verifique se o arquivo está na mesma pasta
2. ✓ Confira o nome: deve ser exatamente `logo.png`
3. ✓ Verifique se o nome no config.js está correto
4. ✓ Teste abrir a imagem separadamente

### Problema: QR Code não aparece

**Soluções:**
1. ✓ Arquivo deve estar na mesma pasta
2. ✓ Nome deve ser exatamente `qrcode-pix.png`
3. ✓ Verifique o nome no config.js
4. ✓ Se não tiver QR Code, a seção fica oculta (normal)

### Problema: Dados do prestador não carregam

**Soluções:**
1. ✓ Arquivo config.js está na mesma pasta?
2. ✓ Você editou e salvou o config.js?
3. ✓ Feche e abra o HTML novamente
4. ✓ Limpe o cache do navegador (Ctrl+F5)

### Problema: Cálculos não funcionam

**Soluções:**
1. ✓ Use números com ponto (100.50) não vírgula
2. ✓ Preencha preço E quantidade
3. ✓ O total aparece automaticamente ao digitar
4. ✓ Adicione novos serviços com o botão "+"

### Problema: PDF não gera

**Soluções:**
1. ✓ Preencha todos os campos obrigatórios (*)
2. ✓ Adicione pelo menos um serviço
3. ✓ Aguarde o carregamento (aparece spinner)
4. ✓ Verifique se o navegador permite downloads

### Problema: PDF sai cortado no celular

**Solução:**
- Sistema detecta automaticamente o dispositivo
- PDF é ajustado para o tamanho da tela
- Se abrir no celular, PDF será em formato mobile
- Se abrir no PC, PDF será em formato A4

## 📝 CAMPOS OBRIGATÓRIOS

Para gerar o orçamento, você DEVE preencher:

**Prestador:**
- ✓ Nome
- ✓ CPF/CNPJ
- ✓ Telefone

**Cliente:**
- ✓ Nome
- ✓ CPF/CNPJ
- ✓ Telefone

**Orçamento:**
- ✓ Número
- ✓ Data
- ✓ Pelo menos 1 serviço

**Comercial:**
- ✓ Meios de pagamento
- ✓ Condições de pagamento
- ✓ Garantia (período e condições)

## 🎯 DICAS DE USO

### Para um orçamento rápido:
1. Abra o sistema (dados já carregados)
2. Preencha dados do cliente
3. Adicione serviços
4. Gere o PDF
5. Envie por WhatsApp

### Para um orçamento completo:
1. Preencha todos os dados
2. Adicione múltiplos serviços
3. Liste todos os materiais
4. Anexe projeto elétrico
5. Adicione fotos do local
6. Revise no preview
7. Gere o PDF
8. Envie por WhatsApp

### Para editar um orçamento:
1. Não use "Limpar Tudo" (perde tudo)
2. Edite diretamente os campos
3. Re-gere o preview
4. Salve novo PDF

### Para fazer cópias de segurança:
1. Salve o PDF gerado
2. Tire print do formulário preenchido
3. Ou copie os dados para um documento

## 🔐 SEGURANÇA E PRIVACIDADE

- ✅ Tudo funciona localmente no seu navegador
- ✅ Nenhum dado é enviado para internet
- ✅ Sem cadastro ou login necessário
- ✅ Suas informações ficam apenas no seu computador
- ✅ Config.js fica salvo no seu dispositivo

## 📞 PERGUNTAS FREQUENTES

**P: Preciso instalar algum programa?**
R: Não! Basta ter um navegador (Chrome, Firefox, Edge, Safari)

**P: Funciona offline?**
R: Sim! Após abrir uma vez, funciona sem internet

**P: Posso usar no celular?**
R: Sim! Totalmente responsivo e adaptável

**P: Os dados ficam salvos?**
R: O config.js fica salvo. Os orçamentos devem ser salvos em PDF

**P: Posso personalizar as cores?**
R: Sim, mas precisa editar o código HTML/CSS

**P: Quantos orçamentos posso fazer?**
R: Ilimitados! Sem restrições

**P: Precisa de internet?**
R: Apenas na primeira vez para carregar a biblioteca de PDF

**P: Posso usar para outros tipos de orçamento?**
R: Sim! Adapte o config.js e use para qualquer serviço

## 🎓 RESUMO FINAL

### Arquivos necessários (mesma pasta):
1. ✅ `orcamento-eletrico-completo.html`
2. ✅ `config.js` (editado com seus dados)
3. ✅ `logo.png` (sua logo)
4. ✅ `qrcode-pix.png` (seu QR Code PIX)

### O que carrega automaticamente:
- ✓ Dados do prestador
- ✓ Logo no cabeçalho
- ✓ QR Code no pagamento
- ✓ Textos padrão de garantia

### O que você preenche:
- ✓ Dados do cliente
- ✓ Serviços e materiais
- ✓ Projeto elétrico (opcional)
- ✓ Fotos do local (opcional)

### Resultado:
- 📄 PDF profissional
- 📱 Pronto para enviar no WhatsApp
- 💾 Salvo no seu computador

---

## 🎉 PRONTO PARA USAR!

Agora é só abrir o arquivo HTML e começar a fazer seus orçamentos profissionais!

**Bons negócios! ⚡💰**
