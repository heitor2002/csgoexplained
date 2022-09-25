$('#utilitarios').click(function(){
	$('.option').fadeOut(200)
	$('.bar').slideUp(300).delay(200).fadeIn(100)
	$('.buttom-back').slideUp(300).delay(200).fadeIn(100)
})

$('.buttom-back').click(function(){
	$('.bar').fadeOut(200)
	$('.buttom-back').fadeOut(200)
	$('.option').slideUp(300).delay(200).fadeIn(100)
})

$('#logo_home').click(function(){
	$(window.location.href = 'index.html')
})

$('#bomb1').click(function(){
	$(window.location.href = 'maps_smokes.html')
})

$('#bomb2').click(function(){
	$(window.location.href = 'maps_flash.html')
})

$('#bomb3').click(function(){
	$(window.location.href = 'maps_he.html')
})

$('#bomb4').click(function(){
	$(window.location.href = 'maps_moli.html')
})

$('#comandos').click(function(){
	$(window.location.href = 'comandos.html')
})

$('#cache_map').click(function(){
	$(window.location.href = 'cache_map.html')
})

$('#nuke_map').click(function(){
	$(window.location.href = 'nuke_map.html')
})

$('#dust2_map').click(function(){
	$(window.location.href = 'd2_map.html')
})

$('#overpass_map').click(function(){
	$(window.location.href = 'overpass_map.html')
})

$('#inferno_map').click(function(){
	$(window.location.href = 'inferno_map.html')
})

$('#train_map').click(function(){
	$(window.location.href = 'train_map.html')
})

$('#mirage_map').click(function(){
	$(window.location.href = 'mirage_map.html')
})

$('#vertigo_map').click(function(){
	$(window.location.href = 'vertigo_map.html')
})

$('#map_view').click(function(){
	$(window.location.href = 'maps.html')
})

$('#funcoes').click(function(){
	$(window.location.href = 'funcoes.html')
})

$('#mirage_map_smoke').click(function(){
	$(window.location.href = 'mirage_map_smoke.html')
})

$('#mirage_map_molotov').click(function(){
	$(window.location.href = 'mirage_map_molotov.html')
})

$('#mirage_map_flash').click(function(){
	$(window.location.href = 'mirage_map_flash.html')
})

$('#cache_map_smoke').click(function(){
	$(window.location.href = 'cache_map_smoke.html')
})

$('#cache_map_molotov').click(function(){
	$(window.location.href = 'cache_map_molotov.html')
})

$('#cache_map_flash').click(function(){
	$(window.location.href = 'cache_map_flash.html')
})

$('#dust2_map_smoke').click(function(){
	$(window.location.href = 'dust2_map_smoke.html')
})

//Alterações

$('#dust2_map_molotov').click(function(){
	$(window.location.href = 'dust2_map_molotov.html')
})

$('#dust2_map_flash').click(function(){
	$(window.location.href = 'dust2_map_flash.html')
})

$('#inferno_map_smoke').click(function(){
	$(window.location.href = 'inferno_map_smoke.html')
})

$('#inferno_map_flash').click(function(){
	$(window.location.href = 'inferno_map_flash.html')
})

$('#inferno_map_molotov').click(function(){
	$(window.location.href = 'inferno_map_molotov.html')
})

$('#nuke_map_molotov').click(function(){
	$(window.location.href = 'nuke_map_molotov.html')
})

$('#nuke_map_smoke').click(function(){
	$(window.location.href = 'nuke_map_smoke.html')
})

$('#nuke_map_flash').click(function(){
	$(window.location.href = 'nuke_map_flash.html')
})

$('#overpass_map_flash').click(function(){
	$(window.location.href = 'overpass_map_flash.html')
})

$('#overpass_map_smoke').click(function(){
	$(window.location.href = 'overpass_map_smoke.html')
})

$('#overpass_map_molotov').click(function(){
	$(window.location.href = 'overpass_map_molotov.html')
})

$('#train_map_molotov').click(function(){
	$(window.location.href = 'train_map_molotov.html')
})

$('#train_map_flash').click(function(){
	$(window.location.href = 'train_map_flash.html')
})

$('#train_map_smoke').click(function(){
	$(window.location.href = 'train_map_smoke.html')
})

$('#vertigo_map_smoke').click(function(){
	$(window.location.href = 'vertigo_map_smoke.html')
})

$('#vertigo_map_flash').click(function(){
	$(window.location.href = 'vertigo_map_flash.html')
})

$('#vertigo_map_molotov').click(function(){
	$(window.location.href = 'vertigo_map_molotov.html')
})

//Alterações

$('#sub-menu').hover(function(){
	$('.menu-utilitarios').slideToggle()
})

$('.menu-utilitarios').hover(function(){
	$('.menu-utilitarios').slideToggle()
})

$('.img-mobile').click(function(){
	$('.menu-mobile').slideToggle()
})

//VÍDEOS SMOKE MIRAGE

$('#smoke1').click(function(){
	$('.box-video-janelinha').slideToggle(1000)
	$('.box-video-l').css('display','none')
	$('.box-video-janelao').css('display','none')
	$('.box-video-ligacao').css('display','none')
	$('.box-video-passagem').css('display','none')
	$('.box-video-jungle').css('display','none')
	$('.box-video-cabecinha').css('display','none')
	$('.box-video-ct').css('display','none')

})

$('#smoke2').click(function(){
	$('.box-video-janelinha').css('display','none')
	$('.box-video-l').slideToggle(1000)
	$('.box-video-janelao').css('display','none')
	$('.box-video-ligacao').css('display','none')
	$('.box-video-passagem').css('display','none')
	$('.box-video-jungle').css('display','none')
	$('.box-video-cabecinha').css('display','none')
	$('.box-video-ct').css('display','none')

})

$('#smoke3').click(function(){
	$('.box-video-janelinha').css('display','none')
	$('.box-video-l').css('display','none')
	$('.box-video-janelao').slideToggle(1000)
	$('.box-video-ligacao').css('display','none')
	$('.box-video-passagem').css('display','none')
	$('.box-video-jungle').css('display','none')
	$('.box-video-cabecinha').css('display','none')
	$('.box-video-ct').css('display','none')

})

$('#smoke4').click(function(){
	$('.box-video-janelinha').css('display','none')
	$('.box-video-l').css('display','none')
	$('.box-video-janelao').css('display','none')
	$('.box-video-ligacao').slideToggle(1000)
	$('.box-video-passagem').css('display','none')
	$('.box-video-jungle').css('display','none')
	$('.box-video-cabecinha').css('display','none')
	$('.box-video-ct').css('display','none')

})

$('#smoke5').click(function(){
	$('.box-video-janelinha').css('display','none')
	$('.box-video-l').css('display','none')
	$('.box-video-janelao').css('display','none')
	$('.box-video-ligacao').css('display','none')
	$('.box-video-passagem').slideToggle(1000)
	$('.box-video-jungle').css('display','none')
	$('.box-video-cabecinha').css('display','none')
	$('.box-video-ct').css('display','none')

})

$('#smoke6').click(function(){
	$('.box-video-janelinha').css('display','none')
	$('.box-video-l').css('display','none')
	$('.box-video-janelao').css('display','none')
	$('.box-video-ligacao').css('display','none')
	$('.box-video-passagem').css('display','none')
	$('.box-video-jungle').slideToggle(1000)
	$('.box-video-cabecinha').css('display','none')
	$('.box-video-ct').css('display','none')

})

$('#smoke7').click(function(){
	$('.box-video-janelinha').css('display','none')
	$('.box-video-l').css('display','none')
	$('.box-video-janelao').css('display','none')
	$('.box-video-ligacao').css('display','none')
	$('.box-video-passagem').css('display','none')
	$('.box-video-jungle').css('display','none')
	$('.box-video-cabecinha').slideToggle(1000)
	$('.box-video-ct').css('display','none')

})

$('#smoke8').click(function(){
	$('.box-video-janelinha').css('display','none')
	$('.box-video-l').css('display','none')
	$('.box-video-janelao').css('display','none')
	$('.box-video-ligacao').css('display','none')
	$('.box-video-passagem').css('display','none')
	$('.box-video-jungle').css('display','none')
	$('.box-video-cabecinha').css('display','none')
	$('.box-video-ct').slideToggle(1000)

})

//VÍDEOS MOLOTOV MIRAGE

$('#molotov1').click(function(){
	$('.box-video-molotov-forest').slideToggle(1000)
	$('.box-video-molotov-janelao').css('display','none')
	$('.box-video-molotov-cabecinha').css('display','none')
	$('.box-video-molotov-sanduiche').css('display','none')
	$('.box-video-molotov-tetris1').css('display','none')
	$('.box-video-molotov-tetris2').css('display','none')
	$('.box-video-molotov-fogo').css('display','none')
	$('.box-video-molotov-default').css('display','none')
	$('.box-video-molotov-areia').css('display','none')
	

})

$('#molotov2').click(function(){
	$('.box-video-molotov-forest').css('display','none')
	$('.box-video-molotov-janelao').slideToggle(1000)
	$('.box-video-molotov-cabecinha').css('display','none')
	$('.box-video-molotov-sanduiche').css('display','none')
	$('.box-video-molotov-tetris1').css('display','none')
	$('.box-video-molotov-tetris2').css('display','none')
	$('.box-video-molotov-fogo').css('display','none')
	$('.box-video-molotov-default').css('display','none')
	$('.box-video-molotov-areia').css('display','none')
	

})

$('#molotov3').click(function(){
	$('.box-video-molotov-forest').css('display','none')
	$('.box-video-molotov-janelao').css('display','none')
	$('.box-video-molotov-cabecinha').slideToggle(1000)
	$('.box-video-molotov-sanduiche').css('display','none')
	$('.box-video-molotov-tetris1').css('display','none')
	$('.box-video-molotov-tetris2').css('display','none')
	$('.box-video-molotov-fogo').css('display','none')
	$('.box-video-molotov-default').css('display','none')
	$('.box-video-molotov-areia').css('display','none')
	

})

$('#molotov4').click(function(){
	$('.box-video-molotov-forest').css('display','none')
	$('.box-video-molotov-janelao').css('display','none')
	$('.box-video-molotov-cabecinha').css('display','none')
	$('.box-video-molotov-sanduiche').slideToggle(1000)
	$('.box-video-molotov-tetris1').css('display','none')
	$('.box-video-molotov-tetris2').css('display','none')
	$('.box-video-molotov-fogo').css('display','none')
	$('.box-video-molotov-default').css('display','none')
	$('.box-video-molotov-areia').css('display','none')
	

})

$('#molotov5').click(function(){
	$('.box-video-molotov-forest').css('display','none')
	$('.box-video-molotov-janelao').css('display','none')
	$('.box-video-molotov-cabecinha').css('display','none')
	$('.box-video-molotov-sanduiche').css('display','none')
	$('.box-video-molotov-tetris1').slideToggle(1000)
	$('.box-video-molotov-tetris2').css('display','none')
	$('.box-video-molotov-fogo').css('display','none')
	$('.box-video-molotov-default').css('display','none')
	$('.box-video-molotov-areia').css('display','none')
	

})

$('#molotov6').click(function(){
	$('.box-video-molotov-forest').css('display','none')
	$('.box-video-molotov-janelao').css('display','none')
	$('.box-video-molotov-cabecinha').css('display','none')
	$('.box-video-molotov-sanduiche').css('display','none')
	$('.box-video-molotov-tetris1').css('display','none')
	$('.box-video-molotov-tetris2').slideToggle(1000)
	$('.box-video-molotov-fogo').css('display','none')
	$('.box-video-molotov-default').css('display','none')
	$('.box-video-molotov-areia').css('display','none')
	

})

$('#molotov7').click(function(){
	$('.box-video-molotov-forest').css('display','none')
	$('.box-video-molotov-janelao').css('display','none')
	$('.box-video-molotov-cabecinha').css('display','none')
	$('.box-video-molotov-sanduiche').css('display','none')
	$('.box-video-molotov-tetris1').css('display','none')
	$('.box-video-molotov-tetris2').css('display','none')
	$('.box-video-molotov-fogo').slideToggle(1000)
	$('.box-video-molotov-default').css('display','none')
	$('.box-video-molotov-areia').css('display','none')
	

})

$('#molotov8').click(function(){
	$('.box-video-molotov-forest').css('display','none')
	$('.box-video-molotov-janelao').css('display','none')
	$('.box-video-molotov-cabecinha').css('display','none')
	$('.box-video-molotov-sanduiche').css('display','none')
	$('.box-video-molotov-tetris1').css('display','none')
	$('.box-video-molotov-tetris2').css('display','none')
	$('.box-video-molotov-fogo').css('display','none')
	$('.box-video-molotov-default').slideToggle(1000)
	$('.box-video-molotov-areia').css('display','none')
	

})

