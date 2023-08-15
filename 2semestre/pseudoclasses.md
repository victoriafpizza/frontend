Pseudoclasses 

Pseudoclasses é uma palavra chave adicionada a um seletor que possibilita que estilizems um grupo de elementos quando eles atenderem a um determinado estado ou condição. 

Para atribuir um seletir, devemos colocar em frente ao seletor dois pontos (:)

Temos algumas pseudoclasse que são apropriadas para o uso com links, pois sabemos que quanto
mais atrativo e indicativo for o link, mais interativa e intuitiva será a pagina 

LINK - esta pseudoclasse nos permite aplicar a estilização somente se o link 
ainda não tiver sido visitado

VISITED - permite aplicar a estilização somente se o link ja tiver sido visitado

HOVER - aplica a estilização somente se o ponteiro do mouse estiver sobre o elemento

FOCUS - permite aplicar a estilização somente se o link tiver com o foco "selecionado"

ACTIVE - permite aplicar a estilização soemnte no momento que clicamos no elemento 

PSEUDOCLASSES PARA SELECIONAR ELEMENTOS FILHOS 

Muitas vezes precisamos aplicar uma estilização em apenas determinadis elementos de um grupo, nestes casos podemos utilizar
pseudolclasses para selecioná-los 

Firts-Child - Estiliza somente o primeiro elemento de um grupo 

Lasr-Child - Estiliza somente o ultimo elemento de um grupo 

NTH - CHILD (EVEN) - Estiliza somente os elementos em posição "par de um gupo 

NHT - CHILD (ODD) - Estiliza somenete os elementos em posição "impar" de um grupo 

NTH-CHILD(N) - Também podemos usar valores para selecionar o elemento 

NHT-OF-TYPE(1) - Seleciona os elementos os separando por tipo. 

P:NTH-OF-TYPE(1) - Ja nesse caso, como ele está precedido do p "paragrafo" ele seleciona somente o primeiro 
paragrafo

.new-list p:nth-of-type(1){
    background-color: blue;
}

Um dos grupos de elmentos que masi recebem interação dos usuarios são os formularios, por isso é tão importante 
usarmos as pseudoclasses para interagrir com eles 

DISABLE - Um dos atributos masi usados em formularios é o disable, ele desabilita o elemento. Pode selecionar
atraves de pseudoclasse os que estão desabilitados

INVALID - É ativado quando o conteudo do campo detectado invalido

Podemos utilizar para manipular valores antes e depois de elementos utilizando estas pseudoclasses 

BEFORE - Podemos criar ou formatar elemetnos antes do conteudo do elemento selecionado

AFTER - Podemos criar ou formatar elementos depois do conetudo do elemento selecionado 

VARIAVEIS 

As variaveis CSS, também conhecidas como CSS variables ou custom properties, são recursos 
introduzidos no CSS3 que permite armazenar valores para serem reutilizados em varias partes do codigo CSS. 
Essas variaveis são definidas usando a sintaxe "--nome-da-variavel" e podem armazenar qualquer valor
CSS, como cores tamanhos, fontes, margens, entre outros. 

COMO APLICAR LOCALMENTE 

Para aplpicar variaveis CSS localmente, voce pode definir as variaveis dentro de um seletor especifico, como uma classe ou um ID. 
Isso restringira o escopo da variavel apenas aos elementos dentro desse seletor 

h1{
    ==color-h1: darkblue;
    color:var var(--color-h1);
}

Para garantir que mesmo que a variavel tenha um valor para aplicar a propriedade, caso ela tenha algum erro, podemos declarar um segundo valor 


Para aplicar as variaveis CSS globalmetne, voce pode defini-ças no seletor :root. Dessa forma, as veriaveis estarão disponiveis para uso em todo o documento HTML 

:root{}

