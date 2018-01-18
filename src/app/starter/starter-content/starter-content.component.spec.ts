import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterContentComponent } from './starter-contnet.component';

describe('StarterContnetComponent', () => {
  let component: StarterContentComponent;
  let fixture: ComponentFixture<StarterContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarterContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
