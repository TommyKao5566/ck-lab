/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */
/*1110504  */
CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For complete reference see:
	// https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_config.html
	//1、設定使用語言
	  config.language = 'zh';
	 //2、設定ui顏色
	  config.uiColor = '#AADC6E';
	 //3、設定高度及寬度

	  config.width = 930;
	  config.fontSize_defaultLabel = '20px';
	  config.font_defaultLabel = '新細明體';
	  config.maxLines=5;	  
	  //還原次數
	  config.undoStackSize = 2;
	  //使用ENTER鍵產生的標籤
	  config.enterMode = CKEDITOR.ENTER_BR;
	  //使用Shift+ Enter組合鍵的行為。
	  config.shiftEnterMode = CKEDITOR.ENTER_BR;
	  //CKEDITOR.editor.filter 失去作用
	  config.allowedContent=true;


	  //4、設定功能鈕
    
  config.toolbarCanCollapse = false;
	// The toolbar groups arrangement, optimized for two toolbar rows.
		config.toolbar = [
		{ name: 'symbol', items : ['symbol_1','symbol_2','symbol_3','symbol_4','symbol_5','symbol_6','symbol_7'
			,'symbol_8','symbol_9','symbol_10','symbol_11','symbol_12','symbol_13','symbol_14']},
		//{ name: 'basicstyles', items: [ 'Bold', 'Italic','Underline','Subscript', 'Superscript']  },
		//{ name: 'basicstyles', items: [ 'Underline','Subscript', 'Superscript']  },
		{ name: 'clipboard', items: [ 'Cut', 'Copy', 'Paste', 'Undo', 'Redo' ] },
		{ name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', 'Source'  ] }
		//,{ name: 'insert', items: [ 'Table'] }
		//,{ name: 'document', items: [ 'Preview', 'Source'] }		
		
	];

	// Remove some buttons provided by the standard plugins, which are
	// not needed in the Standard(s) toolbar.
	config.removeButtons = '';

	//config.extraPlugins = 'symbol_1,liststyle,tableresize,panel,button,richcombo,listblock,floatpanel,font,preview,notification,htmlwriter,undo,wordcount';
	config.extraPlugins = 'symbol_1,liststyle,tableresize,panel,button,richcombo,listblock,floatpanel,font,preview,wordcount';

	// Set the most common block elements.
	config.format_tags = 'p;h1;h2;h3;pre';

	// Simplify the dialog windows.
	config.removeDialogTabs = 'image:advanced;link:advanced';
	
	//編輯器內的右鍵菜單設為空。( table屬性會無法顯示)搜索關鍵字menuitem，查看源碼
	//CKEDITOR.config.menu_groups = '' ;
	
	//設置快捷鍵
    config.keystrokes = [ 
       [CKEDITOR.ALT + 121 /*F10*/,'toolbarFocus'],//獲取焦點
       [CKEDITOR.ALT + 122 /*F11*/,'elementsPathFocus'],//元素焦點
       [CKEDITOR.SHIFT + 121 /*F10*/,'contextMenu'],//文本菜單
       [CKEDITOR.CTRL + 90 /*Z*/,'撤消'],//撤銷
       [CKEDITOR.CTRL + 89 /*Y*/,'redo'],//重做
       [CKEDITOR.CTRL + CKEDITOR.SHIFT + 90 /*Z*/,'redo'],//
       //[CKEDITOR.CTRL + 76 /*L*/,'link'],//鏈接
       [CKEDITOR.CTRL + 66 /* B */,'bold'],//粗體
       [CKEDITOR.CTRL + 73 /*I*/,'italic'],//斜體
       [CKEDITOR.CTRL + 85 /*U*/,'underline'],//下劃線
       [CKEDITOR.ALT + 109 /*-*/,'toolbarCollapse'] 
    ];

    //設置快捷鍵可能與瀏覽器快捷鍵衝突插件/ keystrokes / plugin.js。
    config.blockedKeystrokes = [ 
        CKEDITOR.CTRL + 66 /*B*/
        ,CKEDITOR.CTRL + 73 /*I*/
        ,CKEDITOR.CTRL + 85 /*U*/ 
		,CKEDITOR.CTRL + 79 /*O 開啟舊檔*/ 
		,CKEDITOR.CTRL + 83 /*S 儲存*/
		,CKEDITOR.CTRL + 82 /*R */
		,CKEDITOR.CTRL + 87 /*W ?*/ 
		,CKEDITOR.CTRL + 75 /*K 連結?*/
		
    ];
    
 // 字型選單 (名稱/字體)
    CKEDITOR.config.font_names = 'Arial/Arial, Helvetica, sans-serif;' +
    'Comic Sans MS/Comic Sans MS, cursive;' +
    'Courier New/Courier New, Courier, monospace;' +
    'Georgia/Georgia, serif;' +
    'Lucida Sans Unicode/Lucida Sans Unicode, Lucida Grande, sans-serif;' +
    'Tahoma/Tahoma, Geneva, sans-serif;' +
    'Times New Roman/Times New Roman, Times, serif;' +
    'Trebuchet MS/Trebuchet MS, Helvetica, sans-serif;' +
    'Verdana/Verdana, Geneva, sans-serif;新細明體;標楷體;微軟正黑體';
	
    
    config.wordcount = {

    		// Whether or not you want to show the Paragraphs Count
    		showParagraphs: true,
    		// Whether or not you want to show the Word Count
    		showWordCount: true,
    		// Whether or not you want to show the Char Count
    		showCharCount: false,
    		// Whether or not you want to count Spaces as Chars
    		countSpacesAsChars: false,
    		// Whether or not to include Html chars in the Char Count
    		countHTML: false,    		
    		// Maximum allowed Word Count, -1 is default for unlimited
    		maxWordCount: -1,
    		// Maximum allowed Char Count, -1 is default for unlimited
    		maxCharCount: -1,
			// 設定最大段落數
﻿			maxParagraphs: 10 ,
    		// Add filter to add or remove element before counting (see CKEDITOR.htmlParser.filter), Default value : null (no filter)
    		filter: new CKEDITOR.htmlParser.filter({
    			elements: {
    				div: function( element ) {
    					if(element.attributes.class == 'mediaembed') {
    						return false;
    					}
    				}
    			}
    		})
    	};    
};