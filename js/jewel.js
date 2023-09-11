const buttonOne = document.getElementById('btn1')
const buttonTwo = document.getElementById('btn2')
const buttonThree = document.getElementById('btn3')
// var img = document.createElement('img');

const hider = document.getElementById('tabs')
const hider2 = document.getElementById('mobiletaber')
const hider3 = document.getElementById('others')

buttonOne.addEventListener('click', () => {
    buttonOne = allClick();
});

const allClick = () => {
    // img.src = "hel01.jpg";
    // document.buttonOne.appendChild(img)
    
    const product = document.getElementById('allproducts')
    const img = document.getElementById('imager')
    const img1 = document.getElementById('imager1')
    const img2 = document.getElementById('imager2')
  
    const texter = document.getElementById('text');
    const texter1 = document.getElementById('text1');
    const texter2 = document.getElementById('text2');
 
    const pagra = document.getElementById('pagra')
    const pagra1 = document.getElementById('pagra1')
    const pagra2 = document.getElementById('pagra2')

    product.innerHTML ="All products"
    texter.innerHTML = "Headset";
    img.src = "./images/head02.jpg";
    pagra.innerHTML = "Lorem ipsum dolor sit amet consectetur <br> adipisicing elit. At, modi?"
   
    img1.src = "images/hel03.jpg";
    pagra1.innerHTML = "Lorem ipsum dolor sit amet consectetur  <br>adipisicing elit. At, modi?"
    texter1.innerHTML = "Helmet Vega";
   
    img2.src = "images/oven02.jpg";
    pagra2.innerHTML = "Lorem ipsum dolor sit amet consectetur  <br>adipisicing elit. At, modi?"
    texter2.innerHTML = "Realme 43inch";
    
    // hider2.innerHTML = "";
    // hider3.innerHTML = "";
    
   
        //    hider3.innerHTML = "";
        
       
        
        
        }
        


buttonTwo.addEventListener('click',() => {
    buttonTwo = mobileclick();
    });
    
    const mobileclick = () => {
        
    
        const mobimage = document.getElementById('mobimg')
        const mobhead = document.getElementById('mobtext')
        const mobpara = document.getElementById('mobp')
       
        const mobimage1 = document.getElementById('mobimg1')
        const mobhead1 = document.getElementById('mobtext1')
        const mobpara1= document.getElementById('mobp1')
    
        const mobimage2 = document.getElementById('mobimg2')
        const mobhead2 = document.getElementById('mobtext2')
        const mobpara2 = document.getElementById('mobp2')
    
        const mobimage3 = document.getElementById('mobimg3')
        const mobhead3 = document.getElementById('mobtext3')
        const mobpara3 = document.getElementById('mobp3')
        const mobilepro = document.getElementById("mobileproduct")

        mobilepro.innerHTML ="Mobile Devices"
        mobimage.src = "images/mob1.jpeg";
        mobhead.innerHTML = "Samsung"
        mobpara.innerHTML = "Lorem ipsum dolor sit amet consectetur  <br>adipisicing elit. At, modi?"
    
        mobimage1.src = "images/mob2.jpeg";
        mobhead1.innerHTML = "oneplus+"
        mobpara1.innerHTML = "Lorem ipsum dolor sit amet consectetur  <br>adipisicing elit. At, modi?"
    
        mobimage2.src = "images/mob3.jpeg";
        mobhead2.innerHTML = "iphone 14pro"
        mobpara2.innerHTML = "Lorem ipsum dolor sit amet consectetur  <br>adipisicing elit. At, modi?"
    
        mobimage3.src = "images/mob4.jpeg";
        mobhead3.innerHTML = "vivo v23"
        mobpara3.innerHTML = "Lorem ipsum dolor sit amet consectetur  <br>adipisicing elit. At, modi?"
    
      
       hider.innerHTML = "";
      
    }



    buttonThree.addEventListener('click', () => {
        buttonThree = accussclick();
    });
    
    
    const accussclick = () => {
    
       
    
        const other = document.getElementById('other')
        const otherhead = document.getElementById('otherhead')
        const othertext = document.getElementById('othertext')
       
        const other1 = document.getElementById('other1')
        const otherhead1 = document.getElementById('otherhead1')
        const othertext1 = document.getElementById('othertext1')
    
        const other2 = document.getElementById('other2')
        const otherhead2 = document.getElementById('otherhead2')
        const othertext2 = document.getElementById('othertext2')
    
        const other3 = document.getElementById('other3')
        const otherhead3 = document.getElementById('otherhead3')
        const othertext3 = document.getElementById('othertext3')
     
        const otherpro =document.getElementById('otherpro')
    
        otherpro.innerHTML = "Festival offers"
       other.src = "images/sch2.jpeg";
        otherhead.innerHTML = "School Bag"
        othertext.innerHTML = "Lorem ipsum dolor sit amet consectetur  <br>adipisicing elit. At, modi?"
    
      other1.src = "images/char1.jpeg";
        otherhead1.innerHTML = "Qucik Charger"
        othertext1.innerHTML = "Lorem ipsum dolor sit amet consectetur  <br>adipisicing elit. At, modi?"
    
       other2.src = "images/char2.jpeg";
        otherhead2.innerHTML = "22w charger"
        othertext2.innerHTML = "Lorem ipsum dolor sit amet consectetur  <br>adipisicing elit. At, modi?"
    
        other3.src = "images/hel03.jpg";
        otherhead3.innerHTML = "Helmet"
        othertext3.innerHTML = "Lorem ipsum dolor sit amet consectetur  <br>adipisicing elit. At, modi?"
    
    
        
        hider2.innerHTML = "";
    
    }




    const increment = document.getElementById('adder')
const decerement  = document.getElementById('reduce')





increment.addEventListener('click', () => {
   increment = Incrementer();
});

decerement.addEventListener('click',() => {
    decerement = decerementer()
});

var Valuein  = 0;
const Incrementer = () => {
    const num = document.getElementById('value')
  Valuein = Valuein +1;
  num.innerHTML = Valuein;    
}

const decerementer = () => {
    const num = document.getElementById('value')
    const body = document.getElementById('body')

    Valuein = Valuein -1
    if(Valuein <= 0){
        // alert("the value below 0 cause SYSTEM DAMAGE !!")
        Valuein  = 0
        
    }
    
    num.innerHTML = Valuein;
    
}