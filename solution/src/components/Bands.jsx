import React, { Component } from 'react'

export default class Bands extends Component {
    // constructor(props) {
    //     super(props);
    //   }
  render() {
    // style="width: 18rem;"
    return (
      <div className='d-flex p-2 justify-content-evenly flex-wrap'>
          {this.props.bands.map((item,i)=> {
              return <div className="card" style={{width:"18rem"}} key={i}>
              <img src={item.image} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Genre : {item.genre}</p>
                <p className="card-text">Gretest Hit : {item.greatestHit}</p>
              </div>
            </div>
          })}
      </div>
    )
  }
}
