import React, {Component, PropTypes} from 'react'

class Search extends Component{
    performSearch(){
        console.log("performSearch method got called->", this.refs.searchText.value);
        this.props.action.search(this.refs.searchText.value);
    }

    renderSearchResult(reservation){
        return(
           <div> <span key={reservation.id}>{reservation.reservationName}</span><br/> </div>
        );
    }

    render(){
        console.log("Search render method called");
        console.table(this.props.searchResult);
        
        return (
            <div>
                <h2>Search Reservation By Name</h2>
                <input type="text" placeholder="Enter your search criteria..." ref="searchText"/>
                <input type="button" value="Search" onClick={this.performSearch.bind(this)}/>
            
                
                {this.props.searchResult.map(reservation => {
                         this.renderSearchResult(reservation);
                    })
                }

            </div>
        );
    }
}

export default Search;