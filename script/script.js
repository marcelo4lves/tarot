const  btn = document.querySelectorAll(".btn");
const cartas = document.querySelectorAll('.verso-cartas');

const p = document.querySelector('.perguntas');
const emb = document.querySelector('.embaralhar');
const c = document.querySelector('.cartes');
const r = document.querySelector('.cartas-retorno');




let perg = null;

for(let i=0; i<btn.length; i++){
    btn[i].addEventListener('click', function(e){
        e.preventDefault();

        if(!p.classList.contains('ocult')){
            p.classList.add('ocult');
        }

        if(emb.classList.contains('ocult')){
            emb.classList.remove('ocult');
        }

        setTimeout(function(){
            console.log(c.classList.contains('ocult'));
            if(c.classList.contains('ocult')){
                emb.classList.add('ocult')
                c.classList.remove('ocult');
                
            }
        },4000);

        console.log(this.innerHTML);
        
        perg =this.innerHTML;
    })
}

for(let i=0;i<cartas.length;i++){
    cartas[i].addEventListener('click', function(e){
        e.preventDefault();
        if(!c.classList.contains('ocult')){
            c.classList.add('ocult');
        }
        
        rendCarts();
    });
}

function rendCarts(){
    let crt = Math.floor(Math.random()*taro.length);
    if(r.classList.contains('ocult')){
        r.classList.remove('ocult');
    }
    console.log(perg);
    
    const nome = document.querySelector(".name");
    const texto = document.querySelector(".texto");
    const img = document.querySelector(".logo");

    nome.innerHTML = taro[crt].name;
    img.innerHTML = "<img src='img/cartas/"+taro[crt].image+".jpg'>"

    if(perg=="Amor"){
        texto.innerHTML = taro[crt].amor;
        
    }else if(perg=="Trabalho"){
        
        texto.innerHTML = taro[crt].trabalho;
        
    }else if(perg=="Espirutal"){
        
        texto.innerHTML = taro[crt].espirtual;
        
    }else if(perg=="Conselho"){
        let lado = Math.floor(Math.random()*2);

        if(lado == 1){
            texto.innerHTML = taro[crt].conselho.p;
        }else{
            texto.innerHTML = taro[crt].conselho.n;
        }
    }


}


