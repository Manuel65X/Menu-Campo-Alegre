
function prev(){
		document.getElementById('secciones-container').scrollLeft -= 270;
}

function next()
{
		document.getElementById('secciones-container').scrollLeft += 270;
}


$(".seccion img").on("click" , function(){
	$(this).toggleClass('zoomed');
	$(".overlay").toggleClass('active');
})
