/* eslint-disable no-undef */
Feature('lista');

Scenario('Deberia ver la pantalla principal',  ({ I }) => {
    I.amOnPage('/');
    I.see('La Lista del Super');
    I.see('¿Que tengo que comprar?');
});
