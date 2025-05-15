<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <title>Замовлення прийнято</title>
</head>
<body>
  <h2>Ваше замовлення прийнято</h2>
  <?php
    $product = htmlspecialchars($_POST["product"]);
    $material = htmlspecialchars($_POST["material"]);
    $quantity = htmlspecialchars($_POST["quantity"]);

    echo "<p>Замовлено виріб: <strong>$product</strong></p>";
    echo "<p>Матеріал: <strong>$material</strong></p>";
    echo "<p>Кількість: <strong>$quantity</strong></p>";
  ?>
  <p><a href="index.html">Повернутися</a></p>
</body>
</html>