$('#molotov9').click(function(){
	$('.box-video-molotov-forest').css('display','none')
	$('.box-video-molotov-janelao').css('display','none')
	$('.box-video-molotov-cabecinha').css('display','none')
	$('.box-video-molotov-sanduiche').css('display','none')
	$('.box-video-molotov-tetris1').css('display','none')
	$('.box-video-molotov-tetris2').css('display','none')
	$('.box-video-molotov-fogo').css('display','none')
	$('.box-video-molotov-default').css('display','none')
	$('.box-video-molotov-areia').slideToggle(1000)
	

})

//VÍDEOS FLASHS MIRAGE

$('#flash1').click(function(){
	$('.box-video-flash-tapete1').slideToggle(1000)
	$('.box-video-flash-tapete2').css('display','none')
	$('.box-video-flash-tapete3').css('display','none')
	$('.box-video-flash-bombb').css('display','none')
	$('.box-video-flash-mercado').css('display','none')
	$('.box-video-flash-meio').css('display','none')
	$('.box-video-flash-ligacao').css('display','none')
	$('.box-video-flash-cabecinha').css('display','none')
	$('.box-video-flash-caverna').css('display','none')
	

})

$('#flash2').click(function(){
	$('.box-video-flash-tapete1').css('display','none')
	$('.box-video-flash-tapete2').slideToggle(1000)
	$('.box-video-flash-tapete3').css('display','none')
	$('.box-video-flash-bombb').css('display','none')
	$('.box-video-flash-mercado').css('display','none')
	$('.box-video-flash-meio').css('display','none')
	$('.box-video-flash-ligacao').css('display','none')
	$('.box-video-flash-cabecinha').css('display','none')
	$('.box-video-flash-caverna').css('display','none')
	

})

$('#flash3').click(function(){
	$('.box-video-flash-tapete1').css('display','none')
	$('.box-video-flash-tapete2').css('display','none')
	$('.box-video-flash-tapete3').slideToggle(1000)
	$('.box-video-flash-bombb').css('display','none')
	$('.box-video-flash-mercado').css('display','none')
	$('.box-video-flash-meio').css('display','none')
	$('.box-video-flash-ligacao').css('display','none')
	$('.box-video-flash-cabecinha').css('display','none')
	$('.box-video-flash-caverna').css('display','none')
	

})

$('#flash4').click(function(){
	$('.box-video-flash-tapete1').css('display','none')
	$('.box-video-flash-tapete2').css('display','none')
	$('.box-video-flash-tapete3').css('display','none')
	$('.box-video-flash-bombb').slideToggle(1000)
	$('.box-video-flash-mercado').css('display','none')
	$('.box-video-flash-meio').css('display','none')
	$('.box-video-flash-ligacao').css('display','none')
	$('.box-video-flash-cabecinha').css('display','none')
	$('.box-video-flash-caverna').css('display','none')
	

})

$('#flash5').click(function(){
	$('.box-video-flash-tapete1').css('display','none')
	$('.box-video-flash-tapete2').css('display','none')
	$('.box-video-flash-tapete3').css('display','none')
	$('.box-video-flash-bombb').css('display','none')
	$('.box-video-flash-mercado').slideToggle(1000)
	$('.box-video-flash-meio').css('display','none')
	$('.box-video-flash-ligacao').css('display','none')
	$('.box-video-flash-cabecinha').css('display','none')
	$('.box-video-flash-caverna').css('display','none')
	

})

$('#flash6').click(function(){
	$('.box-video-flash-tapete1').css('display','none')
	$('.box-video-flash-tapete2').css('display','none')
	$('.box-video-flash-tapete3').css('display','none')
	$('.box-video-flash-bombb').css('display','none')
	$('.box-video-flash-mercado').css('display','none')
	$('.box-video-flash-meio').slideToggle(1000)
	$('.box-video-flash-ligacao').css('display','none')
	$('.box-video-flash-cabecinha').css('display','none')
	$('.box-video-flash-caverna').css('display','none')
	

})

$('#flash7').click(function(){
	$('.box-video-flash-tapete1').css('display','none')
	$('.box-video-flash-tapete2').css('display','none')
	$('.box-video-flash-tapete3').css('display','none')
	$('.box-video-flash-bombb').css('display','none')
	$('.box-video-flash-mercado').css('display','none')
	$('.box-video-flash-meio').css('display','none')
	$('.box-video-flash-ligacao').slideToggle(1000)
	$('.box-video-flash-cabecinha').css('display','none')
	$('.box-video-flash-caverna').css('display','none')
	

})

$('#flash8').click(function(){
	$('.box-video-flash-tapete1').css('display','none')
	$('.box-video-flash-tapete2').css('display','none')
	$('.box-video-flash-tapete3').css('display','none')
	$('.box-video-flash-bombb').css('display','none')
	$('.box-video-flash-mercado').css('display','none')
	$('.box-video-flash-meio').css('display','none')
	$('.box-video-flash-ligacao').css('display','none')
	$('.box-video-flash-cabecinha').slideToggle(1000)
	$('.box-video-flash-caverna').css('display','none')
	

})

$('#flash9').click(function(){
	$('.box-video-flash-tapete1').css('display','none')
	$('.box-video-flash-tapete2').css('display','none')
	$('.box-video-flash-tapete3').css('display','none')
	$('.box-video-flash-bombb').css('display','none')
	$('.box-video-flash-mercado').css('display','none')
	$('.box-video-flash-meio').css('display','none')
	$('.box-video-flash-ligacao').css('display','none')
	$('.box-video-flash-cabecinha').css('display','none')
	$('.box-video-flash-caverna').slideToggle(1000)
	

})

//VÍDEOS SMOKES DA MIRAGE

$('#smoke9').click(function(){
	$('.box-video-cache-garagem').slideToggle(1000)
	$('.box-video-cache-passagem').css('display','none')
	$('.box-video-cache-ceu2').css('display','none')
	$('.box-video-cache-ligacao').css('display','none')
	$('.box-video-cache-ceu').css('display','none')
	$('.box-video-cache-ct').css('display','none')
	$('.box-video-cache-miolo').css('display','none')

})

$('#smoke10').click(function(){
	$('.box-video-cache-garagem').css('display','none')
	$('.box-video-cache-passagem').slideToggle(1000)
	$('.box-video-cache-ceu2').css('display','none')
	$('.box-video-cache-ligacao').css('display','none')
	$('.box-video-cache-ceu').css('display','none')
	$('.box-video-cache-ct').css('display','none')
	$('.box-video-cache-miolo').css('display','none')

})

$('#smoke11').click(function(){
	$('.box-video-cache-garagem').css('display','none')
	$('.box-video-cache-passagem').css('display','none')
	$('.box-video-cache-ceu2').slideToggle(1000)
	$('.box-video-cache-ligacao').css('display','none')
	$('.box-video-cache-ceu').css('display','none')
	$('.box-video-cache-ct').css('display','none')
	$('.box-video-cache-miolo').css('display','none')

})

$('#smoke12').click(function(){
	$('.box-video-cache-garagem').css('display','none')
	$('.box-video-cache-passagem').css('display','none')
	$('.box-video-cache-ceu2').css('display','none')
	$('.box-video-cache-ligacao').slideToggle(1000)
	$('.box-video-cache-ceu').css('display','none')
	$('.box-video-cache-ct').css('display','none')
	$('.box-video-cache-miolo').css('display','none')

})

$('#smoke13').click(function(){
	$('.box-video-cache-garagem').css('display','none')
	$('.box-video-cache-passagem').css('display','none')
	$('.box-video-cache-ceu2').css('display','none')
	$('.box-video-cache-ligacao').css('display','none')
	$('.box-video-cache-ceu').slideToggle(1000)
	$('.box-video-cache-ct').css('display','none')
	$('.box-video-cache-miolo').css('display','none')

})

$('#smoke14').click(function(){
	$('.box-video-cache-garagem').css('display','none')
	$('.box-video-cache-passagem').css('display','none')
	$('.box-video-cache-ceu2').css('display','none')
	$('.box-video-cache-ligacao').css('display','none')
	$('.box-video-cache-ceu').css('display','none')
	$('.box-video-cache-ct').slideToggle(1000)
	$('.box-video-cache-miolo').css('display','none')

})

$('#smoke15').click(function(){
	$('.box-video-cache-garagem').css('display','none')
	$('.box-video-cache-passagem').css('display','none')
	$('.box-video-cache-ceu2').css('display','none')
	$('.box-video-cache-ligacao').css('display','none')
	$('.box-video-cache-ceu').css('display','none')
	$('.box-video-cache-ct').css('display','none')
	$('.box-video-cache-miolo').slideToggle(1000)

})

$('#molotov10').click(function(){
	$('.box-video-cache-molotov-escanteio').slideToggle(1000)
	$('.box-video-cache-molotov-byali').css('display','none')
	$('.box-video-cache-molotov-bomba').css('display','none')
	$('.box-video-cache-molotov-bomba').css('display','none')
	$('.box-video-cache-molotov-branca').css('display','none')
	$('.box-video-cache-molotov-lona').css('display','none')
	$('.box-video-cache-molotov-xadrez').css('display','none')
	$('.box-video-cache-molotov-trincheira').css('display','none')
	$('.box-video-cache-molotov-bombb').css('display','none')

})

$('#molotov11').click(function(){
	$('.box-video-cache-molotov-escanteio').css('display','none')
	$('.box-video-cache-molotov-byali').slideToggle(1000)
	$('.box-video-cache-molotov-bomba').css('display','none')
	$('.box-video-cache-molotov-bomba').css('display','none')
	$('.box-video-cache-molotov-branca').css('display','none')
	$('.box-video-cache-molotov-lona').css('display','none')
	$('.box-video-cache-molotov-xadrez').css('display','none')
	$('.box-video-cache-molotov-trincheira').css('display','none')
	$('.box-video-cache-molotov-bombb').css('display','none')

})

$('#molotov12').click(function(){
	$('.box-video-cache-molotov-escanteio').css('display','none')
	$('.box-video-cache-molotov-byali').css('display','none')
	$('.box-video-cache-molotov-bomba').slideToggle(1000)
	$('.box-video-cache-molotov-branca').css('display','none')
	$('.box-video-cache-molotov-lona').css('display','none')
	$('.box-video-cache-molotov-xadrez').css('display','none')
	$('.box-video-cache-molotov-trincheira').css('display','none')
	$('.box-video-cache-molotov-bombb').css('display','none')

})

$('#molotov13').click(function(){
	$('.box-video-cache-molotov-escanteio').css('display','none')
	$('.box-video-cache-molotov-byali').css('display','none')
	$('.box-video-cache-molotov-bomba').css('display','none')
	$('.box-video-cache-molotov-branca').slideToggle(1000)
	$('.box-video-cache-molotov-lona').css('display','none')
	$('.box-video-cache-molotov-xadrez').css('display','none')
	$('.box-video-cache-molotov-trincheira').css('display','none')
	$('.box-video-cache-molotov-bombb').css('display','none')

})

$('#molotov14').click(function(){
	$('.box-video-cache-molotov-escanteio').css('display','none')
	$('.box-video-cache-molotov-byali').css('display','none')
	$('.box-video-cache-molotov-bomba').css('display','none')
	$('.box-video-cache-molotov-branca').css('display','none')
	$('.box-video-cache-molotov-lona').slideToggle(1000)
	$('.box-video-cache-molotov-xadrez').css('display','none')
	$('.box-video-cache-molotov-trincheira').css('display','none')
	$('.box-video-cache-molotov-bombb').css('display','none')

})

$('#molotov15').click(function(){
	$('.box-video-cache-molotov-escanteio').css('display','none')
	$('.box-video-cache-molotov-byali').css('display','none')
	$('.box-video-cache-molotov-bomba').css('display','none')
	$('.box-video-cache-molotov-branca').css('display','none')
	$('.box-video-cache-molotov-lona').css('display','none')
	$('.box-video-cache-molotov-xadrez').slideToggle(1000)
	$('.box-video-cache-molotov-trincheira').css('display','none')
	$('.box-video-cache-molotov-bombb').css('display','none')

})

$('#molotov16').click(function(){
	$('.box-video-cache-molotov-escanteio').css('display','none')
	$('.box-video-cache-molotov-byali').css('display','none')
	$('.box-video-cache-molotov-bomba').css('display','none')
	$('.box-video-cache-molotov-branca').css('display','none')
	$('.box-video-cache-molotov-lona').css('display','none')
	$('.box-video-cache-molotov-xadrez').css('display','none')
	$('.box-video-cache-molotov-trincheira').slideToggle(1000)
	$('.box-video-cache-molotov-bombb').css('display','none')

})

