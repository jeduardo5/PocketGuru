angular
	.module('guruApp')
	.component('quoteSearch', {
  templateUrl: 'quote-search.html',
  controller: QuoteSearchController,
  bindings: {
    phrase '='
  }
});
