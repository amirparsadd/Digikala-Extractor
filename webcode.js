// A tool for scraping products off digikala
// Paste in the console and enjoy ;)

// Works For Any Product Category Or Search

// Paste The Results Into The Python File

found = []
document.querySelectorAll('[data-testid=product-card]').forEach(product => {found.push(product.children[0].children[1].children[1])})

found.sort()

const p2e = s => s.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))

namesList = []
totalPrice = 0
found.forEach(pr => {
    try{
    const PRODUCT_NAME = pr.children[1].innerText
    const PRODUCT_PRICE_RAW = pr.children[3].children[0].querySelector("[data-testid=price-final]").innerText
    const PRODUCT_DISCOUNT_RAW = (pr.children[3].children[0].querySelector("[data-testid=price-discount-percent]") || { innerText: "0%" }).innerText

    const PRODUCT_PRICE = parseInt(p2e(PRODUCT_PRICE_RAW).replace(/,(?=\d{3})/g, ''))
    const PRODUCT_DISCOUNT = parseInt(p2e(PRODUCT_DISCOUNT_RAW))

    // RULESETS
    // Add Whatever You Like
    // if(PRODUCT_DISCOUNT < 30) return
    // if(PRODUCT_PRICE > 500_000) return

    namesList.push(PRODUCT_NAME)
    totalPrice += PRODUCT_PRICE
    
    console.log("\n========")
    console.log(PRODUCT_NAME)
    console.log(PRODUCT_PRICE)
    console.log(PRODUCT_DISCOUNT)
    console.log("========\n")
    } catch(e) {}
})

namesText = "\n"
namesList.forEach(name => namesText += `${name}\n`)
console.log(namesText)

avgPrice = totalPrice / namesList.length
console.log(`AVG Price = ${avgPrice}`)