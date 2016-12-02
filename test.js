'use strict';

var assert = require('assert');
var tagParser = require('./');

let text = `
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>request</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width">
  </head>
  <body>
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a><a href="#">Link 4</a>

    <div class="container">
      <div class="jumbotron text-center">
        <h1>'Allo, 'Allo!</h1>
        <p class="lead">
          <img src="assets/images/yeoman.png" alt="I'm Yeoman"><br>
          Always a pleasure scaffolding your apps.
        </p>
        <p class="animated infinite" ng-class="main.classAnimation">
          <button type="button">Splendid Toastr</button>
        </p>
      </div>

      <div class="row">
        <div class="col-sm-6 col-md-4">
          <div class="thumbnail">
            <p>Hello world</p>
          </div>
        </div>
      </div>
    </div>

  </body>
</html>
`

describe('test', function(){
  it('no closing tag', function() {
    assert(tagParser(text, 'meta').length === 3)
  });

  it('count html tag', function() {
    assert(tagParser(text, 'html', true).length === 1)
  });

  it('count body tag', function() {
    assert(tagParser(text, 'body', true).length === 1)
  });

  it('count title tag', function() {
    assert(tagParser(text, 'title', true).length === 1)
  });

  it('count p tag', function() {
    assert(tagParser(text, 'p', true).length === 3)
  });

  it('count a tag', function() {
    assert(tagParser(text, 'a', true).length === 4)
  });
});