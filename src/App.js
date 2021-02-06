import React ,{Component} from 'react';
import './App.css';
import List from './list';

class App extends Component{
  state = {
      items: [],
      currentval: "",
      edit_ind:'',
  }
  current=[
      {currentval: "",editval:"" }
  ]
  
  
  textChnageHandler = (event) =>{
      this.current[0].currentval=event.target.value
  }
  
  
  addItemHandler = () =>{
      let temp = [...this.state.items]
      if(this.current[0].currentval!==""){
          temp.push({id:Math.floor(Math.random()*1000),item:this.current[0].currentval , isCompleted: false, toedit: false})
          this.setState({items: temp})
          this.current[0].currentval=""
          document.getElementById('input').value=''
      }else{
          alert('plaese add item...')
      }
  }

  
  deleteItemHandler = (id) =>{
      let temp = [...this.state.items]
      temp = temp.filter((item)=>item.id!==id)
      this.setState({items:temp})
  }

  
  editHandler = (index) =>{
      let doedit = !this.state.items[index].toedit
      let temp = [...this.state.items]
      temp[index].toedit = doedit
      this.setState({items:temp})
  }

  
  editTextHandler=(event) =>{
      this.current[0].editval = event.target.value;
  }


  editItemHandler=(index)=>{
      const temp = [...this.state.items]
      temp[index] = {id:this.state.items[index].id,item:this.current[0].editval}
      this.setState({items: temp , show:!this.state.show})
  }

   
  completeItemHandler=(index)=>{
      let temp = [...this.state.items]
      temp[index].isCompleted = true;
      this.setState({items:temp})
  }

  render(){
    
    let currentitem = this.state.items.map((item,index)=>{
    
        return(
            <div>       
                <List name = {item.item} 
                key = {item.id} 
                edit = {item.toedit}
                Eclick = {()=>this.editHandler(index)}
                edittext ={this.editTextHandler}
                editItem={()=>this.editItemHandler(index)}
                complete= {item.isCompleted}
                Cclick = {()=>this.completeItemHandler(index)}><button className="abutton" onClick = {()=>this.deleteItemHandler(item.id)}>x</button> </List>
            </div>
        )
      }
    )
    
    
    return(
      <div className = "App"> 
        <div>
          <h1 className="App-header">ToDo List</h1>
        </div>
        <div><input  className="textbox" type = "text" placeholder = "Add item" onChange = {this.textChnageHandler} id="input"/><span><button className="abutton" onClick = {this.addItemHandler} >+</button></span></div>
        {currentitem}
      </div>
    );
  }
}


export default App;
