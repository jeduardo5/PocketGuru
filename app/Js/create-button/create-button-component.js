angular
	.module('guruApp')
	.component('createButton', {
  templateUrl: 'create-button.html',
  controller: CreateButtonController,
  bindings: {
    name: '<'
    phrase:'<'
  }
});
