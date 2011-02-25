// index.js
// UW-CSSA WebApp Index Javascript
// This script has to work together with Sencha Touch framework

//set up startup screen and icon, then call main function
Ext.setup({
	icon: 'icon.png',
	//make icon nicer
	glossOnIcon: true,
    //TODO: refine start up image for phone and iPad(tablet)
	tabletStartupScreen: 'resources/images/tablet_startup.png',
	phoneStartupScreen: 'resources/images/phone_startup.png',
	//init app in app.js
	onReady: function() {
		App.init();
	}
});
