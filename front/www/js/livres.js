
document.addEventListener("deviceready", onDeviceReady, false);

async function onDeviceReady() {
    const baseAddress = "http://localhost:3000";

    await fetch(`${baseAddress}/books`)
    .then(response => response.json())
    .then(
        response => renderBooks(response)
    )
    .catch(error);

    function renderBooks(response) {
        response.forEach(book => {
            $("#books").append(`
            <div class="card" style="width: 18rem;">
                <img src="data:image/png;base64,${book.cover}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">${book.description}</p>
                </div>
            </div>
            `);
        });
    }

    function error(err){
        console.log(err);
    };
}