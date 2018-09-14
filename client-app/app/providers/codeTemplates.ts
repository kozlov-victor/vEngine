
export const getDefaultCodeScript = (name)=>{
return `

export class ${name}Behaviour {

    public onCreate(){

    }

    public onUpdate(){

    }

    public onDestroy(){

    }

}
`;
};

export const getLibCodeScript = (name)=>{
  return `

export class ${name} {

}`;
};