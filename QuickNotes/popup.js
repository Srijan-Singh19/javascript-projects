const note = document.getElementById("note");
const saveBtn = document.getElementById("saveBtn");
const status = document.getElementById("status");

saveBtn.addEventListener("click", () => {

    const userNote = note.value;

    chrome.storage.local.set({
        note: userNote
    }, () => {
        console.log("Saved:", userNote);
    });


    status.textContent = "Note Saved ✅";

});