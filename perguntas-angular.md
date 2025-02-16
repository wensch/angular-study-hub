# **Perguntas e Respostas sobre Angular**

## **JavaScript e TypeScript**

### 1. O que é o Event Loop no JavaScript e como ele se aplica ao Angular?  
O Event Loop gerencia a execução de tarefas assíncronas no JavaScript. No Angular, ele é fundamental para a detecção de mudanças no `Change Detection` e para o funcionamento de observáveis e Promises, garantindo que a UI seja atualizada de forma eficiente.  

### 2. Como funciona o conceito de closures no JavaScript e onde ele pode ser útil no Angular?  
Closures são funções que mantêm acesso ao escopo onde foram criadas, mesmo após a execução da função externa. No Angular, closures podem ser úteis para criar funções dentro de serviços ou para definir lógicas encapsuladas dentro de componentes.  

### 3. O que é hoisting em JavaScript e como o TypeScript lida com isso?  
Hoisting é o comportamento de mover declarações de variáveis e funções para o topo do escopo. O TypeScript melhora a previsibilidade do código ao reforçar boas práticas e evitar o uso de `var`, que pode levar a problemas de hoisting inesperados.  

### 4. Qual a diferença entre `var`, `let` e `const` no JavaScript/TypeScript?  
- **`var`**: Escopo de função, sofre hoisting, pode ser redeclarado (não recomendado).  
- **`let`**: Escopo de bloco, não pode ser redeclarado no mesmo escopo.  
- **`const`**: Escopo de bloco, exige inicialização e não permite reatribuição.  

---

## **Fundamentos do Angular**

### 5. Como funciona o ciclo de vida de um componente no Angular?  
O ciclo de vida de um componente Angular é gerenciado por hooks como:  
- **`ngOnInit`**: Executado quando o componente é inicializado.  
- **`ngOnChanges`**: Disparado quando os inputs do componente mudam.  
- **`ngOnDestroy`**: Chamado antes da destruição do componente, útil para limpar subscrições.  

### 6. O que é o Change Detection no Angular e como ele impacta a performance?  
O Change Detection é o mecanismo que verifica mudanças no estado da aplicação e atualiza a interface do usuário. Ele pode ser otimizado com:  
- **`ChangeDetectionStrategy.OnPush`** para reduzir verificações.  
- **RxJS (Observables)** para gerenciamento eficiente de dados assíncronos.  
- **TrackBy em diretivas `*ngFor`** para evitar recriação desnecessária de elementos na DOM.  

### 7. O que são serviços no Angular e como utilizá-los corretamente?  
Serviços são classes que contêm lógica reutilizável e podem ser injetadas em componentes e outros serviços usando o **Dependency Injection (DI)** do Angular.  
- Criados com `@Injectable({ providedIn: 'root' })`.  
- Úteis para chamadas HTTP, manipulação de estados e compartilhamento de dados entre componentes.  

---

## **Gerenciamento de Estado e RxJS**

### 8. Como funciona o RxJS no Angular e por que ele é amplamente utilizado?  
RxJS é uma biblioteca para programação reativa baseada em Observables. Ele permite manipular fluxos de dados assíncronos de forma eficiente.  
- **Exemplo de uso**: `HttpClient.get()` retorna um Observable, permitindo operações como `map()`, `filter()`, `retry()`, etc.  

### 9. Qual a diferença entre Subject, BehaviorSubject e ReplaySubject no RxJS?  
- **`Subject`**: Emite valores para múltiplos observadores, mas novos inscritos não recebem eventos passados.  
- **`BehaviorSubject`**: Retém o último valor emitido e o fornece a novos assinantes.  
- **`ReplaySubject`**: Retém um número especificado de eventos e os reemite para novos assinantes.  

### 10. O que é NgRx e por que usá-lo no Angular?  
NgRx é uma biblioteca para gerenciamento de estado baseada no padrão Redux. Ele é útil para aplicações grandes que precisam de estados previsíveis e centralizados.  
- **Principais conceitos**:  
  - **Actions**: Representam eventos da aplicação.  
  - **Reducers**: Determinam como o estado muda com base nas actions.  
  - **Selectors**: Permitem acesso otimizado ao estado global.  
  - **Effects**: Lidam com operações assíncronas, como chamadas HTTP.  

---

## **Otimização de Performance**

### 11. Como otimizar a performance de uma aplicação Angular?  
- **Lazy Loading**: Carregar módulos apenas quando necessários.  
- **OnPush Change Detection**: Reduz verificações desnecessárias do Change Detection.  
- **TrackBy em `*ngFor`**: Minimiza recriação de elementos na DOM.  
- **Uso eficiente do RxJS**: Evitar múltiplas assinaturas desnecessárias.  

### 12. O que é o NgZone e quando você precisaria utilizá-lo?  
O `NgZone` é um serviço do Angular que permite executar código fora da detecção de mudanças do Angular para otimizar a performance.  
- **Quando usar?**  
  - Para evitar verificações desnecessárias do Change Detection ao manipular eventos externos.  
  - Para melhorar a performance ao lidar com operações pesadas, como animações ou WebSockets.  
- **Exemplo:**  
  ```typescript
  constructor(private ngZone: NgZone) {}

  runOutsideAngular() {
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        console.log("Executado fora da zona do Angular");
      }, 1000);
    });
  }
  ```

---

## **Pipes e Compilação**

### 13. O que são Pipes no Angular e como criar um Pipe customizado?  
Pipes são utilizados para transformar dados diretamente no template. Exemplos incluem `uppercase`, `date`, `currency`.  
- **Criando um Pipe customizado:**  
  ```typescript
  @Pipe({ name: 'exemploPipe' })
  export class ExemploPipe implements PipeTransform {
    transform(value: string): string {
      return `Prefixo - ${value}`;
    }
  }
  ```
  - Uso no template:  
    ```html
    {{ 'Angular' | exemploPipe }}
    ```

### 14. Como funciona o compilador do Angular?  
O Angular possui dois tipos de compilação:  
- **JIT (Just-In-Time)**: Compilação no navegador, útil para desenvolvimento.  
- **AOT (Ahead-Of-Time)**: Compilação antecipada no build, melhora a performance de produção reduzindo o tempo de parsing do template.  

### 15. Qual a diferença entre um Service e uma Promise no Angular?  
- **Service**: Utiliza Observables (RxJS), permitindo múltiplos valores ao longo do tempo e cancelamento de assinaturas.  
- **Promise**: Lida com apenas um valor e não pode ser cancelada.  
- **Recomendação**: Usar Observables (`HttpClient.get()`) em serviços para melhor controle e flexibilidade.  

### 16. Como funcionam os Decorators no Angular e quais os principais tipos?  
Decorators são metadados aplicados a classes e seus membros.  
- **Principais decorators:**  
  - `@Component()`: Define um componente Angular.  
  - `@Directive()`: Cria diretivas customizadas.  
  - `@Injectable()`: Marca uma classe como injetável via DI.  
  - `@Input() / @Output()`: Passagem de dados entre componentes.  

