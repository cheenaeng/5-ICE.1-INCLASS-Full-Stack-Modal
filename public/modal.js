  function modalAppear(id) {
      const modalEl = document.querySelector(`#item${id} .modal`);
      console.log(modalEl);
      modalEl.style.visibility = "visible";

    }
  
    function modalHidden(id){
       const modalEl = document.querySelector(`#item${id} .modal`);
      console.log(modalEl);
      modalEl.style.visibility = "hidden";
    }