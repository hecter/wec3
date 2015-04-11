/**
**@name:    Courses.js
**@author:  
**@Licencia:    http://opensource.org/licenses/gpl-license.php GNU Public License
**@date:    2015-03-13 08:07:21
**@summary:    Course Table
**Developed with love Hec T.
**/
function Courses ( element ) { 
    this.courses = element;
    var context, form, btnNew, btnUpdate, sectionMain;
    context = this;
    form = $('#frmMiFormulario');
    btnNew = $('#btnNew');
    btnUpdate = $('#btnUpdate');
    sectionMain = $('.section-main');
    this.insert = function () { 
        sectionMain.html( '' );
        form.appendTo(sectionMain);
        form[0].reset();
        $( '#usersId' ).removeAttr( 'disabled');
        btnNew.show();
        btnUpdate.hide();
        form.show();
        $( '#coursesId' ).focus();
        alert('Todo se ejecuto como esperaba');
    };
    this.insert();
};
// Inicio del Proceso principal 
$(document).ready(function () {
    var courses = new Courses ( $(this) );
});