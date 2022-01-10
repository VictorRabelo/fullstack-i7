import { OnInit, AfterContentInit, AfterViewInit, OnDestroy, OnChanges, Injectable } from '@angular/core';
import { SubSink } from 'subsink';

@Injectable({providedIn: "root"})
export class ControllerBase implements OnInit, AfterContentInit, AfterViewInit, OnDestroy, OnChanges {
    public subs = new SubSink();

    constructor() {}

    ngOnInit(): void {}

    ngOnChanges(): void {}
    
    ngAfterContentInit(): void {}

    ngAfterViewInit(): void {}

    ngOnDestroy(): void {}

}