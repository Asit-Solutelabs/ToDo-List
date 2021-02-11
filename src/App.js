import React ,{Component} from 'react';
import './App.css';
import List from './list';

class App extends Component{
  state = {
      items: [],
      currentval: "",
      editval:""
  }
  
  
  textChnageHandler = (event) =>{
      this.setState({currentval:event.target.value})
  }
  
  
  addItemHandler = () =>{
      let temp = [...this.state.items]
      if(this.state.currentval!==""){
          temp.push({id:Math.random()*1000,item:this.state.currentval , isCompleted: false, toedit: false})
          this.setState({items: temp,currentval:""})
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
    this.setState({editval:event.target.value})
  }


  editItemHandler=(index)=>{
      const temp = [...this.state.items]
      temp[index] = {item:this.state.editval}
      this.setState({items: temp})
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