$('#molotov17').click(function(){
	$('.box-video-cache-molotov-escanteio').css('display','none')
	$('.box-video-cache-molotov-byali').css('display','none')
	$('.box-video-cache-molotov-bomba').css('display','none')
	$('.box-video-cache-molotov-branca').css('display','none')
	$('.box-video-cache-molotov-lona').css('display','none')
	$('.box-video-cache-molotov-xadrez').css('display','none')
	$('.box-video-cache-molotov-trincheira').css('display','none')
	$('.box-video-cache-molotov-bombb').slideToggle(1000)

})

$('#flash10').click(function(){
	$('.box-video-cache-flash-bomba').slideToggle(1000)
	$('.box-video-cache-flash-garagem').css('display','none')
	$('.box-video-cache-flash-rua').css('display','none')
	$('.box-video-cache-flash-janelinha').css('display','none')
	$('.box-video-cache-flash-cimento').css('display','none')
	$('.box-video-cache-flash-galpao').css('display','none')
	$('.box-video-cache-flash-ceu').css('display','none')
	$('.box-video-cache-flash-bombb').css('display','none')
})

$('#flash11').click(function(){
	$('.box-video-cache-flash-bomba').css('display','none')
	$('.box-video-cache-flash-garagem').slideToggle(1000)
	$('.box-video-cache-flash-rua').css('display','none')
	$('.box-video-cache-flash-janelinha').css('display','none')
	$('.box-video-cache-flash-cimento').css('display','none')
	$('.box-video-cache-flash-galpao').css('display','none')
	$('.box-video-cache-flash-ceu').css('display','none')
	$('.box-video-cache-flash-bombb').css('display','none')
})

$('#flash12').click(function(){
	$('.box-video-cache-flash-bomba').css('display','none')
	$('.box-video-cache-flash-garagem').css('display','none')
	$('.box-video-cache-flash-rua').slideToggle(1000)
	$('.box-video-cache-flash-janelinha').css('display','none')
	$('.box-video-cache-flash-cimento').css('display','none')
	$('.box-video-cache-flash-galpao').css('display','none')
	$('.box-video-cache-flash-ceu').css('display','none')
	$('.box-video-cache-flash-bombb').css('display','none')
})

$('#flash13').click(function(){
	$('.box-video-cache-flash-bomba').css('display','none')
	$('.box-video-cache-flash-garagem').css('display','none')
	$('.box-video-cache-flash-rua').css('display','none')
	$('.box-video-cache-flash-janelinha').slideToggle(1000)
	$('.box-video-cache-flash-cimento').css('display','none')
	$('.box-video-cache-flash-galpao').css('display','none')
	$('.box-video-cache-flash-ceu').css('display','none')
	$('.box-video-cache-flash-bombb').css('display','none')
})

$('#flash14').click(function(){
	$('.box-video-cache-flash-bomba').css('display','none')
	$('.box-video-cache-flash-garagem').css('display','none')
	$('.box-video-cache-flash-rua').css('display','none')
	$('.box-video-cache-flash-janelinha').css('display','none')
	$('.box-video-cache-flash-cimento').slideToggle(1000)
	$('.box-video-cache-flash-galpao').css('display','none')
	$('.box-video-cache-flash-ceu').css('display','none')
	$('.box-video-cache-flash-bombb').css('display','none')
})

$('#flash15').click(function(){
	$('.box-video-cache-flash-bomba').css('display','none')
	$('.box-video-cache-flash-garagem').css('display','none')
	$('.box-video-cache-flash-rua').css('display','none')
	$('.box-video-cache-flash-janelinha').css('display','none')
	$('.box-video-cache-flash-cimento').css('display','none')
	$('.box-video-cache-flash-galpao').slideToggle(1000)
	$('.box-video-cache-flash-ceu').css('display','none')
	$('.box-video-cache-flash-bombb').css('display','none')
})

$('#flash16').click(function(){
	$('.box-video-cache-flash-bomba').css('display','none')
	$('.box-video-cache-flash-garagem').css('display','none')
	$('.box-video-cache-flash-rua').css('display','none')
	$('.box-video-cache-flash-janelinha').css('display','none')
	$('.box-video-cache-flash-cimento').css('display','none')
	$('.box-video-cache-flash-galpao').css('display','none')
	$('.box-video-cache-flash-ceu').slideToggle(1000)
	$('.box-video-cache-flash-bombb').css('display','none')
})

$('#flash17').click(function(){
	$('.box-video-cache-flash-bomba').css('display','none')
	$('.box-video-cache-flash-garagem').css('display','none')
	$('.box-video-cache-flash-rua').css('display','none')
	$('.box-video-cache-flash-janelinha').css('display','none')
	$('.box-video-cache-flash-cimento').css('display','none')
	$('.box-video-cache-flash-galpao').css('display','none')
	$('.box-video-cache-flash-ceu').css('display','none')
	$('.box-video-cache-flash-bombb').slideToggle(1000)
})

$('#smoke16').click(function(){
	$('.box-video-dust2-smoke-buraco').slideToggle(1000)
	$('.box-video-dust2-smoke-porta').css('display','none')
	$('.box-video-dust2-smoke-meio').css('display','none')
	$('.box-video-dust2-smoke-ct').css('display','none')
	$('.box-video-dust2-smoke-passagem').css('display','none')
	$('.box-video-dust2-smoke-prego').css('display','none')
	$('.box-video-dust2-smoke-caixabranca').css('display','none')
})

$('#smoke17').click(function(){
	$('.box-video-dust2-smoke-buraco').css('display','none')
	$('.box-video-dust2-smoke-porta').slideToggle(1000)
	$('.box-video-dust2-smoke-meio').css('display','none')
	$('.box-video-dust2-smoke-ct').css('display','none')
	$('.box-video-dust2-smoke-passagem').css('display','none')
	$('.box-video-dust2-smoke-prego').css('display','none')
	$('.box-video-dust2-smoke-caixabranca').css('display','none')
})

$('#smoke18').click(function(){
	$('.box-video-dust2-smoke-buraco').css('display','none')
	$('.box-video-dust2-smoke-porta').css('display','none')
	$('.box-video-dust2-smoke-meio').slideToggle(1000)
	$('.box-video-dust2-smoke-ct').css('display','none')
	$('.box-video-dust2-smoke-passagem').css('display','none')
	$('.box-video-dust2-smoke-prego').css('display','none')
	$('.box-video-dust2-smoke-caixabranca').css('display','none')
})

$('#smoke19').click(function(){
	$('.box-video-dust2-smoke-buraco').css('display','none')
	$('.box-video-dust2-smoke-porta').css('display','none')
	$('.box-video-dust2-smoke-meio').css('display','none')
	$('.box-video-dust2-smoke-ct').slideToggle(1000)
	$('.box-video-dust2-smoke-passagem').css('display','none')
	$('.box-video-dust2-smoke-prego').css('display','none')
	$('.box-video-dust2-smoke-caixabranca').css('display','none')
})

$('#smoke20').click(function(){
	$('.box-video-dust2-smoke-buraco').css('display','none')
	$('.box-video-dust2-smoke-porta').css('display','none')
	$('.box-video-dust2-smoke-meio').css('display','none')
	$('.box-video-dust2-smoke-ct').css('display','none')
	$('.box-video-dust2-smoke-passagem').slideToggle(1000)
	$('.box-video-dust2-smoke-prego').css('display','none')
	$('.box-video-dust2-smoke-caixabranca').css('display','none')
})

$('#smoke21').click(function(){
	$('.box-video-dust2-smoke-buraco').css('display','none')
	$('.box-video-dust2-smoke-porta').css('display','none')
	$('.box-video-dust2-smoke-meio').css('display','none')
	$('.box-video-dust2-smoke-ct').css('display','none')
	$('.box-video-dust2-smoke-passagem').css('display','none')
	$('.box-video-dust2-smoke-prego').slideToggle(1000)
	$('.box-video-dust2-smoke-caixabranca').css('display','none')
})

$('#smoke22').click(function(){
	$('.box-video-dust2-smoke-buraco').css('display','none')
	$('.box-video-dust2-smoke-porta').css('display','none')
	$('.box-video-dust2-smoke-meio').css('display','none')
	$('.box-video-dust2-smoke-ct').css('display','none')
	$('.box-video-dust2-smoke-passagem').css('display','none')
	$('.box-video-dust2-smoke-prego').css('display','none')
	$('.box-video-dust2-smoke-caixabranca').slideToggle(1000)
})


$('#flash18').click(function(){
	$('.box-video-dust2-flash-bombb2').slideToggle(1000)
	$('.box-video-dust2-flash-bombb').css('display','none')
	$('.box-video-dust2-flash-meio').css('display','none')
	$('.box-video-dust2-flash-meio2').css('display','none')
	$('.box-video-dust2-flash-meio3').css('display','none')
	$('.box-video-dust2-flash-fundo').css('display','none')
	$('.box-video-dust2-flash-fundo2').css('display','none')
	$('.box-video-dust2-flash-coqueiro').css('display','none')

})

$('#flash19').click(function(){
	$('.box-video-dust2-flash-bombb2').css('display','none')
	$('.box-video-dust2-flash-bombb').slideToggle(1000)
	$('.box-video-dust2-flash-meio3').css('display','none')
	$('.box-video-dust2-flash-meio2').css('display','none')
	$('.box-video-dust2-flash-meio').css('display','none')
	$('.box-video-dust2-flash-fundo').css('display','none')
	$('.box-video-dust2-flash-fundo2').css('display','none')
	$('.box-video-dust2-flash-coqueiro').css('display','none')

})

$('#flash20').click(function(){
	$('.box-video-dust2-flash-bombb2').css('display','none')
	$('.box-video-dust2-flash-bombb').css('display','none')
	$('.box-video-dust2-flash-meio3').slideToggle(1000)
	$('.box-video-dust2-flash-meio2').css('display','none')
	$('.box-video-dust2-flash-meio').css('display','none')
	$('.box-video-dust2-flash-fundo').css('display','none')
	$('.box-video-dust2-flash-fundo2').css('display','none')
	$('.box-video-dust2-flash-coqueiro').css('display','none')

})

$('#flash21').click(function(){
	$('.box-video-dust2-flash-bombb2').css('display','none')
	$('.box-video-dust2-flash-bombb').css('display','none')
	$('.box-video-dust2-flash-meio3').css('display','none')
	$('.box-video-dust2-flash-meio2').slideToggle(1000)
	$('.box-video-dust2-flash-meio').css('display','none')
	$('.box-video-dust2-flash-fundo').css('display','none')
	$('.box-video-dust2-flash-fundo2').css('display','none')
	$('.box-video-dust2-flash-coqueiro').css('display','none')

})

$('#flash22').click(function(){
	$('.box-video-dust2-flash-bombb2').css('display','none')
	$('.box-video-dust2-flash-bombb').css('display','none')
	$('.box-video-dust2-flash-meio3').css('display','none')
	$('.box-video-dust2-flash-meio2').css('display','none')
	$('.box-video-dust2-flash-fundo2').slideToggle(1000)
	$('.box-video-dust2-flash-fundo').css('display','none')
	$('.box-video-dust2-flash-meio').css('display','none')
	$('.box-video-dust2-flash-coqueiro').css('display','none')

})

$('#flash23').click(function(){
	$('.box-video-dust2-flash-bombb2').css('display','none')
	$('.box-video-dust2-flash-bombb').css('display','none')
	$('.box-video-dust2-flash-meio3').css('display','none')
	$('.box-video-dust2-flash-meio2').css('display','none')
	$('.box-video-dust2-flash-fundo2').css('display','none')
	$('.box-video-dust2-flash-fundo').slideToggle(1000)
	$('.box-video-dust2-flash-meio').css('display','none')
	$('.box-video-dust2-flash-coqueiro').css('display','none')

})

$('#flash24').click(function(){
	$('.box-video-dust2-flash-bombb2').css('display','none')
	$('.box-video-dust2-flash-bombb').css('display','none')
	$('.box-video-dust2-flash-meio3').css('display','none')
	$('.box-video-dust2-flash-meio2').css('display','none')
	$('.box-video-dust2-flash-fundo2').css('display','none')
	$('.box-video-dust2-flash-fundo').css('display','none')
	$('.box-video-dust2-flash-meio').slideToggle(1000)
	$('.box-video-dust2-flash-coqueiro').css('display','none')

})

$('#flash25').click(function(){
	$('.box-video-dust2-flash-bombb2').css('display','none')
	$('.box-video-dust2-flash-bombb').css('display','none')
	$('.box-video-dust2-flash-meio3').css('display','none')
	$('.box-video-dust2-flash-meio2').css('display','none')
	$('.box-video-dust2-flash-fundo2').css('display','none')
	$('.box-video-dust2-flash-fundo').css('display','none')
	$('.box-video-dust2-flash-meio').css('display','none')
	$('.box-video-dust2-flash-coqueiro').slideToggle(1000)

})

