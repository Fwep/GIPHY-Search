import { connect } from 'react-redux';
import GiphysSearch from './giphys_search';
import { fetchSearchGiphys } from '../actions/giphy_actions';

const mSP = (state) => ({
  giphys: state.giphys
});

const mDP = (dispatch) => ({
  fetchGiphys: (searchTerm) => dispatch(fetchSearchGiphys(searchTerm))
});

export default connect (mSP, mDP)(GiphysSearch)