const productsContainer = document.querySelector('#cards')

const fetchData = async ()=>{
//fetch data/await data
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()

    //loop through data
    data.products.forEach((product)=>{
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
            <h2>${product.title}</h2>
            <img src="${product.thumbnail}" class="pics"/>
            <p>${product.category}</p>
            <p>${product.price}</p>
        `
        productsContainer.appendChild(card)
    })

}

fetchData()