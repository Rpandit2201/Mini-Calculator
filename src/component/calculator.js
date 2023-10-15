import React, { useState } from 'react';
import './calculator.css';

const HomeComponent=()=>{
    const[result,setResult]=useState(0);
    const[input,setInput]=useState('');

    const clickToHandleKeyboard=(num)=>{
    setInput((prevInput)=>prevInput+num);       
    }

    const handleEqualOperator=(operator)=>{
        if(operator === '='){
            try{
                const newResult=eval(input);
                setResult(newResult);
                setInput('');
            }catch(error){
                setResult('Error');
            }
        }
        else{
            setInput((prevInput)=>prevInput+operator);
        }
    }

    const handlePercentage = () => {
        if (input !== '') {
          const percentageValue = parseFloat(input) / 100;
          setInput(percentageValue.toString());
        }
      };


    const clickToCancel=()=>{
        setResult(0);
        setInput('');
    }

    
    return(
        <div className='bg-color'>
           <div className='cal-body'>
            <h2 className='title'>CALCULATOR</h2>
            <div className=' top-part'>                         
                <div className='enter-text'>
                   <p>{input}</p>
                   <p>{result}</p>
                </div>               
            </div>
            <div className='mt-2 btns'>
                <button className='one b text-center' onClick={()=>clickToHandleKeyboard('1')}>1</button>
                <button className='two b' onClick={()=>clickToHandleKeyboard('2')}>2</button>
                <button className='three b' onClick={()=>clickToHandleKeyboard('3')}>3</button>
                <button className='four b' onClick={()=>clickToHandleKeyboard('4')}>4</button>
                <button className='five b' onClick={()=>clickToHandleKeyboard('5')}>5</button>
                <button className='six b' onClick={()=>clickToHandleKeyboard('6')}>6</button>
                <button className='seven b' onClick={()=>clickToHandleKeyboard('7')}>7</button>
                <button className='eight b' onClick={()=>clickToHandleKeyboard('8')}>8</button>
                <button className='nine b' onClick={()=>clickToHandleKeyboard('9')}>9</button>
                <button className='ten b' onClick={()=>clickToHandleKeyboard('0')}>0</button>
                <button className='ten b' onClick={()=>clickToHandleKeyboard('00')}>00</button>
                <button className='eleven b' onClick={()=>clickToHandleKeyboard('.')}><b>.</b></button>
                <button className='eleven b' onClick={()=>clickToHandleKeyboard('+')}><b>+</b></button>
                <button className='ten b' onClick={()=>clickToHandleKeyboard('-')}><b>-</b></button>
                <button className='ten b' onClick={()=>clickToHandleKeyboard('*')}>X</button>
                <button className='eleven b' onClick={()=>clickToHandleKeyboard('/')}><b>÷</b></button>
                <button className='eleven b' onClick={()=>handlePercentage('%')}><b>%</b></button>               
                <button className='eleven b' onClick={()=>handleEqualOperator('=')}><b>=</b></button>
                <button className='eleven cancel' onClick={clickToCancel}><b>C</b></button>
            </div>
           </div>
        </div>
    )
}
export default HomeComponent;