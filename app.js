App = {
	init: function() {
		// ====================================================================
		// App frame implementation
		// ====================================================================
		// Body: TabPanel
		var tabpanel = new Ext.TabPanel({
			// tabBar docking at the bottom of screen
			// icons align to center
			tabBar: {
				dock: 'bottom',
				layout: {
					pack: 'center'
				}
			},
			// fullscreen: true => Main Panel
			fullscreen: true,
			ui: 'light',
			cardSwitchAnimation: {
            //try out diff animation: cube, fade, flip, pop, slide, wipe
				type: 'cube',
				cover: false
			},
			// items default attributes
			defaults: {
				scroll: 'vertical'
			},
			// TabPanel items
			// Each item is a Card
			items: [ AnnouncementsVC.init(), {
				title: 'User',
				html: '<h1>User Card</h1>',
				cls: 'card2',
				iconCls: 'user'
			}, {
				title: 'Favorites',
				html:'<iframe src =\"http://www.google.com\" width=\"100%\" height=\"100%\"></iframe>',
				iconCls: 'favorites',
				cls: 'card3',
				badgeText: '4'
			}, {
				title: 'Settings',
				html: '<h1>Settings Card</h1>',
				cls: 'card4',
				iconCls: 'settings'
			}, {
				title: 'About',
				html: '<h1>Bottom Tabs</h1><p>Docking tabs to the bottom will automatically change their style. The tabs below are type="light", though the standard type is dark. Badges (like the 4 &amp; Long title below) can be added by setting <code>badgeText</code> when creating a tab/card or by using <code>setBadge()</code> on the tab later.</p>',
				iconCls: 'info',
				cls: 'card5'
			}]
		});
		// Body implementation end
		
		// ====================================================================
		// pre-processes
		// ====================================================================
		// height auto-fit
		// TODO: 
		// 	1. standalone property does not return TRUE when the app is starting from homescreen icon
		// 	2. let the Announcements List auto-fit the screen height change (may have better implementation)
		if(Ext.is.standalone) {
			announceList.setHeight(360);
		}
		// pre-processes end
		
		// ====================================================================
	}
};