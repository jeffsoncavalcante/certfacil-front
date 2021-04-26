import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomemasterComponent } from './homemaster.component';

describe('HomemasterComponent', () => {
  let component: HomemasterComponent;
  let fixture: ComponentFixture<HomemasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomemasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
