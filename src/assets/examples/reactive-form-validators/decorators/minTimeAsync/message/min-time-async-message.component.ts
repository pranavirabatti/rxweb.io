import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { AttandanceDetail } from './attandance-detail.model';

@Component({
    selector: 'app-minTimeAsync-message',
    templateUrl: './min-time-async-message.component.html'
})
export class MinTimeAsyncMessageComponent implements OnInit {
    attandanceDetailFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder    ) { }

    ngOnInit() {
        let attandanceDetail = new AttandanceDetail();
        this.attandanceDetailFormGroup = this.formBuilder.formGroup(attandanceDetail);
    }
}
