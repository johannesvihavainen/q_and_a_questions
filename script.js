var expandButton1 = document.querySelector('.expand-btn-1');
var expandButton2 = document.querySelector('.expand-btn-2');
var expandButton3 = document.querySelector('.expand-btn-3');
var addDivider = document.createElement('div');
addDivider.classList.add('divider');

function firstQuestion() {
    var counter = 0;
    var changeButtonIcon = document.querySelector('.add-logo-1');
    var wrapper1 = document.querySelector('.wrapper-1');
    var paragraph = document.createElement('p');
    expandButton1.addEventListener('click', function () {
        counter++;

        if (counter === 1) {
            wrapper1.appendChild(addDivider);
            wrapper1.style = "height: 300px;"
            paragraph.classList.add('paragraph');
            paragraph.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, aperiam magni esse et porro quaerat quo eum nisi commodi asperiores molestias qui tempora omnis dolores eaque error labore at. Doloribus quis reiciendis quasi quibusdam in?";
            wrapper1.appendChild(paragraph);
            changeButtonIcon.src = "photos/minus.png";
            paragraph.style = "display: block;";
            addDivider.style = "display: block;";

        } else if (counter === 2) {
            counter = 0;
            changeButtonIcon.src = "photos/add.png";
            wrapper1.style = "height: 150px;";
            paragraph.style = "display: none;";
            addDivider.style = "display: none;";
        }


    })
}

function secondQuestion() {
    var counter = 0;
    var changeButtonIcon = document.querySelector('.add-logo-2');
    var wrapper2 = document.querySelector('.wrapper-2');
    var paragraph = document.createElement('p');
    expandButton2.addEventListener('click', function () {
        counter++;

        if (counter === 1) {
            wrapper2.appendChild(addDivider);
            wrapper2.style = "height: 300px;"
            paragraph.classList.add('paragraph');
            paragraph.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, aperiam magni esse et porro quaerat quo eum nisi commodi asperiores molestias qui tempora omnis dolores eaque error labore at. Doloribus quis reiciendis quasi quibusdam in?";
            wrapper2.appendChild(paragraph);
            changeButtonIcon.src = "photos/minus.png";
            paragraph.style = "display: block;";
            addDivider.style = "display: block;";

        } else if (counter === 2) {
            counter = 0;
            changeButtonIcon.src = "photos/add.png";
            wrapper2.style = "height: 150px;";
            paragraph.style = "display: none;";
            addDivider.style = "display: none;";
        }


    })
}

function thirdQuestion() {
    var counter = 0;
    var changeButtonIcon = document.querySelector('.add-logo-3');
    var wrapper3 = document.querySelector('.wrapper-3');
    var paragraph = document.createElement('p');
    expandButton3.addEventListener('click', function () {
        counter++;

        if (counter === 1) {
            wrapper3.appendChild(addDivider);
            wrapper3.style = "height: 300px;"
            paragraph.classList.add('paragraph');
            paragraph.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, aperiam magni esse et porro quaerat quo eum nisi commodi asperiores molestias qui tempora omnis dolores eaque error labore at. Doloribus quis reiciendis quasi quibusdam in?";
            wrapper3.appendChild(paragraph);
            changeButtonIcon.src = "photos/minus.png";
            paragraph.style = "display: block;";
            addDivider.style = "display: block;";

        } else if (counter === 2) {
            counter = 0;
            changeButtonIcon.src = "photos/add.png";
            wrapper3.style = "height: 150px;";
            paragraph.style = "display: none;";
            addDivider.style = "display: none;";
        }


    })
}



firstQuestion();
secondQuestion();
thirdQuestion();

