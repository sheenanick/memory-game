!function r(t,e,d){function i(c,a){if(!e[c]){if(!t[c]){var o="function"==typeof require&&require;if(!a&&o)return o(c,!0);if(n)return n(c,!0);var s=new Error("Cannot find module '"+c+"'");throw s.code="MODULE_NOT_FOUND",s}var u=e[c]={exports:{}};t[c][0].call(u.exports,function(r){var e=t[c][1][r];return i(e?e:r)},u,u.exports,r,t,e,d)}return e[c].exports}for(var n="function"==typeof require&&require,c=0;c<d.length;c++)i(d[c]);return i}({1:[function(r,t,e){var d=r("./../js/memory.js").turnModule;$(document).ready(function(){var r=new d,t=0;$(".col-md-2").click(function(){t++,t%2==1&&r.clear();var e=this.id;$("#"+e).removeClass("background"),$("#"+e+"img").show();var d=$("#"+e+" img").attr("src"),i=r.flipCard(d,e);t%2==0&&0==i&&($("#"+r.cardIds[0]+"img").delay(500).fadeOut(),$("#"+r.cardIds[1]+"img").delay(500).fadeOut(),setTimeout(function(){$("#"+r.cardIds[0]).addClass("background"),$("#"+r.cardIds[1]).addClass("background")},1e3))})})},{"./../js/memory.js":2}],2:[function(r,t,e){function d(){this.cardsPicked=[],this.cardIds=[]}d.prototype.flipCard=function(r,t){return this.cardsPicked.push(r),this.cardIds.push(t),this.cardsPicked[0]==this.cardsPicked[1]},d.prototype.clear=function(){this.cardsPicked=[],this.cardIds=[]},e.turnModule=d},{}]},{},[1]);