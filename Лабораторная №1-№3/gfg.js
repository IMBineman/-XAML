showNotes();
// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
	let addTxt = document.getElementById("addTxt");
	let notes = localStorage.getItem("notes");

	if (notes == null) notesObj = [];
	else notesObj = JSON.parse(notes);

	notesObj.push(addTxt.value);
	localStorage.setItem("notes", JSON.stringify(notesObj));
	addTxt.value = "";

	showNotes();
});

// Function to show elements from localStorage
function showNotes() {
	let notes = localStorage.getItem("notes");

	if (notes == null) notesObj = [];
	else notesObj = JSON.parse(notes);

	let html = "";

	notesObj.forEach(function(element, index) {
		html += `<div class="noteCard my-2 mx-2 card"
			style="width: 18rem;">
				<div class="card-body">
					<h5 class="card-title">
						Заметка ${index + 1}
					</h5>
					<p class="card-text">
						${element}
					</p>

				<button id="${index}" onclick=
					"deleteNote(this.id)"
					class="btn btn-primary">
					Удалить блокнот
				</button>
			</div>
		</div>`;
	});

	let notesElm = document.getElementById("notes");

	if (notesObj.length != 0) notesElm.innerHTML = html;
	else
		notesElm.innerHTML = ` Нечего показывать!
 Используйте раздел "Добавить заметку" выше, чтобы добавлять заметки.`;
}

// Function to delete a note
function deleteNote(index) {
	let notes = localStorage.getItem("notes");

	if (notes == null) notesObj = [];
	else notesObj = JSON.parse(notes);

	notesObj.splice(index, 1);

	localStorage.setItem("notes",
		JSON.stringify(notesObj));

	showNotes();
}
