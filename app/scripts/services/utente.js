'use strict';

angular.module('angularnewcourseApp')
  .factory('UtenteFactory', UtenteFactory);

function UtenteFactory() {
  var utente = {data: {}};

  return ({
    getUtente: utente,
    setUtente: setUtente
  });

  function setUtente(user) {
    utente.data = user;
    console.log('utente settato', utente.data);
  }
}
