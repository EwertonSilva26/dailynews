create database if not exists dailynews_db;

use dailynews_db;

create table uf_table(
	uf_id int AUTO_INCREMENT,
    uf_name varchar(60) not null unique,
    initials varchar(2) not null,
    
    PRIMARY KEY(uf_id)
);

create table user_table(
	user_id int AUTO_INCREMENT,
    user_name varchar(100) not null,
    email varchar(100) not null unique,
    user_password varchar(100) not null,
	uf_id int not null,
    
    PRIMARY KEY(user_id),
	FOREIGN KEY (uf_id) REFERENCES uf_table (uf_id)

);
	
create table news_table (
    news_id int AUTO_INCREMENT,
    user_id int not null,
	title varchar(500) not null,
    subtitle varchar(500),
    content text not null,
    image varchar(500) not null,
    created_date timestamp default current_timestamp,
    uf_id int not null,
    
	PRIMARY KEY(news_id),
    FOREIGN KEY (uf_id) REFERENCES uf_table (uf_id),
    FOREIGN KEY (user_id) REFERENCES user_table (user_id)
); 

insert into uf_table (uf_name, initials)
values('Acre','AC');

insert into uf_table (uf_name, initials)
values('Alagoas','AL');

insert into uf_table (uf_name, initials)
values('Amapá','AP');

insert into uf_table (uf_name, initials)
values('Amazonas','AM');

insert into uf_table (uf_name, initials)
values('Bahia','BA');

insert into uf_table (uf_name, initials)
values('Ceará','CE');

insert into uf_table (uf_name, initials)
values('Distrito Federal','DF');

insert into uf_table (uf_name, initials)
values('Espírito Santo','ES');

insert into uf_table (uf_name, initials)
values('Goiás','GO');

insert into uf_table (uf_name, initials)
values('Maranhão','MA');

insert into uf_table (uf_name, initials)
values('Mato Grosso','MT');

insert into uf_table (uf_name, initials)
values('Mato Grosso do Sul','MS');

insert into uf_table (uf_name, initials)
values('Minas Gerais','MG');

insert into uf_table (uf_name, initials)
values('Pará','PA');

insert into uf_table (uf_name, initials)
values('Paraíba','PB');

insert into uf_table (uf_name, initials)
values('Paraná','PR');

insert into uf_table (uf_name, initials)
values('Pernambuco','PE');

insert into uf_table (uf_name, initials)
values('Piauí','PI');

insert into uf_table (uf_name, initials)
values('Rio de Janeiro','RJ');

insert into uf_table (uf_name, initials)
values('Rio Grande do Norte','RN');

insert into uf_table (uf_name, initials)
values('Rio Grande do Sul','RS');

insert into uf_table (uf_name, initials)
values('Rondônia','RO');

insert into uf_table (uf_name, initials)
values('Roraima','RR');

insert into uf_table (uf_name, initials)
values('Santa Catarina','SC');

insert into uf_table (uf_name, initials)
values('São Paulo','SP');

insert into uf_table (uf_name, initials)
values('Sergipe','SE');

insert into uf_table (uf_name, initials)
values('Tocantins','TO');

insert into user_table (user_name, email, user_password, uf_id)
values('Gabriel Willian','gabriel.willian@aluno.ifsp.edu.br', '$2b$10$sevno2hoxYqWUgN7dXCOmeA1oHQfJoyGGbFj8eh955nvWSMoq2QQO', 23);

insert into user_table (user_name, email, user_password, uf_id)
values('Ewerton Soares','ewertonsoaressilva@aluno.ifsp.edu.br', '$2b$10$sevno2hoxYqWUgN7dXCOmeA1oHQfJoyGGbFj8eh955nvWSMoq2QQO', 25);