$('#molotov18').click(function(){
	$('.box-video-dust2-molotov-buraco').slideToggle(1000)
	$('.box-video-dust2-molotov-bombb').css('display','none')
	$('.box-video-dust2-molotov-carrob').css('display','none')
	$('.box-video-dust2-molotov-escuro').css('display','none')
	$('.box-video-dust2-molotov-bomba').css('display','none')
	$('.box-video-dust2-molotov-carro').css('display','none')
	$('.box-video-dust2-molotov-caixa').css('display','none')

})

$('#molotov19').click(function(){
	$('.box-video-dust2-molotov-buraco').css('display','none')
	$('.box-video-dust2-molotov-bombb').slideToggle(1000)
	$('.box-video-dust2-molotov-carrob').css('display','none')
	$('.box-video-dust2-molotov-escuro').css('display','none')
	$('.box-video-dust2-molotov-bomba').css('display','none')
	$('.box-video-dust2-molotov-carro').css('display','none')
	$('.box-video-dust2-molotov-caixa').css('display','none')

})

$('#molotov20').click(function(){
	$('.box-video-dust2-molotov-buraco').css('display','none')
	$('.box-video-dust2-molotov-bombb').css('display','none')
	$('.box-video-dust2-molotov-carrob').slideToggle(1000)
	$('.box-video-dust2-molotov-escuro').css('display','none')
	$('.box-video-dust2-molotov-bomba').css('display','none')
	$('.box-video-dust2-molotov-carro').css('display','none')
	$('.box-video-dust2-molotov-caixa').css('display','none')

})

$('#molotov21').click(function(){
	$('.box-video-dust2-molotov-buraco').css('display','none')
	$('.box-video-dust2-molotov-bombb').css('display','none')
	$('.box-video-dust2-molotov-carrob').css('display','none')
	$('.box-video-dust2-molotov-escuro').slideToggle(1000)
	$('.box-video-dust2-molotov-bomba').css('display','none')
	$('.box-video-dust2-molotov-carro').css('display','none')
	$('.box-video-dust2-molotov-caixa').css('display','none')

})

$('#molotov22').click(function(){
	$('.box-video-dust2-molotov-buraco').css('display','none')
	$('.box-video-dust2-molotov-bombb').css('display','none')
	$('.box-video-dust2-molotov-carrob').css('display','none')
	$('.box-video-dust2-molotov-escuro').css('display','none')
	$('.box-video-dust2-molotov-bomba').slideToggle(1000)
	$('.box-video-dust2-molotov-carro').css('display','none')
	$('.box-video-dust2-molotov-caixa').css('display','none')

})

$('#molotov23').click(function(){
	$('.box-video-dust2-molotov-buraco').css('display','none')
	$('.box-video-dust2-molotov-bombb').css('display','none')
	$('.box-video-dust2-molotov-carrob').css('display','none')
	$('.box-video-dust2-molotov-escuro').css('display','none')
	$('.box-video-dust2-molotov-bomba').css('display','none')
	$('.box-video-dust2-molotov-carro').slideToggle(1000)
	$('.box-video-dust2-molotov-caixa').css('display','none')

})

$('#molotov24').click(function(){
	$('.box-video-dust2-molotov-buraco').css('display','none')
	$('.box-video-dust2-molotov-bombb').css('display','none')
	$('.box-video-dust2-molotov-carrob').css('display','none')
	$('.box-video-dust2-molotov-escuro').css('display','none')
	$('.box-video-dust2-molotov-bomba').css('display','none')
	$('.box-video-dust2-molotov-carro').css('display','none')
	$('.box-video-dust2-molotov-caixa').slideToggle(1000)

})

$('#molotov25').click(function(){
	$('.box-video-inferno-molotov-newba').slideToggle(1000)
	$('.box-video-inferno-molotov-tripla').css('display','none')
	$('.box-video-inferno-molotov-caixao').css('display','none')
	$('.box-video-inferno-molotov-bombb').css('display','none')
	$('.box-video-inferno-molotov-escanteioa').css('display','none')
	$('.box-video-inferno-molotov-bomba').css('display','none')
	$('.box-video-inferno-molotov-sacada').css('display','none')
})

$('#molotov26').click(function(){
	$('.box-video-inferno-molotov-newba').css('display','none')
	$('.box-video-inferno-molotov-tripla').slideToggle(1000)
	$('.box-video-inferno-molotov-caixao').css('display','none')
	$('.box-video-inferno-molotov-bombb').css('display','none')
	$('.box-video-inferno-molotov-escanteioa').css('display','none')
	$('.box-video-inferno-molotov-bomba').css('display','none')
	$('.box-video-inferno-molotov-sacada').css('display','none')
})

$('#molotov27').click(function(){
	$('.box-video-inferno-molotov-newba').css('display','none')
	$('.box-video-inferno-molotov-tripla').css('display','none')
	$('.box-video-inferno-molotov-caixao').slideToggle(1000)
	$('.box-video-inferno-molotov-bombb').css('display','none')
	$('.box-video-inferno-molotov-escanteioa').css('display','none')
	$('.box-video-inferno-molotov-bomba').css('display','none')
	$('.box-video-inferno-molotov-sacada').css('display','none')
})

$('#molotov28').click(function(){
	$('.box-video-inferno-molotov-newba').css('display','none')
	$('.box-video-inferno-molotov-tripla').css('display','none')
	$('.box-video-inferno-molotov-caixao').css('display','none')
	$('.box-video-inferno-molotov-bombb').slideToggle(1000)
	$('.box-video-inferno-molotov-escanteioa').css('display','none')
	$('.box-video-inferno-molotov-bomba').css('display','none')
	$('.box-video-inferno-molotov-sacada').css('display','none')
})

$('#molotov29').click(function(){
	$('.box-video-inferno-molotov-newba').css('display','none')
	$('.box-video-inferno-molotov-tripla').css('display','none')
	$('.box-video-inferno-molotov-caixao').css('display','none')
	$('.box-video-inferno-molotov-bombb').css('display','none')
	$('.box-video-inferno-molotov-escanteioa').slideToggle(1000)
	$('.box-video-inferno-molotov-bomba').css('display','none')
	$('.box-video-inferno-molotov-sacada').css('display','none')
})

$('#molotov30').click(function(){
	$('.box-video-inferno-molotov-newba').css('display','none')
	$('.box-video-inferno-molotov-tripla').css('display','none')
	$('.box-video-inferno-molotov-caixao').css('display','none')
	$('.box-video-inferno-molotov-bombb').css('display','none')
	$('.box-video-inferno-molotov-escanteioa').css('display','none')
	$('.box-video-inferno-molotov-bomba').slideToggle(1000)
	$('.box-video-inferno-molotov-sacada').css('display','none')
})

$('#molotov31').click(function(){
	$('.box-video-inferno-molotov-newba').css('display','none')
	$('.box-video-inferno-molotov-tripla').css('display','none')
	$('.box-video-inferno-molotov-caixao').css('display','none')
	$('.box-video-inferno-molotov-bombb').css('display','none')
	$('.box-video-inferno-molotov-escanteioa').css('display','none')
	$('.box-video-inferno-molotov-bomba').css('display','none')
	$('.box-video-inferno-molotov-sacada').slideToggle(1000)
})

$('#smoke23').click(function(){
	$('.box-video-inferno-smoke-caixao').slideToggle(1000)
	$('.box-video-inferno-smoke-ct').css('display','none')
	$('.box-video-inferno-smoke-arco').css('display','none')
	$('.box-video-inferno-smoke-nip').css('display','none')
	$('.box-video-inferno-smoke-biblioteca').css('display','none')
	$('.box-video-inferno-smoke-xuxa').css('display','none')
	$('.box-video-inferno-smoke-varanda').css('display','none')
	$('.box-video-inferno-smoke-areia').css('display','none')

})

$('#smoke24').click(function(){
	$('.box-video-inferno-smoke-caixao').css('display','none')
	$('.box-video-inferno-smoke-ct').slideToggle(1000)
	$('.box-video-inferno-smoke-arco').css('display','none')
	$('.box-video-inferno-smoke-nip').css('display','none')
	$('.box-video-inferno-smoke-biblioteca').css('display','none')
	$('.box-video-inferno-smoke-xuxa').css('display','none')
	$('.box-video-inferno-smoke-varanda').css('display','none')
	$('.box-video-inferno-smoke-areia').css('display','none')

})

$('#smoke25').click(function(){
	$('.box-video-inferno-smoke-caixao').css('display','none')
	$('.box-video-inferno-smoke-ct').css('display','none')
	$('.box-video-inferno-smoke-arco').slideToggle(1000)
	$('.box-video-inferno-smoke-nip').css('display','none')
	$('.box-video-inferno-smoke-biblioteca').css('display','none')
	$('.box-video-inferno-smoke-xuxa').css('display','none')
	$('.box-video-inferno-smoke-varanda').css('display','none')
	$('.box-video-inferno-smoke-areia').css('display','none')

})

$('#smoke26').click(function(){
	$('.box-video-inferno-smoke-caixao').css('display','none')
	$('.box-video-inferno-smoke-ct').css('display','none')
	$('.box-video-inferno-smoke-arco').css('display','none')
	$('.box-video-inferno-smoke-nip').slideToggle(1000)
	$('.box-video-inferno-smoke-biblioteca').css('display','none')
	$('.box-video-inferno-smoke-xuxa').css('display','none')
	$('.box-video-inferno-smoke-varanda').css('display','none')
	$('.box-video-inferno-smoke-areia').css('display','none')

})

$('#smoke27').click(function(){
	$('.box-video-inferno-smoke-caixao').css('display','none')
	$('.box-video-inferno-smoke-ct').css('display','none')
	$('.box-video-inferno-smoke-arco').css('display','none')
	$('.box-video-inferno-smoke-nip').css('display','none')
	$('.box-video-inferno-smoke-biblioteca').slideToggle(1000)
	$('.box-video-inferno-smoke-xuxa').css('display','none')
	$('.box-video-inferno-smoke-varanda').css('display','none')
	$('.box-video-inferno-smoke-areia').css('display','none')

})

$('#smoke28').click(function(){
	$('.box-video-inferno-smoke-caixao').css('display','none')
	$('.box-video-inferno-smoke-ct').css('display','none')
	$('.box-video-inferno-smoke-arco').css('display','none')
	$('.box-video-inferno-smoke-nip').css('display','none')
	$('.box-video-inferno-smoke-biblioteca').css('display','none')
	$('.box-video-inferno-smoke-xuxa').slideToggle(1000)
	$('.box-video-inferno-smoke-varanda').css('display','none')
	$('.box-video-inferno-smoke-areia').css('display','none')

})

$('#smoke29').click(function(){
	$('.box-video-inferno-smoke-caixao').css('display','none')
	$('.box-video-inferno-smoke-ct').css('display','none')
	$('.box-video-inferno-smoke-arco').css('display','none')
	$('.box-video-inferno-smoke-nip').css('display','none')
	$('.box-video-inferno-smoke-biblioteca').css('display','none')
	$('.box-video-inferno-smoke-xuxa').css('display','none')
	$('.box-video-inferno-smoke-varanda').slideToggle(1000)
	$('.box-video-inferno-smoke-areia').css('display','none')

})

$('#smoke30').click(function(){
	$('.box-video-inferno-smoke-caixao').css('display','none')
	$('.box-video-inferno-smoke-ct').css('display','none')
	$('.box-video-inferno-smoke-arco').css('display','none')
	$('.box-video-inferno-smoke-nip').css('display','none')
	$('.box-video-inferno-smoke-biblioteca').css('display','none')
	$('.box-video-inferno-smoke-xuxa').css('display','none')
	$('.box-video-inferno-smoke-varanda').css('display','none')
	$('.box-video-inferno-smoke-areia').slideToggle(1000)

})

$('#flash26').click(function(){
	$('.box-video-inferno-flash-bomba').slideToggle(1000)
	$('.box-video-inferno-flash-tripla').css('display','none')
	$('.box-video-inferno-flash-banana').css('display','none')
	$('.box-video-inferno-flash-banana2').css('display','none')
	$('.box-video-inferno-flash-biblioteca').css('display','none')
	$('.box-video-inferno-flash-meio').css('display','none')
	$('.box-video-inferno-flash-tapete1').css('display','none')
	$('.box-video-inferno-flash-tapete2').css('display','none')
	$('.box-video-inferno-flash-tapete3').css('display','none')
})

$('#flash27').click(function(){
	$('.box-video-inferno-flash-bomba').css('display','none')
	$('.box-video-inferno-flash-tripla').slideToggle(1000)
	$('.box-video-inferno-flash-banana').css('display','none')
	$('.box-video-inferno-flash-banana2').css('display','none')
	$('.box-video-inferno-flash-biblioteca').css('display','none')
	$('.box-video-inferno-flash-meio').css('display','none')
	$('.box-video-inferno-flash-tapete1').css('display','none')
	$('.box-video-inferno-flash-tapete2').css('display','none')
	$('.box-video-inferno-flash-tapete3').css('display','none')
})

