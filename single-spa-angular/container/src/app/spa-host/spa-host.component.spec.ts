import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaHostComponent } from './spa-host.component';

describe('SpaHostComponent', () => {
  let component: SpaHostComponent;
  let fixture: ComponentFixture<SpaHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
