var request = require('request')
var cheerio = require('cheerio')
var fs = require('fs')

request('http://globoesporte.globo.com/futebol/brasileirao-serie-b/', 
  function(error, response, html){
    if (!error && response.statusCode == 200) {

      console.log("Classificacao serie B:");
      var $ = cheerio.load(html);
   }

    var classificacao = $('table.tabela-times tbody tr');
      classificacao.each(function(index, element){
        var posicao = $(element).find('td.tabela-times-posicao').text();
        var nome    = $(element).find('td.tabela-times-time').text();
        var espaco = '';
	if (posicao.length == 1)
	  espaco = '     ';
	else
	  espaco = '    ';
        console.log(posicao + espaco + nome.substring(nome.length - 3, 0));
      });
  }
 );