$('#flash28').click(function(){
	$('.box-video-inferno-flash-bomba').css('display','none')
	$('.box-video-inferno-flash-tripla').css('display','none')
	$('.box-video-inferno-flash-banana').slideToggle(1000)
	$('.box-video-inferno-flash-banana2').css('display','none')
	$('.box-video-inferno-flash-biblioteca').css('display','none')
	$('.box-video-inferno-flash-meio').css('display','none')
	$('.box-video-inferno-flash-tapete1').css('display','none')
	$('.box-video-inferno-flash-tapete2').css('display','none')
	$('.box-video-inferno-flash-tapete3').css('display','none')
})

$('#flash29').click(function(){
	$('.box-video-inferno-flash-bomba').css('display','none')
	$('.box-video-inferno-flash-tripla').css('display','none')
	$('.box-video-inferno-flash-banana').css('display','none')
	$('.box-video-inferno-flash-banana2').slideToggle(1000)
	$('.box-video-inferno-flash-biblioteca').css('display','none')
	$('.box-video-inferno-flash-meio').css('display','none')
	$('.box-video-inferno-flash-tapete1').css('display','none')
	$('.box-video-inferno-flash-tapete2').css('display','none')
	$('.box-video-inferno-flash-tapete3').css('display','none')
})

$('#flash30').click(function(){
	$('.box-video-inferno-flash-bomba').css('display','none')
	$('.box-video-inferno-flash-tripla').css('display','none')
	$('.box-video-inferno-flash-banana').css('display','none')
	$('.box-video-inferno-flash-banana2').css('display','none')
	$('.box-video-inferno-flash-biblioteca').slideToggle(1000)
	$('.box-video-inferno-flash-meio').css('display','none')
	$('.box-video-inferno-flash-tapete1').css('display','none')
	$('.box-video-inferno-flash-tapete2').css('display','none')
	$('.box-video-inferno-flash-tapete3').css('display','none')
})

$('#flash31').click(function(){
	$('.box-video-inferno-flash-bomba').css('display','none')
	$('.box-video-inferno-flash-tripla').css('display','none')
	$('.box-video-inferno-flash-banana').css('display','none')
	$('.box-video-inferno-flash-banana2').css('display','none')
	$('.box-video-inferno-flash-biblioteca').css('display','none')
	$('.box-video-inferno-flash-meio').slideToggle(1000)
	$('.box-video-inferno-flash-tapete1').css('display','none')
	$('.box-video-inferno-flash-tapete2').css('display','none')
	$('.box-video-inferno-flash-tapete3').css('display','none')
})

$('#flash32').click(function(){
	$('.box-video-inferno-flash-bomba').css('display','none')
	$('.box-video-inferno-flash-tripla').css('display','none')
	$('.box-video-inferno-flash-banana').css('display','none')
	$('.box-video-inferno-flash-banana2').css('display','none')
	$('.box-video-inferno-flash-biblioteca').css('display','none')
	$('.box-video-inferno-flash-meio').css('display','none')
	$('.box-video-inferno-flash-tapete1').slideToggle(1000)
	$('.box-video-inferno-flash-tapete2').css('display','none')
	$('.box-video-inferno-flash-tapete3').css('display','none')
})

$('#flash33').click(function(){
	$('.box-video-inferno-flash-bomba').css('display','none')
	$('.box-video-inferno-flash-tripla').css('display','none')
	$('.box-video-inferno-flash-banana').css('display','none')
	$('.box-video-inferno-flash-banana2').css('display','none')
	$('.box-video-inferno-flash-biblioteca').css('display','none')
	$('.box-video-inferno-flash-meio').css('display','none')
	$('.box-video-inferno-flash-tapete1').css('display','none')
	$('.box-video-inferno-flash-tapete2').slideToggle(1000)
	$('.box-video-inferno-flash-tapete3').css('display','none')
})

$('#flash34').click(function(){
	$('.box-video-inferno-flash-bomba').css('display','none')
	$('.box-video-inferno-flash-tripla').css('display','none')
	$('.box-video-inferno-flash-banana').css('display','none')
	$('.box-video-inferno-flash-banana2').css('display','none')
	$('.box-video-inferno-flash-biblioteca').css('display','none')
	$('.box-video-inferno-flash-meio').css('display','none')
	$('.box-video-inferno-flash-tapete1').css('display','none')
	$('.box-video-inferno-flash-tapete2').css('display','none')
	$('.box-video-inferno-flash-tapete3').slideToggle(1000)
})

/////////////////////////////////////////////////

$('#smoke31').click(function(){
	$('.box-video-nuke-smoke-ceu').slideToggle(1000)
	$('.box-video-nuke-smoke-casinha').css('display','none')
	$('.box-video-nuke-smoke-terra').css('display','none')
	$('.box-video-nuke-smoke-azul').css('display','none')
	$('.box-video-nuke-smoke-fora4').css('display','none')
	$('.box-video-nuke-smoke-garagem').css('display','none')
	$('.box-video-nuke-smoke-fora3').css('display','none')
	$('.box-video-nuke-smoke-fora').css('display','none')
})

$('#smoke32').click(function(){
	$('.box-video-nuke-smoke-ceu').css('display','none')
	$('.box-video-nuke-smoke-casinha').slideToggle(1000)
	$('.box-video-nuke-smoke-terra').css('display','none')
	$('.box-video-nuke-smoke-azul').css('display','none')
	$('.box-video-nuke-smoke-fora4').css('display','none')
	$('.box-video-nuke-smoke-garagem').css('display','none')
	$('.box-video-nuke-smoke-fora3').css('display','none')
	$('.box-video-nuke-smoke-fora').css('display','none')
})

$('#smoke33').click(function(){
	$('.box-video-nuke-smoke-ceu').css('display','none')
	$('.box-video-nuke-smoke-casinha').css('display','none')
	$('.box-video-nuke-smoke-terra').slideToggle(1000)
	$('.box-video-nuke-smoke-azul').css('display','none')
	$('.box-video-nuke-smoke-fora4').css('display','none')
	$('.box-video-nuke-smoke-garagem').css('display','none')
	$('.box-video-nuke-smoke-fora3').css('display','none')
	$('.box-video-nuke-smoke-fora').css('display','none')
})

$('#smoke34').click(function(){
	$('.box-video-nuke-smoke-ceu').css('display','none')
	$('.box-video-nuke-smoke-casinha').css('display','none')
	$('.box-video-nuke-smoke-terra').css('display','none')
	$('.box-video-nuke-smoke-azul').slideToggle(1000)
	$('.box-video-nuke-smoke-fora4').css('display','none')
	$('.box-video-nuke-smoke-garagem').css('display','none')
	$('.box-video-nuke-smoke-fora3').css('display','none')
	$('.box-video-nuke-smoke-fora').css('display','none')
})

$('#smoke35').click(function(){
	$('.box-video-nuke-smoke-ceu').css('display','none')
	$('.box-video-nuke-smoke-casinha').css('display','none')
	$('.box-video-nuke-smoke-terra').css('display','none')
	$('.box-video-nuke-smoke-azul').css('display','none')
	$('.box-video-nuke-smoke-fora4').slideToggle(1000)
	$('.box-video-nuke-smoke-garagem').css('display','none')
	$('.box-video-nuke-smoke-fora3').css('display','none')
	$('.box-video-nuke-smoke-fora').css('display','none')
})

$('#smoke36').click(function(){
	$('.box-video-nuke-smoke-ceu').css('display','none')
	$('.box-video-nuke-smoke-casinha').css('display','none')
	$('.box-video-nuke-smoke-terra').css('display','none')
	$('.box-video-nuke-smoke-azul').css('display','none')
	$('.box-video-nuke-smoke-fora4').css('display','none')
	$('.box-video-nuke-smoke-garagem').slideToggle(1000)
	$('.box-video-nuke-smoke-fora3').css('display','none')
	$('.box-video-nuke-smoke-fora').css('display','none')
})

$('#smoke37').click(function(){
	$('.box-video-nuke-smoke-ceu').css('display','none')
	$('.box-video-nuke-smoke-casinha').css('display','none')
	$('.box-video-nuke-smoke-terra').css('display','none')
	$('.box-video-nuke-smoke-azul').css('display','none')
	$('.box-video-nuke-smoke-fora4').css('display','none')
	$('.box-video-nuke-smoke-garagem').css('display','none')
	$('.box-video-nuke-smoke-fora3').slideToggle(1000)
	$('.box-video-nuke-smoke-fora').css('display','none')
})

$('#smoke38').click(function(){
	$('.box-video-nuke-smoke-ceu').css('display','none')
	$('.box-video-nuke-smoke-casinha').css('display','none')
	$('.box-video-nuke-smoke-terra').css('display','none')
	$('.box-video-nuke-smoke-azul').css('display','none')
	$('.box-video-nuke-smoke-fora4').css('display','none')
	$('.box-video-nuke-smoke-garagem').css('display','none')
	$('.box-video-nuke-smoke-fora3').css('display','none')
	$('.box-video-nuke-smoke-fora').slideToggle(1000)
})



/////////////////////////////////////////////////
$('#smoke39').click(function(){
	$('.box-video-overpass-smoke-banco').slideToggle(1000)
	$('.box-video-overpass-smoke-lixeira').css('display','none')
	$('.box-video-overpass-smoke-caminhao').css('display','none')
	$('.box-video-overpass-smoke-ceu').css('display','none')
	$('.box-video-overpass-smoke-barril').css('display','none')
	$('.box-video-overpass-smoke-bombb').css('display','none')
	$('.box-video-overpass-smoke-banheiro').css('display','none')
	$('.box-video-overpass-smoke-passagem').css('display','none')
})

$('#smoke40').click(function(){
	$('.box-video-overpass-smoke-banco').css('display','none')
	$('.box-video-overpass-smoke-lixeira').slideToggle(1000)
	$('.box-video-overpass-smoke-caminhao').css('display','none')
	$('.box-video-overpass-smoke-ceu').css('display','none')
	$('.box-video-overpass-smoke-barril').css('display','none')
	$('.box-video-overpass-smoke-bombb').css('display','none')
	$('.box-video-overpass-smoke-banheiro').css('display','none')
	$('.box-video-overpass-smoke-passagem').css('display','none')
})

$('#smoke41').click(function(){
	$('.box-video-overpass-smoke-banco').css('display','none')
	$('.box-video-overpass-smoke-lixeira').css('display','none')
	$('.box-video-overpass-smoke-caminhao').slideToggle(1000)
	$('.box-video-overpass-smoke-ceu').css('display','none')
	$('.box-video-overpass-smoke-barril').css('display','none')
	$('.box-video-overpass-smoke-bombb').css('display','none')
	$('.box-video-overpass-smoke-banheiro').css('display','none')
	$('.box-video-overpass-smoke-passagem').css('display','none')
})

$('#smoke42').click(function(){
	$('.box-video-overpass-smoke-banco').css('display','none')
	$('.box-video-overpass-smoke-lixeira').css('display','none')
	$('.box-video-overpass-smoke-caminhao').css('display','none')
	$('.box-video-overpass-smoke-ceu').slideToggle(1000)
	$('.box-video-overpass-smoke-barril').css('display','none')
	$('.box-video-overpass-smoke-bombb').css('display','none')
	$('.box-video-overpass-smoke-banheiro').css('display','none')
	$('.box-video-overpass-smoke-passagem').css('display','none')
})

$('#smoke43').click(function(){
	$('.box-video-overpass-smoke-banco').css('display','none')
	$('.box-video-overpass-smoke-lixeira').css('display','none')
	$('.box-video-overpass-smoke-caminhao').css('display','none')
	$('.box-video-overpass-smoke-ceu').css('display','none')
	$('.box-video-overpass-smoke-barril').slideToggle(1000)
	$('.box-video-overpass-smoke-bombb').css('display','none')
	$('.box-video-overpass-smoke-banheiro').css('display','none')
	$('.box-video-overpass-smoke-passagem').css('display','none')
})

$('#smoke44').click(function(){
	$('.box-video-overpass-smoke-banco').css('display','none')
	$('.box-video-overpass-smoke-lixeira').css('display','none')
	$('.box-video-overpass-smoke-caminhao').css('display','none')
	$('.box-video-overpass-smoke-ceu').css('display','none')
	$('.box-video-overpass-smoke-barril').css('display','none')
	$('.box-video-overpass-smoke-bombb').slideToggle(1000)
	$('.box-video-overpass-smoke-banheiro').css('display','none')
	$('.box-video-overpass-smoke-passagem').css('display','none')
})

