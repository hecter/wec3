<!DOCTYPE html>
<html lang="es-co">
<head>
    <meta charset="utf-8" />
    <title>Course</title>
    <meta name="application-name" content="WebColsam"/>
    <meta name="author" content=""/>
    <meta name="keywords" content="Usuarios"/>
    <meta name="description" content=""/>
    <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <link rel="shortcut icon" href="../img/logo.png" type="image/png"/>
    <link rel="stylesheet" href="../css/style.css"/>
    </head>
    <body>
    <section class="section-menu">
    <input type="search" class="textBuscar" id="textConsulta" placeholder="Search..." autofocus/>
    <button class="buttonBuscar" id="btnFindUser">Find</button>
    <button class="buttonNuevo" id="btnInsertUser">New</button>
    </section>
    <main>
    <section class="section-main">

    <form id="frmMiFormulario" >
    <fieldset >
        <label for="coursesId">Id</label>
        <input class="" type="text" id="coursesId" placeholder="Id" title="Please enter your Id " value="" required />
        <label for="coursesName">Name</label>
        <input class="" type="text" id="coursesName" placeholder="Name" title="Please enter your Name " value="" required />
        <button type="submit" class="botonGuardar" id="btnNew" data-opcion="insertar">Save</button>
        <button type="submit" class="botonActualizar" id="btnUpdate">Save</button>
        </fieldset>
        </form>
    </section>
    </main>
    <!-- Inicio de los scriptt obligatorios -->
    <script src="../js/jquery-2.1.3.min"></script>
    <script src="js/Courses.js"></script>
    <!-- Fin de los scriptt obligatorios -->
</body>
</html>
