//===plugins/symbol_1/plugn.js==========
  
(function()
{
	// The pastetext command definition.
	var symbolCmd_1 =
	{exec : function( editor ){editor.insertHtml('，');return true;}};
	
	var symbolCmd_2 =
	{exec : function( editor ){editor.insertHtml('。');return true;}};
	
	var symbolCmd_3 =
	{exec : function( editor ){editor.insertHtml('、');return true;}};
	
	var symbolCmd_4 =
	{exec : function( editor ){editor.insertHtml('；');return true;}};
	
	var symbolCmd_5 =
	{exec : function( editor ){editor.insertHtml('：');return true;}};
	
	var symbolCmd_6 =
	{exec : function( editor ){editor.insertHtml('！');return true;}};
	
	var symbolCmd_7 =
	{exec : function( editor ){editor.insertHtml('？');return true;}};
	
	var symbolCmd_8 =
	{exec : function( editor ){editor.insertHtml('V');return true;}};
	
	var symbolCmd_9 =
	{exec : function( editor ){editor.insertHtml('—');return true;}};
	
	var symbolCmd_10 =
	{exec : function( editor ){editor.insertHtml('〇');return true;}};
	
	var symbolCmd_11 =
	{exec : function( editor ){editor.insertHtml('※');return true;}};
	
	var symbolCmd_12 =
	{exec : function( editor ){editor.insertHtml('（）');return true;}};
	
	var symbolCmd_13 =
	{exec : function( editor ){editor.insertHtml('「」');return true;}};
	
	var symbolCmd_14 =
	{exec : function( editor ){editor.insertHtml('『』');return true;}};
  
    var symbolCmd_15 =
	{exec : function( editor ){editor.insertHtml('§');return true;}};
  
	// Register the plugin.
	CKEDITOR.plugins.add( 'symbol_1', 
	{
		init : function( editor )
		{
			var commandName_1 = 'symbol_1'; 
			editor.addCommand( commandName_1, symbolCmd_1 );
			editor.ui.addButton( commandName_1,
			{
			label : '逗號', 
			command : commandName_1,
			icon : this.path + 'images/mark01.gif'
			});
			
			var commandName_2 = 'symbol_2'; 
			editor.addCommand( commandName_2, symbolCmd_2 );
			editor.ui.addButton( commandName_2,
			{
			label : '句號', 
			command : commandName_2,
			icon : this.path + 'images/mark02.gif'
			});
			
			var commandName_3 = 'symbol_3'; 
			editor.addCommand( commandName_3, symbolCmd_3 );
			editor.ui.addButton( commandName_3,
			{
			label : '頓號', 
			command : commandName_3,
			icon : this.path + 'images/mark03.gif'
			});
			
			var commandName_4 = 'symbol_4'; 
			editor.addCommand( commandName_4, symbolCmd_4 );
			editor.ui.addButton( commandName_4,
			{
			label : '分號', 
			command : commandName_4,
			icon : this.path + 'images/mark04.gif'
			});
			
			var commandName_5 = 'symbol_5'; 
			editor.addCommand( commandName_5, symbolCmd_5 );
			editor.ui.addButton( commandName_5,
			{
			label : '冒號', 
			command : commandName_5,
			icon : this.path + 'images/mark05.gif'
			});
			
			var commandName_6 = 'symbol_6'; 
			editor.addCommand( commandName_6, symbolCmd_6 );
			editor.ui.addButton( commandName_6,
			{
			label : '驚嘆號', 
			command : commandName_6,
			icon : this.path + 'images/mark06.gif'
			});
			
			var commandName_7 = 'symbol_7'; 
			editor.addCommand( commandName_7, symbolCmd_7 );
			editor.ui.addButton( commandName_7,
			{
			label : '問號', 
			command : commandName_7,
			icon : this.path + 'images/mark07.gif'
			});
			
			var commandName_8 = 'symbol_8'; 
			editor.addCommand( commandName_8, symbolCmd_8 );
			editor.ui.addButton( commandName_8,
			{
			label : 'V', 
			command : commandName_8,
			icon : this.path + 'images/mark08.gif'
			});
			
			var commandName_9 = 'symbol_9'; 
			editor.addCommand( commandName_9, symbolCmd_9 );
			editor.ui.addButton( commandName_9,
			{
			label : '連接號', 
			command : commandName_9,
			icon : this.path + 'images/mark09.gif'
			});
			
			var commandName_10 = 'symbol_10'; 
			editor.addCommand( commandName_10, symbolCmd_10 );
			editor.ui.addButton( commandName_10,
			{
			label : '〇', 
			command : commandName_10,
			icon : this.path + 'images/mark10.gif'
			});
			
			var commandName_11 = 'symbol_11'; 
			editor.addCommand( commandName_11, symbolCmd_11 );
			editor.ui.addButton( commandName_11,
			{
			label : '參考標記', 
			command : commandName_11,
			icon : this.path + 'images/mark11.gif'
			});
			
			var commandName_12 = 'symbol_12'; 
			editor.addCommand( commandName_12, symbolCmd_12 );
			editor.ui.addButton( commandName_12,
			{
			label : '括號', 
			command : commandName_12,
			icon : this.path + 'images/mark12.gif'
			});
			
			var commandName_13 = 'symbol_13'; 
			editor.addCommand( commandName_13, symbolCmd_13 );
			editor.ui.addButton( commandName_13,
			{
			label : '引號', 
			command : commandName_13,
			icon : this.path + 'images/mark13.gif'
			});
			
			var commandName_14 = 'symbol_14'; 
			editor.addCommand( commandName_14, symbolCmd_14 );
			editor.ui.addButton( commandName_14,
			{
			label : '雙引號', 
			command : commandName_14,
			icon : this.path + 'images/mark14.gif'
			});
			
			var commandName_15 = 'symbol_15'; 
			editor.addCommand( commandName_15, symbolCmd_15 );
			editor.ui.addButton( commandName_15,
			{
			label : '法條', 
			command : commandName_15,
			icon : this.path + 'images/mark15.gif'
			});

		},
	});
})();