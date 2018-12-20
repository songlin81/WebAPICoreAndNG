import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NSTformComponent } from './nstform.component';

describe('NSTformComponent', () => {
  let component: NSTformComponent;
  let fixture: ComponentFixture<NSTformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NSTformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NSTformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
