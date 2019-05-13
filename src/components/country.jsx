import React, { PureComponent } from 'react';

class Country extends React.Component {
    state = {
        name: 'generic name',
        code: '0',
    }
    componentDidMount(){
        fetch('https://restcountries.eu/rest/v2/name/belgium')
        .then(resp => resp.json())
        .then( result => {
            this.setState({
                name: result[0].name,
                code: result[0].callingCodes,
            });
        },(error) => {
            this.setState({name: 'Something went wrong'})
        })
    }

    render() { 
        return (
            <div>
                <h1>{this.state.name}</h1>
                <p>The phone code is {this.state.code}</p>
            </div>
        );
    }
}
 

export default Country;