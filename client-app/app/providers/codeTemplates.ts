
export const getDefaultCodeScript = (name)=>{
return `

export class ${name}Behaviour {

    onCreate(){

    }

    onUpdate(){

    }

    onDestroy(){

    }

}
`;
};

export const getLibCodeScript = (name)=>{
  return `

export class ${name} {

}`;
};