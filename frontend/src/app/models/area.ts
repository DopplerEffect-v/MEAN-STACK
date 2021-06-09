export class Area {
    constructor(_id = "", name = "", numberOfEmployees = 0, office = "", budget = 0) {
      this._id = _id;
      this.name = name;
      this.numberOfEmployees = numberOfEmployees;
      this.office = office;
      this.budget = budget;
    }
    _id: string;
    name: string;
    numberOfEmployees: number;
    office: string;
    budget: number;
  }
  