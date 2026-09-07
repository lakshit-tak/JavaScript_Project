const noteTitle = document.getElementById("noteTitle");

const noteText = document.getElementById("noteText");

const addBtn = document.getElementById("addBtn");

const notesList = document.getElementById("notesList");


let notes = JSON.parse(localStorage.getItem("notes")) || [];


const addNote = () => {

    const title = noteTitle.value.trim();

    const text = noteText.value.trim();


    if (title === "" || text === "") {

        alert("Please enter title and note");

        return;

    }


    const note = {

        title: title,

        text: text

    };


    notes.push(note);


    localStorage.setItem("notes", JSON.stringify(notes));


    showNotes();


    noteTitle.value = "";

    noteText.value = "";

};


const showNotes = () => {

    notesList.innerHTML = "";


    notes.forEach((note, index) => {

        const noteDiv = document.createElement("div");


        noteDiv.classList.add("note");


        noteDiv.innerHTML = `

            <h2>${note.title}</h2>

            <pre>${note.text}</pre>

            <button class="deleteBtn">
                Delete
            </button>

        `;


        const deleteBtn = noteDiv.querySelector(".deleteBtn");


        deleteBtn.addEventListener("click", () => {

                notes.splice(index, 1);


                localStorage.setItem("notes",JSON.stringify(notes));

                showNotes();

            }
        );

        notesList.appendChild(noteDiv);

    });

};


// Add button

addBtn.addEventListener(
    "click",
    addNote
);


// Show saved notes when page opens

showNotes();