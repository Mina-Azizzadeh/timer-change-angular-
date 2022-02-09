import { DOCUMENT } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter, SimpleChanges, Inject } from '@angular/core';

@Component({
  selector: 'wheel',
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.css']
})
export class WheelComponent implements OnInit {

  previousY: number = 0;
  dragging: Boolean = false
  offset: number = 0
  @Input() selected: any
  @Input() type: string = ''
  @Input() data = Array<any>()

  @Output() onDateChange = new EventEmitter();
  inlineStyle: any
  position: number = 0;
  state: any;

  ngOnChanges(changes: SimpleChanges) {

  }

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.position = this.selected ? -(this.selected - 1) * 50 : 0;
    this.offset = 0
    this.dragging = false

  }

  ngOnInit(): void {

    this.data.map((value, index) => value + index)

  }

  ngAfterContentInit() {
    let selectedPosition = -(this.selected - 1) * 50

    if (!this.dragging && this.position !== selectedPosition) {
      this.position = selectedPosition;
    }
  }

  getInlineStyle() {
    this.inlineStyle = {
      willChange: 'transform',
      transition: `transform ${Math.abs(this.offset) / 100 + 0.1}s`,
      transform: `translateY(${this.position}px)`,
    }
    return this.inlineStyle;
  }

  onMouseDown(e: any) {
    this.previousY = e.touches ? e.touches[0].clientY : e.clientYّ
    this.dragging = true
  }

  onMouseMove(e: any) {
    let clientY = e.touches ? e.touches[0].clientY : e.clientY
    this.offset = clientY - this.previousY

    let maxPosition = -this.data.length * 50
    let position = this.position + this.offset

    this.position = Math.max(maxPosition, Math.min(50, position))
    this.previousY = e.touches ? e.touches[0].clientY : e.clientY
  }

  onMouseUp() {
    let maxPosition = -(this.data.length - 1) * 50
    let rounderPosition = Math.round((this.position + this.offset * 5) / 50) * 50
    let finalPosition = Math.max(maxPosition, Math.min(0, rounderPosition))

    this.dragging = false
    this.position = finalPosition

    this.onDateChange.emit({
      type: this.type,
      position: -finalPosition / 50
    })
  }
}
