const personalGitPage = 'https://github.com/michaelrn2288/'
const imagePath = './images/projects/'

export const projects = [
    {
        name: 'Quizzical',
        image: `${imagePath}quizzical.jpg`,
        description: `Esse projeto foi construido a partir de um desafio do curso "Learn React for free"
            do Scrimba.com. Ele consome uma API e renderiza perguntas, cada um com várias opções de resposta.
            O usuário escolhe as respostas e depois aperta o botão para verificar quantas respostas acertou.
             Deploy do projeto feito no netlify.`,
        pageUrl: 'https://michaelrn2288-quizzical.netlify.app/',
        projectUrl: `${personalGitPage}quizzical`,
    },
    {
        name: 'Super Mario',
        image: `${imagePath}super-mario.jpg`,
        description: `Jogo do Mario desenvolvido à partir de um desafio do Tech Academy da StartSe.
             O projeto utiliza apenas html, javascript e css puros.`,
             pageUrl: 'https://michaelrn2288.github.io/Super-Mario/',
        projectUrl: `${personalGitPage}Super-Mario`,
    },
    {
        name: 'Tenzies',
        image: `${imagePath}tenzies.jpg`,
        description: `Projeto foi construido a partir de um desafio do curso "Learn React for free"
            do Scrimba.com. Primeiro assisti o projeto ser construído, depois o refiz do zero.
            Sobre o projeto original, adicionei um contador de tempo e um registro de recorde de pontuação, 
            que utiliza o local storage. Tenzies é um joguinho onde a pessoa rola os dados até obter o mesmo número
             em todos. Dados podem ser "congelados" ao serem clicados.`,
             pageUrl: 'https://michaelrn2288-tenzies.netlify.app/',
        projectUrl: `${personalGitPage}tenzies`,
    },
    {
        name: 'Meme generator',
        image: `${imagePath}meme-generator.jpg`,
        description: `Projeto baseado em aulas do curso "Learn React for free"
        do Scrimba.com. Ele consome uma API para gerar uma imagem aleatória. Campos de formulário permitem 
            inserir textos na imagem.`,
             pageUrl: 'https://michaelrn2288-meme-generator.netlify.app/',
        projectUrl: `${personalGitPage}meme-generator`,
    },
    {
        name: 'Portfolio StartSe',
        image: `${imagePath}portfolio-startse.jpg`,
        description: `Esse foi o meu primeiro projeto construído. Foi feito apenas com html e css.
             Desenvolvi ele a partir de um desafio do curso da Tech Academy da StartSe.`,
             pageUrl: 'https://michaelrn2288.github.io/portfolio-startse/portfolio-br.html',
        projectUrl: `${personalGitPage}portfolio-startse`,
    },
    {
        name: 'Gerador de senha',
        image: `${imagePath}gerador-de-senha.jpg`,
        description: `Desenvolvido a partir de uma aula do "Curso de JavaScript e TypeScript do básico ao 
            avançado", na Udemy. Feito com javascript, css e html.`,
             pageUrl: 'https://michaelrn2288.github.io/gerador_de_senha/public/',
        projectUrl: `${personalGitPage}gerador_de_senha`,
    },
    {
        name: 'Lista de tarefas',
        image: `${imagePath}lista-de-tarefas.jpg`,
        description: `Desenvolvido a partir de uma aula do "Curso de JavaScript e TypeScript do básico ao 
            avançado", na Udemy. Feito com javascript, css e html.`,
             pageUrl: 'https://michaelrn2288.github.io/lista-de-tarefas/',
        projectUrl: `${personalGitPage}lista-de-tarefas`,
    },
    {
        name: 'Validador de cpf',
        image: `${imagePath}validador-de-cpf.jpg`,
        description: `Desenvolvido a partir de uma aula do "Curso de JavaScript e TypeScript do básico ao 
        avançado", na Udemy. Feito com javascript, css e html.`,
             pageUrl: 'https://michaelrn2288.github.io/validador-de-cpf/',
        projectUrl: `${personalGitPage}validador-de-cpf`,
    }
]