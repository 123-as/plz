import React from 'react';
import {connect} from 'react-redux';
import Theme from './Theme';
import Footer from './Footer';
class Search extends React.Component{
    render(){
        if(this.props.newTheme.length===0){
            return <div>loading</div>
        }

        return (
            <React.Fragment>
                <Theme 
                    theme={this.props.newTheme} 
                    title={this.props.word}
                />
                <Footer />
            </React.Fragment>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        newTheme:state.newTheme,
        form:state.form,
        word:state.searchWord
    }
}
export default connect(mapStateToProps)(Search);