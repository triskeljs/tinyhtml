
# @trisquel/tinyhtml

Compact, reliable and customizable HTML minifier.

[![ᴋɪʟᴛ ᴊs](https://jesus.germade.es/assets/images/badge-kiltjs.svg)](https://github.com/kiltjs)
[![npm](https://img.shields.io/npm/v/@trisquel/tinyhtml.svg)](https://www.npmjs.com/package/@trisquel/tinyhtml)
[![Build Status](https://travis-ci.org/kiltjs/trisquel-tinyhtml.svg?branch=master)](https://travis-ci.org/kiltjs/trisquel-tinyhtml)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)


### Installation

``` sh
npm i -D @trisquel/tinyhtml

# npm install --save-dev @trisquel/tinyhtml
```

### Usage

``` js

var tinyHTML = require('@trisquel/tinyhtml');

tinyHTML(`
<body class="mediawiki ltr sitedir-ltr mw-hide-empty-elt ns-4 ns-subject page-Wikipedia_Portada rootpage-Wikipedia_Portada skin-vector action-view">    <div id="mw-page-base" class="noprint"></div>
    <div id="mw-head-base" class="noprint"></div>
    <div id="content" class="mw-body" role="main">
      <a id="top"></a>

              <div id="siteNotice" class="mw-body-content"><!-- CentralNotice --></div>
            <div class="mw-indicators mw-body-content">
</div>
      <h1 id="firstHeading" class="firstHeading" lang="es">Wikipedia:Portada</h1>
                  <div id="bodyContent" class="mw-body-content">
                  <div id="siteSub">De Wikipedia, la enciclopedia libre</div>
                <div id="contentSub"></div>
                        <div id="jump-to-nav" class="mw-jump">
          Saltar a:          <a href="#mw-head">navegación</a>,           <a href="#p-search">búsqueda</a>
        </div>
        <div id="mw-content-text" lang="es" dir="ltr" class="mw-content-ltr"><table style="margin:4px 0 0 0; width:100%; background:none">
<tr>
<td class="MainPageBG" style="width:100%; border:1px solid #C7D0F8; background:#F2F5FD; vertical-align:top; color:#000; -moz-border-radius:4px; -webkit-border-radius: 4px; border-radius: 4px;">
`, {
  ignore_unclosed: true
});
```

> Result

``` html
<body class="mediawiki ltr sitedir-ltr mw-hide-empty-elt ns-4 ns-subject page-Wikipedia_Portada rootpage-Wikipedia_Portada skin-vector action-view"><div id="mw-page-base" class="noprint"></div><div id="mw-head-base" class="noprint"></div><div id="content" class="mw-body" role="main"><a id="top"></a><div id="siteNotice" class="mw-body-content"></div><div class="mw-indicators mw-body-content"></div><h1 id="firstHeading" class="firstHeading" lang="es">Wikipedia:Portada</h1><div id="bodyContent" class="mw-body-content"><div id="siteSub">De Wikipedia, la enciclopedia libre</div><div id="contentSub"></div><div id="jump-to-nav" class="mw-jump">Saltar a:          <a href="#mw-head">navegación</a>,           <a href="#p-search">búsqueda</a></div><div id="mw-content-text" lang="es" dir="ltr" class="mw-content-ltr"><table style="margin:4px 0 0 0;width:100%;background:none"><tr><td class="MainPageBG" style="width:100%;border:1px solid #C7D0F8;background:#F2F5FD;vertical-align:top;color:#000;-moz-border-radius:4px;-webkit-border-radius:4px;border-radius:4px;">
```