$('#smoke45').click(function(){
	$('.box-video-overpass-smoke-banco').css('display','none')
	$('.box-video-overpass-smoke-lixeira').css('display','none')
	$('.box-video-overpass-smoke-caminhao').css('display','none')
	$('.box-video-overpass-smoke-ceu').css('display','none')
	$('.box-video-overpass-smoke-barril').css('display','none')
	$('.box-video-overpass-smoke-bombb').css('display','none')
	$('.box-video-overpass-smoke-banheiro').slideToggle(1000)
	$('.box-video-overpass-smoke-passagem').css('display','none')
})

$('#smoke46').click(function(){
	$('.box-video-overpass-smoke-banco').css('display','none')
	$('.box-video-overpass-smoke-lixeira').css('display','none')
	$('.box-video-overpass-smoke-caminhao').css('display','none')
	$('.box-video-overpass-smoke-ceu').css('display','none')
	$('.box-video-overpass-smoke-barril').css('display','none')
	$('.box-video-overpass-smoke-bombb').css('display','none')
	$('.box-video-overpass-smoke-banheiro').css('display','none')
	$('.box-video-overpass-smoke-passagem').slideToggle(1000)
})

$('#smoke47').click(function(){
	$('.box-video-train-smoke-ligacaotr').slideToggle(1000)
	$('.box-video-train-smoke-olof').css('display','none')
	$('.box-video-train-smoke-fundo').css('display','none')
	$('.box-video-train-smoke-sanduiche').css('display','none')
	$('.box-video-train-smoke-geladeira').css('display','none')
	$('.box-video-train-smoke-bomba').css('display','none')
	$('.box-video-train-smoke-bomba2').css('display','none')
	$('.box-video-train-smoke-ligacao').css('display','none')
	$('.box-video-train-smoke-ligacao2').css('display','none')
	$('.box-video-train-smoke-bombb').css('display','none')
})

$('#smoke48').click(function(){
	$('.box-video-train-smoke-ligacaotr').css('display','none')
	$('.box-video-train-smoke-olof').slideToggle(1000)
	$('.box-video-train-smoke-fundo').css('display','none')
	$('.box-video-train-smoke-sanduiche').css('display','none')
	$('.box-video-train-smoke-geladeira').css('display','none')
	$('.box-video-train-smoke-bomba').css('display','none')
	$('.box-video-train-smoke-bomba2').css('display','none')
	$('.box-video-train-smoke-ligacao').css('display','none')
	$('.box-video-train-smoke-ligacao2').css('display','none')
	$('.box-video-train-smoke-bombb').css('display','none')
})

$('#smoke49').click(function(){
	$('.box-video-train-smoke-ligacaotr').css('display','none')
	$('.box-video-train-smoke-olof').css('display','none')
	$('.box-video-train-smoke-fundo').slideToggle(1000)
	$('.box-video-train-smoke-sanduiche').css('display','none')
	$('.box-video-train-smoke-geladeira').css('display','none')
	$('.box-video-train-smoke-bomba').css('display','none')
	$('.box-video-train-smoke-bomba2').css('display','none')
	$('.box-video-train-smoke-ligacao').css('display','none')
	$('.box-video-train-smoke-ligacao2').css('display','none')
	$('.box-video-train-smoke-bombb').css('display','none')
})

$('#smoke50').click(function(){
	$('.box-video-train-smoke-ligacaotr').css('display','none')
	$('.box-video-train-smoke-olof').css('display','none')
	$('.box-video-train-smoke-fundo').css('display','none')
	$('.box-video-train-smoke-sanduiche').slideToggle(1000)
	$('.box-video-train-smoke-geladeira').css('display','none')
	$('.box-video-train-smoke-bomba').css('display','none')
	$('.box-video-train-smoke-bomba2').css('display','none')
	$('.box-video-train-smoke-ligacao').css('display','none')
	$('.box-video-train-smoke-ligacao2').css('display','none')
	$('.box-video-train-smoke-bombb').css('display','none')
})

$('#smoke51').click(function(){
	$('.box-video-train-smoke-ligacaotr').css('display','none')
	$('.box-video-train-smoke-olof').css('display','none')
	$('.box-video-train-smoke-fundo').css('display','none')
	$('.box-video-train-smoke-sanduiche').css('display','none')
	$('.box-video-train-smoke-geladeira').slideToggle(1000)
	$('.box-video-train-smoke-bomba').css('display','none')
	$('.box-video-train-smoke-bomba2').css('display','none')
	$('.box-video-train-smoke-ligacao').css('display','none')
	$('.box-video-train-smoke-ligacao2').css('display','none')
	$('.box-video-train-smoke-bombb').css('display','none')
})

$('#smoke52').click(function(){
	$('.box-video-train-smoke-ligacaotr').css('display','none')
	$('.box-video-train-smoke-olof').css('display','none')
	$('.box-video-train-smoke-fundo').css('display','none')
	$('.box-video-train-smoke-sanduiche').css('display','none')
	$('.box-video-train-smoke-geladeira').css('display','none')
	$('.box-video-train-smoke-bomba').slideToggle(1000)
	$('.box-video-train-smoke-bomba2').css('display','none')
	$('.box-video-train-smoke-ligacao').css('display','none')
	$('.box-video-train-smoke-ligacao2').css('display','none')
	$('.box-video-train-smoke-bombb').css('display','none')
})

$('#smoke53').click(function(){
	$('.box-video-train-smoke-ligacaotr').css('display','none')
	$('.box-video-train-smoke-olof').css('display','none')
	$('.box-video-train-smoke-fundo').css('display','none')
	$('.box-video-train-smoke-sanduiche').css('display','none')
	$('.box-video-train-smoke-geladeira').css('display','none')
	$('.box-video-train-smoke-bomba').css('display','none')
	$('.box-video-train-smoke-bomba2').slideToggle(1000)
	$('.box-video-train-smoke-ligacao').css('display','none')
	$('.box-video-train-smoke-ligacao2').css('display','none')
	$('.box-video-train-smoke-bombb').css('display','none')
})

$('#smoke54').click(function(){
	$('.box-video-train-smoke-ligacaotr').css('display','none')
	$('.box-video-train-smoke-olof').css('display','none')
	$('.box-video-train-smoke-fundo').css('display','none')
	$('.box-video-train-smoke-sanduiche').css('display','none')
	$('.box-video-train-smoke-geladeira').css('display','none')
	$('.box-video-train-smoke-bomba').css('display','none')
	$('.box-video-train-smoke-bomba2').css('display','none')
	$('.box-video-train-smoke-ligacao').slideToggle(1000)
	$('.box-video-train-smoke-ligacao2').css('display','none')
	$('.box-video-train-smoke-bombb').css('display','none')
})

$('#smoke55').click(function(){
	$('.box-video-train-smoke-ligacaotr').css('display','none')
	$('.box-video-train-smoke-olof').css('display','none')
	$('.box-video-train-smoke-fundo').css('display','none')
	$('.box-video-train-smoke-sanduiche').css('display','none')
	$('.box-video-train-smoke-geladeira').css('display','none')
	$('.box-video-train-smoke-bomba').css('display','none')
	$('.box-video-train-smoke-bomba2').css('display','none')
	$('.box-video-train-smoke-ligacao').css('display','none')
	$('.box-video-train-smoke-ligacao2').slideToggle(1000)
	$('.box-video-train-smoke-bombb').css('display','none')
})

$('#smoke56').click(function(){
	$('.box-video-train-smoke-ligacaotr').css('display','none')
	$('.box-video-train-smoke-olof').css('display','none')
	$('.box-video-train-smoke-fundo').css('display','none')
	$('.box-video-train-smoke-sanduiche').css('display','none')
	$('.box-video-train-smoke-geladeira').css('display','none')
	$('.box-video-train-smoke-bomba').css('display','none')
	$('.box-video-train-smoke-bomba2').css('display','none')
	$('.box-video-train-smoke-ligacao').css('display','none')
	$('.box-video-train-smoke-ligacao2').css('display','none')
	$('.box-video-train-smoke-bombb').slideToggle(1000)
})

$('#smoke57').click(function(){
	$('.box-video-vertigo-smoke-3d').slideToggle(1000)
	$('.box-video-vertigo-smoke-bombb').css('display','none')
	$('.box-video-vertigo-smoke-cimento').css('display','none')
	$('.box-video-vertigo-smoke-bomba').css('display','none')
	$('.box-video-vertigo-smoke-bomba2').css('display','none')
	$('.box-video-vertigo-smoke-lona').css('display','none')
})

$('#smoke58').click(function(){
	$('.box-video-vertigo-smoke-3d').css('display','none')
	$('.box-video-vertigo-smoke-bombb').slideToggle(1000)
	$('.box-video-vertigo-smoke-cimento').css('display','none')
	$('.box-video-vertigo-smoke-bomba').css('display','none')
	$('.box-video-vertigo-smoke-bomba2').css('display','none')
	$('.box-video-vertigo-smoke-lona').css('display','none')
})

$('#smoke59').click(function(){
	$('.box-video-vertigo-smoke-3d').css('display','none')
	$('.box-video-vertigo-smoke-bombb').css('display','none')
	$('.box-video-vertigo-smoke-cimento').slideToggle(1000)
	$('.box-video-vertigo-smoke-bomba').css('display','none')
	$('.box-video-vertigo-smoke-bomba2').css('display','none')
	$('.box-video-vertigo-smoke-lona').css('display','none')
})

$('#smoke60').click(function(){
	$('.box-video-vertigo-smoke-3d').css('display','none')
	$('.box-video-vertigo-smoke-bombb').css('display','none')
	$('.box-video-vertigo-smoke-cimento').css('display','none')
	$('.box-video-vertigo-smoke-bomba').slideToggle(1000)
	$('.box-video-vertigo-smoke-bomba2').css('display','none')
	$('.box-video-vertigo-smoke-lona').css('display','none')
})

$('#smoke61').click(function(){
	$('.box-video-vertigo-smoke-3d').css('display','none')
	$('.box-video-vertigo-smoke-bombb').css('display','none')
	$('.box-video-vertigo-smoke-cimento').css('display','none')
	$('.box-video-vertigo-smoke-bomba').css('display','none')
	$('.box-video-vertigo-smoke-bomba2').slideToggle(1000)
	$('.box-video-vertigo-smoke-lona').css('display','none')
})

$('#smoke62').click(function(){
	$('.box-video-vertigo-smoke-3d').css('display','none')
	$('.box-video-vertigo-smoke-bombb').css('display','none')
	$('.box-video-vertigo-smoke-cimento').css('display','none')
	$('.box-video-vertigo-smoke-bomba').css('display','none')
	$('.box-video-vertigo-smoke-bomba2').css('display','none')
	$('.box-video-vertigo-smoke-lona').slideToggle(1000)
})

$('#molotov32').click(function(){
	$('.box-video-nuke-molotov-ceu').slideToggle(1000)
	$('.box-video-nuke-molotov-bomba2').css('display','none')
	$('.box-video-nuke-molotov-bomba').css('display','none')
	$('.box-video-nuke-molotov-casinha').css('display','none')
	$('.box-video-nuke-molotov-ninja').css('display','none')
	$('.box-video-nuke-molotov-vermelho').css('display','none')
	$('.box-video-nuke-molotov-secret').css('display','none')
})

$('#molotov33').click(function(){
	$('.box-video-nuke-molotov-ceu').css('display','none')
	$('.box-video-nuke-molotov-bomba2').slideToggle(1000)
	$('.box-video-nuke-molotov-bomba').css('display','none')
	$('.box-video-nuke-molotov-casinha').css('display','none')
	$('.box-video-nuke-molotov-ninja').css('display','none')
	$('.box-video-nuke-molotov-vermelho').css('display','none')
	$('.box-video-nuke-molotov-secret').css('display','none')
})

$('#molotov34').click(function(){
	$('.box-video-nuke-molotov-ceu').css('display','none')
	$('.box-video-nuke-molotov-bomba2').css('display','none')
	$('.box-video-nuke-molotov-bomba').slideToggle(1000)
	$('.box-video-nuke-molotov-casinha').css('display','none')
	$('.box-video-nuke-molotov-ninja').css('display','none')
	$('.box-video-nuke-molotov-vermelho').css('display','none')
	$('.box-video-nuke-molotov-secret').css('display','none')
})

$('#molotov35').click(function(){
	$('.box-video-nuke-molotov-ceu').css('display','none')
	$('.box-video-nuke-molotov-bomba2').css('display','none')
	$('.box-video-nuke-molotov-bomba').css('display','none')
	$('.box-video-nuke-molotov-casinha').slideToggle(1000)
	$('.box-video-nuke-molotov-ninja').css('display','none')
	$('.box-video-nuke-molotov-vermelho').css('display','none')
	$('.box-video-nuke-molotov-secret').css('display','none')
})

