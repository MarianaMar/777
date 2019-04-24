

function removeError(element) {

    element.classList.remove('error');
}
const submit = document.getElementById('submit');
const edit = document.getElementById('edit');
const tbody = document.getElementById('tbody');

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

    setData(tasks);

    console.log('click', tasks);
});

function setData(arr) {
    if (arr.length >= 0) {
        let tmp = '';
        for (let i = 0; i < arr.length; i++) {
            tmp += renderItem(i, arr[i]);


        }
        tbody.innerHTML = tmp;
    }
}
function renderItem(i, item) {
    return `
    <tr>
      <th scope="row">${i + 1}</th>
      <td>${item.title}</td>
      <td>${item.description}</td>
      <td>${item.date}</td>
      <td>
        <i data-id="${i}" data-type="edit" class="fas fa-edit"></i>
        <i data-id="${i}" data-type="remove" class="far fa-trash-alt"></i>
      </td>
    </tr>
    `;
}

tbody.addEventListener('click', getItem);

function getItem(e) {
    const id = e.target.dataset.id;
    const type = e.target.dataset.type;

    if (type === 'edit') {
        console.log('edit');
        title.value = tasks[id].title;
        description.value = tasks[id].description;
        edit.dataset.edit = id;
        submit.style.display = 'none';
        edit.style.display = 'blosk';
    } else {
        tasks.splice(id, 1);
        setData(tasks);
        console.log('remov', id, tasks);


    }

}
edit.addEventListener('click', function (e) {
    const now = new Date();
    tasks[edit.dataset.edit] = {
      title: title.value,
      description: description.value,
      date: ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}
    };
    title.value = '';
    description.value = '';
    submit.style.display = 'block';
    edit.style.display = 'none';
    setData(tasks);
  })