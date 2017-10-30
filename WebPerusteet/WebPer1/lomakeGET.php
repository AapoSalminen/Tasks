
/**
 * Created by PhpStorm.
 * User: aaposal
 * Date: 30.10.2017
 * Time: 10.35
 */
<html>
<body>

Welcome
<?php echo $_GET["etunimi"] ." ". $_GET["sukunimi"]; ?>
<br>
<br>
Sähköposti osoitteesi on: <?php echo $_GET["sahkoposti"]; ?>
<br>
<br>
Puhelin numerosi on: <?php echo $_GET["puhelin"]; ?>
<br>
<br>
Osoitteesi on: <?php echo $_GET["osoite"]; ?>
<br>
<br>
Postinumerosi on: <?php echo $_GET["postinumero"]; ?>
</body>
</html>