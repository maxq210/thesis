import React from 'react'
import { IndexLink } from 'react-router'
import NavLink from './NavLink'
import Home from './Home'
import HomepageSearchBar from './HomepageSearchBar'
import style from '../sass/App.scss';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      user: { //check from user table
        id: 'id1487880252929',
        name: 'Ai Shi',
        profileImage: 'photo_aishi.jpg',
        description: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.',
      },

      user_skills: { //check skills table and user_skills
        javaScript: 5,
        CSS: 4,
        React: 4,
        Angular: 5,
        MySQL: 5
      },

      ratings: { //check the review table
        Knowledge: 4,
        Helpfulness: 4,
        Experience: 5
      },

      questions: {
        id1487880252929: { //check the question
          title: 'Enable a button in Swift only if all text fields have been filled out',
          question: 'I am having trouble figuring out how to change my code to make it so the Done button in the navigation bar is enabled when my three text fields are filled out...',
          status: 'open',
          deadline: ''
        }
      },

      questionsClaimed: { //check the question's status
        id1487880583646: {
          title: 'This is a claimed question #1',
          question: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh',
          status: 'claimed',
          deadline: '',
          helpers: { //check from claims table
            id1487880467435: 'Alison Reed',
            id1487880908457: 'Max Quinn',
            id1487880443267: 'Hanyen'
          }
        }
      }
    }
  }


  addQuestion(questionData) {
    console.log('addQuestion function is called', questionData);
    console.log(this.state);
    var timeStamp = (new Date()).getTime();
    this.state.questions['id' + timeStamp] = questionData;
    this.setState({
      questions: this.state.questions
    })
  }


  render() {

    const childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       addQuestion: this.addQuestion.bind(this),
       userData: this.state
     })
    );

    return (
      <div>
        <NavLink/>
    
        {childrenWithProps}

        <div className="pre">
          <h3>App.js state</h3>
          <pre>
            {JSON.stringify(this.state, null, 2)}
          </pre>
        </div>
      </div>
    )
  }
}
