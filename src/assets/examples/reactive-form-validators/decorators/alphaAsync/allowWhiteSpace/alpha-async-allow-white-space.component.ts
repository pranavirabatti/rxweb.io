import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { AddressInfo } from './address-info.model';

@Component({
    selector: 'app-alphaAsync-allowWhiteSpace',
    templateUrl: './alpha-async-allow-white-space.component.html'
})
export class AlphaAsyncAllowWhiteSpaceComponent implements OnInit {
    addressInfoFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder    ) { }

    ngOnInit() {
        let addressInfo = new AddressInfo();
        this.addressInfoFormGroup = this.formBuilder.formGroup(addressInfo);
    }
}
