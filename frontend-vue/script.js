const formElement = document.getElementById("saveNameGroup");


MyHost = 'http://localhost:3000/search_tracks';


formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let groupName = document.getElementById("groupName").value;
    let request = {groupName: groupName};
    let requestJson = JSON.stringify(request);

        //Enviar la data al backend:
        console.log("Desde el front:",request.groupName)
        fetch(MyHost, {
            method: 'POST',
            body: requestJson
        })
});

