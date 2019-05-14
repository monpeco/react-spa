import React, { PureComponent } from 'react';

class Country extends React.Component {
    state = {
        name: 'generic name',
        code: '0',
        nombre: 'nombre cargando',
    }
    componentDidMount(){
        fetch('https://restcountries.eu/rest/v2/name/belgium')
        .then(resp => resp.json())
        .then( result => {
            console.log(result)
            this.setState({
                name: result[0].name,
                code: result[0].callingCodes,
                nombre: result[0].translations.es,
            });
        },(error) => {
            this.setState({name: 'Something went wrong'})
        })
    }

    render() { 
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.state.nombre}</h1>
                <p>The phone code is {this.state.code}</p>
            </div>
        );
    }
}
 

export default Country;