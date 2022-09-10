import React from "react";

class App extends React.Component{
  
  constructor(){
    super()

    this.state= {
    G1: null,
    G2: null,
    opcao: 'subG1',
    nota: null,
    }
  }
  
  MandarInfo(event){
    if (this.state.opcao === 'subG1'){
        const nota = event.target.value
        const calculo = (21 - nota)/2
        this.setState({
          notaG1: calculo
        })
    }

    else if (this.state.opcao === 'subG1'){
        const nota = event.target.value
        const calculo = 21 - (nota * 2)
        this.setState({
          notaG2: calculo
        })
      }
    }
  }    

  Nota(event){
    console.log='alterou nota'
    const valor = event.target.value
    this.setState({
      nota: valor
    })
  }


  render(){
    return(
    <div>
      <h1>Calculadora Nota de Sub</h1>
      <br></br>
      
      <input type='radio' value='subG1'
      checked={this.state.opcao === 'subG1'}
      onChange={(event) => this.G2(event)}/> Sub G1

      <input type='radio' value='subG2'
      checked={this.state.opcao === 'subG2'}
      onChange={(event) => this.G1(event)}/> Sub G2
      <br></br>
      <br></br>
      
      Nota: {this.state.nota}
      <br></br>

      <input type='number' onChange={(event) => this.Nota(event)}/>
      
      <br></br>
     
     <input type='button' value='Verificar'
       onClick={() => this.MandarInfo()}/>
      
      <br></br>

      {this.state.final}

    </div>
    )
  }
}

export default App