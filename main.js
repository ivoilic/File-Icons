define(function(require, exports, module) {
    'use strict';
    var ExtensionUtils = brackets.getModule('utils/ExtensionUtils');
    ExtensionUtils.loadStyleSheet(module, './styles/style.css');
    ExtensionUtils.loadStyleSheet(module, './file-icon-font/style.css');
    $('document').ready(function(){
        setInterval(function(){
            $("#project-files-container .extension").each(function(){
                $(this).siblings("span").addClass('brackets-icon-'+$(this).html().split('.')[1]);
            });
            $("#working-set-list-container .extension").each(function(){
                $(this).parent().addClass('brackets-icon-'+$(this).html().split('.')[1]);
            });
        }, 10);
    });
});
