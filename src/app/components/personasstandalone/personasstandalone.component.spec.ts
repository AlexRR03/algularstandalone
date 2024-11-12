import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasstandaloneComponent } from './personasstandalone.component';

describe('PersonasstandaloneComponent', () => {
  let component: PersonasstandaloneComponent;
  let fixture: ComponentFixture<PersonasstandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonasstandaloneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonasstandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
