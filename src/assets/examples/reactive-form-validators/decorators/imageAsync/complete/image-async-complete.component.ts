import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { UserInfo } from './user-info.model';

@Component({
    selector: 'app-imageAsync-complete',
    templateUrl: './image-async-complete.component.html'
})
export class ImageAsyncCompleteComponent implements OnInit {
    userInfoFormGroup: FormGroup
				ImageTypes = [ "Picture", "IdentityCard",];

    constructor(
        private formBuilder: RxFormBuilder    ) { }

    ngOnInit() {
        let userInfo = new UserInfo();
        this.userInfoFormGroup = this.formBuilder.formGroup(userInfo);
    }
}