$('#molotov36').click(function(){
	$('.box-video-nuke-molotov-ceu').css('display','none')
	$('.box-video-nuke-molotov-bomba2').css('display','none')
	$('.box-video-nuke-molotov-bomba').css('display','none')
	$('.box-video-nuke-molotov-casinha').css('display','none')
	$('.box-video-nuke-molotov-ninja').slideToggle(1000)
	$('.box-video-nuke-molotov-vermelho').css('display','none')
	$('.box-video-nuke-molotov-secret').css('display','none')
})

$('#molotov37').click(function(){
	$('.box-video-nuke-molotov-ceu').css('display','none')
	$('.box-video-nuke-molotov-bomba2').css('display','none')
	$('.box-video-nuke-molotov-bomba').css('display','none')
	$('.box-video-nuke-molotov-casinha').css('display','none')
	$('.box-video-nuke-molotov-ninja').css('display','none')
	$('.box-video-nuke-molotov-vermelho').slideToggle(1000)
	$('.box-video-nuke-molotov-secret').css('display','none')
})

$('#molotov38').click(function(){
	$('.box-video-nuke-molotov-ceu').css('display','none')
	$('.box-video-nuke-molotov-bomba2').css('display','none')
	$('.box-video-nuke-molotov-bomba').css('display','none')
	$('.box-video-nuke-molotov-casinha').css('display','none')
	$('.box-video-nuke-molotov-ninja').css('display','none')
	$('.box-video-nuke-molotov-vermelho').css('display','none')
	$('.box-video-nuke-molotov-secret').slideToggle(1000)
})

$('#flash35').click(function(){
	$('.box-video-nuke-flash-casinha').slideToggle(1000)
	$('.box-video-nuke-flash-bomba').css('display','none')
	$('.box-video-nuke-flash-duto').css('display','none')
	$('.box-video-nuke-flash-terra').css('display','none')
	$('.box-video-nuke-flash-fora').css('display','none')
})

$('#flash36').click(function(){
	$('.box-video-nuke-flash-casinha').css('display','none')
	$('.box-video-nuke-flash-bomba').slideToggle(1000)
	$('.box-video-nuke-flash-duto').css('display','none')
	$('.box-video-nuke-flash-terra').css('display','none')
	$('.box-video-nuke-flash-fora').css('display','none')
})

$('#flash37').click(function(){
	$('.box-video-nuke-flash-casinha').css('display','none')
	$('.box-video-nuke-flash-bomba').css('display','none')
	$('.box-video-nuke-flash-duto').slideToggle(1000)
	$('.box-video-nuke-flash-terra').css('display','none')
	$('.box-video-nuke-flash-fora').css('display','none')
})

$('#flash38').click(function(){
	$('.box-video-nuke-flash-casinha').css('display','none')
	$('.box-video-nuke-flash-bomba').css('display','none')
	$('.box-video-nuke-flash-duto').css('display','none')
	$('.box-video-nuke-flash-terra').slideToggle(1000)
	$('.box-video-nuke-flash-fora').css('display','none')
})

$('#flash39').click(function(){
	$('.box-video-nuke-flash-casinha').css('display','none')
	$('.box-video-nuke-flash-bomba').css('display','none')
	$('.box-video-nuke-flash-duto').css('display','none')
	$('.box-video-nuke-flash-terra').css('display','none')
	$('.box-video-nuke-flash-fora').slideToggle(1000)
})

$('#flash40').click(function(){
	$('.box-video-overpass-flash-fundo').slideToggle(1000)
	$('.box-video-overpass-flash-bomba').css('display','none')
	$('.box-video-overpass-flash-fundo2').css('display','none')
	$('.box-video-overpass-flash-banheiro').css('display','none')
	$('.box-video-overpass-flash-bombb').css('display','none')
	$('.box-video-overpass-flash-rua').css('display','none')
	$('.box-video-overpass-flash-ligacao').css('display','none')
	$('.box-video-overpass-flash-canudo').css('display','none')
})

$('#flash41').click(function(){
	$('.box-video-overpass-flash-fundo').css('display','none')
	$('.box-video-overpass-flash-bomba').slideToggle(1000)
	$('.box-video-overpass-flash-fundo2').css('display','none')
	$('.box-video-overpass-flash-banheiro').css('display','none')
	$('.box-video-overpass-flash-bombb').css('display','none')
	$('.box-video-overpass-flash-rua').css('display','none')
	$('.box-video-overpass-flash-ligacao').css('display','none')
	$('.box-video-overpass-flash-canudo').css('display','none')
})

$('#flash42').click(function(){
	$('.box-video-overpass-flash-fundo').css('display','none')
	$('.box-video-overpass-flash-bomba').css('display','none')
	$('.box-video-overpass-flash-fundo2').slideToggle(1000)
	$('.box-video-overpass-flash-banheiro').css('display','none')
	$('.box-video-overpass-flash-bombb').css('display','none')
	$('.box-video-overpass-flash-rua').css('display','none')
	$('.box-video-overpass-flash-ligacao').css('display','none')
	$('.box-video-overpass-flash-canudo').css('display','none')
})

$('#flash43').click(function(){
	$('.box-video-overpass-flash-fundo').css('display','none')
	$('.box-video-overpass-flash-bomba').css('display','none')
	$('.box-video-overpass-flash-fundo2').css('display','none')
	$('.box-video-overpass-flash-banheiro').slideToggle(1000)
	$('.box-video-overpass-flash-bombb').css('display','none')
	$('.box-video-overpass-flash-rua').css('display','none')
	$('.box-video-overpass-flash-ligacao').css('display','none')
	$('.box-video-overpass-flash-canudo').css('display','none')
})

$('#flash44').click(function(){
	$('.box-video-overpass-flash-fundo').css('display','none')
	$('.box-video-overpass-flash-bomba').css('display','none')
	$('.box-video-overpass-flash-fundo2').css('display','none')
	$('.box-video-overpass-flash-banheiro').css('display','none')
	$('.box-video-overpass-flash-bombb').slideToggle(1000)
	$('.box-video-overpass-flash-rua').css('display','none')
	$('.box-video-overpass-flash-ligacao').css('display','none')
	$('.box-video-overpass-flash-canudo').css('display','none')
})

$('#flash45').click(function(){
	$('.box-video-overpass-flash-fundo').css('display','none')
	$('.box-video-overpass-flash-bomba').css('display','none')
	$('.box-video-overpass-flash-fundo2').css('display','none')
	$('.box-video-overpass-flash-banheiro').css('display','none')
	$('.box-video-overpass-flash-bombb').css('display','none')
	$('.box-video-overpass-flash-rua').slideToggle(1000)
	$('.box-video-overpass-flash-ligacao').css('display','none')
	$('.box-video-overpass-flash-canudo').css('display','none')
})

$('#flash46').click(function(){
	$('.box-video-overpass-flash-fundo').css('display','none')
	$('.box-video-overpass-flash-bomba').css('display','none')
	$('.box-video-overpass-flash-fundo2').css('display','none')
	$('.box-video-overpass-flash-banheiro').css('display','none')
	$('.box-video-overpass-flash-bombb').css('display','none')
	$('.box-video-overpass-flash-rua').css('display','none')
	$('.box-video-overpass-flash-ligacao').slideToggle(1000)
	$('.box-video-overpass-flash-canudo').css('display','none')
})

$('#flash47').click(function(){
	$('.box-video-overpass-flash-fundo').css('display','none')
	$('.box-video-overpass-flash-bomba').css('display','none')
	$('.box-video-overpass-flash-fundo2').css('display','none')
	$('.box-video-overpass-flash-banheiro').css('display','none')
	$('.box-video-overpass-flash-bombb').css('display','none')
	$('.box-video-overpass-flash-rua').css('display','none')
	$('.box-video-overpass-flash-ligacao').css('display','none')
	$('.box-video-overpass-flash-canudo').slideToggle(1000)
})

$('#flash48').click(function(){
	$('.box-video-train-flash-fundo2').slideToggle(1000)
	$('.box-video-train-flash-vazio').css('display','none')
	$('.box-video-train-flash-fundo').css('display','none')
	$('.box-video-train-flash-bombeiro2').css('display','none')
	$('.box-video-train-flash-bombeiro').css('display','none')
	$('.box-video-train-flash-bombb').css('display','none')
	$('.box-video-train-flash-bombb2').css('display','none')
})

$('#flash49').click(function(){
	$('.box-video-train-flash-fundo2').css('display','none')
	$('.box-video-train-flash-vazio').slideToggle(1000)
	$('.box-video-train-flash-fundo').css('display','none')
	$('.box-video-train-flash-bombeiro2').css('display','none')
	$('.box-video-train-flash-bombeiro').css('display','none')
	$('.box-video-train-flash-bombb').css('display','none')
	$('.box-video-train-flash-bombb2').css('display','none')
})

$('#flash50').click(function(){
	$('.box-video-train-flash-fundo2').css('display','none')
	$('.box-video-train-flash-vazio').css('display','none')
	$('.box-video-train-flash-fundo').slideToggle(1000)
	$('.box-video-train-flash-bombeiro2').css('display','none')
	$('.box-video-train-flash-bombeiro').css('display','none')
	$('.box-video-train-flash-bombb').css('display','none')
	$('.box-video-train-flash-bombb2').css('display','none')
})

$('#flash51').click(function(){
	$('.box-video-train-flash-fundo2').css('display','none')
	$('.box-video-train-flash-vazio').css('display','none')
	$('.box-video-train-flash-fundo').css('display','none')
	$('.box-video-train-flash-bombeiro2').slideToggle(1000)
	$('.box-video-train-flash-bombeiro').css('display','none')
	$('.box-video-train-flash-bombb').css('display','none')
	$('.box-video-train-flash-bombb2').css('display','none')
})

$('#flash52').click(function(){
	$('.box-video-train-flash-fundo2').css('display','none')
	$('.box-video-train-flash-vazio').css('display','none')
	$('.box-video-train-flash-fundo').css('display','none')
	$('.box-video-train-flash-bombeiro2').css('display','none')
	$('.box-video-train-flash-bombeiro').slideToggle(1000)
	$('.box-video-train-flash-bombb').css('display','none')
	$('.box-video-train-flash-bombb2').css('display','none')
})

$('#flash53').click(function(){
	$('.box-video-train-flash-fundo2').css('display','none')
	$('.box-video-train-flash-vazio').css('display','none')
	$('.box-video-train-flash-fundo').css('display','none')
	$('.box-video-train-flash-bombeiro2').css('display','none')
	$('.box-video-train-flash-bombeiro').css('display','none')
	$('.box-video-train-flash-bombb').slideToggle(1000)
	$('.box-video-train-flash-bombb2').css('display','none')
})

$('#flash54').click(function(){
	$('.box-video-train-flash-fundo2').css('display','none')
	$('.box-video-train-flash-vazio').css('display','none')
	$('.box-video-train-flash-fundo').css('display','none')
	$('.box-video-train-flash-bombeiro2').css('display','none')
	$('.box-video-train-flash-bombeiro').css('display','none')
	$('.box-video-train-flash-bombb').css('display','none')
	$('.box-video-train-flash-bombb2').slideToggle(1000)
})

$('#flash55').click(function(){
	$('.box-video-vertigo-flash-bombb').slideToggle(1000)
	$('.box-video-vertigo-flash-bombb2').css('display','none')
	$('.box-video-vertigo-flash-escada').css('display','none')
	$('.box-video-vertigo-flash-meio').css('display','none')
	$('.box-video-vertigo-flash-rampa2').css('display','none')
	$('.box-video-vertigo-flash-bomba').css('display','none')
	$('.box-video-vertigo-flash-rampa').css('display','none')
})

$('#flash56').click(function(){
	$('.box-video-vertigo-flash-bombb').css('display','none')
	$('.box-video-vertigo-flash-bombb2').slideToggle(1000)
	$('.box-video-vertigo-flash-escada').css('display','none')
	$('.box-video-vertigo-flash-meio').css('display','none')
	$('.box-video-vertigo-flash-rampa2').css('display','none')
	$('.box-video-vertigo-flash-bomba').css('display','none')
	$('.box-video-vertigo-flash-rampa').css('display','none')
})

$('#flash57').click(function(){
	$('.box-video-vertigo-flash-bombb').css('display','none')
	$('.box-video-vertigo-flash-bombb2').css('display','none')
	$('.box-video-vertigo-flash-escada').slideToggle(1000)
	$('.box-video-vertigo-flash-meio').css('display','none')
	$('.box-video-vertigo-flash-rampa2').css('display','none')
	$('.box-video-vertigo-flash-bomba').css('display','none')
	$('.box-video-vertigo-flash-rampa').css('display','none')
})

