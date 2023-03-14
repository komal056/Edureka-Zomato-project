import React, { Component } from 'react'
import Mealtype from './Mealtype'

export default class QuickSearch extends Component {

    constructor() {
        super();
        this.state = {
            mealtypes: []

        }
    }

    componentDidMount() {
        fetch('http://localhost:9027/mealtype', { method: 'GET' })
            .then(response => response.json())
            .then(data => this.setState({ mealtypes: data.data }))
    }

    render() {
        console.log(this.state.mealtypes)
        let mealtypeList =  this.state.mealtypes.length && this.state.mealtypes.map(item => <Mealtype item={item} key={item.name} />)
        return (
            <div>
                <div className="quicksearch">Quick Searches</div>
                <div className="dis-restaurant">Discover restaurants by type of meal</div>


                <div className='container-fluid'>
                    <div className="row">
                        {mealtypeList}
                    </div>
                  

                </div>
            </div>

        )
    }
} 