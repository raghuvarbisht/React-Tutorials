import React from 'react';
import {connect} from 'react-redux';
import {buyBook} from '../redux';
function BookContiner(props){

    return (
        <div >
            <h1>Book container- {props.numOfBooks}</h1> 
            <button onClick={props.buyBook}>Buy Book</button>
        </div>

    )
}

const mapStateToProps = state => {
     return {
         numOfBooks: state.numOfBooks
     }
}
const mapDispatchToProps = dispatch=>{

    return {
        buyBook: ()=> dispatch(buyBook())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BookContiner);