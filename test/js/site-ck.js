$(function(){$("nav ul li").click(function(){$(".content").children().each(function(){$(this).toggle(!1)});$("#"+this.classList[0]).toggle(!0);this.classList[0]=="about"?$(".parallax-mirror").toggle(!0):$(".parallax-mirror").toggle(!1)})});