insert into news_table (user_id, content, title, subtitle, uf_id, image) 
values (1,
'A cerimônia ao fim de tarde diante de uma enseada de Massachusetts, nos Estados Unidos, parecia o melhor cenário para o casamento de Denice e Aaron Sawitsky. Até que, enquanto os noivos faziam os votos, Aaron resolveu brincar sobre a data escolhida para o matrimônio: "Vamos encarar: 2020 não tem sido o melhor ano". Seria apenas uma piadinha normal nesse tipo de celebração, mas em seguida veio um evento assombroso: um raio acompanhado de forte estrondo a poucos quilômetros dali deram um susto nos convidados.',
'Noivo menciona ano de 2020 e raio cai perto de casamento logo em seguida; veja vídeo', 
'Imagens viralizaram nos EUA, "Isso é 2020", brincou o noivo. "Definitivamente, não foi uma cerimônia chata."', 
15, 'https://s2.glbimg.com/unLIFghC1wvg9Dbj9hn5cLNzXmY=/540x304/top/smart/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/y/0/6Abg7MR9Wgv9BBzL30Yg/captura-de-tela-2020-08-28-as-17.01.14.png');

insert into news_table (user_id, content, title, subtitle, uf_id, image) 
values (1, 'Um cãozinho da raça corgi foi responsável por um baita susto na web após seus donos postarem uma foto dele dormindo no chão depois de uma refeição, no Vietnã. O filhote, cujo nome seria Gody, atacou alguma fruta vermelha e depois dormiu de barriga para cima, com o pêlo todo manchado após a refeição. A cena, que poderia ser traumatizante, foi logo desvendada no mesmo post, que já teve mais de 12 mil reações no Facebook desde sexta-feira (20). O filhotinho aparece nas fotos seguintes acordado, todo lambuzado, erguido por um homem.',
'Cachorrinho dá susto em donos e viraliza na web', 
'Filhote da raça corgi, comeu frutas e dormiu manchado de vermelho. Após susto, vietnamitas desvendaram a cena em post.',
19,'https://s2.glbimg.com/lYPH8pFgEdppFoa_TaP8Kc2XteQ=/540x304/top/smart/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/1/B/QL2XXsSiGsqxftYnRakA/corgi2.jpg');

insert into news_table (user_id, content, title, subtitle, uf_id, image) 
values (1, 'Uma madrinha apareceu no casamento de sua irmã fantasiada de dinossauro, no estado americano de Nebraska, e uma foto dela no traje viralizou.
Christina Meador disse à imprensa local que, quando sua irmã pediu que ela fosse sua madrinha, disse que ela poderia escolher seu traje -e ela levou isso ao pé da letra, ao vestir uma fantasia inflável de tiranossauro.
Ela postou a foto e disse que não se arrependeu. Também afirmou que a noiva e os convidados não se importaram com a brincadeira.
A fantasia foi dada como presente à noiva.',
'Madrinha aparece no casamento da irmã fantasiada de tiranossauro nos EUA',
'Ela afirmou que noiva e convidados encararam bem a brincadeira.',
25,'https://s2.glbimg.com/yQ5GGxg3WkWjtF6o7qWR9qSpENI=/540x304/top/smart/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/Y/s/Mr56JdSLCpqA9pIpBEIQ/tiranossauro.jpg');

insert into news_table (user_id, content, title, subtitle, uf_id, image) 
values (1, 'Um policial de cartolina que havia sido colocado na rua para coibir infrações de trânsito foi furtado na Escócia, segundo a polícia local.
A cartolina, que foi batizada de Bob, tinha a foto de um policial em tamanho real empunhando um radar.
O objetivo era que os motoristas, ao verem Bob, com medo de levar multa, reduzissem a velocidade, diminuindo assim o risco de acidentes.
Mas na quinta-feira (29), no começo da tarde, alguém removeu Bob de seu posto de fiscalização.
A polícia de North East Fife apelou aos moradores que passassem informações que ajudem a localizar o "membro inestimável" da equipe.',
'Policial de trânsito de cartolina é furtado na Escócia',
'Função de Bob era coibir excesso de velocidade, mas ele acabou removido de rua.',
10,'https://s2.glbimg.com/RMUh3XQDo-o8N9wmoHosqOIrbV4=/540x304/top/smart/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/o/u/ESwgMPSfANq2T100KYlA/policial.jpg');

