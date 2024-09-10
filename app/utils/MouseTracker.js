for(const card of document.querySelectorAll(".card")) {
  card.onmousemove = e => HandleOnMouseMove(e)
}

const HandleOnMouseMove = (e) => {
    const {currentTarget : target} = e;

    const rect = target.getBoundingClientRect(),
           x = e.clientX = rect.left,
           y = e.clientY = rect.top;
   
     target.style.setProperty("--mouse-x", `${x}px`),
     target.style.setProperty("--mouse-y", `${y}px`),

     console.log("--mouse-x", `${x}px`)
     console.log("--mouse-y", `${y}px`)
     return rect;
   }

   export default HandleOnMouseMove;