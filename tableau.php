<?php
$mot = 'MIDIS';
$tab = str_split($mot);

$lesLivres = array(
	"0307387895" => array("titre" => "The Road", "auteur" => "Cormac McCarthy"),
	"0307743683" => array("titre" => "The Stand", "auteur" => "Stephen King"),
	"1408855658" => array("titre" => "Harry Potter and the Philosopher's Stone", "auteur" => "J.K. Rowlings"),
	"0375706674" => array("titre" => "No Country for Old Men", "auteur" => "Cormac McCarthy")
);  


function compteLesR($tableau){

	$i = 0;
	$nbDeR = 0;
	
	// while($i < count($tableau)){

	// if($tableau[$i] === 'R'){
	// 	$nbDeR++;
	// }
	// $i++;
	// }

	// for($j = 0; $j < count($tableau); $j++){

	// 	if($tableau[$j] === 'R'){
	// 		$nbDeR++;
	// 	}
	// }

	foreach($tableau as $isbn=>$livre){
		// echo $index . " = " . $lettre . "\n";
		echo $isbn . " auteur = " . $livre['auteur'] .  "\n";

		// foreach($livre as $key=>$value){
		// 	echo $key . " = " . $value . "\n";
		// }
		// if ($value == 'I'){
		// 	$nbDeR++;
		// }
	}

	return $nbDeR;
}

echo compteLesR($lesLivres );





