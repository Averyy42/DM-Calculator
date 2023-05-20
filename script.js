const enemies = [];
console.log(enemies);

document.getElementById('newForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const name = data.get('name');
    const maxHp = data.get('maxHp');
    console.log(name);
    console.log(maxHp * 1);
    if (name !== '') {
        createEnemy(name, maxHp);
    }
    document.getElementById('name').value = '';
    document.getElementById('maxHp').value = '';
})


function createEnemy(name, maxHp) {
    let health = maxHp * 1;
    let isDead = health <= 0 ? true : false
    const newData = {
        name: name,
        maxHp: maxHp * 1,
        currentHp: health,
        dead: isDead,
    }
    enemies.push(newData);
    console.log(enemies);
    
    const enemyName = document.createElement('div')
    enemyName.classList.add('enemy-title');

    const currentHp = document.createElement('h2');
    currentHp.classList.add('current-hp')

    const newForm = document.createElement('form');
    newForm.id = 'enemyForm';

    const newEnemy = document.createElement('li');

    const inputForm = document.createElement('form');
    inputForm.classList.add('input-form');

    const newInputHeal = document.createElement('input');
    newInputHeal.type = 'number';
    newInputHeal.id = 'Healing';
    newInputHeal.name = 'Healing';
    newInputHeal.placeholder = 'Healing';

    const newInputDam = document.createElement('input');
    newInputDam.type = 'number';
    newInputHeal.id = 'Damage';
    newInputDam.name = 'Damage';
    newInputDam.placeholder = 'Damage';

    const newInputBtn = document.createElement('input');
    newInputBtn.type = 'submit';
    newInputBtn.classList.add('submit');
    newInputBtn.value = '=';

    enemyName.innerHTML = `<h2>${name}</h2>`
    newEnemy.innerHTML = `<h2>Max Hp = ${maxHp}</h2>`;
    currentHp.innerHTML = `Current Hp = ${health}`;

    newEnemy.prepend(enemyName);
    newForm.append(newEnemy);
    newEnemy.append(currentHp);
    newEnemy.append(inputForm);
    inputForm.append(newInputHeal);
    inputForm.append(newInputDam);
    inputForm.append(newInputBtn);
    document.getElementById('container').append(newForm);
    
    newInputBtn.addEventListener('click', function (event) {
        event.preventDefault();
        const damage = newInputDam.value * 1;
        const healing = newInputHeal.value * 1;
        newInputHeal.value = '';
        newInputDam.value = '';
        healthEdit(healing, damage)
        currentHp.innerHTML = `Current Hp = ${health}`;
        console.log(health);
    })
    function healthEdit (healing, damage) { 
        if (healing > 0) {
            console.log(healing);   
            return healEnemy(healing)
        } else if (damage > 0) {
            console.log(damage); 
            return damageEnemy(damage)
        } else {
            console.error("Must have at least one input");
        }
        }
        function damageEnemy(damage) {
            if ((health - damage) <= 0) {
                const dead = document.createElement('img');
                dead.src = 'death.png';
                dead.id = 'deathLogo'
                enemyName.append(dead);
                return health -= damage;
            } else {
            return health -= damage;
            }
        }
        function healEnemy(healing) {
            if ((health + healing) > maxHp) {
                health = maxHp * 1;
            } else {
            return health += healing;
            }
        }
        
}