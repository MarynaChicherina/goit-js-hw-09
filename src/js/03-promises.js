import Notiflix from 'notiflix';

const form = document.querySelector('.form');


form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
     event.preventDefault();
    
     let delay = +event.target.elements.delay.value;
     const step = +event.target.elements.step.value;
     const amount = +event.target.elements.amount.value;
     //очіщаємо форму
     event.target.reset();
    //перебираємо всі проміси
     for (let index=1; index <= amount; index++){
      createPromise(index, delay)
      .then(({position, delay}) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({position, delay}) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
      delay += step;
     }     
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (shouldResolve) {
          resolve({position, delay});
        } else {
          reject({position, delay});
        }
      }, delay);
  });
}
 





