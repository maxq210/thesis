import React from 'react';
import {Link, browserHistory} from 'react-router';
import UserProfile from './UserProfile';
import Skills from './Skills';
import OpenQuestions from './OpenQuestions';

export default class RightColumn extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      showButton: true,
      userOnlyQuestions: {},
    };
  }

  componentWillMount() {
    console.log('RightColumnPublic component will mount');
  }

  render() {
    var showQuestionForm = function() {
      this.setState({
        showForm: true,
        showButton: false
      });
    };
    var hideQuestionForm = function() {
      this.setState({
        showForm: false,
        showButton: true
      });
    };
    //currently we are not passing authenticated={this.props.authenticated} to OpenQuestions to hide the claim button from user dashboard
    return (
      <div className="col-sm-8 col-sm-offset-4 col-md-9 col-md-offset-3 main">
        <UserProfile userCurrent={this.props.userCurrent} />
        <Skills />
        <OpenQuestions 
          dashboard={this.props.dashboard}
          userCurrent={this.props.userCurrent} 
          questions={this.props.questions} />
      </div>
    );
  }
}
