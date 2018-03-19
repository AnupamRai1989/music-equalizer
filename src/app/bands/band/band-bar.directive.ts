import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[appBandBar]',
    host: {
    }
})
export class BandBarDirective {

    @Input() barHeight: number = 300;


}