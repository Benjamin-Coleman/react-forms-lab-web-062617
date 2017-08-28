import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poemInput: '',
      valid: false
    };
  }

  handleChange = event => {
    let poem = event.target.value
    this.setState({poemInput: poem, valid: this.isValid(poem)})

  }

  isValid = (poem) => {
   let lines = poem.trim().split(/\n/)
   //console.log(lines)
   let line1 = lines[0]
   let line2 = lines[1]
   let line3 = lines[2]
   if (line1 && line2 && line3){
     if (line1.trim().split(' ').length == 5 && line2.trim().split(' ').length == 3 && line3.trim().split(' ').length == 5){
      console.log('poem is good')
      // this.setState({valid: true})
      return true
     }
     else {
      // console.log(lines)
      // this.setState({})
      return false
     }
   }
  }

  render() {
    return (
      <div>
        <textarea 
          rows="3" 
          cols="60"
          onChange={this.handleChange}
          value={this.state.poemInput}
        />
        {this.state.valid ? null :
        <div 
          id="poem-validation-error" 
          style={{color: 'red'}}
        >
          This poem is not written in the right structure!
        </div> }
      </div>
    );
  }
}

export default PoemWriter;