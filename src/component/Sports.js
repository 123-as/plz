import React from 'react';
import {connect} from 'react-redux';
import {newsList} from '../action';
import Theme from './Theme';
import Footer from './Footer';
class Sports extends React.Component{
    componentDidMount(){
        this.props.newsList('sports');
    }
    render(){
        if(this.props.newTheme.length===0){
            return <div>loading</div>
        }

        return (
            <React.Fragment>
                <Theme 
                    theme={this.props.newTheme} 
                    title="sports"
                />
                <Footer />
            </React.Fragment>
        )
    }
}


const mapStateToProps=(state)=>{
    return {
        newTheme:state.newTheme,
        form:state.form
    }
}
export default connect(mapStateToProps,{newsList})(Sports);