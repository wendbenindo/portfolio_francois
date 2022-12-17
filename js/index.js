function animateTitle(selector){
    const title=document.querySelector(selector)
    if(title==null){
        console.error("impossible de trouver les titre"+selector)
        return
    }
    const children=Array.from(title.childNodes)
    let elements=[]
    children.forEach(child=>{
        if(child.nodeType == Node.TEXT_NODE){
        const words=child.textContent.trim('').split('')
        let spans= words.map (wrapWord)
        spans.map(span=>{
            return[span,document.createTextNode('')]
        })
        
        
        console.log(spans)
        elements=elements.concat( 
           injectElementBetweenItems(spans,document.createTextNode('')) )
        }else{
            elements.push(child)
        }
    })
    console.log(elements)
    title.innerHTML=''
    elements.forEach(el=>{
        title.appendChild(el)
    })
    Array.from(title.querySelectorAll('span span')).forEach((span,k)=>{
        span.style.animationDelay=(k*.7)+'s'
    })
    }
    function wrapWord (word){
        const span=document.createElement('span')
        const span2=document.createElement('span')
        span.appendChild(span2)
        span2.innerHTML=word
        return span
    }
    function injectElementBetweenItems(arr,element){
       return arr.map ((item,k)=>{
            if(k==arr.length-1){
                return[item]
            }
            return[item,element.cloneNode()]
    
        }).reduce((acc,pair)=>{
            acc=acc.concat(pair)
            return acc
        },[])
    }
    animateTitle('.title')