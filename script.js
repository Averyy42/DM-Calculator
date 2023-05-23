function rolld4(count) {
    let number = 0;
    for (let i = 0; i < count; i++) {
    number += Math.floor(Math.random() * (5 - 1) + 1);
}
    return number;
}

function rolld6(count) {
    let number = 0;
    for (let i = 0; i < count; i++) {
    number += Math.floor(Math.random() * (7 - 1) + 1);
}
    return number;
}

function rolld8(count) {
    let number = 0;
    for (let i = 0; i < count; i++) {
    number += Math.floor(Math.random() * (9 - 1) + 1);
}
    return number;
}

function rolld10(count) {
    let number = 0;
    for (let i = 0; i < count; i++) {
    number += Math.floor(Math.random() * (11 - 1) + 1);
}
    return number;
}

function rolld12(count) {
    let number = 0;
    for (let i = 0; i < count; i++) {
    number += Math.floor(Math.random() * (13 - 1) + 1);
}
    return number;
}

function rolld20(count) {
    let number = 0;
    for (let i = 0; i < count; i++) {
    number += Math.floor(Math.random() * (21 - 1) + 1);
}
    return number;
}

function generateHp(name) {
    if (name === 'Aboleth') {
        return (rolld10(18) + 36);
    } else if (name === 'Acolyte') {
        return (rolld8(2));
    } else if (name === 'Adult Black Dragon') {
        return (rolld12(17) + 85);
    } else if (name === 'Adult Blue Dragon') {
        return (rolld12(18) + 108);
    } else if (name === 'Adult Brass Dragon') {
        return (rolld12(15) + 75);
    } else if (name === 'Adult Bronze Dragon') {
        return (rolld12(17) + 102);
    } else if (name === 'Adult Copper Dragon') {
        return (rolld12(16) + 80);
    } else if (name === 'Adult Gold Dragon') {
        return (rolld12(19) + 133);
    } else if (name === 'Adult Green Dragon') {
        return (rolld12(18) + 90);
    } else if (name === 'Adult Red Dragon') {
        return (rolld12(19) + 133);
    } else if (name === 'Adult Silver Dragon') {
        return (rolld12(18) + 126);
    } else if (name === 'Adult White Dragon') {
        return (rolld12(16) + 96);
    } else if (name === 'Air Elemental') {
        return (rolld10(12) + 24);
    } else if (name === 'Allosaurus') {
        return (rolld10(6) + 18);
    } else if (name === 'Ancient Black Dragon') {
        return (rolld20(21) + 147);
    } else if (name === 'Ancient Blue Dragon') {
        return (rolld20(26) + 208);
    } else if (name === 'Ancient Brass Dragon') {
        return (rolld20(17) + 119);
    } else if (name === 'Ancient Bronze Dragon') {
        return (rolld20(24) + 192);
    } else if (name === 'Ancient Copper Dragon') {
        return (rolld20(20) + 140);
    } else if (name === 'Ancient Gold Dragon') {
        return (rolld20(28) + 252);
    } else if (name === 'Ancient Green Dragon') {
        return (rolld20(22) + 154);
    } else if (name === 'Ancient Red Dragon') {
        return (rolld20(28) + 252);
    } else if (name === 'Ancient Silver Dragon') {
        return (rolld20(25) + 225);
    } else if (name === 'Ancient White Dragon') {
        return (rolld20(18) + 144);
    } else if (name === 'Androsphinx') {
        return (rolld10(19) + 95);
    } else if (name === 'Animated Armor') {
        return (rolld8(6) + 6);
    } else if (name === 'Ankheg') {
        return (rolld10(6) + 6);
    } else if (name === 'Ankylosaurus') {
        return (rolld12(8) + 16);
    } else if (name === 'Ape') {
        return (rolld8(3) + 6);
    } else if (name === 'Archmage') {
        return (rolld8(18) + 18);
    } else if (name === 'Assassin') {
        return (rolld8(12) + 24);
    } else if (name === 'Awakened Shrub') {
        return (rolld6(3));
    } else if (name === 'Awakened Tree') {
        return (rolld12(7) + 14);
    } else if (name === 'Axe Beak') {
        return (rolld10(3) + 3);
    } else if (name === 'Azer') {
        return (rolld8(6) + 12);
    } else if (name === 'Baboon') {
        return (rolld6(1));
    } else if (name === 'Badger') {
        return (rolld4(1) + 1);
    } else if (name === 'Balor') {
        return (rolld12(21) + 126);
    } else if (name === 'Bandit') {
        return (rolld8(2) + 2);
    } else if (name === 'Bandit Captain') {
        return (rolld8(10) + 20);
    } else if (name === 'Banshee') {
        return (rolld8(13));
    } else if (name === 'Barbed Devil') {
        return (rolld8(13) + 52);
    } else if (name === 'Basilisk') {
        return (rolld8(8) + 16);
    } else if (name === 'Bat') {
        return (rolld4(1) - 1);
    } else if (name === 'Bearded Devil') {
        return (rolld8(8) + 16);
    } else if (name === 'Behir') {
        return (rolld12(16) + 64);
    } else if (name === 'Berserker') {
        return (rolld8(9) + 27);
    } else if (name === 'Black Bear') {
        return (rolld8(3) + 6);
    } else if (name === 'Black Dragon Wyrmling') {
        return (rolld8(6) + 6);
    } else if (name === 'Black Puddling') {
        return (rolld10(10) + 30);
    } else if (name === 'Blink Dog') {
        return (rolld8(4) + 4);
    } else if (name === 'Blood Hawk') {
        return (rolld6(2));
    } else if (name === 'Blue Dragon Wyrmling') {
        return (rolld8(8) + 16);
    } else if (name === 'Boar') {
        return (rolld8(2) + 2);
    } else if (name === 'Bone Devil') {
        return (rolld10(15) + 60);
    } else if (name === 'Brass Dragon Wyrmling') {
        return (rolld8(3) + 3);
    } else if (name === 'Bronze Dragon Wyrmling') {
        return (rolld8(5) + 10);
    } else if (name === 'Brown Bear') {
        return (rolld10(4) +12);
    } else if (name === 'Bugbear') {
        return (rolld8(5) + 5);
    } else if (name === 'Bulette') {
        return (rolld10(9) + 45);
    } else if (name === 'Camel') {
        return (rolld10(2) +4);
    } else if (name === 'Cat') {
        return (rolld4);
    } else if (name === 'Centaur') {
        return (rolld10(6) + 12);
    } else if (name === 'Chain Devil') {
        return (rolld8(10) + 40);
    } else if (name === 'Chimera') {
        return (rolld10(12) + 48);
    } else if (name === 'Chuul') {
        return (rolld10(11) + 33);
    } else if (name === 'Clay Golem') {
        return (rolld10(14) + 56);
    } else if (name === 'Cloaker') {
        return (rolld10(12) + 12);
    } else if (name === 'Cloud Giant') {
        return (rolld12(16) + 96);
    } else if (name === 'Cockatrice') {
        return (rolld6(6) + 6);
    } else if (name === 'Commoner') {
        return (rolld8(1));
    } else if (name === 'Constrictor Snake') {
        return (rolld10(2) + 2);
    } else if (name === 'Copper Dragon Wyrmling') {
        return (rolld8(4) + 4);
    } else if (name === 'Couatl') {
        return (rolld8(13) + 39);
    } else if (name === 'Crab') {
        return (rolld4(1));
    } else if (name === 'Crocodile') {
        return (rolld10(3) + 3);
    } else if (name === 'Cult Fanatic') {
        return (rolld8(6) + 6);
    } else if (name === 'Cultist') {
        return (rolld8(2));
    } else if (name === 'Cyclops') {
        return (rolld12(12) + 60);
    } else if (name === 'Darkmantle') {
        return (rolld6(5) + 5);
    } else if (name === 'Death Dog') {
        return (rolld8(6) + 12);
    } else if (name === 'Deep Gnome') {
        return (rolld6(3) + 6);
    } else if (name === 'Deer') {
        return (rolld8(1));
    } else if (name === 'Deva') {
        return (rolld8(16) + 64);
    } else if (name === 'Dire Wolf') {
        return (rolld10(5) + 10);
    } else if (name === 'Diseased Giant Rat') {
        return (rolld6(2));
    } else if (name === 'Djinni') {
        return (rolld10(14) + 84);
    } else if (name === 'Doppleganger') {
        return (rolld8(8) + 16);
    } else if (name === 'Dragon Turtle') {
        return (rolld20(22) + 110);
    } else if (name === 'Draft Horse') {
        return (rolld10(3) + 3);
    } else if (name === 'Dretch') {
        return (rolld6(4) + 4);
    } else if (name === 'Drider') {
        return (rolld10(13) + 52);
    } else if (name === 'Drow') {
        return (rolld8(3));
    } else if (name === 'Druid') {
        return (rolld8(5) + 5);
    } else if (name === 'Dryad') {
        return (rolld8(5));
    } else if (name === 'Duergar') {
        return (rolld8(4) + 8);
    } else if (name === 'Dust Devil') {
        return (rolld10(12) + 24);
    } else if (name === 'Dust Mephit') {
        return (rolld6(5));
    } else if (name === 'Eagle') {
        return (rolld6(1));
    } else if (name === 'Earth Elemental') {
        return (rolld10(12) + 60);
    } else if (name === 'Efreeti') {
        return (rolld10(16) + 112);
    } else if (name === 'Elephant') {
        return (rolld12(8) + 24);
    } else if (name === 'Elk') {
        return (rolld10(2) + 2);
    } else if (name === 'Erinyes') {
        return (rolld8(18) + 72);
    } else if (name === 'Ettercap') {
        return (rolld8(8) + 8);
    } else if (name === 'Ettin') {
        return (rolld10(10) + 30);
    } else if (name === 'Fire Elemental') {
        return (rolld10(12) + 36);
    } else if (name === 'Fire Giant') {
        return (rolld12(13) + 78);
    } else if (name === 'Flameskull') {
        return (rolld4(9) + 18);
    } else if (name === 'Flesh Golem') {
        return (rolld8(11) + 44);
    } else if (name === 'Flying Snake') {
        return (rolld4(2));
    } else if (name === 'Flying Sword') {
        return (rolld6(5));
    } else if (name === 'Frog') {
        return (rolld4(1) - 1);
    } else if (name === 'Frost Giant') {
        return (rolld12(12) + 60);
    } else if (name === 'Gargoyle') {
        return (rolld8(7) +21);
    } else if (name === 'Gelatinous Cube') {
        return (rolld10(8) + 40);
    } else if (name === 'Ghast') {
        return (rolld8(8));
    } else if (name === 'Ghost') {
        return (rolld8(10));
    } else if (name === 'Ghoul') {
        return (rolld8(5));
    } else if (name === 'Giant Ape') {
        return (rolld12(15) + 60);
    } else if (name === 'Giant Badger') {
        return (rolld8(2) + 4);
    } else if (name === 'Giant Bat') {
        return (rolld10(4));
    } else if (name === 'Giant Boar') {
        return (rolld10(5) + 15);
    } else if (name === 'Giant Centipede') {
        return (rolld6(1) + 1);
    } else if (name === 'Giant Constrictor Snake') {
        return (rolld12(8) + 8);
    } else if (name === 'Giant Crab') {
        return (rolld8(3));
    } else if (name === 'Giant Crocodile') {
        return (rolld12(9) +27);
    } else if (name === 'Giant Eagle') {
        return (rolld10(4) + 4);
    } else if (name === 'Giant Elk') {
        return (rolld12(5) + 10);
    } else if (name === 'Giant Fire Beetle') {
        return (rolld6(1) + 1);
    } else if (name === 'Giant Frog') {
        return (rolld8(4));
    } else if (name === 'Giant Goat') {
        return (rolld10(3) + 3);
    } else if (name === 'Giant Hyena') {
        return (rolld10(6) + 12);
    } else if (name === 'Giant Lizard') {
        return (rolld10(3) + 3);
    } else if (name === 'Giant Octopus') {
        return (rolld10(8) + 8); 
    } else if (name === 'Giant Owl') {
        return (rolld10(3) + 3);
    } else if (name === 'Giant Poisonous Snake') {
        return (rolld8(2) + 2);
    } else if (name === 'Giant Rat') {
        return (rolld6(2));
    } else if (name === 'Giant Scorpion') {
        return (rolld10(7) + 14);
    } else if (name === 'Giant Sea Horse') {
        return (rolld10(3));
    } else if (name === 'Giant Shark') {
        return (rolld12(11) + 55);
    } else if (name === 'Giant Spider') {
        return (rolld10(4) + 4);
    } else if (name === 'Giant Toad') {
        return (rolld10(6) + 6);
    } else if (name === 'Giant Vulture') {
        return (rolld10(3) + 6);
    } else if (name === 'Giant Wasp') {
        return (rolld8(3));
    } else if (name === 'Giant Weasel') {
        return (rolld8(2));
    } else if (name === 'Giant Wolf Spider') {
        return (rolld8(2) + 2);
    } else if (name === 'Gibbering Mouther') {
        return (rolld8(9) + 27);
    } else if (name === 'Glabrezu') {
        return (rolld10(15) + 75);
    } else if (name === 'Gladiator') {
        return (rolld8(15) + 45);
    } else if (name === 'Gnoll') {
        return (rolld8(5));
    } else if (name === 'Goat') {
        return (rolld8(1));
    } else if (name === 'Goblin') {
        return (rolld6(2));
    } else if (name === 'Gold Dragon Wyrmling') {
        return (rolld8(8) + 24);
    } else if (name === 'Gorgon') {
        return (rolld10(12) + 48);
    } else if (name === 'Gray Ooze') {
        return (rolld8(3) + 9);
    } else if (name === 'Green Dragon Wyrmling') {
        return (rolld8(7) + 7);
    } else if (name === 'Green Hag') {
        return (rolld8(11) + 33);
    } else if (name === 'Grick') {
        return (rolld8(6));
    } else if (name === 'Griffon') {
        return (rolld10(7) - 21);
    } else if (name === 'Grimlock') {
        return (rolld8(2) + 2);
    } else if (name === 'Guard') {
        return (rolld8(2) + 2);
    } else if (name === 'Guardian Naga') {
        return (rolld10(15) + 45);
    } else if (name === 'Gynosphinx') {
        return (rolld10(16) + 48);
    } else if (name === 'Half-Red Dragon Veteran') {
        return (rolld8(10) + 20);
    } else if (name === 'Harpy') {
        return (rolld8(7) + 7);
    } else if (name === 'Hawk') {
        return (rolld4(1) - 1);
    } else if (name === 'Hell Hound') {
        return (rolld8(7) + 14);
    } else if (name === 'Hezrou') {
        return (rolld10(13) + 65);
    } else if (name === 'Hill Giant') {
        return (rolld12(10) + 40);
    } else if (name === 'Hippogriff') {
        return (rolld10(3) + 3);
    } else if (name === 'Hobgoblin') {
        return (rolld8(2) + 2);
    } else if (name === 'Homonculus') {
        return (rolld4(2));
    } else if (name === 'Horned Devil') {
        return (rolld10(17) + 85);
    } else if (name === 'Hunter Snake') {
        return (rolld10(6) + 12);
    } else if (name === 'Hydra') {
        return (rolld12(15) + 75);
    } else if (name === 'Hyena') {
        return (rolld8(1) + 1);
    } else if (name === 'Ice Devil') {
        return (rolld10(19) + 76);
    } else if (name === 'Ice Mephit') {
        return (rolld6(6));
    } else if (name === 'Imp') {
        return (rolld4(3) + 3);
    } else if (name === 'Incubus') { 
        return (rolld8(12) + 12);
    } else if (name === 'Invisible Stalker') {
        return (rolld8(16) + 32);
    } else if (name === 'Iron Golem') {
        return (rolld10(20) + 100);
    } else if (name === 'Jackal') {
        return (rolld6(1));
    } else if (name === 'Killer Whale') {
        return (rolld12(12) + 12);
    } else if (name === 'Knight') {
        return (rolld8(8) + 16);
    } else if (name === 'Kobold') {
        return (rolld6(2) - 2);
    } else if (name === 'Kraken') {
        return (rolld20(27) + 189);
    } else if (name === 'Lamia') {
        return (rolld10(13) + 26);
    } else if (name === 'Lemure') {
        return (rolld8(3));
    } else if (name === 'Lich') {
        return (rolld8(18) + 54);
    } else if (name === 'Lion') {
        return (rolld10(4) + 4);
    } else if (name === 'Lizardfolk') {
        return (rolld8(4) + 4);
    } else if (name === 'Mage') {
        return (rolld8(9));
    } else if (name === 'Magma Mephit') {
        return (rolld6(5) + 5);
    } else if (name === 'Magmin') {
        return (rolld6(2) + 2);
    } else if (name === 'Mammoth') {
        return (rolld12(11) + 55);
    } else if (name === 'Manticore') {
        return (rolld10(8) + 24);
    } else if (name === 'Marilith') {
        return (rolld10(18) + 90);
    } else if (name === 'Mastiff') {
        return (rolld8(1) + 1);
    } else if (name === 'Medusa') {
        return (rolld8(17) + 51);
    } else if (name === 'Merfolk') {
        return (rolld8(2) + 2);
    } else if (name === 'Merrow') {
        return (rolld10(6) + 12);
    } else if (name === 'Mimic') {
        return (rolld8(9) + 18);
    } else if (name === 'Minotaur') {
        return (rolld10(9) + 27);
    } else if (name === 'Minotaur Skeleton') {
        return (rolld10(9) + 18);
    } else if (name === 'Mule') {
        return (rolld8(2) + 2);
    } else if (name === 'Mummy') {
        return (rolld8(9) + 18);
    } else if (name === 'Mummy Lord') {
        return (rolld8(13) + 39);
    } else if (name === 'Nalfshnee') {
        return (rolld10(16) + 96)
    } else if (name === 'Night Hag') {
        return (rolld8(15) + 45);
    } else if (name === 'Nightmare') {
        return (rolld10(8) + 24);
    } else if (name === 'Noble') { 
        return (rolld8(2));
    } else if (name === 'Nothic') {
        return (rolld8(6) + 18);
    } else if (name === 'Ochre Jelly') {
        return (rolld10(6) + 12);
    } else if (name === 'Octopus') {
        return (rolld6(1));
    } else if (name === 'Ogre') {
        return (rolld10(7) + 21);
    } else if (name === 'Ogre Zombie') {
        return (rolld10(9) + 36);
    } else if (name === 'Oni') {
        return (rolld10(13) + 39);
    } else if (name === 'Orc') {
        return (rolld8(2) + 6);
    } else if (name === 'Otyugh') {
        return (rolld10(12) + 48);
    } else if (name === 'Owl') {
        return (rolld4(1) - 1);
    } else if (name === 'Owlbear') {
        return (rolld10(7) + 21);
    } else if (name === 'Panther') { 
        return (rolld8(3));
    } else if (name === 'Pegasus') {
        return (rolld10(7) + 21);
    } else if (name === 'Phase Spider') {
        return (rolld10(5) + 5);
    } else if (name === 'Pit Fiend') {
        return (rolld10(24) + 168);
    } else if (name === 'Planetar') {
        return (rolld10(16) + 112);
    } else if (name === 'Plesiosaurus') {
        return (rolld10(8) + 24);
    } else if (name === 'Poisonous Snake') {
        return (rolld4(1));
    } else if (name === 'Polar Bear') {
        return (rolld10(5) + 15);
    } else if (name === 'Pony') {
        return (rolld8(2) + 2);
    } else if (name === 'Priest') {
        return (rolld8(5) + 5);
    } else if (name === 'Pseudodragon') {
        return (rolld4(2) + 2);
    } else if (name === 'Pteranodon') {
        return (rolld8(3));
    } else if (name === 'Purple Worm') {
        return (rolld20(15) + 90);
    } else if (name === 'Quasit') { 
        return (rolld4(3));
    } else if (name === 'Quipper') {
        return (rolld4(1) - 1);
    } else if (name === 'Rakshasa') {
        return (rolld8(13) + 52);
    } else if (name === 'Rat') {
        return (rolld4(1) - 1);
    } else if (name === 'Raven') {
        return (rolld4(1) - 1);
    } else if (name === 'Red Dragon Wyrmling') {
        return (rolld8(10) + 30);
    } else if (name === 'Reef Shark') {
        return (rolld8(4) + 4);
    } else if (name === 'Remorhaz') {
        return (rolld12(17) + 85);
    } else if (name === 'Rhinoceros') {
        return (rolld10(6) + 12);
    } else if (name === 'Riding Horse') {
        return (rolld10(2) + 2);
    } else if (name === 'Roc') {
        return (rolld20(12) + 80);
    } else if (name === 'Roper') {
        return (rolld10(11) + 33);
    } else if (name === 'Rug of Smothering') {
        return (rolld10(6));
    } else if (name === 'Rust Monster') {
        return (rolld8(5) + 5);
    } else if (name === 'Saber-Toothed Tiger') {
        return (rolld10(7) + 14);
    } else if (name === 'Sahuagin') {
        return (rolld8(4) + 4);
    } else if (name === 'Salamander') {
        return (rolld10(12) + 24);
    } else if (name === 'Satyr') {
        return (rolld8(7));
    } else if (name === 'Scorpion') {
        return (rolld4(1) - 1);
    } else if (name === 'Scout') {
        return (rolld8(3) + 3);
    } else if (name === 'Sea Hag') {
        return (rolld8(7) + 21);
    } else if (name === 'Sea Horse') {
        return (rolld4(1) - 1);
    } else if (name === 'Shadow') {
        return (rolld8(3) + 3);
    } else if (name === 'Shambling Mound') {
        return (rolld10(16) + 48);
    } else if (name === 'Shield Guardian') {
        return (rolld10(15) + 60);
    } else if (name === 'Shrieker') {
        return (rolld8(3));
    } else if (name === 'Silver Dragon Wyrmling') {
        return (rolld8(6) + 18);
    } else if (name === 'Skeleton') {
        return (rolld8(2) + 4)
    } else if (name === 'Solar') {
        return (rolld10(18) + 144);
    } else if (name === 'Spectator') {
        return (rolld8(6) + 12);
    } else if (name === 'Specter') {
        return (rolld8(5));
    } else if (name === 'Spider') {
        return (rolld4(1) - 1);
    } else if (name === 'Spirit Naga') {
        return (rolld10(10) + 20);
    } else if (name === 'Sprite') {
        return (rolld4(1));
    } else if (name === 'Spy') {
        return (rolld8(6));
    } else if (name === 'Steam Mephit') {
        return (rolld6(6));
    } else if (name === 'Stirge') {
        return (rolld4(1));
    } else if (name === 'Stone Giant') {
        return (rolld12(11) + 55);
    } else if (name === 'Stone Golem') {
        return (rolld10(17) + 85);
    } else if (name === 'Storm Giant') {
        return (rolld12(20) + 100);
    } else if (name === 'Succubus') {
        return (rolld8(12) + 12);
    } else if (name === 'Swarm of Bats') {
        return (rolld8(5));
    } else if (name === 'Swarm of Insects') {
        return (rolld8(5));
    } else if (name === 'Swarm of Poisonous Snakes') {
        return (rolld8(8));
    } else if (name === 'Swarm of Quippers') {
        return (rolld8(8) - 8);
    } else if (name === 'Swarm of Rats') {
        return (rolld8(7) - 7);
    } else if (name === 'Swarm of Ravens') {
        return (rolld8(7) - 7);
    } else if (name === 'Tarrasque') {
        return (rolld20(33) + 330);
    } else if (name === 'Thug') {
        return (rolld8(5) + 10);
    } else if (name === 'Tiger') {
        return (rolld10(5) + 10);
    } else if (name === 'Treant') {
        return (rolld12(12) + 60);
    } else if (name === 'Tribal Warrior') {
        return (rolld8(2) + 2);
    } else if (name === 'Triceratops') {
        return (rolld12(10) + 30);
    } else if (name === 'Troll') {
        return (rolld10(8) + 40);
    } else if (name === 'Twig Blight') {
        return (rolld6(1) + 1);
    } else if (name === 'Tyrannosaurus Rex') {
        return (rolld12(13) + 52);
    } else if (name === 'Unicorn') {
        return (rolld10(9) + 18);
    } else if (name === 'Vampire') {
        return (rolld8(17) + 68);
    } else if (name === 'Vampire Spawn') {
        return (rolld8(11) + 33);
    } else if (name === 'Veteran') {
        return (rolld8(9) + 18);
    } else if (name === 'Violet Fungus') {
        return (rolld8(4));
    } else if (name === 'Vrock') {
        return (rolld10(11) + 44);
    } else if (name === 'Vulture') {
        return (rolld8(1) + 1);
    } else if (name === 'Warhorse') {
        return (rolld10(3) + 3);
    } else if (name === 'Warhorse Skeleton') {
        return (rolld10(3) + 6);
    } else if (name === 'Water Elemental') {
        return (rolld10(12) + 48);
    } else if (name === 'Weasel') {
        return (rolld4(1) - 1);
    } else if (name === 'Werebear') {
        return (rolld8(18) + 54);
    } else if (name === 'Wereboar') {
        return (rolld8(12) + 24);
    } else if (name === 'Wererat') {
        return (rolld8(6) + 6);
    } else if (name === 'Weretiger') {
        return (rolld8(16) + 48);
    } else if (name === 'Werewolf') {
        return (rolld8(9) + 18);
    } else if (name === 'White Dragon Wyrmling') {
        return (rolld8(5) + 10);
    } else if (name === 'Wight') {
        return (rolld8(6) + 18);
    } else if (name === "Will-o'-Wisp") {
        return (rolld4(9));
    } else if (name === 'Winter Wolf') {
        return (rolld10(10)+ 20);
    } else if (name === 'Wolf') {
        return (rolld8(2) + 2);
    } else if (name === 'Worg') {
        return (rolld10(4) + 4) 
    } else if (name === 'Wraith') {
        return (rolld8(9) + 27);
    } else if (name === 'Wyvern') {
        return (rolld10(13) + 39);
    } else if (name === 'Xorn') {
        return (rolld8(7) + 42);
    } else if (name === 'Yeti') {
        return (rolld10(6) + 18);
    } else if (name === 'Young Black Dragon') {
        return (rolld10(15) + 45);
    } else if (name === 'Young Blue Dragon') {
        return (rolld10(16) + 64);
    } else if (name === 'Young Brass Dragon') {
        return (rolld10(13) + 39);
    } else if (name === 'Young Bronze Dragon') {
        return (rolld10(15) + 60);
    } else if (name === 'Young Copper Dragon') {
        return (rolld10(14) + 42);
    } else if (name === 'Young Gold Dragon') {
        return (rolld10(17) + 85);
    } else if (name === 'Young Green Dragon') {
        return (rolld10(16) + 48);
    } else if (name === 'Young Red Dragon') {
        return (rolld10(17) + 85);
    } else if (name === 'Young Silver Dragon') {
        return (rolld10(16) + 80);
    } else if (name === 'Young White Dragon') {
        return (rolld10(14) + 56);
    } else if (name === 'Zombie') {
        return (rolld8(3) + 9);
    }
}

document.getElementById('preForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const name = data.get('monsters');
    const quantity = data.get('monsterQty');
    console.log(name);
    console.log(quantity * 1);
    if (name!== '') {
        for (let i = 0; i < quantity; i++) {
        createEnemy(name, generateHp(name));
        }
    }
    document.getElementById('monsters').value = '';
    document.getElementById('monsterQty').value = '';
})


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

    const remove = document.createElement('input')
    remove.type = 'button';
    remove.name = 'remove';
    remove.value ='x';
    remove.id = 'removeBtn';

    remove.addEventListener('click', (event) => {
        newEnemy.remove();
      })

    const enemyName = document.createElement('div')
    enemyName.classList.add('enemy-title');

    const currentHp = document.createElement('h2');
    currentHp.classList.add('current-hp')

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
    newEnemy.prepend(remove);
    newEnemy.append(currentHp);
    newEnemy.append(inputForm);
    inputForm.append(newInputHeal);
    inputForm.append(newInputDam);
    inputForm.append(newInputBtn);
    document.getElementById('container').append(newEnemy);
    
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