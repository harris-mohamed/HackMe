import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeHackedComponent } from './me-hacked.component';

describe('MeHackedComponent', () => {
  let component: MeHackedComponent;
  let fixture: ComponentFixture<MeHackedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeHackedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeHackedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
