import React, {Component} from 'react';
import './App.css';
import Cats from './Components/Cats/Cats';
import CatOne from './Components/Cats/img/1.jpg';
import CatTwo from './Components/Cats/img/2.jpg';
import CatThree from './Components/Cats/img/3.jpg';
import CatFour from './Components/Cats/img/4.jpg';
import CatFive from './Components/Cats/img/5.jpg';
import CatSix from './Components/Cats/img/6.jpg';
import CatSeven from './Components/Cats/img/7.jpg';
import CatEight from './Components/Cats/img/8.jpg';
import CatNine from './Components/Cats/img/9.jpg';
// import CatTen from './Components/Cats/img/10.jpg'
class App extends Component{
    state = {
        images: [
            {src: CatOne, alt: 'First'},
            {src: CatTwo, alt: 'Second'},
            {src: CatThree, alt: 'Third'},
            {src: CatFour, alt: 'Four'},
            {src: CatFive, alt: 'Five'},
            {src: CatSix, alt: 'Six'},
            {src: CatSeven, alt: 'Seven'},
            {src: CatEight, alt: 'Eight'},
            {src: CatNine, alt: 'Nine'}
        ]
 };
onClickHandler = imageIndex =>{
    let images = [...this.state.images];
    let randomNumber = Math.floor((Math.random() * 9) + 1);
       imageIndex = randomNumber;
       this.setState({ images : images})
}
    render(){
        let image;
        const images = [...this.state.images];
        image = images.map((img, index) => {
            return (
                <Cats src={img.src} 
                alt={img.alt} 
                key={img.alt}
                click={() => {this.onClickHandler(index)}} />
            )    
        })
    return (
    <div className="App">
      <div className="container">
        <h1>This is a memory game</h1>
        <h2>Your objetive for winning this game is click image by image but don't more than once!</h2>
        <div className="wrapper">
        {image}
        </div>
      </div>
    </div>
  );
  }
}
export default App;
