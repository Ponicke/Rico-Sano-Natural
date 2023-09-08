import { Comida } from "../main/comida"
import { PlanAlimenticio } from "../main/planAlimenticio"
import { TipoComida } from "../main/tipoComida.enum"

test("calcular la cantidad total de comidas en un plan alimenticio", () => {

    const plan= new PlanAlimenticio()
    const comida1= new Comida()
    const comida2= new Comida()
    const comida3= new Comida()

    plan.agregarComida(comida1)
    plan.agregarComida(comida2)
    plan.agregarComida(comida3)
    expect(plan.cantidadComida()).toBe(3)
})

test("Permitir saber la cantidad de comidas de un tipo en particular (DM/AC) de un plan alimenticio", () =>{

    const plan= new PlanAlimenticio()
    const comida1= new Comida()
    const comida2= new Comida()
    const comida3= new Comida()

    plan.agregarComida(comida1)
    plan.agregarComida(comida2)
    plan.agregarComida(comida3)

    comida1.settipoComida(TipoComida.CENA)
    comida2.settipoComida(TipoComida.ALMUERZO)
    comida3.settipoComida(TipoComida.DESAYUNO)

    expect(plan.cantidadDeComidasSegunTipo(TipoComida.ALMUERZO, TipoComida.CENA)).toBe(2)
})
test("Permitir saber si el plan alimenticio es fuerte en proteínas", ()=>{

    const plan =new PlanAlimenticio()
    const comida1 = new Comida()
    const comida2 = new Comida()
    const comida3 = new Comida()

    plan.agregarComida(comida1)
    plan.agregarComida(comida2)
    plan.agregarComida(comida3)
    
})