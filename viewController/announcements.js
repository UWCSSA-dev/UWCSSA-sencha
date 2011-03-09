AnnouncementsVC = {
	init : function() {
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
		
		var topChanger = new Ext.Carousel({
            items: [
                {cls: "head-1 head"},
                {cls: "head-2 head"},
                {cls: "head-3 head"},
            ]
        });

        var centerChanger = new Ext.Carousel({
            items: [
                {cls: "torso-1 torso"},
                {cls: "torso-2 torso"},
                {cls: "torso-3 torso"},
            ]
        });

        var bottomChanger = new Ext.Carousel({
            items: [
                {cls: "legs-1 legs"},
                {cls: "legs-2 legs"},
                {cls: "legs-3 legs"},
            ]
        });

		// Card1 Panel
		var announce = new Ext.Panel({
			title: '公告栏',
			cls: 'card1',
			iconCls: 'favorites',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults: {flex: 1},
            items: [topChanger, centerChanger, bottomChanger],
		});
		// Card1 implementation end
		return announce;
	}
};