const button1=document.querySelector("wrapButton1"),button2=document.querySelector("wrapButton2");button1.addEventListener("click",e=>{setTimeout(()=>navbar.querySelectorAll("a")[i-1].classList.toggle("animationShow"),250*i),navbar.querySelectorAll("a")[i-1].addEventListener("mouseover",e=>{content.innerHTML=`<iframe src="${navbar.querySelectorAll("a")[i-1].href}"></iframe>`,setTimeout(()=>content.querySelector("iframe").classList.toggle("animationShow"),100)})}),button2.addEventListener("click",e=>{setTimeout(()=>navbar.querySelectorAll("a")[i-1].classList.toggle("animationShow"),250*i),navbar.querySelectorAll("a")[i-1].addEventListener("mouseover",e=>{content.innerHTML=`<iframe src="${navbar.querySelectorAll("a")[i-1].href}"></iframe>`,setTimeout(()=>content.querySelector("iframe").classList.toggle("animationShow"),100)})});