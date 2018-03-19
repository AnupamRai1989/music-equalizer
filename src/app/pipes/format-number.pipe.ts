import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formatNumber'
})
export class FormatNumberPipe implements PipeTransform {
    transform(value: number): string | number {
        const thousandFactor: number = value / 1000;
        return thousandFactor >= 1 ? thousandFactor + 'k' : value;
    }
}