insert into news_table (user_id, content, title, subtitle, uf_id, image) 
values (1, 'Um eslovaco que ia visitar a família da mãe em Rotherham, na Inglaterra, comprou por engano uma passagem para Roterdã (Rotterdam na grafia original), na Holanda.
Ele chegou à cidade holandesa sem dinheiro e sem saber falar holandês ou inglês e pediu ajuda à polícia.
A polícia disse, no Twitter, que o engano ocorreu porque o homem "não é articulado e seu conhecimento topográfico não é muito bom".
Os policiais arrumaram abrigo para o homem na noite desta quarta (28) e o encaminharam para uma entidade que iria ajudá-lo a encontrar sua família.',
'Eslovaco que ia visitar a mãe em Rotherham, na Inglaterra, vai parar em Roterdã, na Holanda',
'Ele comprou passagem errada e acabou na Holanda, sem dinheiro e sem saber falar as línguas locais.',
13,'https://s2.glbimg.com/nBm0hPfLEXYbbdpNYJtdkAuAbco=/540x304/top/smart/http://s.glbimg.com/jo/g1/f/original/2013/03/23/1-holanda.jpg');

insert into news_table (user_id, content, title, subtitle, uf_id, image) 
values (1, 'Uma casa com dois emojis pintados em suas paredes que gerou polêmica em uma comunidade litorânea na costa sul do estado americano da Califórnia foi posta à venda por sua dona.
Kathryn Kidd, a dona, pediu US$ 1,749 milhão, cerca de R$ 7 milhões, pela casa.
Os moradores de Manhattan Beach reclamaram da pintura durante uma reunião do conselho municipal no começo do mês. Alguns disseram que se trata de uma "agressão" aos vizinhos.
A pintura foi feita depois que os vizinhos denunciaram que a dona estava alugando a casa para períodos curtos por aplicativo, o que a levou a ser multada em US$ 4 mil (quase R$ 16 mil).
Kathryn disse à TV local que não sabia que os aluguéis de curto prazo eram proibidos e negou que a pintura seja uma retaliação. "Algumas pessoas podem gostar, outras não", disse.
Ela informou que pretende pintar outro emoji na casa antes da venda.',
'Casa com pintura de emojis é posta à venda após polêmica na Califórnia',
'Segundo vizinhos, carinhas foram retaliação após ela ser proibida de alugar imóvel via aplicativo.',
25,'https://s2.glbimg.com/Ke0FaUVxnISoY_g588lbT0Ovghw=/540x304/top/smart/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/J/S/04lNlLQ8aoJkaY2tC6Fw/emoji1.jpg');


insert into news_table (user_id, content, title, subtitle, uf_id, image) 
values (2, 'Um guaxinim "ladrão" ficou preso em uma máquina de venda de lanches no estado americano da Flórida. O caso ocorreu no condado de Volusia na quarta-feira (14). A polícia postou fotos do "assaltante" pego em flagrante.
"Este senhor foi apreendido hoje quando cometia um furto em uma máquina de venda de comida na escola Pine Ridge", disse a polícia.
O guaxinim foi resgatado pelas autoridades de controle animal e solto no mato.',
'Guaxinim "assaltante" fica preso em máquina de venda de lanches nos EUA',
'Incidente curioso ocorreu na quarta-feira (14) na Flórida.',
19,'https://s2.glbimg.com/vjdiXYttKbGcGGskHbxjbF7KhTc=/540x304/top/smart/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/s/D/ozdVXaTy2c98D9G62Jhw/guaxinim1.jpg');

insert into news_table (user_id, content, title, subtitle, uf_id, image) 
values (2, 'Um fugitivo da polícia foi preso na Alemanha graças a um enxame de vespas.
A polícia de Oldenburg disse que o incidente ocorreu quando policiais tentavam prender um homem de 32 anos condenado a 11 meses de custódia.
O suspeito fugiu da polícia pulando de uma varanda, mas acabou caindo em um vespeiro.
Os insetos o atacaram, obrigando o homem a correr para a rua. Os policiais também foram atacados.
O suspeito acabou pulando em uma piscina inflável para escapar das vespas, onde acabou sendo preso.',
'Vespas "ajudam" polícia a prender fugitivo na Alemanha',
'Incidente ocorreu em Oldenburg.',
1,'https://s2.glbimg.com/Vq7XT_QH4hJeue1Tl1MiwTUC8kg=/540x304/top/smart/http://s.glbimg.com/jo/g1/f/original/2015/09/22/vespeiro.jpg');

