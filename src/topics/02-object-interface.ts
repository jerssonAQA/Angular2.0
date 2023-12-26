
const skills:string[] =['Bash','Counter','healing']

interface Character{
    name:string;
    hp:number;
    skills:string[];
    hometowm?:string
}

const strider:Character ={
    name:'Strider',
    hp:100,
    skills:['Bash','Counter']
}

strider.hometowm='Rivendell';
strider.hometowm='Bogota';
strider.hp=200;

console.table(strider);

export{};