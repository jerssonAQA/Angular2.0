
export interface Passenger {
    name:string;
    children?:string[];


}

const passenger1:Passenger={
    name:'Jersson',
}

const passenger2:Passenger={
    name:'Arley',
    children:['Javier','Camila'],
}

const returnChildrenNumber=(passenger:Passenger)=>{
    const howManychildren = passenger.children?.length|| 0 ;
    // const howManychildren = passenger.children!.length|| 0 ;


    console.log(passenger.name, howManychildren)
    return howManychildren;
}

returnChildrenNumber(passenger1);