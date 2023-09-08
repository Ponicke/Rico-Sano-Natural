import { CalificacionPlan } from "../main/calificacionPlan.enum"
import { Objetivo } from "../main/objetivo"
import { PlanAlimenticio } from "../main/planAlimenticio"

test("el resultado del plan alimenticio", () => {

  const plan = new PlanAlimenticio()
  const objetivo1= new Objetivo()
  const objetivo2= new Objetivo()
  const objetivo3= new Objetivo()
  const objetivo4= new Objetivo()

  plan.agregarObjetivo(objetivo1)
  plan.agregarObjetivo(objetivo2)
  plan.agregarObjetivo(objetivo3)
  plan.agregarObjetivo(objetivo4)

  objetivo1.setresultado(true)
  objetivo2.setresultado(true)
  objetivo3.setresultado(true)
  objetivo4.setresultado(true)
    expect(plan.calcularResultado()).toBe(CalificacionPlan.EXCELENTE)
})