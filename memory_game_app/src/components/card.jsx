import { useEffect } from "react";

function Card({ pokemonName, clickFunc }) {
	useEffect(() => {
		async function fetchPokemonData() {
			try {
				const response = await fetch(
					`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`
				); // Replace with the API URL
				if (!response.ok) {
					throw new Error(
						"Network response was not ok " + response.statusText
					);
				}
				const data = await response.json(); // Parse the JSON from the response
				//console.log(data); // Use the fetched data
				let imageUrl = data.sprites.front_default;
				let cardNo = document.querySelector(
					"[data-name=" + CSS.escape(pokemonName) + "]"
				);
				cardNo.src = imageUrl;
			} catch (error) {
				console.error(
					"There was a problem with the fetch operation:",
					error
				);
			}
		}
		fetchPokemonData(); // Call the async function
	}, [pokemonName]);
	return (
		<button className="card" onClick={() => clickFunc(pokemonName)}>
			<img data-name={pokemonName}></img>
			{pokemonName}
		</button>
	);
}

export default Card;
