import { Directive, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Directive({
    selector: '[appBandCircle]',
    host: {
        '(dragstart)': 'onDragStart($event)',
        '(dragend)': 'onDragEnd($event)',
        '(dragover)': 'onDragOver($event)',
        '(mouseup)': 'onDragEnd($event)'
    }
})
export class BandDirective implements OnInit {

    private _bandValue: number;
    constructor(public el: ElementRef) {
    }

    @Input()
    set bandValue(bandValue: number) {
        this._bandValue = bandValue;
        this.setTopPosition();
    }
    get bandValue() {
        return this._bandValue;
    }

    @Input() barHeight: number = 300;
    @Input() circleHeight: number = 50;

    @Output() onBandValueChange = new EventEmitter<number>();

    ngOnInit() {
        this.el.nativeElement.style.height = `${this.circleHeight}px`;
        this.el.nativeElement.style.width = `${this.circleHeight}px`;
    }

    setTopPosition() {
        const interval: number = 24;
        let top: number = (this.barHeight / interval) * this.bandValue;
        top += ((this.barHeight / 2) - (this.circleHeight / 2));
        this.el.nativeElement.style.top = `${top}px`;
    }

    onDragStart(event) {
        console.log(event);
    }

    onDragEnd(event: DragEvent | MouseEvent) {
        const interval: number = 24;
        const tickInterval: number = this.barHeight / interval;
        const yPos: number = event.offsetY;
        const bandValueDiff: number = Math.floor(yPos / tickInterval);
        this.onBandValueChange.emit(bandValueDiff);
    }

    onDragOver(event: DragEvent | MouseEvent) {
        if (event.preventDefault) {
            event.preventDefault();
        }
    }

    onDrop(event: Event) {
        console.log('DROP');
    }

}