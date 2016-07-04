const initialState = [{ id:0, reservationName:"No search result to be displayed"}]

export default function search(state=initialState, action){
    switch(action.type){
        case 'Search':
            var jsonData = [
                {id:1,reservationName:"Vikash"},
                {id:2,reservationName:"Mintoo"}
                
                ];
            
            doQuery(action.searchText, state)
            return state;
        default:
            return state;
    }
}

function doQuery(searchText, state){
  console.log("doQuery is processing...");
  var myHeaders = new Headers({
                "Content-Type": "application/json"
                });
  var myInit = { method: 'GET',
               headers: myHeaders };
  
//   var jsonData = '[{"id":1,"reservationName":"Vikash"},{"id":2,"reservationName":"Mintoo"},{"id":3,"reservationName":"Aakash"},{"id":4,"reservationName":"Hetal"},{"id":5,"reservationName":"Vidhi"}]';

  fetch('http://localhost:8485/reservation-service/all-reservations', myInit)
    .then(function(response) {
        return response.json();
    }).then(function(jsonData){
        console.table(jsonData);
        console.log('checking jsonData->', jsonData instanceof Array)
        /*var resList = jsonData.map(function(r){
            return {
                id:r.id,
                reservationName:r.reservationName
            }
        });
        console.table(resList);*/
        state=jsonData;
        return state;
    });
}