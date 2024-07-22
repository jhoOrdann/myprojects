# Como utilizar este repositório
Olá, seja bem vindo, este é um repositório sobre Aplicativos <i>Web</i> Progressivos (PWA).<br>
Sinta-se à vontade e caso utilize dê uma estrela aí po.

## `index.html`
É uma página de exemplo para demonstrar o início (página inicial) do aplicativo.

## `style.css`
Assim como `index` é o arquivo principal de estilo do site/app.

## `manifest.json`
Explicando resumidamente como algumas funções funcionam:<br>
Abaixo é a parte do código em **json** onde você precisa preencher.
```json
"scope": "URL_DO_SITE",
"start_url": "URL_DO_SITE",
```
`"scope": "URL_DO_SITE"` em `URL_DO_SITE` você deve modificar para a url que seu site está hospedado. 
Seja **vercel**, **github pages**, **render** etc., você deve substituir para a url do seu site, por exemplo:<br>
`seusite.vercel.app`
<br><br>

`"start_url": "URL_DO_SITE"` a mesma coisa acima, substitua `URL_DO_SITE` pela url do seu site.
<br><br>

Precisa de ajuda? [Veja a documentação aqui](https://pwa-guide.gitbook.io/guia).