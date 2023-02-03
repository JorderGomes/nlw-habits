const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')



button.addEventListener('click', add)
form.addEventListener('change', save)

// data = {
//     "run":["04-01","04-02","04-03","04-04","04-05","04-06","04-07"],
//     "water":["03-01","03-02","03-03","03-04","03-05","03-06","03-07"],
//     "food":["01-21", "02-01","02-02","02-03","02-04","02-05","02-06","02-07"]
// }

function add(){
    const today = new Date().toLocaleDateString('pt-br').slice(0,-5)
    if (nlwSetup.dayExists(today)){
        alert('Dia já incluso.')
        return
    }
    nlwSetup.addDay(today)
}

function save(){
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}


const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}


console.log(JSON.stringify(data))


nlwSetup.setData(data)
nlwSetup.load()

