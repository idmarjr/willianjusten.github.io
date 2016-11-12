---
layout: post
title: "Como criar footer fixo"
date: 2016-06-01 14:43:06
image: '/assets/img/footer-fixo/main.png'
description: 'Aprenda a criar um footer fixo e evite aqueles saltos feios quando se tem pouco conteúdo na tela.'
main-class: 'css'
color: '#2DA0C3'
tags:
- css
- frontend
categories:
twitter_text: 'Aprenda a criar um footer fixo e evite aqueles saltos feios na tela.'
introduction: 'Aprenda a criar um footer fixo e evite aqueles saltos feios quando se tem pouco conteúdo na tela.'
---

## Introdução

Fala pessoal, esse será um post bem rapidinho, que eu achei que todo mundo deveria ver. A maioria de vocês já deve ter feito um site com um rodapé e em determinadas páginas o conteúdo era tão pequeno que o rodapé subia e ficava feio para caramba. Hoje eu vou mostrar para vocês algumas das técnicas para se evitar isso, criando um rodapé fixo de acordo com o conteúdo.

Esse post é uma adaptação/tradução de um post muito bom que vi no [CSS Tricks](https://css-tricks.com/couple-takes-sticky-footer/) e me deu vontade de guardar esse conteúdo no meu site, porque eu mesmo acabo sempre precisando xD

Vou ouvindo meu ídolo [John Frusciante](https://open.spotify.com/artist/7rN3Agir6FaZNfhf5V7mfN) enquanto escrevo esse post.

## A necessidade

Como falei um pouco acima, as vezes, nós temos algum site e queremos que o rodapé fique fixo na parte inferior, mesmo que o conteúdo seja menor que a tela, algo similar a seguinte imagem.

![Imagem de um rodapé fixo](https://cdn.css-tricks.com/wp-content/uploads/2016/05/sticky-footer-1.svg)

E para fazer isso, não é tão complicado, mas demanda alguns "pulos do gato", que vou mostrar para vocês.

## Wrapper com margem negativa

Uma das formas mais comuns é criar um elemento que segura todo o conteúdo exceto o footer. E ele tem uma margem da altura do footer, que é a base [desse site](http://ryanfait.com/html5-sticky-footer/). Então para fazer isso, fazemos o seguinte:

{% highlight html %}
    <body>
      <div class="wrapper">

          content

        <div class="push"></div>
      </div>
      <footer class="footer"></footer>
    </body>
{% endhighlight %}

Aqui você cria um `wrapper` que será responsável por ter uma altura máxima da tela e empurrar o nosso `footer` para baixo. Essa técnica também necessita de um elemento `push` para garantir que a margem negativa não puxe o rodapé e ele cubra alguma parte do conteúdo. E para o css faremos:

{% highlight css %}
    html, body {
      height: 100%;
      margin: 0;
    }

    .wrapper {
      min-height: 100%;
      margin-bottom: -50px;
    }

    .footer,
    .push {
      height: 50px;
    }
{% endhighlight %}

Para que possamos definir um elemento qualquer da tela com altura máxima, precisamos primeiro definir que o `html` e o `body` tenham uma altura de `100%`. Depois temos ali nosso `wrapper` que vai ter obrigatoriamente ter uma altura mínima de `100%` e ali está a margem negativa, que representa a altura do rodapé. Segue abaixo um pen dessa técnica:

<p data-height="302" data-theme-id="11319" data-slug-hash="VjZmGj" data-default-tab="result" data-user="chriscoyier" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/chriscoyier/pen/VjZmGj/">Sticky Footer with Negative Margin 1</a> by Chris Coyier (<a href="http://codepen.io/chriscoyier">@chriscoyier</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script src="//assets.codepen.io/assets/embed/ei.js"></script>

## Margin-top negativa no footer

Essa técnica não necessita de um elemento `push`, mas ao invés disso, necessita de um outro elemento de `wrapper` em torno do conteúdo, isso para poder aplicar um `padding-bottom` para não permitir o rodapé subir em cima do conteúdo. O markup fica assim:

{% highlight html %}
    <body>
      <div class="content">
        <div class="content-inside">
          content
        </div>
      </div>
      <footer class="footer"></footer>
    </body>
{% endhighlight %}

E o CSS então, irá aplicar um `padding-bottom` no `content-inside` e o rodapé fará a margem negativa, para poder ocupar seu espaço na parte inferior.

{% highlight css %}
    html, body {
      height: 100%;
      margin: 0;
    }

    .content {
      min-height: 100%;
    }

    .content-inside {
      padding: 20px;
      padding-bottom: 50px;
    }

    .footer {
      height: 50px;
      margin-top: -50px;
    }
{% endhighlight %}

O visual ficará o mesmo:

<p data-height="300" data-theme-id="11319" data-slug-hash="aZoBMb" data-default-tab="result" data-user="chriscoyier" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/chriscoyier/pen/aZoBMb/">Sticky Footer with Negative Margins 2</a> by Chris Coyier (<a href="http://codepen.io/chriscoyier">@chriscoyier</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script src="//assets.codepen.io/assets/embed/ei.js"></script>

## Usando calc() para calcular a altura certa

Esse método é bastante legal, pois você não vai precisar criar elementos extras para ajudar a altura. Para isso você vai utilizar o método `calc()` e uma unidade de medida que eu gosto bastante que é a `vh` (viewport height), que serve para calcular a altura máxima da tela.

{% highlight html %}
    <body>
      <div class="content">
        content
      </div>
      <footer class="footer"></footer>
    </body>
{% endhighlight %}

E no css teremos:

{% highlight css %}
    .content {
      min-height: calc(100vh - 70px);
    }

    .footer {
      height: 50px;
    }
{% endhighlight %}

Repare que estamos diminuindo ao invés de um altura de `50px`, o valor de `70px`, isso está sendo feito, pois assumimos que o último elemento do `content` tenha uma margem para o rodapé. O valor de `100vh` fará com que o content tenha o tamanho todo da tela menos a altura que determinamos.

<p data-height="300" data-theme-id="11319" data-slug-hash="jqRXBz" data-default-tab="result" data-user="chriscoyier" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/chriscoyier/pen/jqRXBz/">Sticky Footer with calc();</a> by Chris Coyier (<a href="http://codepen.io/chriscoyier">@chriscoyier</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script src="//assets.codepen.io/assets/embed/ei.js"></script>

## Utilizando flexbox

Um grande problema das técnicas acima é que precisamos ter uma altura fixa para o nosso footer e isso, em geral, não é algo muito bom para o design, os conteúdos podem mudar, assim como a altura. Usar o flexbox para o rodapé fixo não só não necessita de markup extra, como também não precisa de uma altura fixa, genial não?

{% highlight html %}
    <body>
      <div class="content">
        content
      </div>
      <footer class="footer"></footer>
    </body>
{% endhighlight %}

E um css tão simples quanto:

{% highlight css %}
    html {
      height: 100%;
    }

    body {
      min-height: 100%;
      display: flex;
      flex-direction: column;
    }

    .content {
      flex: 1;
    }
{% endhighlight %}

<p data-height="300" data-theme-id="11319" data-slug-hash="RRbKrL" data-default-tab="result" data-user="chriscoyier" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/chriscoyier/pen/RRbKrL/">Sticky Footer with Flexbox</a> by Chris Coyier (<a href="http://codepen.io/chriscoyier">@chriscoyier</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script src="//assets.codepen.io/assets/embed/ei.js"></script>

Você pode até adicionar um header acima ou mais conteúdo abaixo, sem problemas. O truque é o seguinte:

- `flex: 1` no elemento filho que você quer que ocupe todo o espaço (o `content` no nosso caso)

Tem um guia bastante legal sobre flexbox [aqui](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

## Utilizando Grid Layout

A opção de Grid Layout é a opção mais nova de todas e ainda não tem um suporte tão bom. Mas se você já quiser dar uma olhadinha, tem [outro guia legal](https://css-tricks.com/snippets/css/complete-guide-grid/). No markup teremos:

{% highlight html %}
    <body>
      <div class="content">
        content
      </div>
      <footer class="footer"></footer>
    </body>
{% endhighlight %}

E no CSS:

{% highlight css %}
    html {
      height: 100%;
    }

    body {
      min-height: 100%;
      display: grid;
      grid-template-rows: 1fr auto;
    }

    .footer {
      grid-row-start: 2;
      grid-row-end: 3;
    }
{% endhighlight %}

Essa demo irá funcionar no Chrome Canary e Firefox Developer Edition, então, muito provavelmente não vai estar funcionando no seu browser tá, mas já é uma forma de começar a ver essa nova tecnologia =)

<p data-height="300" data-theme-id="11319" data-slug-hash="YWKNrE" data-default-tab="result" data-user="chriscoyier" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/chriscoyier/pen/YWKNrE/">Sticky Footer with Grid</a> by Chris Coyier (<a href="http://codepen.io/chriscoyier">@chriscoyier</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script src="//assets.codepen.io/assets/embed/ei.js"></script>

## Conclusão

Bom pessoal, foi um post rapidinho e simples, só mesmo para que vocês vejam as diferentes formas de fazer essa técnica, que é bastante importante e legal.

Se você gostou do post, não deixe de comentar, curtir, compartilhar =)

Também lembrando aqui, que a promoção de [pré-venda](http://willianjusten.com.br/pre-venda-curso-de-svg/) do meu Curso de SVG está chegando ao fim, esse domingo (05/06) é o último, então corre para aproveitar o descontão!
















