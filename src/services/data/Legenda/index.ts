import { ILegendaData, ILegendaForm } from "interfaces/legenda.interface";
import api from "services/api";

class LegendaData {
  index() {
    return api.get<ILegendaData[]>('/messages')
  }
  store(data: ILegendaForm) {
    return api.post(`/messages`, data)
  }
  show(id: number) {
    return api.get<ILegendaData>(`/messages/${id}`)
  }
  update(id: number, data: ILegendaForm) {
    return api.put(`/messages/${id}`, data)
  }
  destroy(id: number) {
    return api.delete(`/messages/${id}`)
  }
}

export default new LegendaData()