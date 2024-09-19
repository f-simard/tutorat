<?php
	require 'variables.php';
	require 'header.php';

?>


	<h1><?= $allo ?></h1>
	<p>Ici nous faisons un exemple de boucle php dans du html</p>
	<ul>
		<?php foreach($tableau as $animal): ?>
			<li><?= $animal; ?></li>
		<?php endforeach; ?>
	</ul>

<?php
require_once 'footer.php';
require 'footer.php';
?>