const taro=  [
    {
        image:"mago",
        name:"O Mago",
        description:"",
        amor:"Oportunidade para início de relacionamento, contudo tende a ser algo mais carnal e intenso, portanto é preciso tomar cuidado para não acabar se envolvendo profundamente em pessoas vazião",
        trabalho:"O Mago é a carta de número 1 no tarô, o que significa oportunidades de início de coisas novas. Mostra-se como boa oportunidade para trabalho ou execução de algum projeto de empreendedorismo. Todo o resultado depende de você. Muitas oportunidades em negócios ligado ao comercio e a persuasão ",
        espirtual:"Apresenta-se mais aberto às experenciais sensoriais, desenvolvimento da fé, você sente-se mais pensativo. Oportunidade para colocar os projetos em ação.",
        conselho:{p:"Acredite no seu potencial para dialogar, tente resolver as coisas através da conversa, esteja aberto a opinião de amigos próximo.", n:"Em relação a outras pessoas ou a algum negócio requer cuidado, os outros podem não estar sendo verdadeiro, agindo de má fé ou tentando manipulá-lo, tenha cuidado com conversas tipo disse-me-disse"}
    
    },


 {
        image:"papisa",
        name:"A Alta Sacerdotisa, ",
        description:"",
        amor:"Não parece um momento bom para relacionamento, especialmente se tiver com problemas ainda não resolvidos em um relacionamento anterior. Para quem passou por situação de término a outra pessoa parece inflexível sobre voltar",
        trabalho:" No trabalho na busca de emprego ou mesmo se trabalhando as coisas parecerão seguir em ritmo lento especialmente ao lidar com questões burocráticas",
        espirtual:"Não se sinta mal se estivar perdido em devaneios. Nesse período você tente a estar mais calado e analisando todas as situações. Sua intuição pode estar certa.",
        conselho:{p:"Procure não agir de início nas situações que aparecerem mantenha a calma e analise a situação",
n:" Tome cuidado com fofocas, talvez você não consiga contar com ajuda dos outros caso precise "}
    
    },

 {
        image:"imperatriz",
        name:"A Imperatriz ",
        description:"",
        amor:"Se você estiver bem consigo parece o momento propício para um relacionamento, você está radiante. Cuidado para não engravidar (risos) a imperatriz é uma carta de criaação",
        trabalho:"Parece um bom momento para trabalho e no trabalho, você contará com a sorte e as coisas seguirão o fluxo para a concretização",
        espirtual:"Invista em você, no autocuidado e no autoconhecimento",
        conselho:{p:"Se mantenha no controle e confie em si",
n:"Tome cuidado para não estar obcecada por você mesma, sentimentos como vaidade excessiva, egoísmo, autoconfiança cega"}
    
    },

 {
        image:"imperador",
        name:"O Imperador ",
        description:"",
        amor:"Não tem muita perspectiva de início e relacionamento, para quem estar em um relacionamento você pode estar se sentindo menos amada, e talvez haja um certo autoritarismo e desgaste no seu relacionamento",
        trabalho:"No trabalho parece haver possibilidade de resolução, não será fácil, é necessário ter a situação nas rédeas, assumir responsabilidades, tomar decisões, liderar a equipe",
        espirtual:"Você precisa relaxar, se permitir mais, estar mais aberto a aprender com o próximo, valorize as pessoas e não as coisas",
        conselho:{p:"Valorize sua opinião e decisão, assuma o controle da sua vida, meio que tipo leão anda com leão",
n:" As coisas podem fugir do seu controle, pense ‘o que é problema meu, e como eu posso resolver’"}
    
    },

 {
        image:"papa",
        name:"O Sumo Sacerdote",
        description:"",
        amor:"Esta é uma carta de sentido formal, mostra a existência de respeito nos relacionamentos, namoro, (pode até sugerir) casamento. Para os solteiros representa a amizade  ",
        trabalho:"Mantenha-se organizado no trabalho e nos projetos. Tende agir de forma correta, pois há tendência ao adiamento por questões burocráticas ",
        espirtual:"Sua fé está em alta. Mas tenha cuidado com os julgamentos e moralismo",
        conselho:{p:"O errado é errado, mesmo que todo mundo esteja fazendo e o certo é certo mesmo que ninguém esteja fazendo. Ou seja. Aja na moralidade seguindo os preceitos éticos",
n:"Agir por impulso pode te levar a cometer equívocos e te levar ao fracasso"}
    
    },

 {
        image:"enamorado",
        name:"Os Enamorados",
        description:"",
        amor:"A carta mais gostosinha do tarô quando se busca respostas para relacionamento, para quem está em relacionamentos há uma tendência a manutenção de uma relação saudável, para os solteiros pode indicar início de relacionamento. Mas para quem está cheio de contatinhos cuidado para não ficar sem nenhum",
        trabalho:"Há oportunidades de emprego e negócios o momento sugere múltiplas ofertas ",
        espirtual:"Há um certo sentimento de dúvida, indecisão e vários conflitos interior ",
        conselho:{p:"Não coloque mais lenha na fogueira, busque a paz entre as partes",
n:" Pode haver rompimentos de ciclos devido a uma dificuldade de lidar com as pessoas e situações "}
    
    },

 {
        image:"carro",
        name:"O Carro",
        description:"",
        amor:"Seu poder magnético de atração está em alta. Seus desejos e instintos também. Algo estilo Romeu e Julieta, vou morrer por esse amor",
        trabalho:"Eventuais problemas tenderá a se resolverem da melhor forma possivel ",
        espirtual:"Controle sua mente não se deixe perder na velocidade dos seus pesamentos",
        conselho:{p:"O obvio precisa ser dito. Seja objetivo",
n:"Do que adianta ter vontade se não tem coragem? Pode dar errado, mas é algo que se você não arriscar nunca vai saber"}
    
    },

 {
        image:"justica",
        name:"A Justiça",
        description:"",
        amor:"O momento pede um isolamento, os relacionamentos tendem a estar mais frio",
        trabalho:"obstáculos no trabalho, requer do consulente agir baseado nas leis, nas qualificações para determinado cargo. O lado burocrático vai estar em alta",
        espirtual:"A pessoa parece estar vindo de um período de negatividade e pessimismo que está chegando ao fim",
        conselho:{p:"Seja mais racional analise os dados com frieza",
n:"Agir de forma irracional ou intolerante pode te levar à ruina"}
    
    },

 {
        image:"eremita",
        name:"O Eremita",
        description:"",
        amor:"Se você passou por um termino recente agora é o momento que você começa a sair da bad. Estará mais intimista os relacionamentos tendem a ficar no campo da amizade e lealdade, você estará mais propícia a cuidar do outro",
        trabalho:"Situações ligadas a trabalho e negócios tenderão a andar mais lento, as realizações serão a longo prazo",
        espirtual:"Volte-se para você. Num aprofundamento espiritual",
        conselho:{p:"Evite conflitos, há momentos que é preferível ter paz a ter razão. Tenha paciência",
n:"Cuidado com coisas que envolva prazo, você pode acabar se perdendo e não dando conta de tudo"}
    
    },

 {
        image:"roda",
        name:"A Roda da fortuna",
        description:"",
        amor:"A roda gira e a fila anda, risos. Na roda da fortuna tudo é instável há a possibilidade de um novo relacionamento. Mas no geral as coisas tendem a estarem mais conturbadas, muitos altos e baixos",
        trabalho:"Tanto para o trabalho como negócios outras pessoas podem passar na sua frente as vezes agindo de má fé",
        espirtual:"Você pode estar se sentindo atribulada, pense que a água só afunda o navio se entrar nele. Evite se incomodar e se proteja dos danos causados por outros",
        conselho:{p:"Não fique prezo ao passado, pessoas e coisas. Aceite as mudança",
n:"Não conte com ajuda dos outros."}
    
    },

 {
        image:"forca",
        name:"A Força",
        description:"",
        amor:"Há um forte magnetismo em você muita possibilidade de entrega total ao amor",
        trabalho:"Trabalhando duro há grandes possibilidade de sucesso",
        espirtual:"Você está passando por momentos e situações que buscam trazer o seu amadurecimento. Evolua",
        conselho:{p:"Nunca force a barra para nada, vá até o limite e aceite",
n:"Controle-suas emoções, resolver as coisas de maneira racional é melhor do que usar a força bruta"}
    
    },

 {
        image:"pendurado",
        name:"O Pendurado",
        description:"",
        amor:"As coisas tendem estar estagnada no amor, você precisa tomar cuidado com a sua saúde mental em decorrência do relacionamento. Há muita dor presa no caminho",
        trabalho:"Dificuldades para conseguir emprego e também no plano financeiro, pode passar por alguns apertos financeiros",
        espirtual:"Resiginação. Momento de ser mais engajado em causas sociais e cuidadps com o próximo",
        conselho:{p:"Não se desespere diante de situações desesperadora. Acalme seu coração e se apegue a sua fé",
n:"Há uma oportunidade de reinício quando os ciclos se fecham. Resolva os erros para conseguir seguir em frente"}
    
    },

 {
        image:"morte",
        name:"A Morte",
        description:"",
        amor:"A morte não representa a morte física e sim os términos naturais da vida que segue o seu ciclo como fim dos relacionamentos, os solteiros podem estar se sentindo mais melancólicos, os comprometidos pode indicar um término. Há situações que precisam de um ponto final ",
        trabalho:"Para trabalho e negócios as coisas estarão andando lentamente pois poderá haver obstáculos no caminho. Inclusive as coisas podem seguir caminhos diferente do imaginado. Momento favorável para quitação de dívidas",
        espirtual:"Sua fé e esperança parece estar abatida. Não se desespere acredite no melhor",
        conselho:{p:"Não tenha medo de refazer os planos e mudar a rota até o destino, pode ser necessário",
n:"Seja mais amavél"}
    
    },

 {
        image:"temperanca",
        name:"A Temperança",
        description:"",
        amor:"período morno para quem busca relacionamento (não está quente), os comprometidos, a relação pode estar lhe provocando sentimentos que você precisa se resignar a tudo para segurar o casamento, uma certa manipulação. ",
        trabalho:"Lentidão nos processos, e difícil resolução dos mesmos",
        espirtual:"Momento para exercício do autocuidado",
        conselho:{p:"Tenha calma e seja ponderado, a situação tenderá a se resolver",
n:"Busque a união e não a discordia"}
    
    },

 {
        image:"diabo",
        name:"O Diabo",
        description:"",
        amor:" Há dificuldades para relacionamentos sérios, mas haverá a existência de relacionamentos efêmeros muito ligado ao carnal, para os que estão em relacionamento as coisas tenderão a ficar mais quente ",
        trabalho:"período favorável para o trabalho e negociações há grandes possibilidades de lucro",
        espirtual:"Seus dons místicos estão em alta você está mais intuitiva",
        conselho:{p:"Mais vale um pássaro na mão do que dois voando, é isso, seja ambicioso, mas não muito",
n:"Não se deixe abater pela falta de fé"}
    
    },

 {
        image:"torre",
        name:"A Torre",
        description:"",
        amor:"A torre é a carta mais temida do tarô. Ela indica que as coisas não vão bem, pode haver términos ou mesmo brigas e discussões. O relacionamento pode passar por momentos conturbados",
        trabalho:"Há muitas possibilidades de algo dá errado, por influência de terceiros ou não, tenha um plano B, faça economias, coisas que te prepare para não ser pego desprevenido em uma situação.",
        espirtual:"Fé cega, cuidado onde deposita suas esperança",
        conselho:{p:"É preciso dar meia volta. Pois se der uma volta inteira irá parar no mesmo lugar e é necessário romper com o passado, com os vícios de quais quer natureza que seja",
n:"Seja resiliente. Algumas situações irão te destruir, mas você precisa mostrar a sua capacidade de sobreviver"}
    
    },

 {
        image:"estrela",
        name:"A Estrela",
        description:"",
        amor:"A estrela sugere um período de renascimento, de superação, volta da esperança. Desenvolvimento de amizades e lealdade nos relacionamentos",
        trabalho:"Os caminhos se mostram abertos, com possibilidade de promoção",
        espirtual:"Confie na sua intuição",
        conselho:{p:"Mantenha a esperança e a fé acesa",
n:"Há duas formas de ver um copo com água água pela metade. Meio cheio ou meio vazio. Busque ser a pessoa que opta por vê-lo meio cheio"}
    
    },

 {
        image:"lua",
        name:"A Lua",
        description:"",
        amor:"No campo dos relacionamentos a lua representa o oculto, coisas que você não vê ou opta por não ver. Há também muitos ciúmes nos relacionamentos e também o predomínio da emoção sobre a razão",
        trabalho:"Há possibilidade superação mediante as dificuldades",
        espirtual:"Intuição extremamente aguçada, também está envolta na sabedoria",
        conselho:{p:"Procure sempre saber todas as versões de um fato, bem como analisar o passado",
n:" Cuidado com a sua intuição, lucidez é nevessário"}
    
    },

 {
        image:"sol",
        name:"O Sol",
        description:"",
        amor:"Os relacionamentos tenderão a ter seus vínculos fortalecidos",
        trabalho:"Bom momento para o trabalho e situação financeira as coisas tendem a sair da melhor forma possível",
        espirtual:"Busque fazer coisas que te traga a evolução",
        conselho:{p:"Seja mais otmista e se abra para o mundo",
n:"Você pode estar em uma situação confortável, mas não deixe que isso te faça se sentir superior, o contrário é válido. Sua situação é confortável, mas você se sente por baixo e inferiorizado"}
    
    },

 {
        image:"julgamento",
        name:"O Julgamento",
        description:"",
        amor:"Momento de início de novos relacionamentos, amizade ou namoro. O passado já não serve mais, renove o círculo de convívio",
        trabalho:"Resolução de casos na justiça, ou eventuais situações que estavam travando o trabalho, as coisas tenderão a surgirem como novidades, promoções, surpresas..",
        espirtual:"Seja compreensivo",
        conselho:{p:"Você precisa perdoar, para seguir em frente",
n:"Dá a César o que é de César. Procure agir sempre na legalidade, pois a julgamento dá a cada um aquilo que ele merece"}
    
    },

 {
        image:"mundo",
        name:"O Mundo",
        description:"",
        amor:"Quem disse que seu amor está no Brasil? O mundo é muito grande, você pode vir a conhecer pessoas e se relacionar namoro/amizade com pessoas que não pertence ao seu grupo, pessoas que talvez sempre estiveram ali e você nunca prestou atenção",
        trabalho:"Possibilidade de ganhos, prosperidade até mesmo mudanças de cargo",
        espirtual:"Momento de colher os frutos do seu trabalho duro",
        conselho:{p:"Busque finalizar o que tem feito, terminar os círculos",
n:"Não fique preso no mudo da lua, algumas coisas podem pedir mudanças drásticas para as coisas começarem a fluir"}
    
    },

 {
        image:"louco",
        name:" Louco",
        description:"",
        amor:"No amor você não vai saber se não tentar, se jogue nos relacionamentos em relação a se permitir sentir, não há garantias de sucesso, tente aproveitar o momento e as pessoas",
        trabalho:"Tente agir com prudência, não fazer gastos desnecessários, tentar mudar de trabalho, cargo. Não é o melhor momento",
        espirtual:"Acho que você está louca e confusa. Bora para terapia?",
        conselho:{p:"Você pode estar preso, na sua vida, no seu corpo, por não seguir suas vontades e buscar agradar aos outros e a sociedade",
n:"Não basta apenas ser otimista, tem que está preparado para cenários de adversidade também "}
    
    },

   

];

function chama(x){
    
    console.log(x.innerHTML);
}

