$(document).ready(function(){$("#form").submit(function(){return $.ajax({type:"POST",url:"rest.php",data:$(this).serialize()}).done(function(){alert("Спасибо за заявку!")}),!1})});