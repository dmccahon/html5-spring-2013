$(window).load(function(){

	var timeOut = null;

	$('#mediaControls .arrow').click(function(e,simulated){
		
		if(!simulated){
			
			clearTimeout(timeOut);
		}
	});
	
	(function autoAdvance(){
		
		$('#mediaControls .next').trigger('click',[true]);
		
		timeOut = setTimeout(autoAdvance,3000);		
	})();

});