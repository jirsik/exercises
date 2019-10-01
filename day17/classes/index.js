class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    sell() {
        if (this.quantity > 0) {
            this.quantity = this.quantity - 1;
            construct();
        }
    }
    store(count) {
        this.quantity += count;
        construct();
    }
}

const products = [new Product('TV', 2000, 10),
                new Product('radio', 500, 10),
                new Product('computer', 3000, 10),
                new Product('printer', 2000, 10),
                new Product('mobile', 1000, 10),
                new Product('tablet', 1200, 10),
                new Product('timemachine', 2000000, 1),];

const construct = () => {
    const list = document.querySelector('.list');
    list.innerHTML = '';
    for (const product of products) {
        const productDOM = document.createElement('div');
        productDOM.innerHTML = `<h3>${product.name}</h3><p>price: ${product.price}</p><p>pieces left: ${product.quantity}</p><br><button class="buy-btn">buy</button>`;
        productDOM.querySelector('.buy-btn').addEventListener('click', () => {
            product.sell();
        });
        list.appendChild(productDOM);
    }
};

document.addEventListener('DOMContentLoaded', ()=>{
    construct();
});

