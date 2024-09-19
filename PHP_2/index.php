<?php

$ref=['orange', 'pomme', 'banane', 'carotte'];
$input=['banane', 'pomme', 'orange'];
$input2 = ['banane', 'raisin', 'orange', 'carotte'];

//retourne vrai si les 2 tableaux sont identiques
function compareTableauIdentique($tab1, $tab2){

	$identique = true;
	$i = 0;

	while ($i < count($tab2) && $identique == true) {

		echo 'i = ' . $i . ', elements: ' . $tab1[$i] . " ? " . $tab2[$i];

		if($tab1[$i] != $tab2[$i]){
			$identique = false;
		}

		$i++;

	} 

	//retourne vrai si les 2 tableaux sont identiques
	return $identique;

}

//retourne vrai si tableau contient les memes elements, peut importe l'ordre
function compareTableau($tab1, $tab2){
	$diff = array_diff($tab1, $tab2);
	$comparable = true;


	if(count($diff) > 0){
		$comparable = false;
	}

	return $comparable;
}

//var_dump(compareTableauIdentique($input,$ref));
var_dump(compareTableau($ref, $input));
