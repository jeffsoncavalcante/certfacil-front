import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupeventesComponent } from './groupeventes.component';

describe('GroupeventesComponent', () => {
  let component: GroupeventesComponent;
  let fixture: ComponentFixture<GroupeventesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupeventesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupeventesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
