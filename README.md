
# 🚁 Simulador de Encomendas em Drone

Este projeto simula a alocação de pacotes em drones para entregas urbanas, considerando regras de capacidade, alcance, distância e prioridade.

## 📦 Tecnologias Utilizadas

- Node.js + Express
- MongoDB Atlas + Mongoose
- Swagger (Documentação automática)
- ASCII Charts (relatório visual)
- Jest + Supertest (testes automatizados)
- Estrutura modular (MVC)
- RESTful API

---

## 🚀 Como Rodar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` com:

```
MONGO_URI=mongodb+srv://admin:admin@cluster0.2y48gzu.mongodb.net/simulador?retryWrites=true&w=majority&appName=Cluster0  
PORT=3000
```

> Dica: use MongoDB Atlas e libere o IP `0.0.0.0/0` para testes remotos.

### 4. Inicie o servidor

```bash
npm run dev
```

Acesse: `http://localhost:3000`  
Swagger: `http://localhost:3000/api-docs`

---

## 🧪 Endpoints Principais

### 📦 Pacotes

- `POST /pacotes`: cadastra um novo pacote
- `GET /pacotes`: lista todos os pacotes

### 🚁 Drones

- `POST /drones`: cadastra um novo drone
- `GET /drones`: lista todos os drones

### 🧠 Simulação

- `GET /simular`: simula a alocação de pacotes em drones respeitando:
  - capacidade
  - alcance (ida + volta)
  - distância 2D
  - prioridade (`alta > média > baixa`)
  - consumo de bateria

### 📊 Relatório

- `GET /relatorio`: retorna estatísticas da última simulação, como:
  - Total de pacotes e drones
  - Total de pacotes entregues
  - Drone mais eficiente
  - Tempo médio estimado por entrega
  - Drones que não entregaram
  - Gráfico ASCII de entregas

---

## ✅ Validações Implementadas

- Peso do pacote deve ser positivo
- Prioridade deve ser `baixa`, `media` ou `alta`
- Localização `x` e `y` devem ser números
- Drones devem ter capacidade, alcance e localização válidos
- Bateria do drone deve estar entre 0 e 100 (opcional)

---

## 🔍 Testes Automatizados

O projeto inclui testes usando `Jest` e `Supertest` para validar a API:

### Executar os testes

```bash
npm test
```

### Testes cobrem:

- ✅ Cadastro e listagem de pacotes (`/pacotes`)
- ✅ Cadastro e listagem de drones (`/drones`)
- ✅ Simulação de entregas (`/simular`)
- ✅ Cálculo de distâncias
- ✅ Validações de campos obrigatórios e limites

Ao rodar os testes, o console exibe os resultados e status de cada rota testada.

---

## 📚 Documentação Swagger

Acesse: [`http://localhost:3000/api-docs`](http://localhost:3000/api-docs)

> Descreve todos os endpoints, corpos esperados e exemplos.

---

## 📊 Exemplo de Gráfico ASCII

```txt
📊 Pacotes Entregues por Drone
Drone 1 [beecb]: ■■■ (3)
Drone 2 [cdf9]: ■ (1)
Drone 3 [e7f12]:  (0)
```

## 👨‍💻 Autor

Arthur Abreu — [LinkedIn](https://www.linkedin.com/in/arthur-abreu03/) 

---
