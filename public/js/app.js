'use strict';

console.log('inside app6.js');

var count = 0;

var increment = function increment() {
    // console.log('inside increment')
    count = count + 1;
    render();
};
var decrement = function decrement() {
    //console.log('inside decrement')
    count = count - 1;
    render();
};
var doublevalue = function doublevalue() {
    count = count * 2;
    render();
};
var dTripleValue = function dTripleValue() {
    count = count * 3;
    render();
};
var resetvalue = function resetvalue() {
    count = 0;
    render();
};
var render = function render() {

    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h3',
            null,
            'Welcome to App-6'
        ),
        React.createElement(
            'div',
            null,
            'Counter :',
            count
        ),
        React.createElement(
            'button',
            { onClick: increment },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: decrement },
            '-1'
        ),
        React.createElement('hr', null),
        React.createElement(
            'button',
            { onClick: doublevalue },
            'double'
        ),
        React.createElement(
            'button',
            { onClick: dTripleValue },
            'Triple'
        ),
        React.createElement(
            'button',
            { onClick: resetvalue },
            'Reset'
        )
    );
    var root = document.getElementById('app');
    ReactDOM.render(template, root);
};
render();
