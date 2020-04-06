import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ct-prospect',
  templateUrl: './prospect.component.html',
  styleUrls: ['./prospect.component.scss']
})
export class ProspectComponent implements OnInit {

  fg1: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.fg1 = this._formBuilder.group({
      name: [null, [Validators.required, Validators.maxLength(50)]],
      lastName: [null, [Validators.required, Validators.maxLength(50)]],
      document: [null, [Validators.required, Validators.maxLength(10)]],
      email: [null, [Validators.required, Validators.pattern(RegexPatterns.PATTERN_EMAIL)]],
      mobilePhone: [null, [Validators.required,
        RegexPatterns.mobilePattern,
        Validators.maxLength(10),
        Validators.minLength(10)]],
      eps: [null, [Validators.required, Validators.maxLength(50)]],
      healthData: [[], [Validators.required]]
    });

    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}

export class RegexPatterns {
  static readonly PATTERN_NUMBER_CELL_START_WITH_30 = new RegExp('^30[0-5]{1}[0-9]{7}');
  static readonly PATTERN_NUMBER_CELL_START_WITH_31 = new RegExp('^31[0-9]{1}[0-9]{7}');
  static readonly PATTERN_NUMBER_CELL_START_WITH_32 = new RegExp('^32[0-4]{1}[0-9]{7}');
  static readonly PATTERN_NUMBER_CELL_START_WITH_350 = new RegExp('^350[0-9]{7}');
  static readonly PATTERN_EMAIL = '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$';

  static mobilePattern(c: FormControl) {
    return (RegexPatterns.PATTERN_NUMBER_CELL_START_WITH_30.test(c.value)
      || RegexPatterns.PATTERN_NUMBER_CELL_START_WITH_31.test(c.value)
      || RegexPatterns.PATTERN_NUMBER_CELL_START_WITH_32.test(c.value)
      || RegexPatterns.PATTERN_NUMBER_CELL_START_WITH_350.test(c.value)) ? null : {
      mobilePattern: {
        valid: false
      }
    };
  }
}
