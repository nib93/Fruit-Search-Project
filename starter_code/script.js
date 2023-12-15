const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];

	//if the strign is empty then return []
	if (str.length === 0)
		return [];

	//converting str to lowercase for string matching
	let newstr = str.toLowerCase();
	//search the friquent word and push it into result
	fruit.filter((word) => {
		let newWord = word.toLowerCase();
		let id = newWord.search(newstr);
		if (id > -1) {
			results.push(word);
		}
	});


	return results;
}

function searchHandler(e) {
	let result = search(input.value);

	//when the key is pressed in the input searchbar,showSuggetions and search function will be called
	showSuggestions(result, input.value);
}

function showSuggestions(results, inputVal) {
	suggestions.innerHTML = "";

	results.forEach((word) => {
		//create li element
		const li = document.createElement("li");
		// Search, a word which is matched with fruit list thoese letter will become bold.
		let bold = "<strong>" + word.slice(word.toLowerCase().indexOf(inputVal.toLowerCase())) + "</strong>";
		//enter the matched word into li
		li.innerHTML = word.slice(0, word.toLowerCase().indexOf(inputVal.toLowerCase())) + bold;
		// append li
		suggestions.append(li);
	});

}

function useSuggestion(e) {
	// by clicking outside inputbox and <li>, list will disappear.
	if (
		e.target.tagName === "HTML" ||
		e.target.tagName === "BODY" ||
		e.target.tagName === "UL" ||
		e.target.tagName === "INPUT"
	) {
		suggestions.innerHTML = "";
		// if click word as a value in <li>, suggestions.innerHTML's value will be matched to where you click.
	} else if (e.target.tagName === "LI") {
		input.value = e.target.innerText;
		suggestions.innerHTML = "";
		// To see click on bold letter, input value should be matched to <li>'s value.
	} else if (e.target.tagName === "STRONG") {
		input.value = e.target.closest("LI").innerText;
		suggestions.innerHTML = "";
	}
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);