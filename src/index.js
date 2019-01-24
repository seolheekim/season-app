import React from 'react';
import ReactDom from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

//this is a class component
class App extends React.Component {
  state = {
    latitude: null,
    errorMessage: ''
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ latitude: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    )
  };

  //react says you HAVE to define render
  render() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div> Error: {this.state.errorMessage} </div>
    }
    if (!this.state.errorMessage && this.state.latitude) {
      return <SeasonDisplay latitude={this.state.latitude} />
    }
    return <Spinner message="Please accept location request" />;
  };
};

ReactDom.render(<App />, document.querySelector('#root'));

  // constructor() is a specially named function that is particular to
  // the Javascript language not specific to react.
  // In Javascript class the constuctor() function is the very first
  // function that is going to be called any time an instance of this
  // class is created. So any time a it creates a new instance of the
  // app component and shows it on the screen the constructor() function // is going to automatically call it before anything else.

  // constructor(props) {

  // super is a reference to the parents constuctor fucntion.
  // have to call super(props) evertime.

  // super(props);

  // this is a state object, it contains different pieces of data &
  // some different properties that are very important and relevant
  // to the component that it is being put together.
  // THIS IS THE ONLY TIME we do direct assignment to this.state.

  //   this.state = {
  //     latitude: null,
  //     errorMessage: ''
  //   };

  //  'Component Lifecycle Methods' is a function that we can optionally
  //  define inside of our class based components if we decide to
  //  implement these menthods. They will be called automatically by
  //  react at certain point during a component life cycle.
  // };