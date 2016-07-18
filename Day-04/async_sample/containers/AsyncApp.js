import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectSearchText, fetchAll, searchState,fetchPostsIfNeeded, invalidateSearch, fetchPosts } from '../actions'

class AsyncApp extends Component {
  constructor(props) {
      super(props)
    }

  componentDidMount() {
    //show the whole list
    const { dispatch, searchResults } = this.props;
    console.log('componentDidMount is called');
    this.props.dispatch(fetchPosts(''));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.searchState.searchText !== this.props.searchText) {
      console.log('calling componentWillReceiveProps...', nextProps.searchState.searchText);
      const { dispatch, searchState } = nextProps;
     // dispatch(fetchPostsIfNeeded(searchState.searchText));
    }
    
  }

  doSearch(){
    console.log('doSearch selectSearchText->',this.refs.searchText.value);
    //this.props.dispatch(selectSearchText(this.refs.searchText.value));
    this.props.dispatch(fetchPosts(this.refs.searchText.value));
  }

  showSearchResult(){
    const {searchText, searchResults} = this.props.searchState;
    if(searchResults){
      return <tbody>
                {searchResults.map((result, i) => 
                  <tr key={result.id}>
                    <td>{result.id}</td>
                    <td>{result.reservationName}</td>
                  </tr>
                ) }
              </tbody>
    }
  }

  render() {
    const {searchText, searchResults} = this.props.searchState;
    console.log('render method->', searchResults);
    if(searchResults){
      console.log('searchResult is defined');
      return <div>
        <div name="searchForm">
          <input type="text" placeholder="Enter Search Text..." ref="searchText"/>
          <input type="button" value="Search" onClick={this.doSearch.bind(this)}/>
          <br/><br/><br/>
        </div>
        <div name="content">
          <table cellSpacing="0" cellPadding="0" border="1" width="100%">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Reservation Name</th>
                </tr>
              </thead>
              <tbody>
                {searchResults.map((result, i) => 
                  <tr key={result.id}>
                    <td>{result.id}</td>
                    <td>{result.reservationName}</td>
                  </tr>
                ) }
              </tbody>

              {this.showSearchResult}
            </table>
        </div>
      </div>
    }

    return (
      <div>
        <div name="searchForm">
          <input type="text" placeholder="Enter Search Text..." ref="searchText"/>
          <input type="button" value="Search" onClick={this.doSearch.bind(this)}/>
          <br/><br/><br/>
        </div>
        <div name="content">
          <table cellSpacing="0" cellPadding="0" border="1" width="100%">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Reservation Name</th>
                </tr>
              </thead>
              <tbody>
                  <tr>
                    <td colSapn="2">No data to display</td>
                  </tr>
                </tbody>

              {this.showSearchResult}
            </table>
        </div>
      </div>
    )
  }
}

AsyncApp.propTypes = {
  searchState: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  console.log('mapping state->',state);
  return {
    searchState: state.searchState
  }
}

export default connect(mapStateToProps)(AsyncApp)