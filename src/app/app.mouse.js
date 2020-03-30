import React, { Fragment } from 'react';

//create a function for React. 

(function () {
  var mouse, init, mouseX, mouseY, positionElement, printout, timer;

  mouse = document.getElementsByClassName('mouse');

  printout = document.getElementsByClassName('printout');

  mouseX = event => {
    return event.clientX;
  };

  mouseY = event => {
    return event.clientY;
  };

  positionElement = event => {
    var mouse;
    mouse = {
      x: mouseX(event),
      y: mouseY(event) };

    mouse.style.top = mouse.y + 'px';
    return mouse.style.left = mouse.x + 'px';
  }

  timer = false;

  window.onmousemove = init = event => {
    var _event;
    _event = event;
    return timer = setTimeout(() => {
      return positionElement(_event);
    }, 1);
  };
}).call(this);
