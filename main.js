const table = document.getElementById("chart");

const list = [22, 14, 3, 4, 37, 6, 7, 81, 9, 10];

function random(array) {
    let j = 0;
    let temp = null;
    // start: i = last index
    for (i = array.length - 1; i > 0; i -= 1){
        // j = random num between 0 - array length
        j = Math.floor(Math.random() * (i + 1));
        // temp holds countdown
        temp = array[i];
        // swap index[i] with random index
        array[i] = array[j];
        // swap index[j] with original index[i]
        array[j] = temp;
    }
    return array;
}

// 

function mean(array) {
    let total = 0;
    array.map(num => {
        total += num;
    });
    total /= list.length;
    return total;
}

// 

function chart(data) {
    for(i = 0; i < data.length; i++) {
        let row = table.insertRow();
        let cellNameF = row.insertCell(0);
        let cellNameL = row.insertCell(1);
        let cellEmail = row.insertCell(2);
        let cellGender = row.insertCell(3);

        cellNameF.innerHTML = data[i].firstname;
        cellNameL.innerHTML = data[i].lastname;
        cellEmail.innerHTML = data[i].email;
        cellGender.innerHTML = data[i].gender;
    }
}

// 

fetch("http://bptest.net/devtest/data.php")
.then(function(res) {
    return res.json();
})
.then(function(data) {
    chart(data);
})
.catch((err) => {
    console.log(err);
})

// display //

const randomDiv = document.getElementsByClassName("random")[0];

const meanDiv = document.getElementsByClassName("mean")[0];

randomDiv.innerHTML = random(list);
meanDiv.innerHTML = mean(list);

