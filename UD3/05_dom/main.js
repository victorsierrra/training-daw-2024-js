window.onload = () =>
    {
        const AllDivs = document.querySelectorAll('div')
    
        for (let div of AllDivs )
        {
            console.log(div)
        }
        console.log("")
    
        const allButtons = document.getElementsByClassName('buttons')
    
        for (let button of allButtons)
        {
            console.log(button)
        }
        console.log("")
    
        const divButtons = document.querySelectorAll('div .buttons')
    
        for (let divButton of divButtons)
        {
            console.log(divButtons)
        }
    }