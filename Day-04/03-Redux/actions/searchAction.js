export function search(searchText){
    console.log("search action is prepared->", searchText);
    return {
        type:'Search', searchText
    }
}