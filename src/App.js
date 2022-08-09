


export default function App() {


  function insert(num) {
    let number = document.getElementById('tela').innerHTML;
    document.getElementById('tela').innerHTML = number + num
  }

  function del(){
    document.getElementById('tela').innerHTML = ''
  }

  function back(){
    let resultado = document.getElementById('tela').innerHTML;
    document.getElementById('tela').innerHTML = resultado.substring( 0,resultado.length -1 )
    
  }
  function cal() {
    let calcular = document.getElementById('tela').innerHTML;
    document.getElementById('tela').innerHTML = eval(calcular)
  }



  return (

    




   <div className="w-full h-screen	bg-slate-400 	">
    <header className="h-10	 bg-black rounded-b-lg text-white text-center text-2xl">Calculadora </header>
    <div className='w-12-12    flex justify-center h-3/6'>
        <div className='	max-w-[800px] min-w-min p-3 w-6/12  h-6/6 bg-neutral-900 mt-24	 flex flex-col rounded-lg justify-center    '>
          <div className='flex justify-center h-1/5 items-center space-x-8 w-full'>
          <div className="w-9/12 bg-green-200 p-3 rounded-lg w-full"  id='tela'></div>
          <div><button onClick={back}  className='w-16 bg-white rounded-full'>C</button></div>
          </div>
        <div className='flex justify-around flex-row h-1/5 items-center '>
          <div><button onClick={()=> {insert('1')}}  className='w-16  bg-white rounded-full'>1</button></div>
          <div><button onClick={()=> {insert('2')}} className='w-16 bg-white rounded-full'>2</button></div>
          <div><button onClick={()=> {insert('3')}} className='w-16 bg-white rounded-full'>3</button></div>
          <div><button onClick={()=> {insert('+')}} className='w-16 bg-white rounded-full'>+</button></div>
          
        </div>
        <div className='flex justify-around flex-row h-1/5 items-center '>
          <div><button onClick={()=> {insert('4')}} className='w-16 bg-white rounded-full'>4</button></div>
          <div><button onClick={()=> {insert('5')}} className='w-16 bg-white rounded-full'>5</button></div>
          <div><button onClick={()=> {insert('6')}} className='w-16 bg-white rounded-full'>6</button></div>
          <div><button onClick={()=> {insert('-')}} className='w-16 bg-white rounded-full'>-</button></div>
        </div>
        <div className='flex justify-around flex-row h-1/5 items-center '>
          <div><button onClick={()=> {insert('7')}} className='w-16 bg-white rounded-full'>7</button></div>
          <div><button onClick={()=> {insert('8')}} className='w-16 bg-white rounded-full'>8</button></div>
          <div><button onClick={()=> {insert('9')}} className='w-16 bg-white rounded-full'>9</button></div>
          <div><button onClick={()=> {insert('*')}} className='w-16 bg-white rounded-full'>*</button></div>
        </div>
        <div className='flex justify-around flex-row h-1/5 items-center '>
          <div><button onClick={del}  className='w-16 bg-white rounded-full'>Limpar</button></div>
          <div><button onClick={()=> {insert('0')}}   className='w-16 bg-white rounded-full'>0</button></div>
          <div><button onClick={()=> {insert('/')}} className='w-16 bg-white rounded-full'>/</button></div>
          <div><button onClick={()=> {cal("=")}} className='w-16 bg-white rounded-full'>=</button></div>
        </div>
          
        </div>

    </div>
   </div>
  )
}


