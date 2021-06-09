import { Component, OnInit } from "@angular/core";
import { AreaService } from "../../services/area.service";
import { NgForm } from "@angular/forms";
import { Area } from "../../models/area";

@Component({
  selector: "app-area",
  templateUrl: "./area.component.html",
  styleUrls: ["./area.component.css"],
  providers: [AreaService],
})
export class AreaComponent implements OnInit {
  constructor(private areaService: AreaService) {}
  ngOnInit() {
    this.getAreas();
  }

  addArea(form?: NgForm) {
    if (form.value._id) {
      this.areaService.putArea(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getAreas();
      });
    } else {
      this.areaService.postArea(form.value).subscribe((res) => {
        this.getAreas();
        this.resetForm(form);
      });
    }
  }

  getAreas() {
    this.areaService.getAreas().subscribe((res) => {
      this.areaService.areas = res;
    });
  }

  editArea(employee: Area) {
    this.areaService.selectedArea = employee;
  }

  deleteArea(_id: string, form: NgForm) {
    if (confirm("Are you sure you want to delete it?")) {
      this.areaService.deleteArea(_id).subscribe((res) => {
        this.getAreas();
        this.resetForm(form);
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.areaService.selectedArea = new Area();
    }
  }
}

