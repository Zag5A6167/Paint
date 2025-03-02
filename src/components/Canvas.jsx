import React,{useEffect, useRef} from 'react'

function Canvas() {

    const cavasRef = useRef(null)

    useEffect(() =>{
        const canvas = cavasRef.current
        const context = canvas.getContext('2d')
        context.fillStyle = 'white'
        context.fillRect(0,0,canvas.width,canvas.height)

    

        const handleClick = (e) =>{
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            context.fillStyle = 'black';
            context.fillRect(x, y, 10, 10);
        }

        canvas.addEventListener('click', handleClick)
    })

  return (
    
    <canvas ref={cavasRef} width={900} height={500} />
  )
}

export default Canvas