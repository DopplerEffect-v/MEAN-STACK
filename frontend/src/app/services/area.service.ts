import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Area } from "../models/area";

@Injectable({
  providedIn: "root",
})
export class AreaService {
  selectedArea: Area;
  areas: Area[];
  readonly URL_API = "http://localhost:3000/api/areas";

  constructor(private http: HttpClient) {
    this.selectedArea = new Area();
  }

  postArea(area: Area) {
    return this.http.post(this.URL_API, area);
  }

  getAreas() {
    return this.http.get<Area[]>(this.URL_API);
  }

  putArea(area: Area) {
    return this.http.put(this.URL_API + `/${area._id}`, area);
  }

  deleteArea(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}