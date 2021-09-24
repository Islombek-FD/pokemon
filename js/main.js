var elPokemonList = document.querySelector('.list');

for (var pokemon of pokemons) {
    // HTML elementlarini yaratib olamiz
    // Visuall
    var elPokemonItem = document.createElement('li');
    elPokemonItem.setAttribute('id', 'demo');
    elPokemonItem.setAttribute('class', 'list__item col-10 col-sm-6 col-md-4 col-lg-3 mx-auto mx-sm-0');
    var elPokemonItemVisuall = document.createElement('div');
    elPokemonItemVisuall.setAttribute('class', 'list__item-visuall');
    var elPokemonNum = document.createElement('p');
    elPokemonNum.setAttribute('class', 'item__num');
    var elPokemonNumber = document.createElement('span');
    elPokemonNumber.setAttribute('class', 'item__number');
    var elPokemonName = document.createElement('h3');
    elPokemonName.setAttribute('class', 'item__name');
    var elPokemonImg = document.createElement('img');
    elPokemonImg.setAttribute('class', 'item__img w-75 w-sm-100');
    
    // Hidden 
    var elPokemonItemHidden = document.createElement('div');
    elPokemonItemHidden.setAttribute('class', 'list__item-hidden');
    var elPokemonType = document.createElement('p');
    elPokemonType.setAttribute('class', 'item__type');
    var elPokemonTypeList = document.createElement('ul');
    var elPokemonHeight = document.createElement('p');
    var elPokemonHeightValue = document.createElement('span');
    var elPokemonWeight = document.createElement('p');
    var elPokemonWeightValue = document.createElement('span');
    var elPokemonCandy = document.createElement('p');
    var elPokemonCandyValue = document.createElement('span');
    var elPokemonCandyCount = document.createElement('p');
    var elPokemonCandyCountValue = document.createElement('span');
    var elPokemonEgg = document.createElement('p');
    var elPokemonEggValue = document.createElement('span');
    var elPokemonSpawnChance = document.createElement('p');
    var elPokemonSpawnChanceValue = document.createElement('span');
    var elPokemonAvgSpawns = document.createElement('p');
    var elPokemonAvgSpawnsValue = document.createElement('span');
    var elPokemonSpawnTime = document.createElement('p');
    var elPokemonSpawnTimeValue = document.createElement('time');
    var elPokemonNamePrevEvolution = document.createElement('p');
    var elPokemonPrevEvolutionList = document.createElement('ul');
    var elPokemonNameNextEvolution = document.createElement('p');
    var elPokemonNextEvolutionList = document.createElement('ul');
    
    // Elementlarni text contentga qiymat beramiz
    // Num
    elPokemonNumber.textContent = pokemon.num;
    elPokemonNum.textContent = 'Num: ';
    elPokemonNum.appendChild(elPokemonNumber);
    // Name
    elPokemonName.textContent = pokemon.name;
    // Img
    elPokemonImg.setAttribute('src', pokemon.img);
    elPokemonImg.setAttribute('alt', pokemon.name + ' image');
    elPokemonImg.setAttribute('width', '160');
    elPokemonImg.setAttribute('height', '160');
    elPokemonType.textContent = 'Types:';
    // Type 
    for (var type of pokemon.type) {
        var elPokemonTypeItem = document.createElement('li');
        elPokemonTypeItem.setAttribute('class', 'item__type-item');
        elPokemonTypeItem.textContent = type;
        elPokemonTypeList.appendChild(elPokemonTypeItem);
    }
    // Height 
    elPokemonHeightValue.textContent = pokemon.height;
    elPokemonHeight.textContent = 'Height: ';
    elPokemonHeight.appendChild(elPokemonHeightValue);
    // Weight
    elPokemonWeightValue.textContent = pokemon.weight;
    elPokemonWeight.textContent = 'Weight: ';
    elPokemonWeight.appendChild(elPokemonWeightValue);
    // Candy
    elPokemonCandyValue.textContent = pokemon.candy;
    elPokemonCandy.textContent = 'Candy: ';
    elPokemonCandy.appendChild(elPokemonCandyValue);
    // Candy Count
    elPokemonCandyCountValue.textContent = pokemon.candy_count;
    elPokemonCandyCount.textContent = 'Candy count: ';
    elPokemonCandyCount.appendChild(elPokemonCandyCountValue);
    // Egg
    elPokemonEggValue.textContent = pokemon.egg;
    elPokemonEgg.textContent = 'Egg: ';
    elPokemonEgg.appendChild(elPokemonEggValue);
    // Spawn Time
    elPokemonSpawnChanceValue.textContent = pokemon.spawn_chance;
    elPokemonSpawnChance.textContent = 'Spawn chance: ';
    elPokemonSpawnChance.appendChild(elPokemonSpawnChanceValue);
    // Avg Spawns 
    elPokemonAvgSpawnsValue.textContent = pokemon.avg_spawns;
    elPokemonAvgSpawns.textContent = 'Avg spawns: ';
    elPokemonAvgSpawns.appendChild(elPokemonAvgSpawnsValue);
    // Spawns Time
    elPokemonSpawnTimeValue.textContent = pokemon.spawn_time;
    elPokemonSpawnTime.textContent = 'Spawn time: ';
    elPokemonSpawnTime.appendChild(elPokemonSpawnTimeValue);
    // Multipliers
    if (pokemon.multipliers !== null) {
        var elPokemonMultipliers = document.createElement('ul');
        elPokemonMultipliers.setAttribute('class', 'item__multipliers');
        var elPokemonNameMultipliers = document.createElement('p');
        elPokemonNameMultipliers.setAttribute('class', 'item__namemultipliers');
        elPokemonNameMultipliers.textContent = 'Multipliers:';
        for (var multiplier of pokemon.multipliers) {
            var elPokemonMultiplier = document.createElement('li');
            elPokemonMultiplier.textContent = multiplier;
            elPokemonMultipliers.appendChild(elPokemonMultiplier);
        }
    }
    // Weaknesses
    if (pokemon.weaknesses !== null) {
        var elPokemonNameWeaknesses = document.createElement('p');
        elPokemonNameWeaknesses.setAttribute('class', 'item__nameweaknesses');
        var elPokemonWeaknesses = document.createElement('ul');
        elPokemonWeaknesses.setAttribute('class', 'item__weaknesses');
        elPokemonNameWeaknesses.textContent = 'Weaknesses:';
        for (var weakness of pokemon.weaknesses) {
            var elPokemonWeakness = document.createElement('li');
            elPokemonWeakness.textContent = weakness;
            elPokemonWeaknesses.appendChild(elPokemonWeakness);
        }
    }
    
    // HTML documentimizga elementlarni qo'shamiz
    // Visuall Div ELementlari
    elPokemonItemVisuall.appendChild(elPokemonNum);
    elPokemonItemVisuall.appendChild(elPokemonName);
    elPokemonItemVisuall.appendChild(elPokemonImg);
    // Hidden Div Elementlari
    elPokemonItemHidden.appendChild(elPokemonType);
    elPokemonItemHidden.appendChild(elPokemonTypeList);
    elPokemonItemHidden.appendChild(elPokemonHeight);
    elPokemonItemHidden.appendChild(elPokemonWeight);
    elPokemonItemHidden.appendChild(elPokemonCandy);
    elPokemonItemHidden.appendChild(elPokemonCandyCount);
    elPokemonItemHidden.appendChild(elPokemonEgg);
    elPokemonItemHidden.appendChild(elPokemonSpawnChance);
    elPokemonItemHidden.appendChild(elPokemonAvgSpawns);
    elPokemonItemHidden.appendChild(elPokemonSpawnTime);
    elPokemonItemHidden.appendChild(elPokemonNameMultipliers);
    elPokemonItemHidden.appendChild(elPokemonMultipliers);
    elPokemonItemHidden.appendChild(elPokemonNameWeaknesses);
    elPokemonItemHidden.appendChild(elPokemonWeaknesses);
    elPokemonItemHidden.appendChild(elPokemonNamePrevEvolution);
    elPokemonItemHidden.appendChild(elPokemonPrevEvolutionList);
    elPokemonItemHidden.appendChild(elPokemonNameNextEvolution);
    elPokemonItemHidden.appendChild(elPokemonNextEvolutionList);
    
    // Item
    elPokemonItem.appendChild(elPokemonItemVisuall);
    elPokemonItem.appendChild(elPokemonItemHidden);
    
    // List
    elPokemonList.appendChild(elPokemonItem);
}
