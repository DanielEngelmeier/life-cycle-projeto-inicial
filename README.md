# Angular: Ciclo de Vida

Este projeto foi desenvolvido como parte do curso **Angular: ciclo de vida** da [Alura](https://www.alura.com.br) O objetivo é compreender e aplicar os principais _lifecycle hooks_ do Angular para controlar o comportamento dos componentes durante sua criação, atualização e destruição.

## ✅ Objetivos do Curso

- Entender o que são _lifecycle hooks_ no Angular.
- Implementar métodos como:
  - `ngOnInit()`: inicialização do componente.
  - `ngOnChanges()`: detecção de mudanças nas propriedades.
  - `ngAfterViewInit()`: manipulação do DOM após a renderização.
  - `ngOnDestroy()`: limpeza de recursos antes da destruição.
- Aplicar boas práticas para evitar problemas de performance e memória.

## 🛠️ Tecnologias Utilizadas

- **Angular 15**
- **TypeScript**
- **Node.js** (para gerenciamento de pacotes)
- **Font Awesome** (para ícones)

## 📂 Estrutura do Projeto

```Shell
src/
 ├── app/
 │    ├── components/
 │    │    ├── exemplo-lifecycle/
 │    │    │    ├── exemplo-lifecycle.component.ts
 │    │    │    ├── exemplo-lifecycle.component.html
 │    │    │    └── exemplo-lifecycle.component.css
 │    └── app.module.ts
 └── main.ts
```

## ▶️ Como Executar

1. Instale as dependências:

```Shell
npm install
```

2. Execute o projeto:

```Shell
ng serve
```

3. Acesse no navegador:

```Shell
http://localhost:4200
```

## 🔍 O que foi visto

- Como cada hook é chamado e sua ordem de execução.
- Casos práticos para usar `ngOnChanges` e `ngOnDestroy`.
- Estratégias para manipular elementos do DOM com segurança.
