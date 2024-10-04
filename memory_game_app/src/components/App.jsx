import { useState } from "react";
import Card from "./card.jsx";

function App() {
	let nameArray = [
		"pikachu",
		"bulbasaur",
		"charmander",
		"venusaur",
		"charmeleon",
		"charizard",
		"squirtle",
		"wartortle",
		"blastoise",
		"caterpie",
		"metapod",
		"ivysaur",
	];
	// .map to create new array with {name, clicks}
	let initialArray = nameArray.map((pokemonName) => {
		return { name: pokemonName, clicks: 0 };
	});

	// setStates for array, score and bestScore
	let [pokeArray, setPokeArray] = useState(initialArray);
	let [score, setScore] = useState(0);
	let [highScore, setHighscore] = useState(0);

	// reshuffleCards function (onClick function for each of the card buttons)
	function reshuffleCards(pokemonName) {
		let updatedCopyPokeArray = pokeArray.map((pokemon) => {
			if (pokemon.name === pokemonName) {
				return { ...pokemon, clicks: pokemon.clicks + 1 };
			} else {
				return pokemon;
			}
		});
		// check if array has any pokemon with clicks more than 1
		let greaterThanOneClicks = updatedCopyPokeArray.some(
			(pokemon) => pokemon.clicks > 1
		);
		if (greaterThanOneClicks) {
			setScore(0);
			setHighscore((prevhighScore) => Math.max(prevhighScore, score));
			setPokeArray(initialArray);
		} else {
			setScore(score + 1);
			let shuffledArray = reshuffleArray(updatedCopyPokeArray);
			setPokeArray(shuffledArray);
		}
	}

	// reshuffleArray function
	// return an array in new random order
	// setState of the array to this new array
	function reshuffleArray(updatedCopyArray) {
		let numbers = [...updatedCopyArray];

		//Shuffle the array using the Fisher-Yates (Knuth) shuffle algorithm
		for (let i = numbers.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[numbers[i], numbers[j]] = [numbers[j], numbers[i]];
		}

		return numbers;
	}

	return (
		<>
			<header>
				<div className="title-container">
					<div className="title">Pokémon Memory Game</div>
					<div className="instructions">
						Click any of the cards below to start. Your goal is to
						capture all 12 Pokémon once!
					</div>
				</div>
				<div className="score-container">
					<div className="score">Current Score: {score}</div>
					<div className="best-score">Highest Score: {highScore}</div>
				</div>
			</header>
			<div className="card-container">
				<Card
					pokemonName={pokeArray[0].name}
					clickFunc={reshuffleCards}
				/>
				<Card
					pokemonName={pokeArray[1].name}
					clickFunc={reshuffleCards}
				/>
				<Card
					pokemonName={pokeArray[2].name}
					clickFunc={reshuffleCards}
				/>
				<Card
					pokemonName={pokeArray[3].name}
					clickFunc={reshuffleCards}
				/>
				<Card
					pokemonName={pokeArray[4].name}
					clickFunc={reshuffleCards}
				/>
				<Card
					pokemonName={pokeArray[5].name}
					clickFunc={reshuffleCards}
				/>
				<Card
					pokemonName={pokeArray[6].name}
					clickFunc={reshuffleCards}
				/>
				<Card
					pokemonName={pokeArray[7].name}
					clickFunc={reshuffleCards}
				/>
				<Card
					pokemonName={pokeArray[8].name}
					clickFunc={reshuffleCards}
				/>
				<Card
					pokemonName={pokeArray[9].name}
					clickFunc={reshuffleCards}
				/>
				<Card
					pokemonName={pokeArray[10].name}
					clickFunc={reshuffleCards}
				/>
				<Card
					pokemonName={pokeArray[11].name}
					clickFunc={reshuffleCards}
				/>
			</div>
		</>
	);
}

export default App;
