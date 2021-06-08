import React,{useState,useEffect} from 'react'
import Box from './box'
import './style.css'
const App = (props)=>{
  const [grid,setGrid] = useState([
    [{val:'',id:1},{val:'',id:2},{val:'',id:3}],
    [{val:'',id:4},{val:'',id:5},{val:'',id:6}],
    [{val:'',id:7},{val:'',id:8},{val:'',id:9}]
  ])
  const [p1,setP1] = useState(0)
  const [p2,setP2] = useState(0)
  const [drawCount,setDrawCount] = useState(0)
  const [turn,changeTurn] = useState(true)
  useEffect(() => {
    setTimeout(()=>{
      if(grid[0][0].val!='' && grid[0][0].val===grid[0][1].val && grid[0][2].val==grid[0][1].val){
          youWin(grid[0][0].val);
      }else if(grid[1][0].val!='' && grid[1][0].val===grid[1][1].val && grid[1][2].val==grid[1][1].val){
        youWin(grid[1][0].val);
      }else if(grid[2][0].val!='' && grid[2][0].val===grid[2][1].val && grid[2][2].val==grid[2][1].val){
        youWin(grid[2][0].val);
      }else if(grid[0][0].val!='' && grid[0][0].val===grid[1][0].val && grid[1][0].val==grid[2][0].val){
        youWin(grid[0][0].val);
      }else if(grid[0][1].val!='' && grid[0][1].val===grid[1][1].val && grid[1][1].val==grid[2][1].val){
        youWin(grid[0][1].val);
      }else if(grid[0][2].val!='' && grid[0][2].val===grid[1][2].val && grid[2][2].val==grid[1][2].val){
        youWin(grid[0][2].val);
      }else if(grid[1][1].val!='' && grid[0][0].val===grid[1][1].val && grid[1][1].val==grid[2][2].val){
        youWin(grid[1][1].val);
      }else if(grid[1][1].val!='' && grid[0][2].val===grid[1][1].val && grid[1][1].val==grid[2][0].val){
        youWin(grid[1][1].val);
      }else {
          let isDraw = true
          grid.forEach(element => {
              element.forEach(item => {
                  if(item.val==''){
                    isDraw = false
                  }
              });
          });
          if(isDraw){
            draw()
          }
      }
      
    },90)
    
  }, [grid])
  const handleClick =(id)=>{
      let newGrid = grid.map((items)=>{
          return items.map((item)=>{
            if(item.id==id){
              if(item.val.length>0){
                return item;
              }
              let curr;
              if(turn){
                curr = 'X'
              }else{
                curr = 'O'
              }
              changeTurn(prev => !prev)
              return {val:curr,id:item.id}
            }
            return item
          })
      })
      setGrid(newGrid)
  }
  
  return (
    <>
         {
          grid.map((items)=>{
            return (
            <>
             <div className="container">
              {items.map((item)=>{
                return <Box key={item.id} item={item} tap={handleClick}/>
              })
              }
            </div>
            </>
           )
          })
        }
        <div className="player-style">
            <table>
                <tr>
                  <td>Name</td>
                  <td>Win</td> 
                  <td>Draw</td>
                </tr>
                <tr>
                  <td>{props.information[0]}</td>
                  <td>{p1}</td> 
                  <td>{drawCount}</td>
                </tr>
                <tr>
                  <td>{props.information[1]}</td>
                  <td>{p2}</td>
                </tr>
          </table>
        </div>
    </>
  )
  function resetGrid(){
    let newGrid = [[{val:'',id:1},{val:'',id:2},{val:'',id:3}],
    [{val:'',id:4},{val:'',id:5},{val:'',id:6}],
    [{val:'',id:7},{val:'',id:8},{val:'',id:9}]]
    setGrid(newGrid)
  }
  function youWin(who){
    if(who=='X'){
        alert(props.information[0] + ' won the game')
        setP1(prev => prev+1)
    }else{
        alert(props.information[1]+ ' won the game')
        setP2(prev => prev+1)
    }
    changeTurn(true)
    resetGrid()
  }
  function draw(){
      alert('Game Draw')
      resetGrid();
      setDrawCount(prev => prev+1)
  }
}
export default App