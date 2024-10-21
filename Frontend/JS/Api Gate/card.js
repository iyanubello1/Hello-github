
//to fetch products from the database
async function getproduct() {
    
    try{
        const response = await fetch('http://fakestoreapi.com/products');

        console.log(`initial response:`, response);
        
        //convert the returned promise to a javascript object
        const productData = await response.json();

        console.log(`productData:`, productData);

        //grab an empty container from the DOM
        const productCard = document.getElementById('product-card');

        //create a variable and initialize it with an empty string
        let mycards = "";

        //loop through the array of products fetched
        productData.map((item) => {
            mycards += `
            <div class="card">
            <img src=${item.image} alt="photo" />
            <h3>${item.title}</h3>
            <div class="amount">
                <h5>price:</h5>
                <p>${item.price}</p>
            </div>

            <div class="category">
                <h5>category:</h5>
                <p>${item.category}</p>
            </div>

            <p>${item.description}</p>
             </div>
          `

        });

        productCard.innerHTML = mycards;
    }

    catch (error) {
        console.log('product error:', error);
    }
};
    
getproduct();