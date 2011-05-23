(function($){
	$.fn.confirmable = function(options) {
  
		var settings = {
			'title': 'Are you sure you want to do that?',
			'href': '#',
			'action': 'Confirm',
			'minHeight': 25
		};
	
		var dialog = $("<div></div>");
		
		return this.each(function() {
			
			if ($(this).attr('href')) {
				settings['href'] = $(this).attr('href');
			}
			
			var action = $(this).text().trim();
			
			if (action) {
				settings['action'] = action;
			}
			
			if (options) { 
				$.extend(settings, options);
			}

			$(this).bind('click.confirmable', function(event) {
				
				event.preventDefault();
				
				dialog.html(settings['title']);
				
				var buttons = {};
				buttons['Cancel'] = function () { dialog.dialog('close'); return false; };
				buttons[settings['action']] = function () { location.href = settings['href']; return true; };
				
				dialog.dialog({ autoOpen:true,
					title: "Confirm",
					modal: true,
					minHeight: settings['minHeight'],
					resizable: false,
					buttons: buttons
				});
				
				return false;
				
			});
			
		});
	  
	};
})(jQuery);
