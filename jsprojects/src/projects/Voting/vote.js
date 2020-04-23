import React, {Component} from 'react'
import './voting.scss'


class Vote extends Component{
    constructor(props){
        super(props);
        this.state = {
            languages: [
                {name: "Javascript", votes: 0},
                {name: "Python", votes: 0},
                {name: "Java", votes: 0}
            ]
        } 
    }

    vote (i){
        let newLangs = [...this.state.languages] // contains copy of languages
        newLangs[i].votes++;
        function swap(array, i, j){
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        this.setState({languages: newLangs})
    }

    render(){
        return(
			<>
				<h1>Vote For Your Favorite Language!</h1>
				<div className="languages">
					{
						this.state.languages.map((lang, i) => 
							<div key={i} className="language">
								<div className="voteCount">
									{lang.votes}
								</div>
								<div className="languageName">
									{lang.name}
								</div>
								<button onClick={this.vote.bind(this, i)}>Click Me!</button>
							</div>
						)
					}
				</div>
			</>
		);
    }
}
export default Vote;