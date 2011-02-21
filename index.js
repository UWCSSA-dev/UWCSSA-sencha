// index.js
// UW-CSSA WebApp Index Javascript
// This script has to work together with Sencha Touch framework
Ext.setup({
	icon: 'icon.png',
	tabletStartupScreen: 'tablet_startup.png',
	phoneStartupScreen: 'phone_startup.png',
	glossOnIcon: false,
	onReady: function() {
		// ====================================================================
		// Cards implementation
		// ====================================================================
		// Card1: Announcements
		// Toolbar item
		var announceToolbar = new Ext.Toolbar({
			ui: 'dark',
			dock : 'top',
			title: 'UW CSSA',
			layout: 'auto',
			// Toolbar buttons
			items: [
				// {
					// text: 'My Button'
				// }
			]
		});
		// define data-model: RSS
		Ext.regModel('RSS', {
			fields: ['title', 'link', 'description', 'pubDate']
		});
		// data-store
		var announceStore = new Ext.data.JsonStore({
			// using RSS as model, sort by pubDate
			model  : 'RSS',
			sorters: 'pubDate',
			// Sample data block
			// TODO:
			// 	1. dynamicly fetch data from server database
			// 	2. data cache
			data: [
				{title: '电影: 唐山大地震 Aftershock'},
				{title: '滑铁卢大学中国学生学者联谊会2010年春节联欢晚会 “走过春，夏，秋，冬”'}, 
				{title: '电影: 唐山大地震 Aftershock'},
				{title: '滑铁卢大学中国学生学者联谊会2010年春节联欢晚会 “走过春，夏，秋，冬”'}, 
				{title: '电影: 唐山大地震 Aftershock'},
				{title: '滑铁卢大学中国学生学者联谊会2010年春节联欢晚会 “走过春，夏，秋，冬”'}, 
				{title: '电影: 唐山大地震 Aftershock'},
				{title: '滑铁卢大学中国学生学者联谊会2010年春节联欢晚会 “走过春，夏，秋，冬”'}, 
				{title: '电影: 唐山大地震 Aftershock'},
				{title: '滑铁卢大学中国学生学者联谊会2010年春节联欢晚会 “走过春，夏，秋，冬”'}, 
				{title: '电影: 唐山大地震 Aftershock'},
				{title: '滑铁卢大学中国学生学者联谊会2010年春节联欢晚会 “走过春，夏，秋，冬”'}, 
				{title: '电影: 唐山大地震 Aftershock'},
				{title: '滑铁卢大学中国学生学者联谊会2010年春节联欢晚会 “走过春，夏，秋，冬”'}, 
				{title: '电影: 唐山大地震 Aftershock'},
				{title: '滑铁卢大学中国学生学者联谊会2010年春节联欢晚会 “走过春，夏，秋，冬”'}, 
				{title: '电影: 唐山大地震 Aftershock'},
				{title: '滑铁卢大学中国学生学者联谊会2010年春节联欢晚会 “走过春，夏，秋，冬”'}, 
				{title: '电影: 唐山大地震 Aftershock'},
				{title: '滑铁卢大学中国学生学者联谊会2010年春节联欢晚会 “走过春，夏，秋，冬”'}, 
				
			]
		});
		// List item
		// display template: 'title'
		// data-store: announceStore
		var announceList = new Ext.List({
			height: 315,
			itemTpl : '{title}',
			grouped : false,
			indexBar: false,
			store: announceStore
		});	
		// Card1 Panel
		var announce = new Ext.Panel({
			title: 'Announce',
			cls: 'card1',
			iconCls: 'time',
			layout: {
				type: 'auto', 
				align: 'stretch'
			},
			dockedItems: [announceToolbar, announceList],
		});
		// Card1 implementation end
		
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
				type: 'slide',
				cover: false
			},
			// items default attributes
			defaults: {
				scroll: 'vertical'
			},
			// TabPanel items
			// Each item is a Card
			items: [ announce, {
				title: 'User',
				html: '<h1>User Card</h1>',
				cls: 'card2',
				iconCls: 'user'
			}, {
				title: 'Favorites',
				html: '<h1>Favorites Card</h1>',
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
});
