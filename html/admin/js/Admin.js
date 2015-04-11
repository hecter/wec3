/**
**@name:    Courses.js
**@author:  Hector Teran Torres
**@Licencia:    http://opensource.org/licenses/gpl-license.php GNU Public License
**@date:    2015-03-13 08:07:21
**@summary:    Course Table
**Developed with love Hec T.
**/
function Admin ( element ) { 
    this.admin = element;
    var main;
    main = $('#main');
    this.loadPage = function ( event ) {
        event.stopPropagation();
        event.preventDefault();
        var link = $(this).attr('href') +  ' #main';
        main.load (link); 
         alert ('Se debe carga el formulario ' + link);
        $( "body" ).append('<script src="../courses/js/Course.js"></script>');

        return;
    };  
    this.admin.on ( 'click', 'a', this.loadPage );
};
// Inicio del Proceso principal 
$(document).ready(function () {
    var admin = new Admin ( $(this) );
});