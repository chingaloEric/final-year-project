import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as _ from 'lodash';
import * as moment from 'moment';

import { generateForm } from '../../../../shared/helpers/form-generator';
import { AnalysisGraphService } from '../../services/analysis-graph.service';
import { HistoryService } from '../../../../shared/services/history.service';

@Component({
  selector: 'app-analysis',
  templateUrl: 'analysis.page.html',
  styleUrls: ['analysis.page.scss'],
})
export class AnalysisPage implements OnInit {
  analysisFormData: any;
  analysisForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private readonly analysisGraphService: AnalysisGraphService,
    private readonly historyService: HistoryService,
  ) {}

  ngOnInit() {
    this.analysisFormData = this.getFormData();
    this.analysisForm = generateForm(
      this.analysisForm,
      this.analysisFormData,
      this.formBuilder,
    );
  }

  getFormData() {
    return {
      inputs: [
        {
          type: 'select',
          formControlName: 'charts',
          label: 'Chart type',
          required: true,
          options: ['bar', 'line'],
        },
        {
          type: 'select',
          formControlName: 'parameters',
          label: 'Parameter',
          required: true,
          options: ['pH', 'moisture', 'temperature'],
        },
        {
          type: 'date',
          required: true,
          formControlName: 'startDate',
          label: 'Start Date',
        },
        {
          type: 'date',
          required: true,
          formControlName: 'endDate',
          label: 'End Date',
        },
      ],
    };
  }

  onAnalysisFormSubmit(formValues: any) {
    const graphData = this.historyService.getGraphParameters(
      _.omit(formValues, 'charts'),
    );

    const sanitizedGraphData = {
      ...graphData,
      tooltipSuffix:
        formValues.parameters === 'moisture'
          ? ' %'
          : formValues.parameters === 'temperature'
          ? ' Celcius'
          : '',
      ytitle: formValues.parameters,
      title: `${
        formValues.parameters === 'pH'
          ? formValues.parameters
          : _.upperFirst(formValues.parameters)
      } recorded from ${moment(formValues.startDate).format(
        'YYYY-MM-DD',
      )} to ${moment(formValues.endDate).format('YYYY-MM-DD')}`,
    };
    this.plotChart(formValues.charts, sanitizedGraphData);
  }

  plotChart(chart: string, graphData: any) {
    if (chart === 'bar') {
      this.analysisGraphService.plotBarChart('chart', graphData);
    } else {
      this.analysisGraphService.plotLineChart('chart', graphData);
    }
  }
}