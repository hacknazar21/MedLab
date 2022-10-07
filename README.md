This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

<style>
    .product-btn{
        position: relative;
        width: 20px;
        height: 20px;
        padding: 5px;
        border: 1px solid #000;
        border-radius: 50%;
        background: none;
        cursor:pointer;
    }
    .product-btn:not(:last-child){
        margin-right: 5px;
    }
    .product-btn:hover{
        background-color: #000;
    }
    .product-btn:hover.product-btn:before{
        background-color: #fff;
    }
    .product-btn:hover.product-btn:after{
        background-color: #fff;
    }
    .product-btn:before, .product-btn:after{
        content: "";
        display: block;
		position: absolute;
		width: 30%;
		top: calc(50% - 1px);
		height: 2px;
		background-color: #000;
		left: calc(50% - 4.5px);
    }
    
    .add-btn-product-option:after{
        transform-origin: center;
		transform: rotate(90deg);
    }
    .form-type-number {
        position: relative;
        height: 35px;
        display: flex;
        align-items:center;
        margin-top: 10px;
       
    }
    .form-type-input {
        padding: 10px;
        border: 1px solid #000;
        border-radius: 4px;
        max-width: 40px;
        text-align: center;
    }
    .form-type-input::-webkit-inner-spin-button, 
    .form-type-input::-webkit-outer-spin-button { 
      -webkit-appearance: none;
    }
    .btn-input{
        position: relative;
        width: 20px;
        height: 20px;
        padding: 5px;
        border: 1px solid #000;
        border-radius: 50%;
        background: none;
        cursor:pointer;
        max-width: 30px;
        text-align: center;
    }
    .btn-input:before, .btn-input:after{
        content: "";
        display: block;
		position: absolute;
		width: 30%;
		top: calc(50% - 1px);
		height: 2px;
		background-color: #000;
		left: calc(50% - 4.5px);
    }
    .btn-plus:after{
        transform-origin: center;
		transform: rotate(90deg);
    }
    .btn-input:hover{
        background-color: #000;
    }
    .btn-input:hover.btn-input:before{
        background-color: #fff;
    }
    .btn-input:hover.btn-input:after{
        background-color: #fff;
    }
</style>

<script>
    document.onready = async ()=>{
        const MIN_ZAKAZs = [5, 1, 1, 1] // Минимальное количество в заказе
        const blockIDs = ['#rec491491247', '#rec490329273', '#rec490330554', '#rec490337073'] // ID блока куда нужно добавить функционал
        let iterator = 0
        for(const blockID of blockIDs){
            const MIN_ZAKAZ = MIN_ZAKAZs[iterator++]
            const product = await getElement(document, blockID)
            const productOption = await getElement(product, '.t-product__option')
            const price = await getElement(product, '.js-product-price')
            const startPrice = parseFloat(price.innerHTML)
            const addBtn = document.createElement('button')
            const removeBtn = document.createElement('button')
            const inputCount = document.createElement('input')
            const inputBox = document.createElement('div')
            inputCount.value = MIN_ZAKAZ
            inputCount.type = 'number'
            inputCount.classList.add('form-type-input')
            inputBox.classList.add('form-type-number')
            addBtn.classList.add('add-btn-product-option')
            addBtn.classList.add('product-btn')
            removeBtn.classList.add('remove-btn-product-option')
            removeBtn.classList.add('product-btn')
            const productSelect = await getElement(product,'select')
            const productSelectsWrapper = await getElement(product,'.js-product-controls-wrapper')
            productSelectsWrapper.insertAdjacentElement('beforeend', addBtn)
            productSelectsWrapper.insertAdjacentElement('beforeend', removeBtn)
            inputBox.insertAdjacentElement('beforeend', inputCount)
            inputBox.insertAdjacentHTML('afterbegin', '<button class="btn-input btn-minus" onclick="this.nextElementSibling.stepDown();this.nextElementSibling.dispatchEvent(new Event(\'input\'))"></button>')
            inputBox.insertAdjacentHTML('beforeend', '<button class="btn-input btn-plus" onclick="this.previousElementSibling.stepUp();this.previousElementSibling.dispatchEvent(new Event(\'input\'))"></button>')
            productOption.insertAdjacentElement('beforeend', inputBox)
            let childId = 0
            
            productSelect.onchange = (event)=>{
                updatePrice(price, startPrice, product)
            }
            addBtn.onclick = (event)=>{
                const productOptionClone = productOption.cloneNode(true)
                productOptionClone.setAttribute('data-clone-id', childId++)
                addBtn.insertAdjacentElement('beforebegin', productOptionClone)
                productOptionClone.querySelector('select').onchange = (event)=>{
                    updatePrice(price, startPrice, product)
                }
                productOptionClone.querySelector('input').oninput = (event) => {
                    if(!event.target.value || event.target.value <= MIN_ZAKAZ - 1){
                      event.target.value = MIN_ZAKAZ
                    }
                    updatePrice(price, startPrice, product)
                }
                
                updatePrice(price, startPrice, product)
            }
            removeBtn.onclick = (event)=>{
                const searchedClone = product.querySelector(`[data-clone-id="${childId-1}"]`)
                if(searchedClone){
                    childId--
                    productSelectsWrapper.removeChild(searchedClone)
                }
                updatePrice(price, startPrice, product)
            }
            inputCount.oninput = (event) => {
                if(!event.target.value || event.target.value <= MIN_ZAKAZ - 1){
                  event.target.value = MIN_ZAKAZ
                }
                updatePrice(price, startPrice, product)
            }

            updatePrice(price, startPrice, product)
        }
    }

    async function getElement(where, selector){
        if(where.querySelector(selector)){
            return where.querySelector(selector)
        }
        setTimeout(()=>{
            getElement(where, selector)
        }, 500)
    }
    function updatePrice(price, startPrice, product){
        setTimeout(()=>{
            const selects = product.querySelectorAll('select')
            let priceUpdated = 0
            for(const select of selects){
                const selectedOption = select.selectedOptions[0]
                const countInput = select.closest('.t-product__option').querySelector('input')
                let positionPrice = 0
                if(selectedOption.dataset.productVariantPrice === '') {
                    priceUpdated += startPrice * parseInt(countInput.value)
                    positionPrice = startPrice * parseInt(countInput.value)
                }
                else{
                    const sign = selectedOption.dataset.productVariantPrice[0]
                    const value = parseFloat(selectedOption.dataset.productVariantPrice.replace(sign, ''))
                    if(sign === '+'){
                        priceUpdated += (startPrice + value) * parseInt(countInput.value)
                        positionPrice = (startPrice + value) * parseInt(countInput.value)
                        
                    }
                    else if(sign === '-'){
                        priceUpdated += (startPrice - value) * parseInt(countInput.value)
                        positionPrice = (startPrice - value) * parseInt(countInput.value)
                    }
                }
                selectedOption.innerHTML = selectedOption.innerHTML.split('x')[0] + ` x${parseInt(countInput.value)}`+ ` - ${positionPrice} BYN`  
                selectedOption.value = selectedOption.innerHTML
            }
                
            price.innerHTML = priceUpdated
        }, 200)
    }
</script>
