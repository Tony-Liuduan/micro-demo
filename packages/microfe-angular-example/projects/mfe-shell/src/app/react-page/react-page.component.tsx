import { ChangeDetectionStrategy, NgZone, OnDestroy } from '@angular/core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const RemoteButton = React.lazy(() => import('app2/Button'));

@Component({
  selector: 'app-react-page',
  templateUrl: './react-page.component.html',
  styleUrls: ['./react-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactPageComponent implements OnInit, OnDestroy {
  constructor(private readonly ngZone: NgZone) { }

  @ViewChild('root', { static: true })
  private readonly root!: ElementRef<HTMLElement>;

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      ReactDOM.render(
        <React.Suspense fallback='Loading Button'>
          <RemoteButton></RemoteButton>
        </React.Suspense>,
        this.root.nativeElement
      );
    });
  }

  ngOnDestroy(): void {
    ReactDOM.unmountComponentAtNode(this.root.nativeElement);
  }
}