insert into news_table (user_id, content, title, subtitle, uf_id, image) 
values (2, 'Um homem procurado no Reino Unido ficou insatisfeito com a foto dele publicada pela polícia e sugeriu que os policiais trocassem seu retrato por um em que ele acreditava estar com melhor aparência.
Stephen Murphy, de 33 anos, é procurado pela polícia de Lincolnshire, porque deveria ter aparecido no tribunal em 9 de julho para responder a acusações.
Na quarta-feira (24), a polícia publicou uma foto dele nas redes sociais, pedindo para que a comunidade o denunciasse caso soubesse de seu paradeiro.
Murphy, que diz ser ex-modelo, viu sua foto em um post de um jornal local, o "Lincolnshire Reporter" e mandou à publicação como sugestão uma outra foto sua, em que afirma estar mais bonito, mais fácil de ser identificado e desafiando a polícia a encontrá-lo.',
'Homem procurado não gosta de foto divulgada pela polícia e sugere outra',
'Ex-modelo disse que, com a nova foto, chances de policiais britânicos o encontrarem aumentaria.',
25,'https://s2.glbimg.com/_U7xJUIvRKxhkvKQkgFRUUkY5Wg=/540x304/top/smart/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/o/w/VH78crQQevdUFlhQxbvw/fotos.jpg');


insert into news_table (user_id, content, title, subtitle, uf_id, image) 
values (2, 'Cinco homens foram presos em uma unidade da rede de lanchonetes "Five Guys" ("Cinco Caras", em inglês), no estado americano da Flórida, segundo a polícia local.
O departamento de polícia de Stuart afirmou que as prisões ocorreram na quarta-feira (17), após o quinteto se envolver em uma briga.
Os dois adultos e três adolescentes foram processados, segundo a polícia. A causa da briga ainda é desconhecida.',
'Cinco homens são presos em lanchonete da rede "Five Guys" na Flórida',
'Quinteto se envolveu em uma briga, segundo a polícia.',
20,'https://s2.glbimg.com/8NDfsEizraw77O1AdpIxmE_M6K4=/540x304/top/smart/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/H/J/AK2jFxQ2K7143NwLv0XQ/fiveguys.jpg');

insert into news_table (user_id, content, title, subtitle, uf_id, image) 
values (2, 'Policiais foram atender a um chamado por furto no estado americano da Flórida e acabaram "prendendo" o suspeito: um gato.
O "crime" ocorreu no condado de Collier. Quatro policiais foram atender a um chamado na noite de domingo (1º) em uma casa. Barulhos levaram os moradores a achar que um furto estava em andamento.
Ao chegar, os policiais descobriram que o suspeito era um gatinho.
Ele foi levado a um abrigo, onde a identificação por microchip revelou que se tratava de Bones, um gato de estimação que tinha fugido. O gato foi devolvido ao dono.',
'Gato é "preso" suspeito de furto nos EUA', 
'Família chamou polícia da Flórida por suspeitar de tentativa de roubo, mas era apenas um felino perdido.',
2,'https://s2.glbimg.com/-LTa3tEfJFdJ-IAqnWKnW6PskcA=/540x304/top/smart/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/B/q/3X8o6MT8AhXgnuxP01bQ/gato.jpg');

update news_table set content = 'A cerimônia ao fim de tarde diante de uma enseada de Massachusetts, nos Estados Unidos, parecia o melhor cenário para o casamento de Denice e Aaron Sawitsky. Até que, enquanto os noivos faziam os votos, Aaron resolveu brincar sobre a data escolhida para o matrimônio: "Vamos encarar: 2020 não tem sido o melhor ano". Seria apenas uma piadinha normal nesse tipo de celebração, mas em seguida veio um evento assombroso: um raio acompanhado de forte estrondo a poucos quilômetros dali deram um susto nos convidados.',
subtitle = 'Noivo menciona ano de 2020 e raio cai perto de casamento logo em seguida;' where news_id = 1;