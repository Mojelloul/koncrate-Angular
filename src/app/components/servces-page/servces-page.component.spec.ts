import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServcesPageComponent } from './servces-page.component';

describe('ServcesPageComponent', () => {
  let component: ServcesPageComponent;
  let fixture: ComponentFixture<ServcesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServcesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServcesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
