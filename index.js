Ext.setup({
    icon: 'icon.png',
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    glossOnIcon: false,
    onReady: function() {
				
		// Announcements
		var announceToolbar = new Ext.Toolbar({
			ui: 'dark',
			dock : 'top',
			title: 'UW CSSA',
			layout: 'auto',
			// items: [
				// {
					// text: 'My Button'
				// }
			// ]
		});
		
		Ext.regModel('RSS', {
			fields: ['title', 'link', 'description', 'pubDate']
		});
		var announceStore = new Ext.data.JsonStore({
			model  : 'RSS',
			sorters: 'pubDate',

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
		var announceList = new Ext.List({
			height: 315,
			itemTpl : '{title}',
			grouped : false,
			indexBar: true,
			store: announceStore
		});		
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
		
		// Main body TabPanel
        var tabpanel = new Ext.TabPanel({
            tabBar: {
                dock: 'bottom',
                layout: {
                    pack: 'center'
                }
            },
            fullscreen: true,
            ui: 'light',
            cardSwitchAnimation: {
                type: 'slide',
                cover: false
            },
            
            defaults: {
                scroll: 'vertical'
            },
            items: [ announce, {
                // title: 'Announcements',
                // cls: 'card1',
                // iconCls: 'time'
            // }, {
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
		
		if(Ext.is.standalone) {
			announceList.setHeight(360);
		}
    }
});