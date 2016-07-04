const initialState = [{ id:0, reservationName:"No search result to be displayed"}]

export default function search(state=initialState, action){

    switch(action.type){
        case 'Search':
            console.log('call search service with searchText-> ',action.searchText);
            var searchResult =   doQuery(action.searchText);
            console.dir(searchResult);
            return searchResult;
        
        default:
            return state;
    }
}

function doQuery(searchText){
  console.log("doQuery is processing...");
  var myHeaders = new Headers({
                "Content-Type": "application/json"
                });
  var myInit = { method: 'GET',
               headers: myHeaders };

  fetch('http://localhost:8485/reservation-service/all-reservations', myInit)
    .then(function(response) {
        return response.json();
    }).then(function(jsonData){
        console.log(jsonData);
        var resList = jsonData.map(function(r){
            return {
                id:r.id,
                reservationName:r.reservationName
            }
        });
        console.log(resList);
        return resList;
    })
}