import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  nations: any[] = []
  state: any[] = []

  constructor(private service: ApiService) {

  }

  ngOnInit(): void {
    this.service.fetch('State').subscribe({
      next: (resp) => {
        this.nations.push(resp.data)
      },
      error(err) {
        console.log(err)
      },
    })
  }

  visualizza(event: Event, nationGrafico: any) {
    this.grafico(nationGrafico)
    this.nations = []
    this.state = []
  }

  grafico(nation: any) {
    this.service.fetch('State', nation['ID State']).subscribe({
      next: (resp) => {
        this.state.push(resp.data)
        console.log(this.state)
        Highcharts.chart({
          chart: {
            type: 'bar',
            renderTo: 'myChart'
          },
          title: {
            text: 'Population - ' + resp.data[0].Geography
          },
          xAxis: {
            categories: ['2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013']
          },
          yAxis: {
            title: {
              text: 'Population'
            }
          },
          series: [{
            name: resp.data[0].Year,
            data: [resp.data[0].Population],
            type: 'bar'
          }, {
            name: resp.data[1].Year,
            data: [resp.data[1].Population],
            type: 'bar'
          }, {
            name: resp.data[2].Year,
            data: [resp.data[2].Population],
            type: 'bar'
          }, {
            name: resp.data[3].Year,
            data: [resp.data[3].Population],
            type: 'bar'
          }, {
            name: resp.data[4].Year,
            data: [resp.data[4].Population],
            type: 'bar'
          }, {
            name: resp.data[5].Year,
            data: [resp.data[5].Population],
            type: 'bar'
          }, {
            name: resp.data[6].Year,
            data: [resp.data[6].Population],
            type: 'bar'
          }, {
            name: resp.data[7].Year,
            data: [resp.data[7].Population],
            type: 'bar'
          }]
        });
      },
      error(err) {
        console.log(err)
      },
    })
  }
}