$('#flash58').click(function(){
	$('.box-video-vertigo-flash-bombb').css('display','none')
	$('.box-video-vertigo-flash-bombb2').css('display','none')
	$('.box-video-vertigo-flash-escada').css('display','none')
	$('.box-video-vertigo-flash-meio').slideToggle(1000)
	$('.box-video-vertigo-flash-rampa2').css('display','none')
	$('.box-video-vertigo-flash-bomba').css('display','none')
	$('.box-video-vertigo-flash-rampa').css('display','none')
})

$('#flash59').click(function(){
	$('.box-video-vertigo-flash-bombb').css('display','none')
	$('.box-video-vertigo-flash-bombb2').css('display','none')
	$('.box-video-vertigo-flash-escada').css('display','none')
	$('.box-video-vertigo-flash-meio').css('display','none')
	$('.box-video-vertigo-flash-rampa2').slideToggle(1000)
	$('.box-video-vertigo-flash-bomba').css('display','none')
	$('.box-video-vertigo-flash-rampa').css('display','none')
})

$('#flash60').click(function(){
	$('.box-video-vertigo-flash-bombb').css('display','none')
	$('.box-video-vertigo-flash-bombb2').css('display','none')
	$('.box-video-vertigo-flash-escada').css('display','none')
	$('.box-video-vertigo-flash-meio').css('display','none')
	$('.box-video-vertigo-flash-rampa2').css('display','none')
	$('.box-video-vertigo-flash-bomba').slideToggle(1000)
	$('.box-video-vertigo-flash-rampa').css('display','none')
})

$('#flash61').click(function(){
	$('.box-video-vertigo-flash-bombb').css('display','none')
	$('.box-video-vertigo-flash-bombb2').css('display','none')
	$('.box-video-vertigo-flash-escada').css('display','none')
	$('.box-video-vertigo-flash-meio').css('display','none')
	$('.box-video-vertigo-flash-rampa2').css('display','none')
	$('.box-video-vertigo-flash-bomba').css('display','none')
	$('.box-video-vertigo-flash-rampa').slideToggle(1000)
})

$('#molotov39').click(function(){
	$('.box-video-overpass-molotov-lixeira').slideToggle(1000)
	$('.box-video-overpass-molotov-bomba').css('display','none')
	$('.box-video-overpass-molotov-bomba2').css('display','none')
	$('.box-video-overpass-molotov-caminhao').css('display','none')
	$('.box-video-overpass-molotov-barril').css('display','none')
	$('.box-video-overpass-molotov-bombb').css('display','none')
	$('.box-video-overpass-molotov-canudo').css('display','none')
})

$('#molotov40').click(function(){
	$('.box-video-overpass-molotov-lixeira').css('display','none')
	$('.box-video-overpass-molotov-bomba').slideToggle(1000)
	$('.box-video-overpass-molotov-bomba2').css('display','none')
	$('.box-video-overpass-molotov-caminhao').css('display','none')
	$('.box-video-overpass-molotov-barril').css('display','none')
	$('.box-video-overpass-molotov-bombb').css('display','none')
	$('.box-video-overpass-molotov-canudo').css('display','none')
})

$('#molotov41').click(function(){
	$('.box-video-overpass-molotov-lixeira').css('display','none')
	$('.box-video-overpass-molotov-bomba').css('display','none')
	$('.box-video-overpass-molotov-bomba2').slideToggle(1000)
	$('.box-video-overpass-molotov-caminhao').css('display','none')
	$('.box-video-overpass-molotov-barril').css('display','none')
	$('.box-video-overpass-molotov-bombb').css('display','none')
	$('.box-video-overpass-molotov-canudo').css('display','none')
})

$('#molotov42').click(function(){
	$('.box-video-overpass-molotov-lixeira').css('display','none')
	$('.box-video-overpass-molotov-bomba').css('display','none')
	$('.box-video-overpass-molotov-bomba2').css('display','none')
	$('.box-video-overpass-molotov-caminhao').slideToggle(1000)
	$('.box-video-overpass-molotov-barril').css('display','none')
	$('.box-video-overpass-molotov-bombb').css('display','none')
	$('.box-video-overpass-molotov-canudo').css('display','none')
})

$('#molotov43').click(function(){
	$('.box-video-overpass-molotov-lixeira').css('display','none')
	$('.box-video-overpass-molotov-bomba').css('display','none')
	$('.box-video-overpass-molotov-bomba2').css('display','none')
	$('.box-video-overpass-molotov-caminhao').css('display','none')
	$('.box-video-overpass-molotov-barril').slideToggle(1000)
	$('.box-video-overpass-molotov-bombb').css('display','none')
	$('.box-video-overpass-molotov-canudo').css('display','none')
})

$('#molotov44').click(function(){
	$('.box-video-overpass-molotov-lixeira').css('display','none')
	$('.box-video-overpass-molotov-bomba').css('display','none')
	$('.box-video-overpass-molotov-bomba2').css('display','none')
	$('.box-video-overpass-molotov-caminhao').css('display','none')
	$('.box-video-overpass-molotov-barril').css('display','none')
	$('.box-video-overpass-molotov-bombb').slideToggle(1000)
	$('.box-video-overpass-molotov-canudo').css('display','none')
})

$('#molotov45').click(function(){
	$('.box-video-overpass-molotov-lixeira').css('display','none')
	$('.box-video-overpass-molotov-bomba').css('display','none')
	$('.box-video-overpass-molotov-bomba2').css('display','none')
	$('.box-video-overpass-molotov-caminhao').css('display','none')
	$('.box-video-overpass-molotov-barril').css('display','none')
	$('.box-video-overpass-molotov-bombb').css('display','none')
	$('.box-video-overpass-molotov-canudo').slideToggle(1000)
})

$('#molotov46').click(function(){
	$('.box-video-train-molotov-sanduiche').slideToggle(1000)
	$('.box-video-train-molotov-geladeira').css('display','none')
	$('.box-video-train-molotov-bomba').css('display','none')
	$('.box-video-train-molotov-bombeiro').css('display','none')
	$('.box-video-train-molotov-pava').css('display','none')
	$('.box-video-train-molotov-bombb').css('display','none')
})

$('#molotov47').click(function(){
	$('.box-video-train-molotov-sanduiche').css('display','none')
	$('.box-video-train-molotov-geladeira').slideToggle(1000)
	$('.box-video-train-molotov-bomba').css('display','none')
	$('.box-video-train-molotov-bombeiro').css('display','none')
	$('.box-video-train-molotov-pava').css('display','none')
	$('.box-video-train-molotov-bombb').css('display','none')
})

$('#molotov48').click(function(){
	$('.box-video-train-molotov-sanduiche').css('display','none')
	$('.box-video-train-molotov-geladeira').css('display','none')
	$('.box-video-train-molotov-bomba').slideToggle(1000)
	$('.box-video-train-molotov-bombeiro').css('display','none')
	$('.box-video-train-molotov-pava').css('display','none')
	$('.box-video-train-molotov-bombb').css('display','none')
})

$('#molotov49').click(function(){
	$('.box-video-train-molotov-sanduiche').css('display','none')
	$('.box-video-train-molotov-geladeira').css('display','none')
	$('.box-video-train-molotov-bomba').css('display','none')
	$('.box-video-train-molotov-bombeiro').slideToggle(1000)
	$('.box-video-train-molotov-pava').css('display','none')
	$('.box-video-train-molotov-bombb').css('display','none')
})

$('#molotov50').click(function(){
	$('.box-video-train-molotov-sanduiche').css('display','none')
	$('.box-video-train-molotov-geladeira').css('display','none')
	$('.box-video-train-molotov-bomba').css('display','none')
	$('.box-video-train-molotov-bombeiro').css('display','none')
	$('.box-video-train-molotov-pava').slideToggle(1000)
	$('.box-video-train-molotov-bombb').css('display','none')
})

$('#molotov51').click(function(){
	$('.box-video-train-molotov-sanduiche').css('display','none')
	$('.box-video-train-molotov-geladeira').css('display','none')
	$('.box-video-train-molotov-bomba').css('display','none')
	$('.box-video-train-molotov-bombeiro').css('display','none')
	$('.box-video-train-molotov-pava').css('display','none')
	$('.box-video-train-molotov-bombb').slideToggle(1000)
})

$('#molotov52').click(function(){
	$('.box-video-vertigo-molotov-bombb').slideToggle(1000)
	$('.box-video-vertigo-molotov-passarela').css('display','none')
	$('.box-video-vertigo-molotov-cimento2').css('display','none')
	$('.box-video-vertigo-molotov-madeira').css('display','none')
	$('.box-video-vertigo-molotov-hs').css('display','none')
	$('.box-video-vertigo-molotov-bomba').css('display','none')
	$('.box-video-vertigo-molotov-lona').css('display','none')
	$('.box-video-vertigo-molotov-cimento').css('display','none')
})

$('#molotov53').click(function(){
	$('.box-video-vertigo-molotov-bombb').css('display','none')
	$('.box-video-vertigo-molotov-passarela').slideToggle(1000)
	$('.box-video-vertigo-molotov-cimento2').css('display','none')
	$('.box-video-vertigo-molotov-madeira').css('display','none')
	$('.box-video-vertigo-molotov-hs').css('display','none')
	$('.box-video-vertigo-molotov-bomba').css('display','none')
	$('.box-video-vertigo-molotov-lona').css('display','none')
	$('.box-video-vertigo-molotov-cimento').css('display','none')
})

$('#molotov54').click(function(){
	$('.box-video-vertigo-molotov-bombb').css('display','none')
	$('.box-video-vertigo-molotov-passarela').css('display','none')
	$('.box-video-vertigo-molotov-cimento2').slideToggle(1000)
	$('.box-video-vertigo-molotov-madeira').css('display','none')
	$('.box-video-vertigo-molotov-hs').css('display','none')
	$('.box-video-vertigo-molotov-bomba').css('display','none')
	$('.box-video-vertigo-molotov-lona').css('display','none')
	$('.box-video-vertigo-molotov-cimento').css('display','none')
})

$('#molotov55').click(function(){
	$('.box-video-vertigo-molotov-bombb').css('display','none')
	$('.box-video-vertigo-molotov-passarela').css('display','none')
	$('.box-video-vertigo-molotov-cimento2').css('display','none')
	$('.box-video-vertigo-molotov-madeira').slideToggle(1000)
	$('.box-video-vertigo-molotov-hs').css('display','none')
	$('.box-video-vertigo-molotov-bomba').css('display','none')
	$('.box-video-vertigo-molotov-lona').css('display','none')
	$('.box-video-vertigo-molotov-cimento').css('display','none')
})

$('#molotov56').click(function(){
	$('.box-video-vertigo-molotov-bombb').css('display','none')
	$('.box-video-vertigo-molotov-passarela').css('display','none')
	$('.box-video-vertigo-molotov-cimento2').css('display','none')
	$('.box-video-vertigo-molotov-madeira').css('display','none')
	$('.box-video-vertigo-molotov-hs').slideToggle(1000)
	$('.box-video-vertigo-molotov-bomba').css('display','none')
	$('.box-video-vertigo-molotov-lona').css('display','none')
	$('.box-video-vertigo-molotov-cimento').css('display','none')
})

$('#molotov57').click(function(){
	$('.box-video-vertigo-molotov-bombb').css('display','none')
	$('.box-video-vertigo-molotov-passarela').css('display','none')
	$('.box-video-vertigo-molotov-cimento2').css('display','none')
	$('.box-video-vertigo-molotov-madeira').css('display','none')
	$('.box-video-vertigo-molotov-hs').css('display','none')
	$('.box-video-vertigo-molotov-bomba').slideToggle(1000)
	$('.box-video-vertigo-molotov-lona').css('display','none')
	$('.box-video-vertigo-molotov-cimento').css('display','none')
})

$('#molotov58').click(function(){
	$('.box-video-vertigo-molotov-bombb').css('display','none')
	$('.box-video-vertigo-molotov-passarela').css('display','none')
	$('.box-video-vertigo-molotov-cimento2').css('display','none')
	$('.box-video-vertigo-molotov-madeira').css('display','none')
	$('.box-video-vertigo-molotov-hs').css('display','none')
	$('.box-video-vertigo-molotov-bomba').css('display','none')
	$('.box-video-vertigo-molotov-lona').slideToggle(1000)
	$('.box-video-vertigo-molotov-cimento').css('display','none')
})

$('#molotov59').click(function(){
	$('.box-video-vertigo-molotov-bombb').css('display','none')
	$('.box-video-vertigo-molotov-passarela').css('display','none')
	$('.box-video-vertigo-molotov-cimento2').css('display','none')
	$('.box-video-vertigo-molotov-madeira').css('display','none')
	$('.box-video-vertigo-molotov-hs').css('display','none')
	$('.box-video-vertigo-molotov-bomba').css('display','none')
	$('.box-video-vertigo-molotov-lona').css('display','none')
	$('.box-video-vertigo-molotov-cimento').slideToggle(1000)
})
