import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// 2장 내용
// function Food({name} ) {
// // function Food({fav}) {
//   return <h1> i like {name} </h1>;
//   // return <h1> i like {fav} </h1>
// }

// const foodILike = [
//   {
//     name : "kimchi",
//     img : "1123"
//   },
//   {
//     name : "bab",
//     img : "2222"
//   }

// ];

// function component
// function App() {
//   return (
//       <div>
//       {foodILike.map(dish => (
//         <Food name={dish.name} />
//       ))}
//       </div>
//     );
// }
// 2장 끝

// class componet
// state 는 obejct 이고 component의 data를 넣을 공간이 있고 데이터는 변할 수 있다.
// 생명주기 3.2장
// 마운팅: 컴포넌트가 mount될 때, 컴포넌트가 스크린에 표시될때, 컴포넌트가 웹세아트에 갈 때 컨스트럭토를 호출한다.
// 업데이팅 : 될때 
// class App extends React.Component{
//   state = {
//     count: 0
//   };
//   add = () => { // javaScript 문법
//     console.log("add");
//     this.setState(current => ({count: current.count + 1}));
//   };
//   minus = () => {
//     console.log("minus");
//     this.setState(current => ({count: current.count - 1}));
//   };
//   render(){
//     return (
//       <div>
//         <h1>The numver is: {this.state.count}</h1>
//         <button onClick = {this.add}>Add</button>
//         <button onClick = {this.minus}>Minus</button>
//       </div>
//     )
  
//     }
// }


// class App extends React.Component{
//   state = {
//     isLoading: true,
//     movies: []
//   };
//   componentDidMount(){
//     setTimeout(() => {
//       this.setState({ isLoading: false, book: true});
//     }, 6000);
//   }
//   render() {
//     const { isLoading } = this.state;
//   return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
//   }
// }

// 3장 끝


// 4장 
// fetch() 안쓰고 axios 를 쓸꺼다.

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };

  // async , await 으로 비동기 시
  // function 앞에 async를 붙이면 해당 함수는 항상 프라미스를 반환합니다.
  // await는 async 함수 안에서만 동작합니다.
  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json")
  }
  componentDidMount(){
    this.getMovies();
  }
  render() {
    const { isLoading } = this.state;
  return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}


export default App;
