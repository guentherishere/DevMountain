//Callback Notes
//Instructor: AJ
//suggestion: we had no pre-reading last night. Do Codeacademy to fill this void
//this would help tremendously

//jQuery
$(function () {
  'use strict'; //considered best practice for browser JS
});

//most common jquery schtuff
//basic syntax
$(window.document).ready(fn); //same as below
$(fn) // callback fun when the page is ready
var $foo = $('.js-foo');
$foo // an element wrapped with jQuery
$('body').on('EVENT_NAME', 'CLASS_NAME')

//never take input from a user and use as html; injection demo
$('body').on('keyup', '.js-hack-text', function (ev) {
   var txt = $(this).val();

   // you get script injection
   $('.js-render').html(txt); //change .html to text
 });

 //how to add something to HTML w. jQuery

//closest searches up, find goes down



//most common jQuery code

Start your app

$(window.document).ready(fn); // same as below
$(fn) // callback fn when the page is ready
Handle an event

$('body').on('EVENT_NAME', 'CLASS_NAME', fn) // callback when event happens
Create an element

$('<li class="blue">') // create a new html element (DOM)
Manipulate an element

var $foo = $('.js-foo')
$foo // an element wrapped with jQuery
$foo.val() // get the value of an input
$foo.text() // get or set the text
$foo.append()
$foo.prepend()
$foo.remove()
$foo.find('.js-bar') // find all children
$foo.closest('.js-bar') // find closest parent
$foo.addClass('.css-foo-class')
$foo.removeClass('.css-foo-class')
$foo.toggleClass('.css-foo-class')
$foo.show()
$foo.hide()
