

function removeError(element) {

    element.classList.remove('error');
}
const submit = document.getElementById('submit');
const tasks = [];

submit.addEventListener('click', function () {

    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const now = new Date();

    if (title.value !== '' && description.value !== '') {
        const task = {
            title: title.value,
            description: description.value,
            date: `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} `
        }

        console.log(now);

        tasks.push(task);
        title.value = '';
        description.value = '';
    }
    else {
        if (title.value === '') {
            title.classList.add('error');

        }
        if (description.value === '') {
            description.classList.add('error');

        }
    }

    // setData(tasks);

    console.log('click', tasks);
});

function setData (arr){
    if (arr.length>0) {
        let tmp = '';
        for(let i = 0; i<arr.length; i++){
tmp += renderItem(arr[i]);


        }
    }
}
