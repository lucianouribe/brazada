import React from 'react';
import { connect } from 'react-redux';
import { setCualClase } from '../actions/submenus';
import { ortografica } from '../helpers';


class MainNav extends React.Component {

  constructor(props){
    super(props);

    this.menuItems = this.menuItems.bind(this);
    this.amount = this.amount.bind(this);
    this.goToSubActions = this.goToSubActions.bind(this);
  }

  componentDidMount(){
    const slider = document.querySelector('.nav-bar-main');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;  // stop the fn from running
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3;
      slider.scrollLeft = scrollLeft - walk;
    });

    $('.btn-next').on('click', function(){
      let number = setInterval(function() {
          if (number < 500) {
              clearInterval(number); // If exceeded 100, clear interval
          }
          slider.scrollLeft = number * 8;
      }, 3);
    });

    $('.btn-prev').on('click', function(){
      // let number = setInterval(function() {
      //     if (number > 500) {
      //       clearInterval(number);
      //     }
      //     slider.scrollLeft = 0;
      // }, 3);
    });

    const scrollerer = document.querySelector('.nav-bar-controller');
    let howMany = document.querySelector('.btn-nav-main');
    // console.log(howMany)

    function handleUpdate() {
      slider.scrollLeft = parseInt(this.value) * 2;
    }

    scrollerer.addEventListener('change', handleUpdate);
    scrollerer.addEventListener('mousemove', handleUpdate);
  }

  componentDidUpdate(){
    $('select').material_select();
  }


  goToSubActions(takeThis){
    this.props.dispatch(setCualClase(takeThis))
  }

  menuItems(){
    let info = this.props.infoCursos
    if(info.length){
      return info.map( inf => {
        return(<div className="btn-nav-main" key={inf.id} onClick={() => this.goToSubActions(inf.nombre)}><span>{ortografica(inf.nombre)}</span></div>);
      })


    } else {
      return(<h4>No hay informacion</h4>);
    }
  }
  amount(){
    this.props.infoCursos.length
    console.log(quantity)
  }

  render(){
    let quantity = this.props.infoCursos.length * 50
    return (
    <div>
      <div className='main-nav'>
        <div className='btn-prev'></div>
        <div className='nav-bar-main'>
          {this.menuItems()}
        </div>
        <div className='btn-next'></div>
      </div>
      <div className="palanca">
        <form action="#">
          <p className="range-field">
            <input className="nav-bar-controller" type="range" id="spacing" min="0" max={quantity}  />
          </p>
        </form>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps)(MainNav);