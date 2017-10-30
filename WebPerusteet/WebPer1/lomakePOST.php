
/**
 * Created by PhpStorm.
 * User: aaposal
 * Date: 30.10.2017
 * Time: 10.35
 */
<html>
<body>

Welcome

<?php echo $_GET["etunimi"] ." ". $_POST["sukunimi"]; ?>
<br>
<br>
Sähköpostiosoitteesi on: <?php echo $_POST["sahkoposti"]; ?>
<br>
<br>
Puhelinnumerosi on: <?php echo $_POST["puhelin"]; ?>
<br>
<br>
Osoitteesi on: <?php echo $_POST["osoite"]; ?>
<br>
<br>
Postinumerosi on: <?php echo $_POST["postinumero"]; ?>
</body>
</html>
